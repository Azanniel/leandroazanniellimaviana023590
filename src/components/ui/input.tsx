import { Input as InputPrimitive } from '@base-ui/react/input'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: [
    'flex w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-2',
    'text-sm text-foreground placeholder:text-muted-foreground',
    'transition-colors outline-none',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-[3px]',
    'dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-input/50 dark:disabled:bg-input/80',
    'file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
  ],
  variants: {
    size: {
      default: 'h-10 px-3 text-sm',
      sm: 'h-8 px-2.5 text-xs',
      lg: 'h-12 px-4 text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface InputProps
  extends
    Omit<InputPrimitive.Props, 'size'>,
    VariantProps<typeof inputVariants> {
  className?: string
}

export function Input({ className, size, type, ...props }: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={twMerge(inputVariants({ size }), className)}
      {...props}
    />
  )
}
