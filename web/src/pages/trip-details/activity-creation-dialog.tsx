import { Calendar, Tag, X } from 'lucide-react'
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
import { FormEvent } from 'react'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

export function ActivityCreationDialog({
  onOpenChange,
}: {
  onOpenChange: () => void
}) {
  const { tripId } = useParams()
  async function createActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await api.post(`trips/${tripId}/activities`, {
      title: data.title,
      occurs_at: data.occurs_at,
    })
    window.location.reload()
  }
  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogOverlay />
      <DialogPortal>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <DialogHeader>
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <DialogClose asChild>
                  <button>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </DialogClose>
              </DialogHeader>
              <DialogDescription>
                <p className="text-sm text-zinc-400">
                  Todos convidados podem visualizar as atividades.
                </p>
              </DialogDescription>
            </div>
            <Form onSubmit={createActivity}>
              <FormField name="title">
                <Tag className="text-zinc-400 size-5" />
                <FormControl asChild>
                  <Input type="title" placeholder="Qual é a atividade ?" />
                </FormControl>
              </FormField>
              <FormField name="occurs_at">
                <Calendar className="text-zinc-400 size-5" />
                <FormControl asChild>
                  <Input type="datetime-local" />
                </FormControl>
              </FormField>

              <FormSubmit asChild>
                <Button variant="primary" size="full" className="w-full">
                  Salvar atividade
                </Button>
              </FormSubmit>
            </Form>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
