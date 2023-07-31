import Axios from 'axios'
import React, { useState  } from 'react'
import { Link } from 'react-router-dom'

const AdminForm = () => {

    const [felhasznalonev, setfelhasznalonev] = useState("");
    const [jelszo, setJelszo] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = (e) => {

        Axios.post('http://localhost:3001/admin', {
            felhasznalonev: felhasznalonev,
            jelszo: jelszo,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            }
        })
    }

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <div className="container-fluid">
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
                                    <Link to='/kapcsolat' className='btn btn-outline-warning grow mx-2'>Kapcsolat</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='d-flex justify-content-center'>
                    <div className='mt-5 p-3 br3 w-25'>
                        <h2 className='tc'>Admin</h2>
                        <form onSubmit={login} className='adminform p-3 br3'>
                            <div className='mb-3'>
                                <label htmlFor='adminNev'>Név</label>
                                <input type='text' className='form-control br-3' onChange={(e) => { setfelhasznalonev(e.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor='adminJelszo'>Jelszó</label>
                                <input type='text' className='form-control' onChange={(e) => { setJelszo(e.target.value) }} />
                            </div>
                            <p></p>

                            <Link to='/todo' className='btn btn-outline-warning w-100 grow'>Bejelentkezés</Link>
                            <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{loginStatus}</h1>
                            <p></p>
                            <Link to='/' className='btn btn-outline-warning w-100 grow'>Vissza</Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminForm