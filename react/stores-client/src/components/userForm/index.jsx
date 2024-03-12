import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserForm({ state, handleChange, handleSubmit }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-cy="trigger-button" variant="outline">
          Criar usuário
        </Button>
      </DialogTrigger>
      <DialogContent data-cy="dialog-body" className="sm:max-w-[425px]">
        <DialogClose data-cy="close-dialog">Fechar</DialogClose>
        <DialogHeader>
          <DialogTitle>Crie um usuário</DialogTitle>
          <DialogDescription>
            Adicione um novo usuário ao seu sistema.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              data-cy="input-name"
              onChange={handleChange}
              value={state}
              id="name"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button data-cy="btn-submit" onClick={handleSubmit} type="submit">
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
