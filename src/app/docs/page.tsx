"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRef, useState } from "react";
import { toast } from "sonner";

const DocsPage = () => {
  const [ponctuation, setPonctuation] = useState(false);
  const [generatedCpf, setGeneratedCpf] = useState("");
  const [validationCpf, setValidationCpf] = useState("");
  const [isCpfValid, setIsCpfValid] = useState<boolean | null>(null);
  const cpfInputRef = useRef<HTMLInputElement>(null);

  const generateCPF = () => {
    const calculateDigit = (cpf: number[]): number => {
      const length = cpf.length + 1;
      const total = cpf.reduce(
        (sum, num, index) => sum + num * (length - index),
        0
      );
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };
    const baseCPF = Array.from({ length: 9 }, () =>
      Math.floor(Math.random() * 10)
    );

    const firstVerifier = calculateDigit(baseCPF);
    const secondVerifier = calculateDigit([...baseCPF, firstVerifier]);

    const completeCPF = [...baseCPF, firstVerifier, secondVerifier];

    if (ponctuation) {
      const fullCpf = `${completeCPF.slice(0, 3).join("")}.${completeCPF
        .slice(3, 6)
        .join("")}.${completeCPF.slice(6, 9).join("")}-${completeCPF
        .slice(9)
        .join("")}`;
      setGeneratedCpf(fullCpf);
    } else {
      setGeneratedCpf(completeCPF.join(""));
    }
  };

  const copyToClipboard = () => {
    const input = cpfInputRef.current;
    if (input) {
      input.select(); // Seleciona o texto do input
      navigator.clipboard
        .writeText(input.value) // Copia o texto selecionado
        .then(() => {
          toast("CPF copiado para a área de transferência!", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        });
    }
  };

  const validateCPF = () => {
    const cleanedCPF = validationCpf.replace(/\D/g, "");
    if (cleanedCPF.length !== 11) {
      setIsCpfValid(false);
      return;
    }
    if (/^(\d)\1+$/.test(cleanedCPF)) {
      setIsCpfValid(false);
      return;
    }
    const cpfArray = cleanedCPF.split("").map(Number);
    const calculateDigit = (cpfPart: number[]): number => {
      const length = cpfPart.length + 1;
      const total = cpfPart.reduce(
        (sum, num, index) => sum + num * (length - index),
        0
      );
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };
    const firstVerifier = calculateDigit(cpfArray.slice(0, 9));

    if (cpfArray[9] !== firstVerifier) {
      setIsCpfValid(false);
      return;
    }

    const secondVerifier = calculateDigit(cpfArray.slice(0, 10));
    if (cpfArray[10] !== secondVerifier) {
      setIsCpfValid(false);
      return;
    }
    setIsCpfValid(true);
  };

  const getCpfValidationText = () => {
    if (isCpfValid === null) {
      return "";
    }

    if (isCpfValid) {
      return "CPF Válido!";
    }
    return "CPF Inválido!";
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-xl">Docs Page</h1>

      <h2 className="font-bold text-md mt-8">Gerador de CPF</h2>
      <div className="flex gap-4  items-end">
        <div className="flex items-center space-x-2">
          <Switch
            id="ponctuation"
            onCheckedChange={(event) => setPonctuation(event.valueOf())}
          />
          <Label htmlFor="ponctuation">Pontuação</Label>
        </div>
        <Button onClick={generateCPF}>Gerar CPF</Button>
        <Input ref={cpfInputRef} value={generatedCpf} readOnly />
        <Button onClick={copyToClipboard}>Copiar CPF</Button>
      </div>

      <h2 className="font-bold text-md mt-8">Validador de CPF</h2>
      <div className="flex gap-4  items-end">
        <Input
          onChange={(e) => {
            setIsCpfValid(null);
            setValidationCpf(e.target.value);
          }}
        />
        <Button onClick={validateCPF}>Validar CPF</Button>
        <p>{getCpfValidationText()}</p>
      </div>
    </div>
  );
};
export default DocsPage;
