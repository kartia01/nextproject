'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

export function Grid({
  className,
  cols = 12,
  gap = 'md',
  ...props
}: GridProps) {
  const gapMap = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-5', /* 20px = var(--gutter) */
    lg: 'gap-8',
  };
  return (
    <div
      className={cn(
        'grid',
        cols === 1 && 'grid-cols-1',
        cols === 2 && 'grid-cols-2',
        cols === 3 && 'grid-cols-3',
        cols === 4 && 'grid-cols-4',
        cols === 6 && 'grid-cols-6',
        cols === 12 && 'grid-cols-12',
        gapMap[gap],
        className
      )}
      {...props}
    />
  );
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 6 | 12;
}

const spanClasses: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  6: 'col-span-6',
  12: 'col-span-12',
};

export function GridItem({ className, span, ...props }: GridItemProps) {
  return (
    <div className={cn(span != null && spanClasses[span], className)} {...props} />
  );
}
