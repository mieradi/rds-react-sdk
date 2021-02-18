import styled from "styled-components";

export const AccordionStyles = styled.div`
  border-bottom: 1px solid #f3f3f3;

  .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
  }

  .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }

  .accordion-title {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    outline: none;
    color: #222;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.25s ease-in;

    &::after {
      content: "+";
      font-size: 18px;
      color: #767676;
      transition: transform 0.5s ease-in-out;
      position: absolute;
      right: 30px;
      font-family: monospace;
    }

    &:hover,
    &.open {
      color: #bf112b;
    }

    &.open {
      &::after {
        content: "-";
        transform: rotate(-360deg);
      }
    }
  }
  .accordion-content ul li {
    list-style: none;
    border-bottom: none;
    padding: 0 !important;

    & a {
      font-size: 1rem;
      padding: 5px 15px 5px 35px;
      color: #535353;
      line-height: 1.9;
    }
  }
`;
