import React from 'react'
import EditIcon from "../../assets/images/payment-edit.png";
import PaymentClose from "../../assets/images/payment-modal-close.png";
import { useState } from 'react';
import { deletePaymentMethodRequest, makePaymentMethodDefaultRequest } from '../../utils/Requests';



const PaymentMethodCard = ({ brand, id, last4, exp_month, exp_year, defaultCard }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [removeCardmsg, setRemoveCardmsg] = useState('Remove Card')
    const [defaultCardmsg, setDefaultCardmsg] = useState('Set as default')

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const deletePaymentMethod = (id) => {
        setRemoveCardmsg("Removing card...")
        deletePaymentMethodRequest(id).then(data => {
            return data.json();
        }).then((response) => {
            if (response.success) {
                alert("Card removed.")
                handleOpenModal()
            } else {
                alert(response.message)
            }

        }).catch((error) => {
            alert(error.message)
        })
    }

    const makePaymentMethodDefault = (id) => {
        setDefaultCardmsg("Changing the default card...")
        makePaymentMethodDefaultRequest(id).then(data => {
            return data.json();
        }).then((response) => {
            alert("Defaut card updated.")
            handleOpenModal()
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div
                data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a6f"
                data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a6f"]'
                className="current-method-container"
            >
                <img
                    src="https://uploads-ssl.webflow.com/5d2f26e24904ea2ed96c0fac/5d8100449593d0c28996c3e4_icons8-visa-100.png"
                    width={40}
                    data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a70"
                    data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a70"]'
                    alt=""
                    className="current-method-icon"
                />
                <div
                    data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a71"
                    data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a71"]'
                    className="current-method-details"
                >
                    <div
                        data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a72"
                        data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a72"]'
                        className="hint text-heading-grey"
                    >
                        **** **** **** **** {last4}
                    </div>
                    <div
                        data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a74"
                        data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a74"]'
                        className="hint"
                    >
                        Expires {exp_month}/{exp_year}
                    </div>
                    <div
                        data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a74"
                        data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a74"]'
                        className="hint"
                    >
                        {defaultCard ? 'Default card' : ''}
                    </div>
                </div>
                <button
                    data-w-id="daebff06-32ed-13c5-ef78-8ae99db48a76"
                    data-wf-id='["daebff06-32ed-13c5-ef78-8ae99db48a76"]'
                    href="#"
                    className="edit-current-method modal-action w-inline-block"
                    onClick={handleOpenModal}
                >
                    <img src={EditIcon} alt="edit" />
                </button>
                <div
                    data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba5"
                    data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba5"]'
                    className={
                        isModalOpen
                            ? "modal modal--open"
                            : "modal modal--hide"
                    }
                >
                    <div
                        data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba6"
                        data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba6"]'
                        className="modal-mask"
                    />
                    <div
                        data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba7"
                        data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba7"]'
                        className="modal-container"
                    >
                        <button
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba8"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba8"]'
                            href="#"
                            className="modal-close w-inline-block"
                            onClick={() => handleOpenModal(id)}
                        >
                            <img src={PaymentClose} alt="payment" />
                        </button>
                        <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2ba9"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2ba9"]'
                            className="modal-title"
                        >
                            <h4
                                data-w-id="da32af5d-cebf-942c-643a-c06377bc2baa"
                                data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2baa"]'
                                className="text-center"
                            >
                                Make the payment method default
                            </h4>
                            <p
                                data-w-id="da32af5d-cebf-942c-643a-c06377bc2bac"
                                data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bac"]'
                                className="text-center"
                            >
                                Are you sure you want to make the payment method default?
                            </p>
                        </div>
                        <div
                            data-w-id="da32af5d-cebf-942c-643a-c06377bc2bae"
                            data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bae"]'
                        >
                            <button
                                className="button-block button button-primary w-button"
                                onClick={handleOpenModal}
                            >
                                Cancel
                            </button>
                            <button
                                data-w-id="da32af5d-cebf-942c-643a-c06377bc2bb1"
                                data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bb1"]'
                                href="#"
                                className="button-block button button-outline w-button"
                                onClick={() => deletePaymentMethod(id)}
                            >
                                {removeCardmsg}
                            </button>
                            <button
                                data-w-id="da32af5d-cebf-942c-643a-c06377bc2bb1"
                                data-wf-id='["da32af5d-cebf-942c-643a-c06377bc2bb1"]'
                                href="#"
                                className="button-block button button-outline w-button"
                                onClick={() => makePaymentMethodDefault(id)}
                            >
                                {defaultCardmsg}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethodCard