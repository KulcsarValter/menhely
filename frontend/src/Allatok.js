import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Allatok() {

    const [allatok, setAllatok] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/allatok')
            .then(res => setAllatok(res.data))
            .catch(err => console.log(err))
    }, [])

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
                                    <Link to='/kutyak' className='btn btn-info w-75' >Kutyáink</Link>
                                    <Link to='/macskak' className='btn btn-info w-75' >Macskáink</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/kapcsolat' className='btn btn-info w-75' >Kapcsolat</Link>
                        </li>
                    </ul>
                </nav>
                <h2 className='text-center' >Tekintse meg a menhelyünkön lévő kutyákat és macskákat!</h2>

            </div>
            <div className='d-flex justify-content-center my-5'>
                {
                    allatok.map((data, i) => (
                        <div>
                            <div className="pa1 kartyak grow ma1 br2 my-5" key={i}>
                                <p>Állat neve: {data.allatnev}</p>
                                <p>Faj: {data.allatfaj}</p>
                                <p>Fajta: {data.allatfajta}</p>
                                <p>Neme: {data.allativar}</p>
                                <p>Kora: {data.allatkor} éves</p>
                                <p>Leírás: {data.allatleiras}</p>
                                <Link to='/orokbefogadas' className='btn btn-outline-warning'>Örökbefogadás</Link>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Allatok