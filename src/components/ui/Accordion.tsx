'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AccordionContextValue = {
  openItem: string | null;
  setOpenItem: (v: string | null) => void;
  type: 'single' | 'multiple';
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: ReactNode;
  className?: string;
}

export function Accordion({
  type = 'single',
  defaultValue,
  children,
  className,
}: AccordionProps) {
  const initial = Array.isArray(defaultValue) ? defaultValue[0] ?? null : defaultValue ?? null;
  const [openItem, setOpenItem] = useState<string | null>(initial);
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem, type }}>
      <div className={cn('space-y-1', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div
      className={cn('rounded-[var(--radius-sm)] border border-[var(--color-border)]', className)}
      data-state={useContext(AccordionContext)?.openItem === value ? 'open' : 'closed'}
    >
      {children}
    </div>
  );
}

export interface AccordionTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionTrigger({ value, children, className }: AccordionTriggerProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) return null;
  const isOpen = ctx.openItem === value;
  const toggle = () => {
    ctx.setOpenItem(isOpen ? null : value);
  };
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-between px-4 py-3 text-left text-[16px] font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--black5)]',
        className
      )}
      onClick={toggle}
      aria-expanded={isOpen}
    >
      {children}
      <span className="shrink-0 transition-transform" aria-hidden>
        {isOpen ? '▲' : '▼'}
      </span>
    </button>
  );
}

export interface AccordionContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionContent({ value, children, className }: AccordionContentProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx || ctx.openItem !== value) return null;
  return (
    <div className={cn('border-t border-[var(--color-border)] px-4 py-3 text-[var(--text-body-default)] text-[var(--color-text-secondary)]', className)}>
      {children}
    </div>
  );
}
