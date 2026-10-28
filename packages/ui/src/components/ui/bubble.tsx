import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("ui:flex ui:min-w-0 ui:flex-col ui:gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "ui:group/bubble ui:relative ui:flex ui:w-fit ui:max-w-[80%] ui:min-w-0 ui:flex-col ui:gap-1 ui:group-data-[align=end]/message:self-end ui:data-[align=end]:self-end ui:data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "ui:*:data-[slot=bubble-content]:bg-primary ui:*:data-[slot=bubble-content]:text-primary-foreground ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/80",
        secondary:
          "ui:*:data-[slot=bubble-content]:bg-secondary ui:*:data-[slot=bubble-content]:text-secondary-foreground ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        muted:
          "ui:*:data-[slot=bubble-content]:bg-muted ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)]",
        tinted:
          "ui:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.93_calc(c*0.4)_h)] ui:*:data-[slot=bubble-content]:text-foreground ui:dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.3_calc(c*0.4)_h)] ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.88_calc(c*0.5)_h)] ui:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.35_calc(c*0.5)_h)]",
        outline:
          "ui:*:data-[slot=bubble-content]:border-border ui:*:data-[slot=bubble-content]:bg-background ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted ui:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground ui:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/30",
        ghost:
          "ui:border-none ui:*:data-[slot=bubble-content]:rounded-none ui:*:data-[slot=bubble-content]:bg-transparent ui:*:data-[slot=bubble-content]:p-0 ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted ui:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground ui:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted/50",
        destructive:
          "ui:*:data-[slot=bubble-content]:bg-destructive/10 ui:*:data-[slot=bubble-content]:text-destructive ui:dark:*:data-[slot=bubble-content]:bg-destructive/20 ui:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/20 ui:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="bubble-content"
      className={cn(
        "ui:w-fit ui:max-w-full ui:min-w-0 ui:overflow-hidden ui:rounded-xl ui:border ui:border-transparent ui:px-3 ui:py-2 ui:text-sm ui:leading-relaxed ui:wrap-break-word ui:group-data-[align=end]/bubble:self-end ui:[button]:text-left ui:[button,a]:transition-colors ui:[button,a]:outline-none ui:[button,a]:focus-visible:border-ring ui:[button,a]:focus-visible:ring-3 ui:[button,a]:focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

const bubbleReactionsVariants = cva(
  "ui:absolute ui:z-10 ui:flex ui:w-fit ui:shrink-0 ui:items-center ui:justify-center ui:gap-1 ui:rounded-full ui:bg-muted ui:px-1.5 ui:py-0.5 ui:text-sm ui:ring-3 ui:ring-card ui:has-[button]:p-0",
  {
    variants: {
      side: {
        top: "ui:top-0 ui:-translate-y-3/4",
        bottom: "ui:bottom-0 ui:translate-y-3/4",
      },
      align: {
        start: "ui:left-3",
        end: "ui:right-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
