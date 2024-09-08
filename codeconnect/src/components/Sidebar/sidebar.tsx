// src/components/Sidebar/sidebar.tsx
import React from 'react';
import Logo from './assets/logo.svg';
import Feed from './assets/feed.svg';
import Perfil from './assets/acount.svg';
import Info from './assets/info.svg';
import Sair from './assets/logout.svg';
import './styles.css';

const Sidebar: React.FC = () => {
    return (
        <aside>
            <img src={Logo} alt='logo do site' />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__link--publicar'>Publicar</a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={Feed} alt='' />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Perfil} alt='' />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Info} alt='' />
                            <span>Sobre Nós</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Sair} alt='' />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
