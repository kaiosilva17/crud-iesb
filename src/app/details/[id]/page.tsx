'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '../../api';
import Form from '../../components/form';
import { MainButton } from '../../components/styled';
import type { Entry, DetalhesContatoProps } from '../../types';

export default function DetalhesContatoProps({ params }: DetalhesContatoProps) {
  const [contato, setContato] = useState<null | Entry>(null);
  const [editing, setEditing] = useState(false);
  const router = useRouter();
  const id = params.id;

  const handleSubmit = async (event: FormEvent, inputValues: Entry) => {
    event.preventDefault();
    await api.atualizarContato(id, inputValues);
    setEditing(false);
  };

  const deleteContact = async () => {
    await api.deletarContato(id);
    router.push('/');
  };

  useEffect(() => {
    const getContato = async () => {
      const data = await api.getContato(id);
      setContato(data);
    };

    getContato();
  }, []);

  return (
    <main>
      <header>
        <h1>Detalhes do contato</h1>
        <nav>
          <Link href={'/'}>Voltar</Link>
        </nav>
      </header>
      {contato && (
        <Form handleSubmit={handleSubmit} initialValues={contato} disabled={!editing} />
      )}
      <MainButton type="button" onClick={() => setEditing(true)}>
        Editar
      </MainButton>
      <MainButton type="button" onClick={deleteContact}>
        Apagar
      </MainButton>
    </main>
  );
}