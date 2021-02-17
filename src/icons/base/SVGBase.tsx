import styled from 'styled-components';
export interface ISVG {
  viewBox?: string;
}
export const SVGBase = styled.svg.attrs((props) => {
  return {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    ariaHidden: 'true',
    viewBox: `0 0 ${props.viewBox || 24} ${props.viewBox || 24}`,
  };
})<ISVG>``;
