'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface FooterProps {
  children: ReactNode;
  className?: string;
}

/** JSON theme: footer bg rgb(249,249,249), padding 80px 0 40px, 16px */
export function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn(
        'bg-[var(--color-footer-bg)] py-20 pb-10 text-[16px] text-[var(--color-text-primary)]',
        className
      )}
      style={{ paddingTop: '80px', paddingBottom: '40px' }}
    >
      {children}
    </footer>
  );
}

export function FooterSection({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn('', className)}>
      {title && <h3 className="mb-2 text-[14px] font-semibold text-[var(--color-text-primary)]">{title}</h3>}
      <ul className="space-y-0">
        {children}
      </ul>
    </section>
  );
}

export function FooterLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          'block py-5 text-[14px] font-normal text-[var(--black60)] hover:text-[var(--color-text-primary)]',
          className
        )}
        style={{ padding: '20px 0' }}
      >
        {children}
      </a>
    </li>
  );
}
