'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '../../api';
import Form from '../../components/form';
import { MainButton } from '../../components/styled';
import type { Entry, DetalhesCarroProps } from '../../types';

export default function DetalhesCarroProps({ params }: DetalhesCarroProps) {
  const [carro, setCarro] = useState<null | Entry>(null);
  const [editing, setEditing] = useState(false);
  const router = useRouter();
  const id = params.id;

  const handleSubmit = async (event: FormEvent, inputValues: Entry) => {
    event.preventDefault();
    await api.atualizarCarro(id, inputValues);
    setEditing(false);
  };

  const deletarCarro = async () => {
    await api.deletarCarro(id);
    router.push('/');
  };

  useEffect(() => {
    const getCarro = async () => {
      const data = await api.getCarro(id);
      setCarro(data);
    };

    getCarro();
  }, []);

  return (
    <main>
      <header>
        <h1>Detalhes do Carro</h1>
        <nav>
          <Link href={'/'}>Voltar</Link>
        </nav>
      </header>
      {carro && (
        <Form handleSubmit={handleSubmit} initialValues={carro} disabled={!editing} />
      )}
      <MainButton type="button" onClick={() => setEditing(true)}>
        Modificar
      </MainButton>
      <MainButton type="button" onClick={deletarCarro}>
        Deletar
      </MainButton>
    </main>
  );
}