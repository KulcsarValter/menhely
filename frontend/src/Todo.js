import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Todo() {
    const [allat, setAllat] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/')
            .then(res => setAllat(res.data))
            .catch(err => console.log(err))
    })

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-40 bg-white rounded p-3'>
                
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Faj</th>
                            <th>Név</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allat.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.allatfaj}</td>
                                    <td>{data.allatnev}</td>

                                    <td>
                                        <button className='btn btn-primary w-20'>Frissítés</button>
                                        <button className='btn btn-danger mx-2 w-20'>Törlés</button>
                                        <Link to='/' className='btn btn-success mx-2 w-25'>Hozzáadás</Link>
                                        <Link to='/fileupload' className='btn btn-success w-25'>Kép feltöltése</Link>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Todo