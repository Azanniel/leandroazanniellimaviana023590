import { PetIcon } from '../components/icons/pet-icon'
import { Button } from '../components/ui/button'
import { Field, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'

export function SignIn() {
  return (
    <main className="bg-muted/30 flex min-h-dvh items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="border-border bg-card shadow-primary-foreground rounded-xl border px-5 py-8 shadow-sm lg:px-8">
          <div className="mb-8 flex flex-col items-center gap-4">
            <PetIcon className="size-20" />
            <div className="text-center">
              <h1 className="text-foreground text-2xl font-bold">PetManager</h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Sistema de Gerenciamento de Pets e Tutores
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <Field>
              <FieldLabel htmlFor="email">
                Email
                <span className="text-destructive">*</span>
              </FieldLabel>
              <Input type="email" id="email" placeholder="seu@email.com" />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">
                Senha
                <span className="text-destructive">*</span>
              </FieldLabel>
              <Input type="password" id="password" placeholder="Sua senha" />
            </Field>

            <Button type="button" className="mt-2 w-full">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
