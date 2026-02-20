'use client';

import { type SVGAttributes } from 'react';
import { cn } from '@/lib/utils';

export type IconSize = 16 | 20 | 24 | 32;

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  /** SVG path 또는 children으로 내용 전달 */
  children?: React.ReactNode;
}

const sizeMap: Record<IconSize, string> = {
  16: 'h-4 w-4',
  20: 'h-5 w-5',
  24: 'h-6 w-6',
  32: 'h-8 w-8',
};

/**
 * 아이콘 래퍼 - 24x24 기준 (JSON 테마 icon-bx)
 * children에 SVG path 또는 전체 SVG 내용을 넣습니다.
 */
export function Icon({ size = 24, className, children, ...props }: IconProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        sizeMap[size as IconSize] ?? 'h-6 w-6',
        className
      )}
      aria-hidden
    >
      {typeof children === 'object' && children != null ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(sizeMap[size as IconSize], 'text-current')}
          {...props}
        >
          {children}
        </svg>
      )}
    </span>
  );
}
