"use client";

import Link from "next/link";

import "./StepSuccess.css";

interface Props{

    code:string;

    drawTitle:string;

    quantity:number;

    total:number;

}

export default function StepSuccess({

    code,

    drawTitle,

    quantity,

    total

}:Props){

    return(

        <div className="step-success">

            <div className="success-icon">

                ✅

            </div>

            <h2>

                ¡Compra registrada!

            </h2>

            <p className="success-description">

                Tu comprobante fue recibido correctamente.
                Ahora nuestro equipo validará el pago y
                asignará automáticamente tus números.

            </p>

            <div className="success-summary">

                <div>

                    <span>Sorteo</span>

                    <strong>{drawTitle}</strong>

                </div>

                <div>

                    <span>Cantidad</span>

                    <strong>{quantity} número{quantity>1?"s":""}</strong>

                </div>

                <div>

                    <span>Total</span>

                    <strong>

                        ${total.toLocaleString("es-CO")}

                    </strong>

                </div>

                <div>

                    <span>Código</span>

                    <strong>{code}</strong>

                </div>

            </div>

            <div className="success-status">

                <h3>

                    🟡 Estado actual

                </h3>

                <p>

                    Esperando validación del comprobante.

                </p>

            </div>

            <div className="success-info">

                <h3>

                    ¿Qué sigue?

                </h3>

                <ul>

                    <li>✔ Validaremos tu pago.</li>

                    <li>✔ Asignaremos tus números.</li>

                    <li>✔ Recibirás un mensaje por WhatsApp.</li>

                    <li>✔ Podrás seguir el estado de tu compra.</li>

                </ul>

            </div>

            <div className="success-actions">

                <Link

                    href={`/compras/${code}`}

                    className="success-primary"

                >

                    Ver seguimiento

                </Link>

                <Link

                    href="/"

                    className="success-secondary"

                >

                    Volver al inicio

                </Link>

            </div>

        </div>

    );

}