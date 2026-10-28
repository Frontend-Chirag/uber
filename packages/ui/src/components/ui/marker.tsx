import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const markerVariants = cva(
  "ui:group/marker ui:relative ui:flex ui:min-h-4 ui:w-full ui:items-center ui:gap-2 ui:text-left ui:text-sm ui:text-muted-foreground ui:[&_svg:not([class*=size-])]:size-4 ui:[a]:underline ui:[a]:underline-offset-3 ui:[a]:hover:text-foreground",
  {
    variants: {
      variant: {
        default: "ui:",
        separator:
          "ui:before:mr-1 ui:before:h-px ui:before:min-w-0 ui:before:flex-1 ui:before:bg-border ui:after:ml-1 ui:after:h-px ui:after:min-w-0 ui:after:flex-1 ui:after:bg-border",
        border: "ui:border-b ui:border-border ui:pb-2",
      },
    },
  }
)

function Marker({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof markerVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="marker"
      data-variant={variant}
      className={cn(markerVariants({ variant, className }))}
      {...props}
    />
  )
}

function MarkerIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "ui:size-4 ui:shrink-0 ui:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "ui:min-w-0 ui:wrap-break-word ui:group-data-[variant=separator]/marker:flex-none ui:group-data-[variant=separator]/marker:text-center ui:*:[a]:underline ui:*:[a]:underline-offset-3 ui:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Marker, MarkerIcon, MarkerContent, markerVariants }
