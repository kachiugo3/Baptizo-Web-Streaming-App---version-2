"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import {cn} from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      className={cn("flex flex-col !gap-x-4", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn(
        "text-muted-foreground inline-flex h-9 w-fit items-center",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      className={cn(
        "cursor-pointer relative text-muted-foreground inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md pr-2 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:scale-x-0 before:opacity-0 before:transition-all",
        "data-[state=active]:text-black dark:data-[state=active]:text-primary data-[state=active]:before:scale-x-100 data-[state=active]:before:opacity-100 data-[state=active]:before:bg-black dark:data-[state=active]:before:bg-green-500",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot='tabs-content'
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export {Tabs, TabsList, TabsTrigger, TabsContent};
