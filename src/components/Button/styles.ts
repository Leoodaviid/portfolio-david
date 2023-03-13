import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
  className?: string;
}
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: 1rem 2rem;
  ${({ className }) =>
    className === "secondary"
      ? css`
          background: ${({ theme }) => theme.colors.gray700};
          color: ${({ theme }) => theme.colors.white};
          &:hover {
            background: ${({ theme }) => theme.colors.gray600};
          }
        `
      : css`
          background: ${({ theme }) => theme.colors.pink};
          color: ${({ theme }) => theme.colors.white};
          &:hover {
            background: linear-gradient(
              ${({ theme }) => theme.colors.pink},
              #990738
            );
          }
        `}
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font: 600 ${({ theme }) => theme.fontSize.lg} / 1.35
    ${({ theme }) => theme.fontFamily.heading};
  max-width: max-content;
  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const LinkBtn = styled(Link)<ButtonProps>`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  background: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background: linear-gradient(${({ theme }) => theme.colors.pink}, #990738);
  }
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font: 600 ${({ theme }) => theme.fontSize.lg} / 1.35
    ${({ theme }) => theme.fontFamily.heading};
  max-width: max-content;
  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
