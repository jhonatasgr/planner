import { X, AtSign, Plus, User } from 'lucide-react'
import { Button } from '../../components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '../../components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormSubmit,
  Input,
} from '../../components/ui/form'
import { FormEvent } from 'react'

interface ConfirmTripDialogProps {
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
  confirmTripCreationAndNavigate: (e: FormEvent<HTMLFormElement>) => void
}
export function ConfirmTripDialog({
  setOwnerName,
  setOwnerEmail,
  confirmTripCreationAndNavigate,
}: ConfirmTripDialogProps) {
  return (
    <Dialog defaultOpen>
      <DialogOverlay />

      <DialogPortal>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div className="space-y-5 ">
            <div className="space-y-1">
              <DialogHeader>
                <h2 className="text-lg font-semibold">
                  Confirmação de criação de viagem
                </h2>
                <DialogClose asChild>
                  <button>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </DialogClose>
              </DialogHeader>
              <DialogDescription>
                <p className="text-sm text-zinc-400">
                  Para concluir a criação da viagem para{' '}
                  <span className="text-zinc-100 font-semibold">
                    Florianópolis, Brasil
                  </span>{' '}
                  nas datas de{' '}
                  <span className="text-zinc-100 font-semibold">
                    16 a 27 de Agosto de 2024
                  </span>{' '}
                  preencha seus dados abaixo:
                </p>
              </DialogDescription>
            </div>
            <div className="w-full h-px bg-zinc-800" />
            <Form onSubmit={confirmTripCreationAndNavigate}>
              <FormField name="name">
                <User className="text-zinc-400 size-5" />
                <FormControl asChild>
                  <Input
                    type="name"
                    placeholder="Seu nome completo"
                    onChange={(e) => setOwnerName(e.target.value)}
                  />
                </FormControl>
              </FormField>
              <FormField name="email">
                <AtSign className="text-zinc-400 size-5" />
                <FormControl asChild>
                  <Input
                    type="email"
                    placeholder="Seu email pessoal"
                    onChange={(e) => setOwnerEmail(e.target.value)}
                  />
                </FormControl>
              </FormField>
              <FormSubmit asChild>
                <Button variant="primary" size="full" className="w-full">
                  Confirmar viagem <Plus className="size-4" />
                </Button>
              </FormSubmit>
            </Form>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
