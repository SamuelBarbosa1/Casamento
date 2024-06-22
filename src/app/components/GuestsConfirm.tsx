"use client";

import { Modal, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import saveData from "../services/firebase";

export default function GuestsConfirm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const form = useForm({
    initialValues: {
      nome: "",
      additionalPeople: "",
      additionalNames: [],
      data: new Date().toISOString().split('T')[0], // Set the initial value to today's date in 'YYYY-MM-DD' format
      confirmado: true,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const dataTimestamp = Timestamp.fromDate(new Date(values.data)); // Convert date string to Timestamp object
    const updatedValues = { ...values, data: dataTimestamp };

    saveData("guests", updatedValues);

    const nome = values.nome;
    const additionalPeople = values.additionalPeople;
    const additionalNames = values.additionalNames.join(", ");
    const data = new Date(values.data).toLocaleDateString('pt-BR'); // Convert the date string to a localized date string
    const confirmado = values.confirmado ? "Sim" : "Não";

    const message = `
      *Nome:* ${nome}\n
      *Quantas pessoas você vai levar juntos com você?:* ${additionalPeople}\n
      *Nomes das pessoas que vão junto:* ${additionalNames}\n
      *Data:* ${data}\n
      *Confirmado:* ${confirmado}
    `;

    const url = `https://wa.me/61995777899?text=${encodeURIComponent(message)}`;

    // Open WhatsApp URL
    window.open(url, '_blank');

    form.reset();
    setNumberOfPeople(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="flex flex-col justify-center md:gap-0 py-10 px-12 md:px-24 items-center text-center"
      id="confirm-div"
    >
      <h1
        className="text-gray-500 font-bold text-4xl"
        style={{ fontFamily: "brittany" }}
      >
        Confirme sua presença
      </h1>

      <div className="mt-5 text-left w-full">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col items-center justify-center flex-wrap gap-4">
            <div className="w-3/5">
              <TextInput
                withAsterisk
                label="Nome Completo"
                placeholder="Nome"
                {...form.getInputProps("nome")}
              ></TextInput>
            </div>
            <div className="w-3/5">
              <Select
                withAsterisk
                label="Quantas pessoas você vai levar junto com você?"
                placeholder="Selecione"
                data={[
                  { value: "0", label: "Nenhuma" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                {...form.getInputProps("additionalPeople")}
                onChange={(value) => {
                  form.setFieldValue("additionalPeople", value!);
                  setNumberOfPeople(parseInt(value!));
                }}
              ></Select>
            </div>
            {Array.from({ length: numberOfPeople }, (_, index) => (
              <div className="w-3/5" key={index}>
                <TextInput
                  withAsterisk
                  label={`Nome da pessoa ${index + 1}`}
                  placeholder={`Nome da pessoa ${index + 1}`}
                  {...form.getInputProps(`additionalNames.${index}`)}
                ></TextInput>
              </div>
            ))}
            <div className="w-3/5">
              <TextInput
                withAsterisk
                label="Data"
                placeholder="Data"
                type="date"
                {...form.getInputProps("data")}
              ></TextInput>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-primary text-white rounded text-sm p-2 hover:shadow-lg hover:bg-white hover:text-primary hover:border font-bold transition-colors duration-500"
              >
                Confirmar minha presença
              </button>
            </div>
          </div>
        </form>
      </div>

      <Modal opened={modalOpen} onClose={closeModal} size="sm">
        <div className="text-center">
          <p>Sua presença foi confirmada!</p>
        </div>
      </Modal>
    </div>
  );
}
