import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, PropsWithChildren } from 'react';
import LiquidGlass from 'liquid-glass-react';

type LiquidGlassButtonProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}>;

export default function LiquidGlassButton({
  children,
  className,
  style,
  onClick
}: LiquidGlassButtonProps) {
  const sizerRef = useRef<HTMLSpanElement | null>(null);
  const parentRef = useRef<HTMLSpanElement | null>(null);
  const [glassSize, setGlassSize] = useState({ width: 220, height: 52 });
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [proximityTransform, setProximityTransform] = useState('translate3d(0, 0, 0) scale(1)');

  useEffect(() => {
    const node = sizerRef.current;
    if (!node) {
      return;
    }

    const measure = () => {
      const rect = node.getBoundingClientRect();
      setGlassSize({
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height)
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const parent = parentRef.current;
      if (!parent) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setGlobalMousePos({ x: event.clientX, y: event.clientY });
      setMouseOffset({
        x: ((event.clientX - centerX) / rect.width) * 100,
        y: ((event.clientY - centerY) / rect.height) * 100
      });

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);
      const activationZone = 360;
      const influence = Math.max(0, 1 - distance / activationZone);

      if (influence === 0) {
        setProximityTransform('translate3d(0, 0, 0) scale(1)');
        return;
      }

      const tx = dx * 0.04 * influence;
      const ty = dy * 0.04 * influence;
      const sx = 1 + (Math.abs(dx) / activationZone) * 0.035 * influence;
      const sy = 1 + (Math.abs(dy) / activationZone) * 0.035 * influence;

      setProximityTransform(
        `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const mergedStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    ...style
  };

  return (
    <span
      ref={parentRef}
      className={className}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      style={{
        width: `${glassSize.width}px`,
        height: `${glassSize.height}px`,
        transform: proximityTransform
      }}
    >
      <span ref={sizerRef} className="cta-sizer" aria-hidden="true">
        {children}
      </span>
      <LiquidGlass
        style={mergedStyle}
        padding="clamp(10px, 2vw, 15px) clamp(14px, 3vw, 20px)"
        mode="standard"
        mouseContainer={null}
        globalMousePos={globalMousePos}
        mouseOffset={mouseOffset}
        displacementScale={64}
        blurAmount={0}
        aberrationIntensity={1.8}
        elasticity={0.35}
        cornerRadius={200}
        glassSize={glassSize}
        overLight={true}
      >
        <span className="cta-action">
          <span className="cta-content">{children}</span>
        </span>
      </LiquidGlass>
    </span>
  );
}
