import React, { useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

function OrokbefogadasForm() {

    const [email, setEmail] = useState("");
    const [nev, setNev] = useState("");
    const [telefon, setTelefon] = useState("");
    const [kisallatnev, setKisallatnev] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/register', {
            email: email,
            nev: nev,
            telefon: telefon,
            kisallatnev: kisallatnev,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                setRegisterStatus("Sikeres Örökbefogadás");
            }
        })
    }

    return (

        <div className='d-flex justify-content-center vh-100 align-items-center'>
            <form className='orokbefogadform w-25 p-2'>
                <h4 className='tc'>Örökbefogadás</h4>
                <div className='mb-3'>
                    <label htmlFor='nev'>Név</label>
                    <input type='nev' name='nev' className='form-control' onChange={(e) => { setNev(e.target.value) }} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' className='form-control' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='telefon'>Telefonszám</label>
                    <input type='text' name='telefon' className='form-control' onChange={(e) => { setTelefon(e.target.value) }} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='kisallatnev'>Kisállat neve</label>
                    <input type='text' name='kisallatnev' className='form-control' onChange={(e) => { setKisallatnev(e.target.value) }} />
                </div>
                <p></p>
                <Link className='btn btn-outline-warning w-100' onClick={register} value='Create an account'>Örökbefogad</Link>
                <p></p>
                <Link to='/allatok' className='btn btn-outline-warning w-100'>Vissza</Link>
                <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{registerStatus}</h1>
            </form>
        </div>

    )
}

export default OrokbefogadasForm