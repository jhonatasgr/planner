import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsDialog } from './invite-guests-dialog'
import { ConfirmTripDialog } from './confirm-trip-dialog'

import { DestinationAndDateSelectStep } from './steps/destination-and-date-select-step'
import { InviteGuestsStep } from './steps/invite-guests-step'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'

export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsDialogOpen, setIsGuestsDialogOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([''])
  const [isConfirmTripDialogOpen, setIsConfirmTripDialogOpen] = useState(false)
  const [tripDestination, setTripDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [isTripDatesSelection, setIsTripDatesSelection] = useState<
    DateRange | undefined
  >()

  function handleGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen)
  }
  function handleInviteGuestsDialog() {
    setIsGuestsDialogOpen(!isGuestsDialogOpen)
  }
  function handleConfirmTripDialog() {
    setIsConfirmTripDialogOpen(!isConfirmTripDialogOpen)
  }
  function addEmailToGuestList(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const email = data.get('email')?.toString()
    if (!email) {
      return
    }
    if (emailsToInvite.includes(email)) {
      return
    }
    setEmailsToInvite([...emailsToInvite, email])

    e.currentTarget.reset()
  }
  function removeEmailToGuestList(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )
    setEmailsToInvite(newEmailList)
  }

  async function confirmTripCreationAndNavigate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await api.post('/trips', {
      destination: tripDestination,
      starts_at: isTripDatesSelection?.from,
      ends_at: isTripDatesSelection?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })
    const { tripId } = response.data
    console.log(tripId)
    navigate(`/trips/${tripId}`)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-hero-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 space-y-10 text-center ">
        <div className="flex flex-col items-center gap-3">
          <img src="logo.svg" alt="plann.er" />
          <p className="text-zinc-00 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <DestinationAndDateSelectStep
            isGuestsInputOpen={isGuestsInputOpen}
            handleGuestsInput={handleGuestsInput}
            setIsTripDatesSelection={setIsTripDatesSelection}
            isTripDatesSelection={isTripDatesSelection}
            setTripDestination={setTripDestination}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleInviteGuestsDialog={handleInviteGuestsDialog}
              handleConfirmTripDialog={handleConfirmTripDialog}
            />
          )}
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a className="text-zinc-200 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-200 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestsDialogOpen && (
        <InviteGuestsDialog
          emailsToInvite={emailsToInvite}
          addEmailToGuestList={addEmailToGuestList}
          removeEmailToGuestList={removeEmailToGuestList}
        />
      )}
      {isConfirmTripDialogOpen && (
        <ConfirmTripDialog
          confirmTripCreationAndNavigate={confirmTripCreationAndNavigate}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}
