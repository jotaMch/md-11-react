import React, { useState } from 'react';
import Header from '../header/Header';
import { useRegister } from '../../ContextDados';

function FormToList() {
    const { users, setUsers } = useRegister();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitDados = (e) => {
        e.preventDefault();
        setUsers([
        ...users,
        {
            name: name,
            email: email
        }
        ]);
    };

    return (
        <div className='h-screen'>
        <Header />
            <form className='w-8/12 lg:w-6/12 h-60 mx-auto mt-20 flex flex-col items-center justify-center' 
            onSubmit={submitDados}>
                <h3 className='text-[#111] font-bold mb-4'>Faça seu pedido!</h3>
                <div className='w-10/12 mb-5'>
                    <input
                        type="text" placeholder='Modelo' required
                        className='border border bg-transparent w-full h-10 pl-2 rounded'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='w-10/12'>
                    <input
                        type="email" placeholder='Seu email' required
                        className='border border bg-transparent w-full h-10 pl-2 rounded'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className='bg-[#111] rounded h-10 w-10/12 mt-5 text-white'>
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default FormToList;
