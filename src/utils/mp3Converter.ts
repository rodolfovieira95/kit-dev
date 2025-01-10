import { fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";

export const convertFileToMP3 = async (file: File, ffmpeg: FFmpeg) => {
  await ffmpeg.load();
  ffmpeg.FS("writeFile", `${file?.name}.mp4`, await fetchFile(file));
  await ffmpeg.run(
    "-i",
    `${file?.name}.mp4`,
    "-b:a",
    "192K",
    "-vn",
    `${file?.name}.mp3`
  );
  const data = await ffmpeg.FS("readFile", `${file?.name}.mp3`);
  const src = URL.createObjectURL(
    new Blob([new Uint8Array(data.buffer)], { type: "audio/mpeg3" })
  );

  return src;
};
