'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
}

export function Stack({
  className,
  direction = 'column',
  align,
  justify,
  gap = 'md',
  ...props
}: StackProps) {
  const gapMap = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-5',
    lg: 'gap-8',
  };
  return (
    <div
      className={cn(
        'flex',
        direction === 'column' && 'flex-col',
        direction === 'row' && 'flex-row',
        align === 'start' && 'items-start',
        align === 'center' && 'items-center',
        align === 'end' && 'items-end',
        align === 'stretch' && 'items-stretch',
        justify === 'start' && 'justify-start',
        justify === 'center' && 'justify-center',
        justify === 'end' && 'justify-end',
        justify === 'between' && 'justify-between',
        gapMap[gap],
        className
      )}
      {...props}
    />
  );
}
