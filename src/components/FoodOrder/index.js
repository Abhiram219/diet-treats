import React, { useState } from 'react';
import {ReactComponent as LeftIcon} from '../../assets/icons/left.svg';
import FoodBookQR from '../../assets/images/FoodBookQR.png';
import FoodBowl from '../../assets/images/FoodBowl.png';
import {ReactComponent as InfoIcon}  from '../../assets/icons/info.svg';
import './app.scss'

function FoodOrder() {

  const [orderServed, setOrderServed] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false)

  const orderId = 'Q108B857';
  const refNumber = '56792865655';
  const counter = 'Uttar Dakshin';

  //Order Details
  const orderDate = '26-AUG-2022';
  const orderTime = '12:57 PM';
  const Item = '1 ✕ Mutton Curry Combo';
  const Price = '₹ 113.00';
  const SubTotal = '₹ 107.62';
  const TotalTax = '₹ 5.38';

  const Header = () => {
    return <div className='header'>
        <div className='header__icon'> <LeftIcon/> </div>
        <div className=''>Your Order Details</div>
    </div>;
  };

  const Order = () => {
    return <div className='order card'>
        <div className='order__cont1'>
            <div className='order__title'>Order ID</div>
            <div className='order__desc'>{orderId}</div>
        </div>
        <div className='order__cont2'> 
            <div className='order__title'>Counter</div>
            <div className='order__desc'>{counter}</div>
        </div>
    </div>;
  };

  const QR = () => {
    return <div className='qr card'>
       <div className='qr__text'> Order ID {orderId} </div>
       <div className='qr__text'> from {counter} </div>
       <img className='qr__qr' src={FoodBookQR} style={!orderServed ? {}: {opacity:0.1} } />
       <div className='qr__button' onClick={()=>setShowPopUp(true)} style={!orderServed ? {}: {opacity:0.1, background:'gray'} }>{ !orderServed ? 'Order Served ?' : 'Order is Served'}</div>
       <div className='qr__square'></div>
    </div>;
  };

  const OrderDetails = () => {
    return <div className='od card'>
        <div className='title'> Order Details </div>
        <div className='od__c1'>
            <div className='od__c1_1'>
                <div className='od__title'>Order Date</div>
                <div className='od__desc'>{orderDate}</div>
            </div>
            <div className='od__c1_1'> 
                <div className='od__title'>Order Time</div>
                <div className='od__desc'>{orderTime}</div>
            </div>
        </div>
        <div className='od__c2'>
            <div>{Item}</div>
            <div>{Price}</div>
        </div>
        <div className='od__c3'>
            <div>Subtotal</div>
            <div>{SubTotal}</div>
        </div>
        <div className='od__c4'>
            <div>Total Tax <InfoIcon style={{ height: 12, width: 12}}/> </div>
            <div>{TotalTax}</div>
        </div>
        <div className='od__c5'>
            <div>Total Amount</div>
            <div>{Price}</div>
        </div>
    </div>;
  };

  const PopUp = () => {
      return <div className='popup__modal'>
          <div className='popup__modal2'></div>
          <div className='popup__container'>
              <div className='popup__text'>Kindly ensure that you press this button only when you have received your order</div>
              <div className='popup__buttons'>
                <div className='popup__b1' onClick={()=> {setShowPopUp(false)}}>Cancel</div>
                <div className='popup__b1' onClick={()=> {setOrderServed(true); setShowPopUp(false)}}>Yes</div>
              </div>
          </div>
      </div>
  }
  

  return (
      <React.Fragment>
        <div className='fo__container'> 
            {showPopUp? <PopUp/>: ''}
            <Header style={showPopUp? {background: !'black',opacity: 0.5 }: {}}/>
            <div className='fo__image'> <img src={FoodBowl} /> </div>
            <Order/>
            <QR/>
            <OrderDetails/>
            <div className='fo__refNo'>Reference Number: {refNumber}</div>
            <div className='fo__footer'>Please show this screen to collect the order</div>
        </div>
      </React.Fragment>
  )

}

export default FoodOrder;