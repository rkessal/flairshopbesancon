import { AiOutlineShop, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <section id="contact" className="bg-bright">
      <div className="container mx-auto px-3  py-16 flex flex-col space-y-6 text-center md:text-left">
        <h2 className="text-4xl text-dark font-bold">Nous contacter</h2>
        <div className="flex flex-col space-y-1 items-center md:items-start">
          <ContactInfo key="mail" Icon={AiOutlineMail}>
            <a href="mailto:boutiqueflairbesancon@gmail.com">
              boutiqueflairbesancon@gmail.com
            </a>
          </ContactInfo>
          <ContactInfo key="phone" Icon={AiOutlinePhone}>
            07 60 55 97 96
          </ContactInfo>
          <ContactInfo key="position" Icon={BiMap}>
            91 Grande Rue, Besançon, FRANCE
          </ContactInfo>
          <ContactInfo key="schedule" Icon={AiOutlineShop}>
            Du mardi au samedi, 10h-12h30, 14h-18h30
          </ContactInfo>
        </div>
      </div>
    </section>
  );
}

export default Contact;
