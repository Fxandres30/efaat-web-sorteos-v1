import "./PaymentMethods.css";

export default function PaymentMethods() {

    return (

        <section className="payment">

            <div className="container">

                <h2>

                    Método de pago

                </h2>

                <p>

                    Selecciona cómo deseas realizar el pago.

                </p>

                <div className="payment-grid">

                    <button className="payment-item">

                        <img src="/images/payments/nequi.png" alt="Nequi"/>

                        <span>Nequi</span>

                    </button>

                    <button className="payment-item">

                        <img src="/images/payments/bancolombia.png" alt="Bancolombia"/>

                        <span>Bancolombia</span>

                    </button>

                </div>

            </div>

        </section>

    );

}