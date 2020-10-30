import styled from 'styled-components';
import { greaterThan } from '../cuMediaQueries';

interface BannerStylesProps {
  withImage?: boolean;
  isIntranet?: boolean;
}
export const BannerStyles = styled.div<BannerStylesProps>`
  /* Pulls grey rows up when directly after banner */
  .has-banner + main > .u-block-row-grey:first-of-type {
    padding-top: 0;
  }
  display: flex;
  justify-content: center;
  padding: 20px 0;
  text-align: center;

  ${greaterThan('s')`
    padding: 40px 0;
  `}

  section {
    width: 100%;
  }

  /* Heading */
  h1,
  h2 {
    margin: 0;
    padding: 0;
    ${greaterThan('s')`
        font-size: var(--pixel36);
        line-height: 1.2;
    `}
  }

  /* Breadcrumbs */
  ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 5px 0;
    padding: 0;
    list-style: none;
  }

  /* Breadcrumb items */
  li {
    font-size: 15px;

    &:after {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      content: '/';
      font-weight: 300;
    }

    a {
      font-weight: 300;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* Button container */
  p {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .c-buttoncta,
  a.c-buttoncta {
    margin: 10px 5px 0 5px;
  }

  .c-searchform {
    width: 100%;
    margin-top: var(--block-padding-s);

    ${greaterThan('s')`
        margin-top: var(--block-padding-m);
        `}
  }

  /* End b-banner */

  /*
 * Banner Image Modifier
* =======================================
 */
  ${({ withImage }) =>
    withImage &&
    `
    position: relative;
    background-size: cover;
    background-position: center center;
    padding: 40px;

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${greaterThan('s')`
        font-size: $pixel36;
        line-height: 1.2;
    `}
      padding-top: 150px;
      padding-bottom: 150px;
    }

    section {
      z-index: 1;
      max-width: calc(var(--breakpoint-s))} + var(--block-padding-m) * 2);

      ${greaterThan('s')`
        padding-left: 30px;
        padding-right: 30px;
        `}


    ol {
      padding-bottom: 10px;
      margin: 0;

      a {
        color: white;
      }
    }
`}
  /*
 * Banner Image Opacity Modifier
 * =======================================
 */

  .b-banner--img-light:after,
  .b-wideimage--light:after {
    background-color: rgba(0, 0, 0, 0.35);
  }

  .b-banner--img-dark:after,
  .b-wideimage--dark:after {
    background-color: rgba(0, 0, 0, 0.75);
  }

  /*
 * Banner Image Position Modifier
 * =======================================
 */

  .b-banner--img-top,
  .b-wideimage--top {
    background-position: center top;
  }

  .b-banner--img-bottom,
  .b-wideimage--bottom {
    background-position: center bottom;
  }

  ${({ isIntranet }) =>
    isIntranet &&
    `
    margin-top: 0;
	margin-bottom: 0;
	display: block;
	text-align: left;
    padding: 0 25px !important;
    max-width: 1024px;
    margin: 0 auto;
    ${greaterThan('ll')`
        padding: 0 !important;
    `}
	h1 {
		margin: 0;
		padding:0;
		font-size:15px
	}
  `}
`;
