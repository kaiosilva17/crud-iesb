'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../app/api';
import type { Entry } from '../app/types';

export default function Home() {
  const [carros, setCarros] = useState<Entry[]>([]);

  useEffect(() => {
    const getCarros = async () => {
      const data = await api.getCarros();
      setCarros(data);
    };

    getCarros();
  }, []);

  return (
    <main>
      <header>
        <h1>Lista de carros</h1>
        <nav>
          <Link href={'/new'}>Novo Carro</Link>
        </nav>
      </header>
      <ul>
        {carros.map((entry, index) => (
          <li key={index}>
            <Link href={`/details/${entry.id}`}>{entry.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}