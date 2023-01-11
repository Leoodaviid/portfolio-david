import styled from "styled-components";

const SectionSobreStyle = styled.section`
  #about {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .img-thumb {
    border-radius: 0.2rem;
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

  .profile-wrapper .btn i {
    vertical-align: middle;
    margin-right: 0.3rem;
  }

  .about-profile {
    position: relative;
    margin: 1.25rem 0 1.25rem 0;
  }
  .admin-profile {
    padding: 0;
  }

  .about-profile .pro-title {
    font-weight: 700;
    color: #e1e1e1;
    position: relative;
    width: 120px;
    display: inline-block;
    margin-bottom: 0.3rem;
  }

  .about-profile .pro-title:after {
    position: absolute;
    content: ":";
    color: #f50057;
    font-size: 0.8rem;
    left: 4.8rem;
  }

  .about-profile .admin-sign {
    position: absolute;
    right: 2.8rem;
    bottom: 0.6rem;
  }
  @media (min-width: 990px) {
    #about {
      padding-left: 5rem;
    }
  } ;
`;
export { SectionSobreStyle };
