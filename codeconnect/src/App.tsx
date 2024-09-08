import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/sidebar'; 
import BarraDePesquisa from './components/BarraDePesquisa/BarraDePesquisa';
import './App.css';
import Filtro from './components/Filtros/Filtro';
import Ordenacao from './components/Ordenacao/Ordenacao';
import Card from './components/Card/Card';

interface Usuario {
    nome: string;
    imagem: string; // Se houver uma imagem do usuário
}

interface Dados {
    id: number;
    titulo: string;
    resumo: string;
    linhas_de_codigo: number;
    compartilhamentos: number;
    comentarios: number;
    usuario: Usuario; // Agora é um objeto, não mais string
    imagem_capa: string; 
}

const App: React.FC = () => {
    const [dados, setDados] = useState<Dados[]>([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
        .then(resposta => resposta.json())
        .then(dados => setDados(dados))
    }, []);

    return (
        <div className='container'>
            <Sidebar />
            <div>
                <BarraDePesquisa />
                <Filtro />
                <Ordenacao />
                <ul className='lista-cards'>
                    {dados ? dados.map((item) => (
                        <li key={item.id}>
                            <Card
                                id={item.id}
                                imagemUrl={item.imagem_capa} 
                                titulo={item.titulo}
                                resumo={item.resumo}
                                LinhasDeCodigo={item.linhas_de_codigo}
                                compartilhamentos={item.compartilhamentos}
                                comentarios={item.comentarios}
                                usuario={{
                                    nome: item.usuario.nome, // Passa o nome do usuário
                                    imagem: item.usuario.imagem // Se houver, passa a imagem do usuário
                                }}
                            />
                        </li>
                    )) : null}
                </ul>
            </div>
        </div>
    );
};

export default App;
