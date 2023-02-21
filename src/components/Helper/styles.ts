import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
0%{
    background-position: 0%;
}
50%{
    background-position: -50%;
}
75%{
    background-position: -75%;
}
100%{
    background-position: -200%;
}
`;

const ImageSkeleton = styled.div`
  .wrapper {
    display: grid;
  }
  img {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }
  .skeleton {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.gray900} 0%,
      #0a0a0a 40%,
      ${({ theme }) => theme.colors.gray900} 100%
    );
    background-size: 200%;
    border-radius: 0.4rem;
    animation: ${skeleton} 1s linear infinite;
  }
`;

export { ImageSkeleton };
