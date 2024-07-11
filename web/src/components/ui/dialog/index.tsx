import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '../../../lib/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogTitle = DialogPrimitive.Title

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className="fixed inset-0 bg-black/60 flex items-center justify-center"
    {...props}
  />
))

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    aria-describedby={undefined}
    className={cn(
      `w-[40rem] fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] 
    translate-y-[-50%] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 text-left`,
      className,
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
))
const DialogHeader = ({ ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex items-center justify-between " {...props} />
)
const DialogDescription = ({ ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className="text-sm text-zinc-400 text-left" {...props} />
)

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
DialogContent.displayName = DialogPrimitive.Content.displayName
DialogHeader.displayName = 'DialogHeader'
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogDescription,
  DialogTitle,
}
