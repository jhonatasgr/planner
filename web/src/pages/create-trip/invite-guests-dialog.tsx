import { FormEvent } from 'react'

import { AtSign, Plus, X } from 'lucide-react'

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
import { Button } from '../../components/ui/button'

interface InviteGuestsDialogProps {
  emailsToInvite: string[]
  addEmailToGuestList: (e: FormEvent<HTMLFormElement>) => void
  removeEmailToGuestList: (email: string) => void
}
export function InviteGuestsDialog({
  emailsToInvite,
  addEmailToGuestList,
  removeEmailToGuestList,
}: InviteGuestsDialogProps) {
  return (
    <Dialog defaultOpen>
      <DialogOverlay />

      <DialogPortal>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div className="space-y-5">
            <div className="space-y-1">
              <DialogHeader>
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <DialogClose asChild>
                  <button>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </DialogClose>
              </DialogHeader>
              <DialogDescription>
                <p>
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
                </p>
              </DialogDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => {
                return (
                  <div
                    key={email}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button
                      type="button"
                      onClick={() => {
                        removeEmailToGuestList(email)
                      }}
                    >
                      <X className="text-zinc-400 size-4" />
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="w-full h-px bg-zinc-800" />
            <Form onSubmit={addEmailToGuestList}>
              <FormField name="email">
                <AtSign className="text-zinc-400 size-5" />
                <FormControl asChild>
                  <Input
                    type="email"
                    placeholder="Digite o email do convidado."
                  />
                </FormControl>
                <FormSubmit asChild>
                  <Button>
                    Convidar <Plus className="size-4" />
                  </Button>
                </FormSubmit>
              </FormField>
            </Form>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
