import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {
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
                                    <Link to='/kapcsolat' className='btn btn-outline-warning grow mx-2'>Kapcsolat</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='d-flex justify-content-center text-center mt-5'>
                    <section className="w-50">
                        <div className="rolunk ba bw1 pa3 br3">
                            <h2 className="fejlec">Rólunk</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quibusdam ad molestiae repellendus quis harum, tenetur soluta totam nostrum expedita, iure, cupiditate iusto sit! Harum reprehenderit, sed eaque maxime quam veritatis quasi suscipit doloribus temporibus illum cupiditate placeat ab sequi earum dolores sunt blanditiis voluptates, debitis ut nulla deleniti saepe. Et atque reprehenderit molestias quae repellat officia ducimus. Dolorum ipsa commodi temporibus incidunt! Sequi ducimus perferendis cupiditate illo facilis natus accusamus ullam at quis! Tempora minima beatae optio iusto, nemo fugiat hic omnis minus sequi excepturi aut doloremque in obcaecati ad accusamus consequatur aperiam temporibus quo. Id velit fugiat voluptate?</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Main