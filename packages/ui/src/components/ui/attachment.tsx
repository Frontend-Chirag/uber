import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

import { Button } from "@/components/ui/button"

const attachmentVariants = cva(
  "ui-:group/attachment ui-:relative ui-:flex ui-:w-fit ui-:max-w-full ui-:min-w-0 ui-:shrink-0 ui-:flex-wrap ui-:rounded-xl ui-:border ui-:bg-card ui-:text-card-foreground ui-:transition-colors ui-:focus-within:ring-1 ui-:focus-within:ring-ring/50 ui-:has-[>a,>button]:hover:bg-muted/50 ui-:data-[state=error]:border-destructive/30 ui-:data-[state=idle]:border-dashed",
  {
    variants: {
      size: {
        default:
          "ui-:gap-2 ui-:text-sm ui-:has-data-[slot=attachment-content]:px-2.5 ui-:has-data-[slot=attachment-content]:py-2 ui-:has-data-[slot=attachment-media]:p-2",
        sm: "ui-:gap-2.5 ui-:text-xs ui-:has-data-[slot=attachment-content]:px-2 ui-:has-data-[slot=attachment-content]:py-1.5 ui-:has-data-[slot=attachment-media]:p-1.5",
        xs: "ui-:gap-1.5 ui-:rounded-lg ui-:text-xs ui-:has-data-[slot=attachment-content]:px-1.5 ui-:has-data-[slot=attachment-content]:py-1 ui-:has-data-[slot=attachment-media]:p-1",
      },
      orientation: {
        horizontal: "ui-:min-w-40 ui-:items-center",
        vertical: "ui-:w-24 ui-:flex-col ui-:has-data-[slot=attachment-content]:w-30",
      },
    },
  }
)

function Attachment({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done"
  }) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    />
  )
}

const attachmentMediaVariants = cva(
  "ui-:relative ui-:flex ui-:aspect-square ui-:w-10 ui-:shrink-0 ui-:items-center ui-:justify-center ui-:overflow-hidden ui-:rounded-lg ui-:bg-muted ui-:text-foreground ui-:group-data-[orientation=vertical]/attachment:w-full ui-:group-data-[size=sm]/attachment:w-8 ui-:group-data-[size=xs]/attachment:w-7 ui-:group-data-[size=xs]/attachment:rounded-md ui-:group-data-[state=error]/attachment:bg-destructive/10 ui-:group-data-[state=error]/attachment:text-destructive ui-:group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! ui-:[&_svg]:pointer-events-none ui-:[&_svg:not([class*=size-])]:size-4 ui-:group-data-[orientation=vertical]/attachment:[&_svg:not([class*=size-])]:size-6 ui-:group-data-[size=xs]/attachment:[&_svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      variant: {
        icon: "ui-:",
        image:
          "ui-:opacity-60 ui-:group-data-[state=done]/attachment:opacity-100 ui-:group-data-[state=idle]/attachment:opacity-100 ui-:*:[img]:aspect-square ui-:*:[img]:w-full ui-:*:[img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "icon",
    },
  }
)

function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        "ui-:max-w-full ui-:min-w-0 ui-:flex-1 ui-:leading-tight ui-:group-data-[orientation=vertical]/attachment:px-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentTitle({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        "ui-:block ui-:max-w-full ui-:min-w-0 ui-:truncate ui-:font-medium ui-:group-data-[state=processing]/attachment:shimmer ui-:group-data-[state=uploading]/attachment:shimmer",
        className
      )}
      {...props}
    />
  )
}

function AttachmentDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        "ui-:mt-0.5 ui-:block ui-:min-w-0 ui-:truncate ui-:text-xs ui-:text-muted-foreground ui-:group-data-[state=error]/attachment:text-destructive/80",
        "ui-:max-w-full",
        className
      )}
      {...props}
    />
  )
}

function AttachmentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        "ui-:relative ui-:z-20 ui-:flex ui-:shrink-0 ui-:items-center ui-:group-data-[orientation=vertical]/attachment:absolute ui-:group-data-[orientation=vertical]/attachment:top-3 ui-:group-data-[orientation=vertical]/attachment:right-3 ui-:group-data-[orientation=vertical]/attachment:gap-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentAction({
  className,
  variant,
  size = "icon-xs",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant ?? "ghost"}
      size={size}
      className={cn(className)}
      {...props}
    />
  )
}

function AttachmentTrigger({
  className,
  asChild = false,
  type,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="attachment-trigger"
      type={asChild ? undefined : (type ?? "button")}
      className={cn("ui-:absolute ui-:inset-0 ui-:z-10 ui-:outline-none", className)}
      {...props}
    />
  )
}

function AttachmentGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        "ui-:flex ui-:min-w-0 ui-:scroll-fade-x ui-:snap-x ui-:snap-mandatory ui-:scroll-px-1 ui-:scrollbar-none ui-:gap-3 ui-:overflow-x-auto ui-:overscroll-x-contain ui-:py-1 ui-:*:data-[slot=attachment]:flex-none ui-:*:data-[slot=attachment]:snap-start",
        className
      )}
      {...props}
    />
  )
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
}
