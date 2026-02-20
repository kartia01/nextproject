'use client';

import { useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type DrawerSide = 'left' | 'right';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  children: ReactNode;
  className?: string;
}

export function Drawer({ open, onClose, side = 'right', children, className }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;
  const isRight = side === 'right';
  return (
    <div
      className="fixed inset-0 z-[1000]"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50"
        style={{ backgroundColor: 'var(--modal-backdrop)' }}
        aria-hidden
        onClick={onClose}
      />
      <aside
        className={cn(
          'absolute top-0 h-full w-full max-w-sm bg-[var(--white100)] shadow-lg transition-transform duration-[var(--transition-base)]',
          isRight ? 'right-0' : 'left-0',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </aside>
    </div>
  );
}

export function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-between border-b border-[var(--color-border)] p-4', className)} {...props} />
  );
}

export function DrawerContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)} {...props} />;
}
