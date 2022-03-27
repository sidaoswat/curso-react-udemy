import { useState } from 'react';

export default function useTableaOuForm() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const exibirTabela = () => setVisivel('tabela');
  const exibirForm = () => setVisivel('form');

  return {
    formularioVisivel: visivel === 'form',
    tabelaVisivel: visivel === 'tabela',
    exibirTabela,
    exibirForm
  }
}