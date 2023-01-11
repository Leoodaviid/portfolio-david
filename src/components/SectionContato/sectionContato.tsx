import { FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SectionContatoStyle } from "./style";

const SectionContato = () => {
  return (
    <SectionContatoStyle>
      <div id="contact">
        <div className="contact-form">
          <div className="container">
            <div className="row  mx-md-5">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact-block">
                  <h2>Formulário para Contato</h2>
                  <form
                    action="https://formsubmit.co/david_ax7@hotmail.com"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="hidden" name="_captcha" value="false" />
                          <input
                            type="hidden"
                            name="_next"
                            value="https://portfolio-david-pi.vercel.app/sucesso"
                          />
                          <input
                            className="form-control"
                            type="text"
                            id="nome"
                            name="name"
                            placeholder="Nome"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="E-mail"
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Assunto"
                            id="msg_subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Sua Menssagem"
                            rows={5}
                          ></textarea>
                        </div>
                        <div className="submit-button">
                          <button
                            className="btn btn-common"
                            id="submit"
                            type="submit"
                          >
                            Enviar Menssagem
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="footer-right-area">
                  <h2>Endereço / Contato</h2>
                  <div className="footer-right-contact">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker">
                          <FaMapMarkerAlt />
                        </i>
                      </div>
                      <p>Fortaleza - CE</p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-envelope">
                          <FaRegEnvelope />
                        </i>
                      </div>
                      <p>
                        <a>david_ax7@hotmail.com</a>
                      </p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-phone">
                          <FaPhoneAlt />
                        </i>
                      </div>
                      <p>
                        <a href="https://wa.me/88997041704">
                          +55 (88) 9.9704-1704
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <object
                  className="map"
                  data={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.277941892357!2d-38.472336349210984!3d-3.749532544318006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7463c0990ac23%3A0xee43ed1cd6d47841!2sAlameda%20Eliane%20L%C3%BAcia%2C%20139%20-%20Cidade%202000%2C%20Fortaleza%20-%20CE%2C%2060190-150!5e0!3m2!1spt-BR!2sbr!4v1673194134594!5m2!1spt-BR!2sbr`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContatoStyle>
  );
};

export default SectionContato;
