'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  className,
  ...props
}: PaginationProps) {
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      role="navigation"
      aria-label="페이지 네비게이션"
      className={cn('flex items-center gap-1', className)}
      {...props}
    >
      {showPrevNext && (
        <button
          type="button"
          aria-label="이전 페이지"
          disabled={prevDisabled}
          onClick={() => onPageChange(currentPage - 1)}
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-primary)] transition-colors disabled:pointer-events-none disabled:opacity-50',
            !prevDisabled && 'hover:bg-[var(--black10)]'
          )}
        >
          ‹
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-label={`${page}페이지`}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          className={cn(
            'inline-flex h-9 min-w-9 items-center justify-center rounded-[var(--radius-sm)] px-2 text-[14px] transition-colors',
            page === currentPage
              ? 'bg-[var(--black100)] text-[var(--white100)] pointer-events-none'
              : 'text-[var(--color-text-primary)] hover:bg-[var(--black10)] disabled:pointer-events-none disabled:bg-transparent disabled:text-[var(--black40)]'
          )}
        >
          {page}
        </button>
      ))}
      {showPrevNext && (
        <button
          type="button"
          aria-label="다음 페이지"
          disabled={nextDisabled}
          onClick={() => onPageChange(currentPage + 1)}
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-primary)] transition-colors disabled:pointer-events-none disabled:opacity-50',
            !nextDisabled && 'hover:bg-[var(--black10)]'
          )}
        >
          ›
        </button>
      )}
    </nav>
  );
}
