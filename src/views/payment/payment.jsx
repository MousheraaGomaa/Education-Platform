
import { IoIosPerson } from "react-icons/io";
import Breadcrumbs from "../../components/shared/breadcrumbs/breadcrumbs";

import SvgPainter from "../../components/shared/svg-painter/svg-painter";

import styles from './payment.module.css';

const Payment = () => {

    let price = ['$24', '/ MONTH'];
    return (
        <div className='header-space custom-container'>
            <SvgPainter Tcolor='#cfe8fd' Bcolor='#224361' />
            <Breadcrumbs/>
            <div className={styles?.['payment-container']}>
                <div className="row g-5 align-items-center mx-0">
                    <div className="col-12  col-lg-7">
                        < div className={styles?.['checkout']}>
                            <h3>Checkout</h3>
                            <h6 htmlFor="cardType">Card Type</h6>
                            <div className={styles?.['payment-cards']}>
                                <div className="paypal">
                                    <input type="radio" id="paypal" name='cardType' />
                                    <label className={styles?.['payment-card-label']} htmlFor="paypal" >
                                        <img src="images/payment/paypal2.png" alt="" className='h-75' />
                                    </label>
                                </div>
                                <div className='amex'>
                                    <input type="radio" id="amex" name='cardType' />
                                    <label className={styles?.['payment-card-label']} htmlFor="amex">
                                        <img src="images/payment/amex2.png" alt="" className={styles?.['payment-img']} />
                                    </label>
                                </div>
                                <div className="visa">
                                    <input type="radio" id="visa" name='cardType' />
                                    <label className={styles?.['payment-card-label']} htmlFor="visa">
                                        <img src="images/payment/visa.png" alt="" className={styles?.['payment-img']} />
                                    </label>
                                </div>
                                <div className="mastercard">
                                    <input type="radio" id="mastercard" name='cardType' />
                                    <label className={styles?.['payment-card-label']} htmlFor="mastercard">
                                        <img src="images/payment/mastercard.png" alt="" className={styles?.['payment-img']} />
                                    </label>
                                </div>
                            </div>
                            <div className="card-info">
                                <form action="">
                                    <div className={styles?.['form-group']}>
                                        <label htmlFor="name">Name on Card</label>
                                        <input type="name" className='form-control' id="" placeholder="Enter name on Card" />
                                    </div>
                                    <div className={styles?.['form-group']}>
                                        <label htmlFor="card-number">Card Number</label>
                                        <input type="text" className='form-control' id="card-number" placeholder="Enter Card Number" />
                                    </div>
                                    <div className={`row gx-4 gy-3 ${styles?.['form-group']}`} >
                                        <div className={`col-12 col-sm-6`}>
                                            <label htmlFor="expiration-date">Expiration Date(MM/YY)</label>
                                            <input type="text" className='form-control' id="expiration-date" placeholder="Enter Expiration Date" />
                                        </div>
                                        <div className={`col-12 col-sm-6 }`}>
                                            <label htmlFor="cvc">CVC</label>
                                            <input type="text" className='form-control' id="cvc" placeholder="Enter CVC" />
                                        </div>
                                    </div>
                                    <div className={styles?.['save-data']}>
                                        <input type="checkbox" id='save-data' />
                                        <label htmlFor="save-data">Save my information for faster checkout</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-12  col-lg-5  '>
                        <div className={styles?.['summary']}>
                            <h4>Summary</h4>
                            <div className={styles.header}>
                                <img src='images/courses/python.jpg' />
                                <div>
                                    <div className={`d-flex gap-1 align-items-center ${styles.plan}`}>
                                        <IoIosPerson className={styles?.["svg--gradient-fill"]} />
                                        <h5 className="success-color mb-0">Individual</h5>
                                    </div>
                                    <p className={styles?.['description']}>Lorem ipsum dolor sit amet </p>
                                    <p className={styles?.["price"]}>{price[0]} <span>{price[1]}</span></p>
                                </div>
                            </div>
                            <hr />
                            <div className={styles?.['summary-details']}>
                                <span>Subtotal</span>
                                <span>$51.38</span>
                            </div>
                            <hr />
                            <div className={styles?.['summary-details']}>
                                <span>Coupon Discount</span>
                                <span>0%</span>
                            </div>

                            <hr />
                            <div className={styles?.['summary-details']}>
                                <span>Total</span>
                                <span>$56.38</span>
                            </div>
                        </div>
                    </div>
                </div> 
                <button className={`dark-btn ${styles?.['confirm-btn']}`}>Confirm</button>
            </div>
           
        </div>
    );
}

export default Payment;
