import { IconMapPin } from "@tabler/icons-react";

export default function Localizacao() {
  return (
    <div className="flex flex-col justify-center gap-6 md:gap-0 py-10 px:12 md:px-24 items-center text-center">
      <h1
        className="text-gray-500 font-bold text-4xl"
        style={{ fontFamily: "brittany" }}
      >
        Onde vai ser?
      </h1>
      <div className="w-2/3 mt-5 text-gray-500">
        <div className="mb-3">
          <span>
            Escolhemos um lugar com a nossa cara para celebrarmos juntos!
          </span>
        </div>
        <div className="mb-3">
          <span>
          Queremos compartilhar com vocês o local especial que escolhemos para
            o nosso casamento. Optamos por um ambiente aberto, cercado pela
            natureza e cheio de encanto. Queremos que esse seja um dia
            inesquecível para todos, repleto de amor e alegria.
          </span>
        </div>
        <div className="flex justify-center content-center gap-4 w-full">
          <IconMapPin></IconMapPin>
          <span className="pt-0.5 underline underline-offset-8">
          Mansão Brilhante DF-480, Ponto Alta Norte, Brasília, DF 
          </span>
        </div>
      </div>
      <iframe
        className="mt-6"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6916268279397!2d-48.041548!3d-15.9833129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2b183239139f%3A0x8a1404648d3fc3a4!2sMans%C3%A3o%20Brilhante!5e0!3m2!1spt-BR!2sbr!4v1689457328299!5m2!1spt-BR!2sbr"
        width="100%"
        height="230"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}
