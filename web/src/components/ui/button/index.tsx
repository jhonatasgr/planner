import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../../lib/utils'

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md 
  text-sm font-medium transition-colors focus-visible:outline-none 
  focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
  disabled:opacity-50 gap-2`,
  {
    variants: {
      variant: {
        primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400 text-base',
        secondary: 'text-zinc-200 bg-zinc-800 hover:bg-zinc-700 text-base',
        ghost: 'bg-zinc-900',
      },
      size: {
        default: 'rounded-lg px-5 py-2',
        full: 'w-full h-11',
        sm: 'size-4',
        icon: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
