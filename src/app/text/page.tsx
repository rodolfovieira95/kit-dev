"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const TextPage = () => {
  const [paragraphNumber, setParagraphNumber] = useState(1);
  const [generatedText, setGeneratedText] = useState("");
  const generateLoremIpsum = (paragraphs: number) => {
    const loremText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const sentences = loremText
      .split(". ")
      .map((sentence) => sentence.trim() + ".");

    let result = "";

    for (let i = 0; i < paragraphs; i++) {
      const paragraphSentences = [];
      const sentencesCount = Math.floor(Math.random() * 5) + 3;

      for (let j = 0; j < sentencesCount; j++) {
        const randomSentence =
          sentences[Math.floor(Math.random() * sentences.length)];
        paragraphSentences.push(randomSentence);
      }

      result += paragraphSentences.join(" ") + "\n\n";
    }
    setGeneratedText(result.trim());
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-xl">Gerador de Lorem Ipsum</h1>
      <div className="flex gap-4 mt-8 items-end">
        <div>
          <Label>Digite o número de parágrafos:</Label>
          <Input
            className="w-1/10"
            type="number"
            onChange={(event) =>
              setParagraphNumber(parseInt(event.target.value))
            }
          />
        </div>
        <Button onClick={() => generateLoremIpsum(paragraphNumber)}>
          Gerar Texto
        </Button>
      </div>
      <div className="mt-4">
        <code>
          {generatedText.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </code>
      </div>
    </div>
  );
};

export default TextPage;
