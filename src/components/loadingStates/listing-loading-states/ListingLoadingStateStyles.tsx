import styled from 'styled-components';

export const ListItemLoadingStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 760px;
  padding: 0 1rem;
  margin: 1rem auto !important;

  /* Title */
  .c-loading-title {
    display: block;
    width: 30%;
    height: 43px;
    margin-bottom: 1rem !important;
    background-color: var(--grey-luke);
    border-radius: 4px;
    opacity: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }

  /* Text */
  .c-loading-text {
    display: block;
    width: 20%;
    height: 1rem;
    margin-bottom: 1rem !important;
    background-color: var(--grey-luke);
    border-radius: 4px;
    opacity: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }
  .c-loading-text:last-of-type {
    margin: 0;
  }
  /* Text */
  .c-loading-image {
    display: block;
    width: 50%;
    height: 300px;
    margin-bottom: 1rem !important;
    background-color: var(--grey-luke);
    border-radius: 4px;
    opacity: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }
  .c-loading-image:last-of-type {
    margin: 0;
  }

  /* Utils ================ */

  .no-space {
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Break Line */
  .bl {
    margin-bottom: var(--spacing-bottom) * 3 !important;
  }

  /* Widths */
  .w-10 {
    width: 10%;
  }
  .w-15 {
    width: 15%;
  }
  .w-20 {
    width: 20%;
  }
  .w-30 {
    width: 30%;
  }
  .w-50 {
    width: 50%;
  }
  .w-55 {
    width: 55%;
  }
  .w-60 {
    width: 60%;
  }
  .w-70 {
    width: 70%;
  }
  .w-75 {
    width: 75%;
  }
  .w-80 {
    width: 80%;
  }
  .w-90 {
    width: 90%;
  }
  .w-100 {
    width: 100%;
  }

  /* Heights */
  .h-50 {
    height: 50px;
  }
  .h-100 {
    height: 100px;
  }
  .h-150 {
    height: 150px;
  }
  .h-200 {
    height: 200px;
  }
  .h-250 {
    height: 250px;
  }

  .fadein {
    animation: fadein 0.5s ease-in;
  }

  /* Centering */
  .a-center {
    justify-content: center;
    align-items: center;
  }
  .a-right {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  /* Animations - Pulse */
  @keyframes pulse {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
