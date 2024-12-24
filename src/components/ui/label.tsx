"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "@radix-ui/react-form"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Define variant styles for the label
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

// Define the custom label component that forwards refs
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive>, // Reference the correct Label type from Radix UI
  React.ComponentPropsWithoutRef<typeof LabelPrimitive> & // Use the correct type for the Label component
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive
    ref={ref}
    className={cn(labelVariants(), className)} // Combine the variants with any custom classNames passed in
    {...props}
  />
))

// Set the display name of the Label component for debugging purposes
Label.displayName = "Label" // Corrected display name assignment

export { Label }
