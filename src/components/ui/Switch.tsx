'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id: idProp, checked, ...props }, ref) => {
    const id = idProp ?? `switch-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <label
        htmlFor={id}
        className={cn(
          'inline-flex cursor-pointer items-center gap-2 text-[var(--text-body-default)] text-[var(--color-text-primary)]',
          props.disabled && 'cursor-not-allowed opacity-60',
          className
        )}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          className="peer sr-only"
          {...props}
        />
        <span className="relative inline-block h-6 w-11 shrink-0 rounded-full bg-[var(--black30)] transition-colors duration-200 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-[var(--white100)] after:shadow after:transition-transform peer-checked:bg-[var(--primary)] peer-checked:after:translate-x-5 peer-checked:after:translate-x-5" />
        {label != null && <span>{label}</span>}
      </label>
    );
  }
);
Switch.displayName = 'Switch';
