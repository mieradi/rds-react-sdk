import styled from 'styled-components';

interface BannerStylesProps {
  withImage?: boolean;
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

  @include media('>s') {
    padding: 40px 0;
  }

  section {
    width: 100%;
  }

  /* Heading */
  h1,
  h2 {
    margin: 0;
    padding: 0;

    @include media('>s') {
      font-size: $pixel36;
      line-height: 1.2;
    }
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
    margin-top: $block-padding-s;

    @include media('>s') {
      margin-top: $block-padding-m;
    }
  }

  /* End b-banner */

  /* need for Yoast plugin UGH!! */
  .breadcrumb_last {
    display: none;
  }

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

    @include media('>s') {
      padding-top: 150px;
      padding-bottom: 150px;
    }

    section {
      z-index: 1;
      max-width: calc(#{map-get($breakpoints, s)} + #{$block-padding-m} * 2);

      @include media('>s') {
        padding-left: 30px;
        padding-right: 30px;
      }

      /* TODO without image has all content restricted to small breakpoint, matching this up by removing the following */
      /* Restrict content inside to a set width */
      /* & > *:not(nav) { */
      /* max-width: #{map-get($breakpoints, s)}; */
      /* margin-left: auto; */
      /* margin-right: auto; */
      /* } */
    /* } */

    ol {
      padding-bottom: 10px;
      margin: 0;

      a {
        color: white;

        //&:hover {
        //	color: $red;
        //}
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
`;
