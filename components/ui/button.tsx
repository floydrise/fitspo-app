import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        filterBtn:
          'bg-fitBlue text-primary-foreground hover:bg-fitBlue/90 text-sm font-bold',
        filterBtnAct: 'bg-fitViolet text-primary-foreground text-sm font-bold',
        searchBtn:
          'bg-fitGreen text-fitBlue hover:bg-Green/90 text-sm font-bold',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        gray: 'bg-transparent text-black hover:bg-gray-200',
        link: 'text-primary underline-offset-4 hover:underline',
        green: 'bg-fitGreen text-gray-800 shadow hover:bg-fitDarkerGreen',
        purple: 'bg-fitViolet text-gray-50 shadow hover:bg-fitLightViolet',
        orange: 'bg-orange-300 text-fitBlue shadow hover:bg-orange-400',
        fitBlue: 'bg-fitBlue text-white shadow hover:bg-blue-950',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        fit: 'rounded-[15px] px-[21px] h-[46px]',
        searchSize: 'rounded-[15px] px-[24px] h-[40px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
