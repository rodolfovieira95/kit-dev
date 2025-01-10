"use client";

import Link from "next/link";
import { createFFmpeg } from "@ffmpeg/ffmpeg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { convertFileToMP3 } from "@/utils/mp3Converter";
import { transformRatioToPercentage } from "@/utils/dataTransformation";

const ConvertToMp3Page = () => {
  const [audioSrc, setAudioSrc] = useState<string | null | undefined>();
  const [fileName, setFileName] = useState<string | null | undefined>();
  const [status, setStatus] = useState(0);

  const drop = useRef<HTMLDivElement | null>(null);
  const ffmpeg = createFFmpeg({
    corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
    log: false,
  });
  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setAudioSrc(null);
    setFileName(undefined);
    setStatus(0);
    const firstFile = event.target.files?.item(0) as File;
    setFileName(firstFile?.name);
    const convertedFile = await convertFileToMP3(firstFile, ffmpeg);
    setAudioSrc(convertedFile);
  };

  ffmpeg.setProgress(({ ratio }) =>
    setStatus(transformRatioToPercentage(ratio))
  );

  useEffect(() => {
    if (drop?.current) {
      drop?.current?.addEventListener("dragover", handleDragOver);
      drop.current?.addEventListener("drop", handleDrop);
    }

    return () => {
      if (drop?.current) {
        drop.current.removeEventListener("dragover", handleDragOver);
        drop.current.removeEventListener("drop", handleDrop);
      }
    };
  }, []);

  function handleDragOver(this: HTMLDivElement, ev: DragEvent) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  async function handleDrop(this: HTMLDivElement, event: DragEvent) {
    setAudioSrc(null);
    setFileName(undefined);
    setStatus(0);
    event.preventDefault();
    event.stopPropagation();

    if (!event.dataTransfer) return;
    const { files } = event.dataTransfer;

    if (files && files.length) {
      const convertedFile = await convertFileToMP3(files[0], ffmpeg);
      setAudioSrc(convertedFile);
    }
  }
  return (
    <div className="p-8">
      <h1 className="mb-8">Page to Convert to MP3</h1>

      <Label htmlFor="file">Selecione um arquivo:</Label>
      <Input id="file" type="file" onChange={handleInputChange} />

      <section>
        {status !== 0 && <Progress value={status} className="mt-4" />}
        {status === 100 && audioSrc && (
          <>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <p>Preview:</p>
              <audio controls>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <Link className="mt-4" href={audioSrc} download={fileName}>
              Download
            </Link>
          </>
        )}
      </section>
    </div>
  );
};

export default ConvertToMp3Page;
