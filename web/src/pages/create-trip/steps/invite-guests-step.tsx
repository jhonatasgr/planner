import { UserRoundPlus, ArrowRight } from 'lucide-react'
import { Button } from '../../../components/ui/button'

interface InviteGuestsStepProps {
  handleInviteGuestsDialog: () => void
  emailsToInvite: string[]
  handleConfirmTripDialog: () => void
}
export function InviteGuestsStep({
  handleConfirmTripDialog,
  handleInviteGuestsDialog,
  emailsToInvite,
}: InviteGuestsStepProps) {
  return (
    <div className="flex items-center h-16 bg-zinc-900 px-6 rounded-xl shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        <button
          onClick={handleInviteGuestsDialog}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left"
        >
          {emailsToInvite.length > 0 ? (
            <span className="text-zinc-100 text-lg flex-1">
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="text-zinc-400 text-lg flex-1">
              Quem estará na viagem?
            </span>
          )}
        </button>
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>
      <Button onClick={handleConfirmTripDialog}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
