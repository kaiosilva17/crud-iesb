'use client';
import React, { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import api from '../api';
import Form from '../components/form';
import type { Entry } from '../types';

export default function newCarro() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent, inputValues: Entry) => {
    event.preventDefault();
    await api.createCarro(inputValues);
    router.push('/');
  };

  return (
    <main>
      <header>
        <h1>Novo carro</h1>
        <nav>
          <Link href={'/'}>Voltar</Link>
        </nav>
      </header>
      <Form
        handleSubmit={handleSubmit}
        initialValues={{
          nome: '',
          ano: '',
          cor: '',
          preco: '',
        }}
      />
    </main>
  );
}
