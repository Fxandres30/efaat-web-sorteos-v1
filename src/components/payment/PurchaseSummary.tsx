import "./PurchaseSummary.css";

interface Props{

    quantity:number;

    price:number;

}

export default function PurchaseSummary({

    quantity,

    price

}:Props){

    return(

        <section className="purchase-summary">

            <div className="container">

                <div className="summary-card">

                    <h2>

                        Resumen de compra

                    </h2>

                    <div>

                        <span>

                            Cantidad

                        </span>

                        <strong>

                            {quantity}

                        </strong>

                    </div>

                    <div>

                        <span>

                            Valor unidad

                        </span>

                        <strong>

                            ${price.toLocaleString("es-CO")}

                        </strong>

                    </div>

                    <div>

                        <span>

                            Total

                        </span>

                        <strong>

                            ${(quantity*price).toLocaleString("es-CO")}

                        </strong>

                    </div>

                </div>

            </div>

        </section>

    );

}