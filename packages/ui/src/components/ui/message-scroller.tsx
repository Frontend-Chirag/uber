import * as React from "react"
import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller"
import { cn } from "cn"
import { ArrowDownIcon } from "lucide-react"

import { Button } from "./button"

function MessageScrollerProvider(
  props: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>
) {
  return <MessageScrollerPrimitive.Provider {...props} />
}

function MessageScroller({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        "ui:group/message-scroller ui:relative ui:flex ui:size-full ui:min-h-0 ui:flex-col ui:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerViewport({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) {
  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      className={cn(
        "ui:size-full ui:min-h-0 ui:min-w-0 ui:scroll-fade-b ui:scrollbar-thin ui:scrollbar-gutter-stable ui:overflow-y-auto ui:overscroll-contain ui:contain-content ui:data-autoscrolling:scrollbar-none ui:data-pending-scroll:invisible",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn("ui:flex ui:h-max ui:min-h-full ui:flex-col ui:gap-8", className)}
      {...props}
    />
  )
}

function MessageScrollerItem({
  className,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        "ui:min-w-0 ui:shrink-0 ui:[contain-intrinsic-size:auto_10rem] ui:[content-visibility:auto]",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerButton({
  direction = "end",
  className,
  children,
  render,
  variant = "secondary",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <MessageScrollerPrimitive.Button
      data-slot="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      direction={direction}
      className={cn(
        "ui:absolute ui:inset-s-1/2 ui:-translate-x-1/2 ui:border-border ui:bg-background ui:text-foreground ui:transition-[translate,scale,opacity] ui:duration-200 ui:hover:bg-muted ui:hover:text-foreground ui:data-[active=false]:pointer-events-none ui:data-[active=false]:scale-95 ui:data-[active=false]:opacity-0 ui:data-[active=false]:duration-400 ui:data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] ui:data-[active=true]:translate-y-0 ui:data-[active=true]:scale-100 ui:data-[active=true]:opacity-100 ui:data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] ui:data-[direction=end]:bottom-4 ui:data-[direction=end]:data-[active=false]:translate-y-full ui:data-[direction=start]:top-4 ui:data-[direction=start]:data-[active=false]:-translate-y-full ui:rtl:translate-x-1/2 ui:data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon />
          <span className="ui:sr-only">
            {direction === "end" ? "Scroll to end" : "Scroll to start"}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  )
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
}
