import { FormEvent } from 'react';

export type Entry = {
  nome: string;
  ano: string;
  cor: string;
  preco: string;
  id?: number;
};

export type DetalhesCarroProps = { params: { id: string } };

export type FormProps = {
  handleSubmit: (event: FormEvent, inputValues: Entry) => Promise<void>;
  initialValues: Entry;
  disabled?: boolean;
};