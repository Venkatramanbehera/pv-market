import React from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement />
            <input
                type="submit"
                data-wait="Please wait..."
                data-w-id="6e8e10d3-fef0-4c2a-b11f-4f95daf9220e"
                data-wf-id='["6e8e10d3-fef0-4c2a-b11f-4f95daf9220e"]'
                className="button button-primary w-button"
                defaultValue="Add payment details"
            />
        </form>
    );
};

export default CheckoutForm;