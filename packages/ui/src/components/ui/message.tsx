import * as React from "react"
import { cn } from "cn"

function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("ui:flex ui:min-w-0 ui:flex-col ui:gap-2", className)}
      {...props}
    />
  )
}

function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "ui:group/message ui:relative ui:flex ui:w-full ui:min-w-0 ui:gap-2 ui:text-sm ui:data-[align=end]:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "ui:flex ui:w-fit ui:min-w-8 ui:shrink-0 ui:items-center ui:justify-center ui:self-end ui:overflow-hidden ui:rounded-full ui:bg-muted ui:group-has-data-[slot=message-footer]/message:-translate-y-8",
        className
      )}
      {...props}
    />
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        "ui:flex ui:w-full ui:min-w-0 ui:flex-col ui:gap-2.5 ui:wrap-break-word ui:group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      {...props}
    />
  )
}

function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "ui:flex ui:max-w-full ui:min-w-0 ui:items-center ui:px-3 ui:text-xs ui:font-medium ui:text-muted-foreground ui:group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      {...props}
    />
  )
}

function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "ui:flex ui:max-w-full ui:min-w-0 ui:items-center ui:px-3 ui:text-xs ui:font-medium ui:text-muted-foreground ui:group-has-data-[variant=ghost]/message:px-0 ui:group-data-[align=end]/message:justify-end",
        className
      )}
      {...props}
    />
  )
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
}
