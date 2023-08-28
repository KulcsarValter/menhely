import Axios from 'axios'
import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const AdminForm = () => {

    const [felhasznalonev, setfelhasznalonev] = useState("");
    const [jelszo, setJelszo] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3001/admin', {
            felhasznalonev: felhasznalonev,
            jelszo: jelszo,
        }).then((response) => {
            if (response.data.message === 'success') {
                setLoginStatus('Sikeres bejelentkezés!');                
                // Sikeres bejelentkezés esetén átirányítás a Todo oldalra
                window.location.href = '/todo';
            } else {
                setLoginStatus('Hibás felhasználónév vagy jelszó');
            }
        })
    }

    return (
        <div>
            <div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to='/' className='btn btn-info w-75'>Rólunk</Link>
                        </li>
                        <li>
                            <Link to='/admin' className='btn btn-info w-75'>Admin</Link>
                        </li>
                        <li>
                            <Link className='btn btn-info w-75'>Kisállataink</Link>
                            <ul>

                                <li>
                                    <Link to='/allatok' className='btn btn-info w-75' >Összes kisállat</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/kutyak' className='btn btn-info w-75' >Kutyáink</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/macskak' className='btn btn-info w-75' >Macskáink</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/kapcsolat' className='btn btn-info w-75' >Kapcsolat</Link>
                        </li>
                    </ul>
                </nav>
                <div className='d-flex justify-content-center'>
                    <div className='mt-5 p-3 br3 w-25'>
                        <h2 className='tc'>Admin</h2>
                        <form onSubmit={login} className='adminform p-3 br3'>
                            <div className='mb-3'>
                                <label htmlFor='adminNev'>Név</label>
                                <input type='text' className='form-control br-3' required value={felhasznalonev}  onChange={(e) => { setfelhasznalonev(e.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor='adminJelszo'>Jelszó</label>
                                <input type='password' className='form-control' required value={jelszo}  onChange={(e) => { setJelszo(e.target.value) }} />
                            </div>
                            <p></p>

                            <button type="submit" className='btn btn-outline-warning w-100 grow'>Bejelentkezés</button>
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