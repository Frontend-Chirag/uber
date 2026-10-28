import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  [
    "ui:inline-flex",
    "ui:items-center",
    "ui:justify-center",
    "ui:gap-2",
    "ui:whitespace-nowrap",
    "ui:rounded-md",
    "ui:text-sm",
    "ui:font-medium",
    "ui:transition-all",

    "ui:disabled:pointer-events-none",
    "ui:disabled:opacity-50",

    "ui:[&_svg]:pointer-events-none",
    "ui:[&_svg:not([class*='size-'])]:size-4",
    "ui:shrink-0",
    "ui:[&_svg]:shrink-0",

    "ui:outline-none",

    "ui:focus-visible:border-ring",
    "ui:focus-visible:ring-ring/50",
    "ui:focus-visible:ring-[3px]",

    "ui:aria-invalid:border-destructive",
    "ui:aria-invalid:ring-destructive/20",

    "ui:dark:aria-invalid:ring-destructive/40",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "ui:bg-primary",
          "ui:text-primary-foreground",
          "ui:hover:bg-primary/90",
          "ui:focus-visible:ring-black",
        ].join(" "),

        destructive: [
          "ui:bg-destructive",
          "ui:text-white",

          "ui:hover:bg-destructive/90",

          "ui:focus-visible:ring-destructive/20",

          "ui:dark:focus-visible:ring-destructive/40",
          "ui:dark:bg-destructive/60",
        ].join(" "),

        outline: [
          "ui:border",
          "ui:bg-background",
          "ui:shadow-xs",

          "ui:hover:bg-accent",
          "ui:hover:text-accent-foreground",

          "ui:dark:bg-input/30",
          "ui:dark:border-input",
          "ui:dark:hover:bg-input/50",
        ].join(" "),

        secondary: [
          "ui:bg-secondary",
          "ui:text-secondary-foreground",
          "ui:hover:bg-secondary/80",
        ].join(" "),

        ghost: [
          "ui:hover:bg-accent",
          "ui:hover:text-accent-foreground",
          "ui:dark:hover:bg-accent/50",
        ].join(" "),

        link: [
          "ui:text-primary",
          "ui:underline",
          "ui:decoration-auto",
          "ui:decoration-1",
          "ui:underline-offset-2",
        ].join(" "),
      },

      size: {
        default: [
          "ui:h-9",
          "ui:px-4",
          "ui:py-2",
          "ui:has-[>svg]:px-3",
        ].join(" "),

        sm: [
          "ui:h-8",
          "ui:gap-1",
          "ui:rounded-md",
          "ui:px-3",
          "ui:text-sm",

          "ui:has-[>svg]:px-1.5",
          "ui:[&_svg:not([class*='size-'])]:size-3",
        ].join(" "),

        md: [
          "ui:h-10",
          "ui:rounded-lg",
          "ui:text-sm",
          "ui:gap-1.5",
          "ui:px-4",

          "ui:has-[>svg]:px-2.5",
        ].join(" "),

        lg: [
          "ui:h-12",
          "ui:rounded-xl",
          "ui:px-6",
          "ui:text-base",

          "ui:has-[>svg]:px-4",
        ].join(" "),

        icon: "ui:size-9",

        "icon-xs": [
          "ui:size-6",
          "ui:rounded-md",
          "ui:[&_svg:not([class*='size-'])]:size-3",
        ].join(" "),

        "icon-sm": "ui:size-8",

        "icon-lg": [
          "ui:size-12",
          "ui:rounded-full",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }