import { useState } from 'react'
import Ellipse from '../assets/Ellipse.png'
import uiDesignTraining from '../assets/ui-design-training 1.png'
import LogoOVO from '../assets/Logo OVO (PNG-480p) - FileVector69.png'
import LogoGOPAY from '../assets/Logo GO-PAY.png'
import bankMandiri from '../assets/bank mandiri .png'
import bankBCA from '../assets/bank BCA.png'
import bankBNI from '../assets/bank BNI.png'
import bankBRI from '../assets/bank BRI.png'
import VISA from '../assets/VISA.png'
import MASTERCARD from '../assets/MASTERCARD.png'
import indomaret from '../assets/indomaret.png'
import alfamart from '../assets/alfamart.png'
import '../page-checkout.css'

function PageCheckout() {
    return (
        <>
            <div id="payment" className="container-fluid px-5 py-3" >
                <div className="d-flex justify-content-between align-items-center">
                    <div >
                        <h3 >UX Designer: Digital Product Development</h3>
                        <div className="d-flex mt-3">
                            <img src={Ellipse} alt="profile"/>
                            <p className="px-3">Dimounitif Nelaspaba</p>    
                        </div>
                        <p className="mt-2">Kategori <strong>UI/UX</strong></p>
                        <h6><strong>Rp. 0</strong></h6>                
                    </div>
                    <img src={uiDesignTraining} alt="ui Designer" className="img-fluid"/>
                </div>
            </div>

            <div id="payment-method" className="container mt-3 ">

                <h5 className="payment-title mb-3">Payment Method</h5>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className=" card w-80 mb-3" >
                            <div className="card-body ">
                                <h5 className="card-title">E-Wallet</h5>
                                <p>Transaksi terhubung dengan akun e-wallet</p>
                                <button className="btn-payment mb-3">
                                    <img src={LogoOVO} alt="ovo"/>
                                    <a href="#">OVO</a>
                                </button> <br/>
                                <button className="btn-payment">
                                    <img src={LogoGOPAY} alt="gopay"/>
                                    <a href="#">GO-PAY</a>
                                </button>
                            </div>
                        </div>

                        <div className=" card w-80 mb-3" >
                            <div className="card-body">
                                <h5 className="card-title">Transfer Bank</h5>
                                <p>Transaksi perlu upload bukti transfer untuk proses verifikasi</p>
                                <button className="btn-payment">
                                    <img src={LogoOVO} alt="xyz"/>
                                    <a href="#">BANK XYZ</a>
                                </button>
                            </div>
                        </div>

                        <div className="card w-80 mb-3" >
                            <div className="card-body">
                                <h5 className="card-title">Transfer Virtual Account</h5>
                                <p>Transaksi di cek otomatis</p>
                                <button className="btn-payment mb-3">
                                    <img src={bankMandiri} alt="mandiri"/>
                                    <a href="#">BANK MANDIRI</a>
                                </button> <br/>
                                <button className="btn-payment mb-3">
                                    <img src={bankBCA} alt="bca"/>
                                    <a href="#">BANK BCA</a>
                                </button> <br/>
                                <button className="btn-payment mb-3">
                                    <img src={bankBNI} alt="BNI"/>
                                    <a href="#">BANK BNI</a>
                                </button> <br/>
                                <button className="btn-payment">
                                    <img src={bankBRI} alt="BRI"/>
                                    <a href="#">BANK BRI</a>
                                </button>
                            </div>
                        </div>

                        <div className="card w-80 mb-3" >
                            <div className="card-body">
                                <h5 className="card-title">Kartu Kredit</h5>
                                <p>Transaksi dengan kartu kredit berlogo VISA/MASTERCARD</p>
                                <button className="btn-payment">
                                    <img src={VISA} alt="VISA"/>
                                    <img src={MASTERCARD} alt="MASTERCARD"/>
                                    <a href="#">VISA/MASTERCARD</a>
                                </button>
                            </div>
                        </div>

                        <div className="card w-80 mb-3" >
                            <div className="card-body">
                                <h5 className="card-title">Minimarket</h5>
                                <p>Transaksi di gerai retail terdekat dengan biaya layanan tambahan</p>
                                <button className="btn-payment mb-3">
                                    <img src={indomaret} alt="INDOMARET"/>
                                    <a href="#">INDOMARET</a>
                                </button> <br/>
                                <button className="btn-payment">
                                    <img src={alfamart} alt="alfamart"/>
                                    <a href="#">ALFAMART</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5>Total Price</h5>
                                <ul className="list-unstyled">
                                    <li>Price <strong className="align-right">Rp. 0</strong></li>
                                    <li>Discount <strong className="align-right">Rp. 0</strong></li>
                                    <li>Potongan Voucher <strong className="align-right">Rp. 0</strong></li>
                                </ul>
                                <hr/>
                                <h5>Voucher</h5>
                                <div className="input-group mb-3">
                                    <input type="text" className="input-voucher form-control me-3" placeholder="Input voucher code"/>
                                    <button className="btn btn-use text-light px-4">Use</button>
                                </div>
                                <hr/>
                                <h5 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    Total Payment
                                    <span >Rp. 0</span>
                                </h5>
                                <p>Dengan menyelesaikan pembelian, Anda menyetujui Ketentuan Layanan ini</p>
                                <button type="button" className="w-100 btn btn-bayar px-5"  >Bayar Course</button>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageCheckout;
