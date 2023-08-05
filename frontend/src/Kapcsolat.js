import React from 'react'
import { Link } from 'react-router-dom'

function Kapcsolat() {
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