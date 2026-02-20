'use client';

import { type ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarItem,
  Button,
  Drawer,
  DrawerHeader,
  DrawerContent,
  Stack,
} from '@/components/ui';

export interface HeaderProps {
  children: ReactNode;
  className?: string;
}

/** JSON theme: height 62px, transparent, z-100, padding 0 40px */
export function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={cn(
        'relative z-[100] flex h-[62px] items-center bg-transparent px-[40px] shadow-none',
        className
      )}
    >
      {children}
    </header>
  );
}

const GNB_ITEMS = ['소개', '서비스', 'ESG', '미디어', '투자정보'] as const;

const MOBILE_ITEMS = [
  '회사소개',
  '오시는 길',
  '윤리경영',
  '공지사항',
  '브랜드 리소스',
  '서비스',
  'ESG',
  '미디어',
  '주요정보',
  'IR자료실',
  '공시정보',
  'IR일정',
  '경영정보',
  'IR공지',
  '재무정보',
] as const;

export interface SiteHeaderNavItem {
  label: string;
  href: string;
}

export interface SiteHeaderProps {
  className?: string;
  /** 브랜드 링크 텍스트 (기본: 카카오뱅크) */
  brandLabel?: string;
  /** 브랜드 링크 href (기본: /) */
  brandHref?: string;
  /** 데스크톱 GNB 메뉴 (없으면 기본 GNB_ITEMS 사용) */
  navItems?: SiteHeaderNavItem[];
  /** 모바일 드로어 메뉴 (없으면 기본 MOBILE_ITEMS 사용) */
  mobileItems?: SiteHeaderNavItem[];
}

/**
 * 사이트 공용 헤더
 * - 데스크톱: 상단 GNB
 * - 모바일: 햄버거 버튼 + 드로어 네비게이션
 */
export function SiteHeader({
  className,
  brandLabel = '카카오뱅크',
  brandHref = '/',
  navItems,
  mobileItems,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const desktopItems = navItems ?? GNB_ITEMS.map((label) => ({ label, href: '#' }));
  const hasCustomMobile = mobileItems != null;
  const drawerPrimary = hasCustomMobile ? mobileItems : desktopItems;
  const drawerSecondary = hasCustomMobile ? null : MOBILE_ITEMS.map((label) => ({ label, href: '#' as string }));

  const closeDrawer = () => setOpen(false);

  const linkClass =
    'block w-full rounded-[var(--radius-sm)] px-3 py-2 text-left text-[16px] text-[var(--color-text-primary)] hover:bg-[var(--black10)]';
  const linkClassSmall =
    'block w-full px-3 py-2 text-left text-[14px] text-[var(--black60)] hover:text-[var(--color-text-primary)] hover:bg-[var(--black5)]';

  return (
    <>
      <Header className={className}>
        <Navbar className="w-full justify-between">
          <div className="flex items-center gap-8">
            <NavbarBrand href={brandHref}>{brandLabel}</NavbarBrand>
            <NavbarNav className="hidden md:flex gap-6">
              {desktopItems.map((item) => (
                <NavbarItem key={item.label} href={item.href}>
                  {item.label}
                </NavbarItem>
              ))}
            </NavbarNav>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden px-2 py-1"
            aria-label="모바일 메뉴 열기"
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-6 bg-[var(--black100)]" />
              <span className="block h-[2px] w-6 bg-[var(--black100)]" />
              <span className="block h-[2px] w-6 bg-[var(--black100)]" />
            </span>
          </Button>
        </Navbar>
      </Header>

      {/* 모바일 드로어 네비게이션 */}
      <Drawer open={open} onClose={closeDrawer} side="right">
        <DrawerHeader>
          <span className="text-[16px] font-semibold text-[var(--color-text-primary)]">
            전체 메뉴
          </span>
          <Button variant="ghost" size="sm" onClick={closeDrawer}>
            닫기
          </Button>
        </DrawerHeader>
        <DrawerContent>
          <Stack gap="md">
            <nav aria-label="주요 메뉴">
              <Stack gap="sm">
                {drawerPrimary.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={linkClass}
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </a>
                ))}
              </Stack>
            </nav>
            {drawerSecondary != null && drawerSecondary.length > 0 && (
              <Stack gap="xs" className="pt-4 border-t border-[var(--color-border)]">
                {drawerSecondary.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={linkClassSmall}
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </a>
                ))}
              </Stack>
            )}
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}

