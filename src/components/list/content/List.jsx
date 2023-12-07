import React, { useState } from 'react';
import Header from '../../header/Header';
import { useRegister } from '../../../ContextDados';

function ListOfForm() {
    const { users } = useRegister();
    const [delet, setDelet] = useState('');
    const [confirm, setConfirm] = useState(false);
    
    const deleteCard = () => {
        setDelet('hidden');
        setConfirm(true);
    }

    const handleConfirm = () => {
        setConfirm(false);
        setDelet('hidden');
        console.log("Ação de confirmação realizada");
    }

    const handleCancel = () => {
        setConfirm(false);
        setDelet('');
        console.log("Ação de cancelamento realizada");
    }

    return (
        <div className=''>
            <Header />
            <div className='h-full w-full flex-col flex justify-center items-center'>
                <button onClick={deleteCard} type="button" className='text-white h-8 rounded px-4 bg-[#111] mb-5'>
                    Deletar todos os pedidos
                </button>
                {confirm && (
                    <div className='card flex flex-col justify-center items-center'>
                        <p>Tem certeza que deseja apagar todos os pedidos?</p>
                        <div className='flex w-6/12 my-2 justify-between'>
                            <a className='bg-green-700 cursor-pointer text-white font-bold px-2 rounded' onClick={handleConfirm}>Confirmar</a>
                            <a className='bg-red-700 cursor-pointer text-white font-bold px-2 rounded' onClick={handleCancel}>Cancelar</a>
                        </div>
                    </div>
                )}
                <ul>
                    {users && users.map((user, index) => (
                        <div className={`${delet} w-80 mb-10 card text-white overflow-hidden`} key={index}>
                            <strong>Modelo:</strong>
                            <p className='text-[#111]'>{user.name}</p>
                            <strong>Email cadastrado:</strong>
                            <p className='text-[#111]'>{user.email}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListOfForm;
