import * as FormPrimitive from '@radix-ui/react-form'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

const FormControl = FormPrimitive.Control
const FormSubmit = FormPrimitive.Submit

const Form = forwardRef<
  ElementRef<typeof FormPrimitive.Root>,
  ComponentPropsWithoutRef<typeof FormPrimitive.Root>
>(({ ...props }, ref) => (
  <FormPrimitive.Root ref={ref} className="space-y-3 " {...props} />
))

const FormField = forwardRef<
  ElementRef<typeof FormPrimitive.Field>,
  ComponentPropsWithoutRef<typeof FormPrimitive.Field>
>(({ ...props }, ref) => (
  <FormPrimitive.Field
    ref={ref}
    className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
    {...props}
  />
))

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
    ref={ref}
    {...props}
  />
))

Form.displayName = FormPrimitive.Root.displayName
FormField.displayName = FormPrimitive.Field.displayName
Input.displayName = 'Input'

export { Form, FormField, FormControl, FormSubmit, Input }
