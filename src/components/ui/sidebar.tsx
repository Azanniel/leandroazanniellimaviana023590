import type { ComponentProps } from 'react'
import { createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

import { Button } from './button'

interface SidebarContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

function useSidebarContext() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('Sidebar components must be used within SidebarProvider')
  }
  return context
}

interface SidebarProviderProps extends ComponentProps<'div'> {
  defaultOpen?: boolean
}

export function SidebarProvider({
  defaultOpen = false,
  children,
  ...props
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div {...props}>{children}</div>
    </SidebarContext.Provider>
  )
}

type SidebarProps = ComponentProps<'aside'>

export function Sidebar({ className, children, ...props }: SidebarProps) {
  const { isOpen, setIsOpen } = useSidebarContext()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        data-slot="sidebar"
        data-state={isOpen ? 'open' : 'closed'}
        className={twMerge(
          'bg-sidebar border-sidebar-border fixed top-0 left-0 z-50 flex h-dvh w-full flex-col border-r',
          'transition-transform duration-500 ease-in-out',
          'sm:w-64 sm:duration-300',
          'md:sticky md:translate-x-0 md:translate-y-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className,
        )}
        {...props}
      >
        {children}
      </aside>
    </>
  )
}

type SidebarHeaderProps = ComponentProps<'div'>

export function SidebarHeader({
  className,
  children,
  ...props
}: SidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      className={twMerge(
        'border-sidebar-border flex items-center justify-between border-b p-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type SidebarContentProps = ComponentProps<'div'>

export function SidebarContent({
  className,
  children,
  ...props
}: SidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      className={twMerge('flex-1 overflow-y-auto p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

type SidebarFooterProps = ComponentProps<'div'>

export function SidebarFooter({
  className,
  children,
  ...props
}: SidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      className={twMerge('border-sidebar-border border-t p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

type SidebarTriggerProps = ComponentProps<typeof Button>

export function SidebarTrigger({
  className,
  onClick,
  children,
  ...props
}: SidebarTriggerProps) {
  const { setIsOpen } = useSidebarContext()

  return (
    <Button
      data-slot="sidebar-trigger"
      size="icon"
      variant="outline"
      className={twMerge('md:hidden', className)}
      onClick={(e) => {
        setIsOpen(true)
        onClick?.(e)
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

type SidebarCloseProps = ComponentProps<typeof Button>

export function SidebarClose({
  className,
  onClick,
  children,
  ...props
}: SidebarCloseProps) {
  const { setIsOpen } = useSidebarContext()

  return (
    <Button
      data-slot="sidebar-close"
      size="icon-sm"
      variant="ghost"
      className={twMerge('md:hidden', className)}
      onClick={(e) => {
        setIsOpen(false)
        onClick?.(e)
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

type SidebarNavProps = ComponentProps<'nav'>

export function SidebarNav({ className, children, ...props }: SidebarNavProps) {
  return (
    <nav
      data-slot="sidebar-nav"
      className={twMerge('flex flex-col gap-2', className)}
      {...props}
    >
      {children}
    </nav>
  )
}

const sidebarNavItemVariants = tv({
  base: [
    'flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
  ],
  variants: {
    active: {
      true: 'bg-sidebar-primary text-sidebar-primary-foreground',
      false:
        'text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
    },
  },
  defaultVariants: {
    active: false,
  },
})

export interface SidebarNavItemProps
  extends ComponentProps<'a'>, VariantProps<typeof sidebarNavItemVariants> {}

export function SidebarNavItem({
  className,
  active,
  children,
  ...props
}: SidebarNavItemProps) {
  return (
    <a
      data-slot="sidebar-nav-item"
      data-active={active}
      className={twMerge(sidebarNavItemVariants({ active }), className)}
      {...props}
    >
      {children}
    </a>
  )
}
