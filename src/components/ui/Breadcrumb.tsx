'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

export function Breadcrumb({ items, separator = '/', className }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={cn('text-[14px] text-[var(--black60)]', className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="shrink-0" aria-hidden>{separator}</span>}
              {item.href != null && !isLast ? (
                <a href={item.href} className="hover:text-[var(--color-text-primary)] hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? 'font-medium text-[var(--color-text-primary)]' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
