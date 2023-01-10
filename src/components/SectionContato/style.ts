import styled from "styled-components";

const SectionContatoStyle = styled.section`
  #contact {
    height: 100%;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
  }

  .contact-form-area h2 {
    font-size: 18px;
    text-transform: uppercase;
  }

  #contact #contactForm {
    margin-top: 1rem;
  }

  .form-control {
    width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
    border-radius: 0.2rem;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    padding: 8px 10px;
    border: 1px solid #e1e1e1;
  }

  .form-control:focus {
    box-shadow: none;
    outline: none;
  }
  .footer-right-contact {
    padding: 4px;
    box-shadow: none;
    margin-top: 30px;
  }
  .footer-right-contact:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  }

  .footer-right-contact .single-contact {
    margin: 10px 22px;
    padding: 3px 55px;
    position: relative;
    color: #555;
  }

  .footer-right-contact .single-contact p {
    margin-bottom: 5px;
  }

  .footer-right-contact .single-contact p a {
    color: #666;
  }

  .footer-right-contact .contact-icon {
    box-shadow: none;
    color: #666;
    border-radius: 50%;
    font-size: 20px;
    height: 40px;
    left: 0;
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
    color: #f50057;
  }
  .map {
    border: 0;
    border-radius: 0.2rem;
    height: 450px;
    width: 100%;
    transition: 0.3s ease-in;
  }
  @media (min-width: 990px) {
    #contact {
      padding-left: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export { SectionContatoStyle };
