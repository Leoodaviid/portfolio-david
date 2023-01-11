import styled from "styled-components";

const SectionContatoStyle = styled.section`
  #contact {
    height: 100%;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
  }
  .contact-form-area h2 {
    font-size: 1.12rem;
    text-transform: uppercase;
  }
  #contact #contactForm {
    margin-top: 1rem;
  }
  .form-control {
    width: 100%;
    margin-bottom: 1.25rem;
    font-size: 0.87rem;
    border-radius: 0.2rem;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    padding: 0.5rem 0.6rem;
    border: 1px solid #e1e1e1;
    color: #f50057;
  }
  .form-control:focus {
    box-shadow: none;
    outline: none;
    color: #f50057;
  }
  .footer-right-contact {
    padding: 0.25rem 0;
    box-shadow: none;
  }
  .footer-right-contact:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  }
  .footer-right-contact .single-contact {
    margin: 0.6rem 0;
    padding: 0.18rem 3rem;
    position: relative;
    color: #e1e1e1;
  }
  .footer-right-area {
    margin-bottom: 1rem;
  }
  .single-contact {
    padding-left: 0;
  }
  .single-contact p {
    padding-top: 0.3rem;
    margin: 0.4rem 0 0rem;
  }

  .footer-right-contact .single-contact p a {
    text-decoration: none;
    color: #e1e1e1;
  }
  #wpp-contato {
    color: #e1e1e1;
  }
  #wpp-contato:hover {
    color: #f50057;
  }
  .footer-right-contact .contact-icon {
    box-shadow: none;
    color: #e1e1e1;
    border-radius: 50%;
    font-size: 20px;
    height: 2.5rem;
    left: -8px;
    padding-top: 8px;
    position: absolute;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 40px;
  }
  .footer-right-contact .contact-icon:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  }
  .map {
    border: 0;
    border-radius: 0.2rem;
    height: 26.8rem;
    width: 100%;
    transition: all;
  }
  @media (min-width: 990px) {
    #contact {
      padding-left: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export { SectionContatoStyle };
