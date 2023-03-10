import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;

  .contact-data,
  .contact-form {
    padding: 3.75rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .contact-data {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 5px 0 0 5px;
  }
  .contact-form {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0 5px 5px 0;
  }

  .contact-data h2 {
    font: 400 ${({ theme }) => theme.fontSize.xl} / 1.35
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 3.75rem;
  }
  .contact-address {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .contact-address p {
    font: 400 ${({ theme }) => theme.fontSize.lg} / 1.5
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.gray500};
    margin-bottom: 0.5rem;
    padding-left: 1.75rem;
  }
  .contact-address p > svg {
    color: ${({ theme }) => theme.colors.pink};
  }
  .contact-address p:first-child {
    padding-left: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  address a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: max-content;
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
  }
  address a > svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.pink};
  }
  address a:hover {
    color: ${({ theme }) => theme.colors.pink};
  }

  address a:nth-child(2) {
    margin-bottom: 2rem;
  }

  .contact-social {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    gap: 2rem;
    padding-left: 1.75rem;
  }
  .contact-social a:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    .contact-data,
    .contact-form {
      padding: 1.25rem;
    }
    .contact-data {
      border-radius: 5px 5px 0 0;
      background: ${({ theme }) => theme.colors.black};
    }
    .contact-form {
      border-radius: 0 0 5px 5px;
    }
    .contact-data h2,
    address a:nth-child(3) {
      margin-bottom: 2rem;
    }
    .contact-social {
      margin-bottom: 0.75rem;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  .col-2 {
    grid-column: span 2;
    width: 100%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    .col-2 {
      grid-column: initial;
    }
  }
`;
export const Article = styled.article`
  margin-top: 2rem;
`;
