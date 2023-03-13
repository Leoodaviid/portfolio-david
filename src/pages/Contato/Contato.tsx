import { FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../../components/Button/styles";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/TextArea";
import { Container, Form, Article } from "./styles";

const Contato = () => {
  return (
    <>
      <Container>
        <section className="contact-data" aria-label="Endereço">
          <h2>Contato</h2>
          <div className="contact-address">
            <p>Alameda Eliane Lúcia, 139</p>
            <p> Apartamento 301 - Cidade 2000</p>
            <p>Fortaleza - CE</p>
          </div>
          <address>
            <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
            <a href="mailto:assistencia@bikcraft.com">
              assistencia@bikcraft.com
            </a>
            <a href="tel:+5585999999999">55 85 99999-9999</a>
          </address>
          <div className="contact-social">
            <a
              className="linkedin"
              href="https://linkedin.com/in/leoodaviid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linkedin">
                <FaLinkedinIn />
              </i>
            </a>

            <a
              className="github"
              href="https://github.com/Leoodaviid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="github">
                <FaGithub />
              </i>
            </a>

            <a
              className="facebook"
              href="https://www.facebook.com/Leoodaviid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="facebook">
                <FaFacebookF />
              </i>
            </a>
          </div>
        </section>
        <section className="contact-form" aria-label="Formulário">
          <Form>
            <Input
              label="Nome"
              type="text"
              name="nome"
              placeholder="Seu nome"
            />
            <Input
              label="Telefone"
              type="text"
              name="telefone"
              placeholder="(85) 99999-9999"
            />
            <Input
              className="col-2"
              label="Email"
              type="email"
              name="email"
              placeholder="contato@email.com"
            />
            <TextArea
              className="col-2"
              name="mensagem"
              rows={5}
              placeholder=" O que você precisa?"
            />
            <Button className="col-2">Enviar mensagem</Button>
          </Form>
        </section>
      </Container>
      <Article>
        <object
          className="map"
          width="100%"
          height="220px"
          aria-label="Mapa"
          data={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.277941892357!2d-38.472336349210984!3d-3.749532544318006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7463c0990ac23%3A0xee43ed1cd6d47841!2sAlameda%20Eliane%20L%C3%BAcia%2C%20139%20-%20Cidade%202000%2C%20Fortaleza%20-%20CE%2C%2060190-150!5e0!3m2!1spt-BR!2sbr!4v1673194134594!5m2!1spt-BR!2sbr`}
        />
      </Article>
    </>
  );
};

export default Contato;
