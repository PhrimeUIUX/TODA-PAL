declare module 'liquid-glass-react' {
  import type { ComponentType, CSSProperties, ReactNode } from 'react';

  export type LiquidGlassProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    mode?: 'standard' | 'polar' | 'prominent' | 'shader';
    padding?: string;
    mouseContainer?: { current: HTMLElement | null } | null;
    displacementScale?: number;
    blurAmount?: number;
    elasticity?: number;
    cornerRadius?: number;
    [key: string]: unknown;
  };

  const DefaultExport: ComponentType<LiquidGlassProps>;
  export default DefaultExport;
}
