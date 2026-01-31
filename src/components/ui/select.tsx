import { Select as SelectPrimitive } from '@base-ui/react/select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

export const Select = SelectPrimitive.Root

interface SelectGroupProps extends SelectPrimitive.Group.Props {
  className?: string
}

export function SelectGroup({ className, ...props }: SelectGroupProps) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={twMerge('scroll-my-1 p-1', className)}
      {...props}
    />
  )
}

interface SelectValueProps extends SelectPrimitive.Value.Props {
  className?: string
}

export function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={twMerge('flex flex-1 text-left', className)}
      {...props}
    />
  )
}

const selectTriggerVariants = tv({
  base: [
    'flex items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-3 py-2',
    'text-sm placeholder:text-muted-foreground',
    'transition-colors outline-none select-none',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-[3px]',
    'dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50',
    'disabled:cursor-not-allowed disabled:opacity-50',
    '[&>span]:line-clamp-1',
    '[&_svg:not([class*="size-"])]:size-4',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  variants: {
    size: {
      sm: 'h-8 text-xs',
      default: 'h-10 text-sm',
      lg: 'h-12 text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface SelectTriggerProps
  extends
    SelectPrimitive.Trigger.Props,
    VariantProps<typeof selectTriggerVariants> {
  className?: string
}

export function SelectTrigger({
  className,
  size,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={twMerge(selectTriggerVariants({ size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDown className="text-muted-foreground pointer-events-none size-4 shrink-0" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

export interface SelectContentProps
  extends
    SelectPrimitive.Popup.Props,
    Pick<
      SelectPrimitive.Positioner.Props,
      'align' | 'alignOffset' | 'side' | 'sideOffset' | 'alignItemWithTrigger'
    > {
  className?: string
}

export function SelectContent({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  align = 'start',
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={twMerge(
            'bg-popover text-popover-foreground border-border rounded-lg border shadow-lg',
            'data-open:animate-in data-closed:animate-out',
            'data-closed:fade-out-0 data-open:fade-in-0',
            'data-closed:zoom-out-95 data-open:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            'relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36',
            'origin-(--transform-origin) overflow-x-hidden overflow-y-auto',
            'duration-100',
            className,
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List className="p-1">
            {children}
          </SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

interface SelectLabelProps extends SelectPrimitive.GroupLabel.Props {
  className?: string
}

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={twMerge(
        'text-muted-foreground px-2 py-1.5 text-xs font-semibold',
        className,
      )}
      {...props}
    />
  )
}

const selectItemVariants = tv({
  base: [
    'relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm',
    'transition-colors outline-none',
    'focus:bg-accent focus:text-accent-foreground',
    'data-disabled:pointer-events-none data-disabled:opacity-50',
    '[&_svg:not([class*="size-"])]:size-4',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
})

export interface SelectItemProps
  extends SelectPrimitive.Item.Props, VariantProps<typeof selectItemVariants> {
  className?: string
}

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={twMerge(selectItemVariants(), className)}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="flex flex-1 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

interface SelectSeparatorProps extends SelectPrimitive.Separator.Props {
  className?: string
}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={twMerge('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

interface SelectScrollUpButtonProps extends ComponentProps<
  typeof SelectPrimitive.ScrollUpArrow
> {
  className?: string
}

export function SelectScrollUpButton({
  className,
  ...props
}: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up"
      className={twMerge(
        'bg-popover flex cursor-default items-center justify-center py-1',
        '[&_svg:not([class*="size-"])]:size-4',
        className,
      )}
      {...props}
    >
      <ChevronUp />
    </SelectPrimitive.ScrollUpArrow>
  )
}

interface SelectScrollDownButtonProps extends ComponentProps<
  typeof SelectPrimitive.ScrollDownArrow
> {
  className?: string
}

export function SelectScrollDownButton({
  className,
  ...props
}: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down"
      className={twMerge(
        'bg-popover flex cursor-default items-center justify-center py-1',
        '[&_svg:not([class*="size-"])]:size-4',
        className,
      )}
      {...props}
    >
      <ChevronDown />
    </SelectPrimitive.ScrollDownArrow>
  )
}
