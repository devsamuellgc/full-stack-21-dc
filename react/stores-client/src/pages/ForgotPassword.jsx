import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastDemo } from "../components/Alert";

export function ForgotPassword() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full bg-slate-100">
        <div className="flex flex-col gap-5 w-96 h-72 rounded shadow bg-white items-center justify-center">
          <h2>Esqueci a senha</h2>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                E-mail
              </Label>
              <Input
                data-cy="input-email-forgot-password"
                placeholder="email@teste.com"
                id="email"
                className="col-span-3"
              />
            </div>
            <ToastDemo />
          </form>
        </div>
      </div>
    </>
  );
}
