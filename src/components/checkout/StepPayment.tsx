"use client";

import "./StepPayment.css";

interface Props {

    next: () => void;

    back: () => void;

}

export default function StepPayment({

    next,

    back

}: Props) {

    return (

        <div className="step-payment">

            <h3>

                Selecciona un método de pago

            </h3>

            <p>

                Realiza el pago usando la siguiente llave Bre.

            </p>

            <div className="payment-grid">

                <button className="payment-card active">

                    <img
                        src="/images/payments/bre.png"
                        alt="Bre"
                    />

                    <strong>

                        Bre

                    </strong>

                    <span>

                        Recomendado

                    </span>

                </button>

                <button className="payment-card">

                    <img
                        src="/images/payments/bancolombia.png"
                        alt="Bancolombia"
                    />

                    <strong>

                        Bancolombia

                    </strong>

                    <span>

                        Cuenta de ahorro

                    </span>

                </button>

            </div>

            <div className="payment-info">

                <h4>

                    Datos para pagar

                </h4>

                <div>

                    <span>Titular</span>

                    <strong>Grupo EFAAT</strong>

                </div>

                <div>

                    <span>Entidad</span>

                    <strong>Bancolombia</strong>

                </div>

                <div>

                    <span>Llave Bre</span>

                    <strong>0092033497</strong>

                </div>

                <div>

                    <span>Total a pagar</span>

                    <strong>$14.000</strong>

                </div>

            </div>

            <div className="payment-buttons">

                <button

                    className="back-btn"

                    onClick={back}

                >

                    ← Atrás

                </button>

                <button

                    className="next-btn"

                    onClick={next}

                >

                    Ya realicé el pago →

                </button>

            </div>

        </div>

    );

}