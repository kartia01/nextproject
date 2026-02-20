'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SidebarProps {
  children: ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'w-64 shrink-0 border-r border-[var(--color-border)] bg-[var(--black5)] p-4',
        className
      )}
      aria-label="사이드 메뉴"
    >
      {children}
    </aside>
  );
}

export function SidebarNav({ children, className }: { children: ReactNode; className?: string }) {
  return <nav className={cn('space-y-1', className)}>{children}</nav>;
}

export function SidebarItem({
  href,
  active,
  children,
  className,
}: {
  href: string;
  active?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        'block rounded-[var(--radius-sm)] px-3 py-2 text-[14px] transition-colors',
        active
          ? 'bg-[var(--black20)] font-medium text-[var(--color-text-primary)]'
          : 'text-[var(--black60)] hover:bg-[var(--black10)] hover:text-[var(--color-text-primary)]',
        className
      )}
    >
      {children}
    </a>
  );
}
