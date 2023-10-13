'use client';
import React, { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import api from '../api';
import Form from '../components/form';
import type { Entry } from '../types';

export default function newContact() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent, inputValues: Entry) => {
    event.preventDefault();
    await api.createContato(inputValues);
    router.push('/');
  };

  return (
    <main>
      <header>
        <h1>Novo contato</h1>
        <nav>
          <Link href={'/'}>Voltar</Link>
        </nav>
      </header>
      <Form
        handleSubmit={handleSubmit}
        initialValues={{
          nome: '',
          email: '',
          telefone: '',
          cpf: '',
        }}
      />
    </main>
  );
}
