'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'secondary' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--black100)] text-[var(--white100)] border-none hover:bg-[var(--black80)]',
  ghost:
    'bg-transparent text-[var(--color-text-primary)] border-none hover:bg-[var(--black10)]',
  outline:
    'bg-transparent text-[var(--black100)] border border-[var(--black35)] hover:border-[var(--black60)]',
  secondary:
    'bg-[var(--black10)] text-[var(--black100)] border-none hover:bg-[var(--black20)]',
  link:
    'bg-transparent text-[var(--black60)] border-none hover:text-[var(--black100)] underline-offset-4 hover:underline',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-1.5 px-3 text-[14px]',
  md: 'py-[9.5px] px-[18px] text-[15px] font-semibold',
  lg: 'py-3 px-6 text-[16px] font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center rounded-[var(--radius-sm)] font-semibold transition-[background-color] duration-200 disabled:cursor-default disabled:opacity-60',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
