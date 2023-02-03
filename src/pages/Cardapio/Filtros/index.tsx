import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

// Recebendo o estado filtro do Cardapio
interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {

  function selecionarFiltro(opcao: IOpcao) { // Explicando que opcao é um tipo IOpcao
    if (filtro === opcao.id) return setFiltro(null); // Desseleciona o filtro se o if for true
    return setFiltro(opcao.id); // Passa para o estado filtro o filtro celecionado pelo id do filtro
  }

  return (
    <div className={styles.filtros}>
      {filtros.map(opcao => (
        <button 
          // Utilizando o classNames para não precisar concatenar os styles
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id // É necessário usar o [''] por que sem não reconhece o --
          })} 
          key={opcao.id} 
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}