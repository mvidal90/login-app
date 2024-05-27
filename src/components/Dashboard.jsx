import React, { useState } from 'react'
import { getUsers } from '../utils/api'

export const Dashboard = () => {
    const [resposeString, setResposeString] = useState("-")

    const listUsers = () => {
        getUsers()
            .then(data => setResposeString(JSON.stringify(data)))
            .catch(err => console.warn(err))
    }


    return (
        <div>
            <h1 className='m-4'>Dashboard - Rutas privadas</h1>
            <button type="button" className='button__primary m-4' onClick={listUsers}>
                Listar usuarios
            </button>
            <p className='m-4'>{resposeString}</p>
        </div>
    )
}
