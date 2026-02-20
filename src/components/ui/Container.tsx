'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** 최대 너비 제한 (none | sm | md | lg | xl) */
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Container({
  className,
  maxWidth = 'xl',
  ...props
}: ContainerProps) {
  const maxWidthClasses = {
    none: 'max-w-none',
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-[1440px]',
  };
  return (
    <div
      className={cn(
        'mx-auto w-full px-[40px]',
        maxWidth !== 'none' && maxWidthClasses[maxWidth],
        className
      )}
      style={{ paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }}
      {...props}
    />
  );
}
