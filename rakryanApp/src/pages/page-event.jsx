import { useState } from 'react'
import events from '../assets/events.png'
import '../page-event.css'

function PageEvent() {
    return (
        <>
            <div id="event" className="container  py-2 ">
                <div className="row container rounded overflow-hidden">
                    <div className="open-label fw-bold text-light">OPEN</div>
                    <div className="col-md-4 p-0">
                    <img src={events} alt="event" className="img-fluid h-60 ms-5 px-4 py-4"/>
                    </div>

                    <div className="col-md-8 p-4  d-flex flex-column justify-content-between">
                        <div>
                            <h4 className=" mb-3">Earn Money Easily With Digital</h4>
                            <div className="d-md-flex justify-content-between">
                            <div className="mb-3 ">
                                <h6 className="fw-bold text-brown py-2">Speaker</h6>
                                <p className="mb-1">Ahmad Fatoni - Lead QA Engineer of DOT Indonesia</p>
                                <p className="mb-0">Fahmi Idris - Frontend Engineer Kata.ai</p>
                            </div>

                            <div className="border-start border-4 px-1"></div>

                            <div className="mb-3 Topics px-5">
                                <h6 className="fw-bold text-brown py-2">Topics</h6>
                                <ul className="mb-0 ps-3">
                                    <li>Tips to keep productive for digiTalent</li>
                                    <li>Earn money at home</li>
                                    <li>Maximizing your digiTal Skills</li>
                                </ul>
                            </div>

                            <div className="border-start border-4 px-1"></div>

                            <div className="mb-3 px-5">
                                <h6 className="fw-bold text-brown py-2">Date and Time</h6>
                                <p className="mb-1">Wednesday, 24th July 2020</p>
                                <p className="mb-3">13:00 WIB</p>

                                <h6 className="fw-bold text-brown">Registration Fee</h6>
                                <p className="mb-0">Rp. 0</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="eventRegistration" className="py-5">
                <h5 className="mb-3 ms-5 px-3">Event Registration</h5>
                <div className=" container py-5 px-5  rounded overflow-hidden">
                    <div className="row g-3">
                        <div className="col-md-6">
                        <p className="mb-1 ">Nama Depan :</p>
                        <input type="text" />
                        </div>

                        <div className="col-md-6">
                        <p className="mb-1 ">Nama Belakang :</p>
                        <input type="text" />
                        </div>

                        <div className="col-md-6">
                        <p className="mb-1 ">Tanggal Lahir :</p>
                        <input type="text" />
                        </div>

                        <div className="col-md-6">
                        <p className="mb-1 ">Jenis Kelamin :</p>
                        <input type="text" />
                        </div>
                    </div>


                    <div className="alamat">
                        <p>Alamat :</p>
                        <input type="text"/>
                    </div>

                    <div className="email">
                        <p>Email :</p>
                        <input type="text"/>
                    </div>

                    <div className="noTelp">
                        <p>No. Telp:</p>
                        <input type="text"/>
                    </div>

                    <div className="pekerjaan">
                        <p>Pekerjaan :</p>
                        <input type="text"/>
                    </div>
                </div>
            </div>

            <button id="daftarSekarang" className="btn  fw-bold mx-auto d-block mb-5 ">Daftar Sekarang</button>

        </>
    );
}

export default PageEvent;
