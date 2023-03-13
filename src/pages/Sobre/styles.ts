import styled from "styled-components";

export const Section = styled.section`
  margin-top: 2rem;
  height: calc(100% - 77px);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 100%;
    margin-top: 2rem;
  }
  .img-thumb {
    border-radius: 0.4rem;
    overflow: hidden;
  }
  .img-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease;
  }
  .img-thumb img:hover {
    transform: scale(1.2);
  }
  .profile-wrapper {
    padding: 0.5rem 0;
  }
  .profile-wrapper .btn {
    margin: 0.6rem 0.6rem 0 0;
  }

  .profile-wrapper {
    vertical-align: middle;
    margin-right: 0.3rem;
  }

  .icon-speech svg {
    width: 17px;
    margin: 0px 0px 2px 5px;
  }
  .about-profile {
    position: relative;
    margin: 1.25rem 0 1.25rem 0;
  }
  .admin-profile {
    padding: 0;
  }

  .about-profile .pro-title {
    font: 400 ${({ theme }) => theme.fontSize.lg} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    color: ${({ theme }) => theme.colors.gray500};
    position: relative;
    width: 120px;
    display: inline-block;
    margin-bottom: 0.3rem;
  }
  .about-profile .pro-detail {
    font: 400 ${({ theme }) => theme.fontSize.lg} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    color: ${({ theme }) => theme.colors.white};
  }

  .about-profile .pro-title:after {
    position: absolute;
    content: ":";
    color: ${({ theme }) => theme.colors.pink};
    font-size: 1rem;
    left: 5.8rem;
  }

  .about-profile .admin-sign {
    position: absolute;
    right: 2.8rem;
    bottom: 0.6rem;
  }
  @media (max-width: 400px) {
    .about-profile .pro-title {
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    .about-profile .pro-detail {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;
