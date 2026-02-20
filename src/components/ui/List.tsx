'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  variant?: 'none' | 'disc' | 'decimal';
}

export function List({ className, variant = 'disc', ...props }: ListProps) {
  const listStyle = variant === 'none' ? 'list-none' : variant === 'decimal' ? 'list-decimal' : 'list-disc';
  return (
    <ul
      className={cn('pl-6 text-[var(--text-body-default)] text-[var(--color-text-primary)]', listStyle, className)}
      {...props}
    />
  );
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

export function ListItem({ className, ...props }: ListItemProps) {
  return <li className={cn('py-1', className)} {...props} />;
}
