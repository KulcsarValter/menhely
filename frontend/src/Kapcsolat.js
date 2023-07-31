import React from 'react'
import { Link } from 'react-router-dom'

function Kapcsolat() {
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

                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <Link to='/' className='btn btn-outline-warning grow mx-2'>Rólunk</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/allatok' className='btn btn-outline-warning grow mx-2'>Összes kisállat</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/kapcsolat' className='btn btn-outline-warning rounded-0  mx-2'>Kapcsolat</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h2 className="section-header text-center">Kapcsolat</h2>
                <div className='d-flex justify-content-center' >
                    <form className="form-horizontal w-25">
                        <textarea className="kapcsolat w-100 p-3 rounded-3" rows="20" placeholder="Üzenjen nekünk!" name="uzenet" required></textarea>
                        <div>
                            <button className="btn btn-warning send-button w-100 mt-2" id="submit" type="submit" value="SEND">Üzenet küldése</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kapcsolat