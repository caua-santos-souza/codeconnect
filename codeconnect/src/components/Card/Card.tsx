import React from 'react';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import './styles.css';

// Defina um tipo para as propriedades do componente Card
interface CardProps {
  id: number;
  imagemUrl: string;
  titulo: string;
  resumo: string;
  LinhasDeCodigo: number;
  compartilhamentos: number;
  comentarios: number;
  usuario: {
    imagem: string;
    nome: string;
  };
}

const Card: React.FC<CardProps> = ({ imagemUrl, titulo, resumo, LinhasDeCodigo, compartilhamentos, comentarios, usuario }) => {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {LinhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {comentarios}
            </li>
          </ul>

          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
    
  );
};

export default Card;
