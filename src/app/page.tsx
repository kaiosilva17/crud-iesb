'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import api from '../app/api';
import type { Entry } from '../app/types';

export default function Home() {
  const [contatos, setContatos] = useState<Entry[]>([]);

  useEffect(() => {
    const getContatos = async () => {
      const data = await api.getContatos();
      setContatos(data);
    };

    getContatos();
  }, []);

  return (
    <main>
      <header>
        <h1>Lista de contatos</h1>
        <nav>
          <Link href={'/new'}>Novo contato</Link>
        </nav>
      </header>
      <ul>
        {contatos.map((entry, index) => (
          <li key={index}>
            <Link href={`/details/${entry.id}`}>{entry.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}