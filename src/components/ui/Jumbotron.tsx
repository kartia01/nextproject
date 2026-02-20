'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface JumbotronProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** 히어로/점보트론 섹션 - 메인 비주얼 영역 */
export function Jumbotron({ title, subtitle, children, className }: JumbotronProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[400px] flex-col justify-center py-16',
        className
      )}
    >
      {title != null && (
        <h2 className="text-[32px] font-bold leading-[43.52px] tracking-[-0.64px] text-[var(--color-text-primary)]">
          {title}
        </h2>
      )}
      {subtitle != null && (
        <p className="mt-2 text-[20px] text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
