import React, { useState } from 'react';
import './styles.css'

const BarraDePesquisa: React.FC = () => {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    console.log(termoPesquisa)
    return (
       <input type="search"
        placeholder='Digite o que você procura'
        className='barra-pesquisa' 
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)} />
    )

} 

export default BarraDePesquisa;