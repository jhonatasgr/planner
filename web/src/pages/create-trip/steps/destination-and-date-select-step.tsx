import { useState } from 'react'

import { Button } from '../../../components/ui/button'

import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'
import { DatePickerDialog } from './date-picker-dialog'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

interface DestinationAndDateSelectStepProps {
  isGuestsInputOpen: boolean
  handleGuestsInput: () => void
  setTripDestination: (destination: string) => void
  isTripDatesSelection: DateRange | undefined
  setIsTripDatesSelection: (date: DateRange | undefined) => void
}
export function DestinationAndDateSelectStep({
  isGuestsInputOpen,
  handleGuestsInput,
  isTripDatesSelection,
  setTripDestination,
  setIsTripDatesSelection,
}: DestinationAndDateSelectStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen)
  }
  const displayedDate =
    isTripDatesSelection && isTripDatesSelection.from && isTripDatesSelection.to
      ? format(isTripDatesSelection.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(isTripDatesSelection.to, "d' de 'LLL"))
      : 'Quando ?'
  return (
    <div className="flex items-center h-16 bg-zinc-900 px-6 rounded-xl shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          type="text"
          placeholder="Para onde você vai ?"
          onChange={(e) => setTripDestination(e.target.value)}
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 outline-none "
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="bg-transparent text-lg text-zinc-400 flex-1 text-left ">
          {displayedDate || 'Quando ?'}
        </span>
      </button>
      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={handleGuestsInput}>
          Alterar data/local.
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={handleGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
      {isDatePickerOpen && (
        <DatePickerDialog
          onOpenChange={openDatePicker}
          isTripDatesSelection={isTripDatesSelection}
          setIsTripDatesSelection={setIsTripDatesSelection}
        />
      )}
    </div>
  )
}
