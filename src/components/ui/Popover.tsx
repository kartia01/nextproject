'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export function Popover({ trigger, children, side = 'bottom', className }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);
  const positionClasses = {
    top: 'bottom-full left-0 mb-2',
    bottom: 'top-full left-0 mt-2',
    left: 'right-full top-0 mr-2',
    right: 'left-full top-0 ml-2',
  };
  return (
    <div ref={ref} className={cn('relative inline-block', className)}>
      <span onClick={() => setOpen((v) => !v)} className="cursor-pointer">
        {trigger}
      </span>
      {open && (
        <div
          className={cn(
            'absolute z-[1001] min-w-[120px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--white100)] p-2 shadow-lg',
            positionClasses[side]
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
