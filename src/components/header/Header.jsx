import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return(
        <>
        <header
        className='bg-transparent text-white flex justify-between items-center px-4 h-20' 
        >
            <h1>Relógios Im</h1>
            <ul
            className='flex justify-around w-6/12 font-bold'
            >
                <Link to='/'>
                    <li>Nossa coleção</li>
                </Link>
                <Link to='/form'>
                    <li>Faça seu pedido</li>
                </Link>
                <Link to='/list'>
                    <li>Lista de pedidoss</li>
                </Link>
            </ul>
        </header>
        </>
    )
}

export default Header;