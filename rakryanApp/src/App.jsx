import { useState } from 'react'
import LogoSMALL1 from './assets/LogoSMALL 1.png'
import LogoSMALL2 from './assets/LogoSMALL 2.png'
import profile from './assets/profile.png'
import PageCheckout from './pages/page-checkout.jsx';
import PageEvent from './pages/page-event.jsx';

function App() {
  const [activePage, setActivePage] = useState('checkout');

  return (
    <>
        <div id="navbar ">
            <nav className="navbar-expand-lg bg-body-tertiary">
                <div className="container py-3">
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <a href="#" className="navbar-brand">
                            <img src={LogoSMALL1} width="45"  alt="logo rakryan"/>
                        </a>
                        <ul className="navbar-nav position-absolute top-0 end-0 px-5 py-3 ">
                            <li className="nav-item"><a className="nav-link px-3 me-2"  href="#" onClick={() => setActivePage('checkout')}>Home</a></li>
                            <li className="nav-item"><a className="nav-link px-3 me-2" href="#">Skill Dev</a></li>
                            <li className="nav-item"><a className="nav-link px-3 me-2" href="#">digITalent Hub</a></li>
                            <li className="nav-item"><a className="nav-link px-3 me-2" href="#" onClick={() => setActivePage('event')}>Events</a></li>
                            <li className="nav-item"><a className="nav-link px-3 me-2" href="#">Course</a></li>
                            <li className="nav-item"><a className="nav-link px-3 me-5" href="#">About</a></li>
                            <li className="nav-item dropdown py-1 ms-5 ">
                                <img src={profile} alt="profile" width="20"/>
                                <a className="someone" href="#" style={{textDecoration: 'none',color: 'black', marginLeft: '10px'}}  aria-expanded="false">someone</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>



        {activePage === 'checkout' && <PageCheckout />}
        {activePage === 'event' && <PageEvent />}



        <div id="footer" className=" container-fluid px-5 text-white py-4" style={{backgroundColor:' #343A40'}}>
                <div className="row text-center text-md-start">
                <div className="col-md-3 mb-3">
                    <img src={LogoSMALL2} alt="Rakryan" className="mb-2" style={{width: '60px'}}/>
                    <ul className="list-unstyled small">
                    <li>Providing,</li>
                    <li>Connecting,</li>
                    <li>Complementing.</li>
                    </ul>
                </div>

                <div className="col-md-2 mb-3">
                    <h6>Sitemap</h6>
                    <ul className="list-unstyled">
                    <li><a href="#" className="text-white text-decoration-none">Skill Dev</a></li>
                    <li><a href="#" className="text-white text-decoration-none">digITalent Hub</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Events</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Course</a></li>
                    <li><a href="#" className="text-white text-decoration-none">About</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Sign In</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-3">
                    <h6>Address</h6>
                    <p className="small mb-0">Jl. Bend. Palasari No.Kav 5, Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur 65149</p>
                </div>

                <div className="col-md-2 mb-3">
                    <h6>Contact</h6>
                    <ul className="list-unstyled small">
                        <li><i className="bi bi-telephone"></i> +6282257741226</li>
                        <li><i className="bi bi-telephone"></i> +6281223292947</li>
                        <li><i className="bi bi-envelope"></i> rakryan@gmail.com</li>
                    </ul>
                    <div className="d-flex gap-2 mt-2">
                        <a href="#" className="text-white text-decoration-none">
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                        <a href="#" className="text-white text-decoration-none">
                            <i className="bi bi-linkedin fs-4"></i>
                        </a>
                        <a href="#" className="text-white text-decoration-none">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-2 mb-3">
                    <h6>Operational Hours</h6>
                    <p className="small mb-0">Monday - Friday<br/>09:00 - 19:00</p>
                </div>
                </div>

                <hr className="border-light opacity-25 my-3"/>

                <div className="text-center small">&copy; 2020 Rakryan Digitalent Hub. All rights reserved.</div>
        </div>




    </>
  )
}

export default App
