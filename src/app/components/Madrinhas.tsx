"use client";
import { Image } from "@mantine/core";

export default function Madrinhas() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-0 py-10 px-8 lg:px-24 items-center">
      <div className="w-full md:w-2/5 flex flex-col text-center gap-6 sm:mb-4">
        <h1
          className="text-gray-500 font-bold text-4xl"
          style={{ fontFamily: "brittany" }}
        >
          Madrinhas
        </h1>
        <p>
          <span className="text-gray-500">
            Queremos que se sinta linda nesse dia, para tanto, fique
            livre para escolher o modelo ideal para você. Pedimos apenas que
            seja longo e siga a cartela de cores da nossa cerimônia!
          </span>
        </p>
      </div>
      <div className="flex flex-col text-center gap-6">
        <Image
          mx="auto"
          radius="md"
          width={350}
          height={500}
          src="/assets/madrinhas-img.jpg"
        ></Image>
      </div>
    </div>
  );
}
