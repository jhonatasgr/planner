import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '../../../components/ui/dialog'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

interface DayPickerDialogProps {
  onOpenChange: () => void
  isTripDatesSelection: DateRange | undefined
  setIsTripDatesSelection: (date: DateRange | undefined) => void
}

export function DatePickerDialog({
  onOpenChange,
  isTripDatesSelection,
  setIsTripDatesSelection,
}: DayPickerDialogProps) {
  const modifiersStyles = {
    range_start: {
      backgroundColor: '#BEF264',
      color: '#1A2E05',
      borderRadius: '0',
    },
    range_end: {
      backgroundColor: '#BEF264',
      color: '#1A2E05',
      borderRadius: '0',
    },
    range_middle: { backgroundColor: '#BEF26420' },
    today: {
      color: '#BEF264',
    },
  }

  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogOverlay />
      <DialogTitle></DialogTitle>
      <DialogContent className="w-auto gap-2">
        <DialogHeader>
          <h2 className="text-lg font-semibold">Selecione uma data</h2>
          <DialogClose asChild>
            <button>
              <X className="size-5 text-zinc-400" />
            </button>
          </DialogClose>
        </DialogHeader>
        <DayPicker
          mode="range"
          selected={isTripDatesSelection}
          onSelect={setIsTripDatesSelection}
          numberOfMonths={1}
          modifiersStyles={modifiersStyles}
        />
      </DialogContent>
    </Dialog>
  )
}
