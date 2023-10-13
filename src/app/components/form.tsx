'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MainButton, MainInput } from '../components/styled';
import type { FormProps } from '../types';

export default function Form({ handleSubmit, initialValues, disabled }: FormProps) {
    const [inputValues, setInputValues] = useState(initialValues);
    

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };


    return <form onSubmit={(event: FormEvent) => handleSubmit(event, inputValues)}>
        <label>
            <span>Nome:</span>
            <MainInput
          name="nome"
          value={inputValues.nome}
          onChange={handleChange}
          disabled={disabled}
        />
             
        </label>
        <label>
            <span>Ano:</span>
            <MainInput
          name="ano"
          value={inputValues.ano}
          onChange={handleChange}
          disabled={disabled}
        />
        </label>
        <label>
            <span>Cor:</span>
            <MainInput
          name="cor"
          value={inputValues.cor}
          onChange={handleChange}
          disabled={disabled}
        />
        </label>
        <label>
            <span>Preço:</span>
            <MainInput
          name="preco"
          value={inputValues.preco}
          onChange={handleChange}
          disabled={disabled}
        />
        </label>
        {!disabled && <MainButton type="submit">Salvar</MainButton>}
    </form>
}

  