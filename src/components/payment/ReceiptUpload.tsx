import "./ReceiptUpload.css";

export default function ReceiptUpload(){

    return(

        <section className="receipt">

            <div className="container">

                <h2>

                    Subir comprobante

                </h2>

                <p>

                    Después de realizar el pago, adjunta tu comprobante.

                </p>

                <input

                    type="file"

                />

                <button>

                    Enviar comprobante

                </button>

            </div>

        </section>

    );

}