import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/ui/button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 hover:text-zinc-300 truncate"
            >
              https://www.airbnb.com.br/rooms/10470001122222222222222222222222222222222222222222
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button variant="secondary" size="full" className="w-full justify-center">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
