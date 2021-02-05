import { css } from 'styled-components';

const verifyBreakpoint = (breakpoint: string | number) => {
  const breakpoints = {
    s: '760px',
    l: '1024px',
    ls: '810px',
    ll: '1102px',
  };
  if (breakpoints[breakpoint]) {
    return breakpoints[breakpoint];
  } else if (typeof breakpoint === 'string') {
    parseInt(breakpoint);
    return breakpoint;
  } else {
    console.error(
      `ERROR: CU Media Queries

There is no break point available with that value.
Please choose either s, m, ls, or ll or a custom value like "900px";

s (small) = 760px
l (large) = 1024px
ls (layout small) = 810px
ll (layout large) = 1102px
    `
    );
    return '0';
  }
};

export const lessThan = (breakpoint: string | number) => (...args: any) => css`
  @media (max-width: ${verifyBreakpoint(breakpoint)}) {
    ${args}
  }
`;

export const greaterThan = (breakpoint: string | number) => (...args: any) => `
  @media (min-width: ${verifyBreakpoint(breakpoint)}) {
    ${args}
  }
`;
export const between = (
  firstBreakpoint: string | number,
  secondBreakpoint: string | number
) => (...args: any) => css`
  @media (min-width: ${verifyBreakpoint(
      firstBreakpoint
    )}) and (max-width: ${verifyBreakpoint(secondBreakpoint)}) {
    ${args}
  }
`;
