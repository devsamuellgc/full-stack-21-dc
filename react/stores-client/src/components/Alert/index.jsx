"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      data-cy="btn-recovery-password"
      type="button"
      className="bg-sky-600 py-2 rounded-md text-white"
      variant="outline"
      onClick={() => {
        toast({
          title: "E-mail enviado com sucesso!",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Enviar
    </Button>
  );
}
