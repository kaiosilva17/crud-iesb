import { FormEvent } from 'react';

export type Entry = {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  id?: number;
};

export type DetalhesContatoProps = { params: { id: string } };

export type FormProps = {
  handleSubmit: (event: FormEvent, inputValues: Entry) => Promise<void>;
  initialValues: Entry;
  disabled?: boolean;
};