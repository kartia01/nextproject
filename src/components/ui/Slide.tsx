'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SlideProps {
  children: ReactNode;
  className?: string;
}

/** 슬라이드 한 장 컨테이너 (캐러셀/스와이퍼 내 단일 슬라이드) */
export function Slide({ children, className }: SlideProps) {
  return (
    <div
      className={cn(
        'shrink-0 transition-transform duration-[var(--transition-base)]',
        className
      )}
    >
      {children}
    </div>
  );
}
