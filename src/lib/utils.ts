/**
 * className 병합 유틸 - Tailwind 등 조건부 클래스 처리
 */
type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(10)
    .filter((x): x is string => typeof x === 'string' && x.length > 0)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
