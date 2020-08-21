/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useMemo } from 'react';

const sectionCss = css([
  {
    display: 'grid',
}])

interface SectionProps {
  layout?: any
}

export const Section: React.FC<SectionProps> = ({ children, layout }) => {
  const computedCss = useMemo(() => {
    return css`
      ${sectionCss}
      ${layout}
    `
  },[layout, sectionCss])
  return (
    <section css={computedCss}>
      { children }
    </section>
  );
}
