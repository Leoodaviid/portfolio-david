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
    margin: 10px 10px 0px 0px;
  }

  .profile-wrapper .btn i {
    vertical-align: middle;
    margin-right: 5px;
  }

  .about-profile {
    position: relative;
    margin: 20px 0 20px 0;
  }

  .about-profile .pro-title {
    font-weight: 700;
    color: #666565;
    position: relative;
    width: 120px;
    display: inline-block;
    margin-bottom: 5px;
  }

  .about-profile .pro-title:after {
    position: absolute;
    content: ":";
    color: #666565;
    font-size: 14px;
    left: 77px;
  }

  .about-profile .admin-sign {
    position: absolute;
    right: 45px;
    bottom: 10px;
  }

  @media (max-width: 800px) {
    #about {
    }
  }
  @media (min-width: 990px) {
    #about {
      padding-left: 5rem;
    }
  } ;
`;
export { SectionSobreStyle };
