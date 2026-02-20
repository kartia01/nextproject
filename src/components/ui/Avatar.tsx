'use client';

import { type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | null;
  alt: string;
  size?: AvatarSize;
  fallback?: React.ReactNode;
}

const sizeMap: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-14 w-14 text-lg',
};

export function Avatar({
  src,
  alt,
  size = 'md',
  fallback,
  className,
  ...props
}: AvatarProps) {
  const initials = fallback ?? (alt.slice(0, 2).toUpperCase() || '?');
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-circle)] bg-[var(--black25)] font-semibold text-[var(--color-text-primary)]',
        sizeMap[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" {...props} />
      ) : (
        <span aria-hidden>{initials}</span>
      )}
    </span>
  );
}
