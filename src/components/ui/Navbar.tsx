'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface NavbarProps {
  children: ReactNode;
  className?: string;
}

/** GNB 스타일 (JSON theme: height 62px, transparent, 14px, 400) */
export function Navbar({ children, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        'relative z-[100] flex h-[62px] items-center bg-transparent text-[14px] font-normal text-[var(--color-text-primary)]',
        className
      )}
      aria-label="메인 메뉴"
    >
      {children}
    </nav>
  );
}

export function NavbarBrand({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn('text-[16px] font-normal text-[var(--color-text-primary)]', className)}
    >
      {children}
    </a>
  );
}

export function NavbarNav({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ul className={cn('flex items-center gap-6', className)} role="menubar">
      {children}
    </ul>
  );
}

export function NavbarItem({ href, children, className }: { href?: string; children: ReactNode; className?: string }) {
  const content = <span className={cn('pb-[22px]', className)}>{children}</span>;
  if (href) {
    return (
      <li role="none">
        <a href={href} className="text-[var(--color-text-primary)] hover:underline" role="menuitem">
          {content}
        </a>
      </li>
    );
  }
  return <li role="none">{content}</li>;
}
