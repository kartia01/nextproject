/**
 * 디자인 토큰 - JSON 테마 기반 중앙화
 * 컴포넌트/스타일에서 일관된 값 사용을 위한 상수
 */
export const theme = {
  colors: {
    palette: {
      primary: '#FFE300',
      green: '#00D080',
      red: '#EC4343',
      blue: '#425EFF',
      swiperDefault: '#007AFF',
    },
    white: {
      white100: '#FFFFFF',
      white40: 'rgba(255, 255, 255, 0.40)',
      white30: 'rgba(255, 255, 255, 0.30)',
      white20: 'rgba(255, 255, 255, 0.20)',
    },
    black: {
      black5: '#FAFAFA',
      black10: '#F9F9F9',
      black15: '#F7F7F7',
      black20: '#F4F4F4',
      black25: '#ECECEC',
      black30: '#E6E6E6',
      black35: '#DDDDDD',
      black40: '#CCCCCC',
      black45: '#BBBBBB',
      black50: '#AAAAAA',
      black55: '#999999',
      black60: '#888888',
      black65: '#777777',
      black70: '#666666',
      black80: '#444444',
      black85: '#333333',
      black90: '#222222',
      black100: '#000000',
    },
    semantic: {
      textPrimary: 'rgb(0, 0, 0)',
      textSecondary: 'rgb(136, 136, 136)',
      textDark: 'rgb(68, 68, 68)',
      border: 'rgb(230, 230, 230)',
      bgLight: 'rgb(247, 247, 247)',
      footerBg: 'rgb(249, 249, 249)',
      focusRing: 'rgb(0, 123, 255)',
      modalBackdrop: 'rgba(0, 0, 0, 0.5)',
    },
  },
  typography: {
    fontFamily: {
      sans: '"Pretendard Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      sansShort: '"Pretendard Variable", sans-serif',
    },
    fontSize: {
      display: '90px',
      h2: '32px',
      h3_h5: '26px',
      bodyLarge: '22px',
      body: '20px',
      bodyMedium: '18px',
      bodyDefault: '16px',
      captionLarge: '15px',
      caption: '14px',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
  layout: {
    gutter: '20px',
    containerPadding: '0 40px',
    gridColumns: 12,
    radius: {
      sm: '6px',
      circle: '50%',
    },
  },
  transitions: {
    fast: '0.2s ease-in-out',
    base: '0.35s',
    slow: '0.4s ease-in-out',
  },
} as const;

export type Theme = typeof theme;
