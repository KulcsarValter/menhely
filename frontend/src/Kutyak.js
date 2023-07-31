import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Kutyak() {

    const [kutyak, setKutyak] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/kutyak')
            .then(res => setKutyak(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">

                    <div className="container-fluid ">
                        <Link to='/admin' className='btn btn-outline-warning grow mx-2'>Admin</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <Link to='/' className='btn btn-outline-warning grow mx-2'>Rólunk</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/allatok' className='btn btn-outline-warning grow mx-2'>Összes kisállat</Link>                                   
                                </li>
                                <li className="nav-item">
                                    <Link to='/kutyak' className='btn btn-outline-warning grow mx-2'>Kutyáink</Link>                                   
                                </li>
                                <li className="nav-item">
                                    <Link to='/macskak' className='btn btn-outline-warning grow mx-2'>Macskáink</Link>                                   
                                </li>
                                <li className="nav-item">
                                    <Link to='/kapcsolat' className='btn btn-outline-warning grow mx-2'>Kapcsolat</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <h2 className='text-center' >Tekintse meg a menhelyünkön lévő kutyákat és macskákat!</h2>                
            </div>
            <div className='d-flex justify-content-center'>
                {
                    kutyak.map((data, i) => (
                        <div className="pa1 kartyak grow ma1 br2" key={i}>
                            <p>Állat neve: {data.allatnev}</p>
                            <p>Faj: {data.allatfaj}</p>
                            <p>Fajta: {data.allatfajta}</p>
                            <p>Neme: {data.allativar}</p>
                            <p>Kora: {data.allatkor} éves</p>
                            <p>Leírás: {data.allatleiras}</p>
                            <Link to='/orokbefogadas' className='btn btn-outline-warning'>Örökbefogadás</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Kutyak