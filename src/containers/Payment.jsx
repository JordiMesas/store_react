/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
	const { state, handleSumTotal, addNewOrder } = useContext(AppContext);
	const { cart, buyer } = state;
    const history = useHistory();
    
	const paypalOptions = {
        clientId:
        'AWLXedjKXZ1imVjbLvgB8NRhtXaHGWOVeFeDolWuYY68c0QhY6g4c9B3DebM-MpjmFkya1_spULWEG8N',
		intent: 'capture',
		currency: 'USD',
	};
    
	const buttonStyles = {
        layout: 'vertical',
		shape: 'rect',
	}; 
    
    const handlePaymentSuccess = (data) =>{
        console.log(data);
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);   
            history.push('/checkout/success');
        }
    }    

	return (
		<div className='Payment'>
			<div className='Payment-content'>
				<h3>Resument del pedido:</h3>
				{cart.map((item) => (
					<div className='Payment-item' key={item.title}>
						<h4>{item.title}</h4>
						<span>$ {item.price}</span>
					</div>
				))}
				<div className='Payment-button'>
					<PayPalButton
						// opciones
						paypalOptions={paypalOptions}
						// estilos
						buttonStyles={buttonStyles}
						// total de pagos que vamos a ejecutar
						amount={handleSumTotal(cart)}
						// hacer funciones cuando se paga
						onPaymentStart={() => console.log('Start Payment')}
						// funciones cuando se ha hecho ya el pago y ha ido bien
						onPaymentSuccess={(data) => handlePaymentSuccess(data)}
						// funcion si hay un error
						onPaymentError={(error) => console.log(error)}
						onPaymentCancel={(data) => console.log(data)}

					/>
				</div>
			</div>
		</div>
	);
};

export default Payment;
