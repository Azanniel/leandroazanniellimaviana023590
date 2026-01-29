import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const labelVariants = tv({
  base: [
    'flex select-none items-center gap-1 font-medium leading-none',
    'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  ],
  variants: {
    size: {
      sm: 'text-xs',
      default: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface LabelProps
  extends ComponentProps<'label'>, VariantProps<typeof labelVariants> {}

export function Label({ className, size, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={twMerge(labelVariants({ size }), className)}
      {...props}
    />
  )
}
