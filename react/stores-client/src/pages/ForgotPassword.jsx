import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotPassword() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-slate-100">
      <div className="flex flex-col w-96 h-72 rounded shadow bg-white items-center justify-center">
        <h2>Esqueci a senha</h2>
        <form className="flex flex-col">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              data-cy="input-name-forgot-password"
              id="name"
              className="col-span-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
