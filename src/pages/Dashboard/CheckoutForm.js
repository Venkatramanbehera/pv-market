import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { makePaymentMethodDefaultRequest } from '../../utils/Requests';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmSetup({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: window.location.href,
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            makePaymentMethodDefaultRequest()
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
    )
};

export default CheckoutForm;