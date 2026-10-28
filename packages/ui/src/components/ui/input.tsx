import * as React from "react"

import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority"

export const inputVariants = cva("", {
  variants: {
    size: {
      sm: "ui:h-8 ui:px-2.5 ui:text-sm",

      md: "ui:h-10 ui:px-4 ui:text-lg placeholder:ui:text-lg",

      lg: "ui:h-12 ui:px-6 ui:text-base placeholder:ui:text-base",

      "icon-sm": "ui:size-8 ui:p-0",

      "icon-md": "ui:size-10 ui:p-0",

      "icon-lg": "ui:size-12 ui:p-0",
    },
  },

  defaultVariants: {
    size: "lg",
  },
})

function Input({
  className,
  type,
  size = "lg",
  ...props
}: Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(
        "ui:h-9 ui:w-full ui:min-w-0 ui:rounded-md ui:border ui:border-input ui:bg-transparent ui:px-3 ui:py-1 ui:text-base ui:shadow-xs ui:transition-[color,box-shadow] ui:outline-none ui:selection:bg-primary ui:selection:text-primary-foreground ui:file:inline-flex ui:file:h-7 ui:file:border-0 ui:file:bg-transparent ui:file:text-sm ui:file:font-medium ui:file:text-foreground uiplaceholder:text-muted-foreground ui:disabled:pointer-events-none ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm ui:dark:bg-input/30",
        
        "ui:focus-visible:border-ring ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50",

        "ui:aria-invalid:border-destructive ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40",

        inputVariants({ size }),

        className
      )}
      {...props}
    />
  )
}

export { Input }