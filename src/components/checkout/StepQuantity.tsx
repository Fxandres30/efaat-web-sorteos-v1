"use client";

import "./StepQuantity.css";
import { Draw } from "../../types/Draw";

interface Props {
    draw: Draw;
    quantity: number;
    setQuantity: (value: number) => void;
    next: () => void;
}

export default function StepQuantity({
    draw,
    quantity,
    setQuantity,
    next,
}: Props) {

    const options = [1, 5, 10, 20];

    const total = draw.ticketPrice * quantity;

    return (

        <div className="step-quantity">

            <div className="step-header">

                <h3>
                    Elige la cantidad
                </h3>

                <p>
                    Puedes seleccionar una opción rápida o escribir otra cantidad.
                </p>

            </div>

            <div className="quantity-grid">

                {options.map((item) => (

                    <button
                        key={item}
                        className={
                            quantity === item
                                ? "quantity-card active"
                                : "quantity-card"
                        }
                        onClick={() => setQuantity(item)}
                    >

                        <strong>{item}</strong>

                        <small>
                            Número{item > 1 ? "s" : ""}
                        </small>

                    </button>

                ))}

            </div>

            <div className="custom-quantity">

                <label>
                    Otra cantidad
                </label>

                <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                        setQuantity(Number(e.target.value))
                    }
                />

            </div>

            <div className="summary-box">

                <div className="summary-row">

                    <span>
                        Precio
                    </span>

                    <strong>
                        ${draw.ticketPrice.toLocaleString("es-CO")}
                    </strong>

                </div>

                <div className="summary-row">

                    <span>
                        Cantidad
                    </span>

                    <strong>
                        {quantity}
                    </strong>

                </div>

                <div className="summary-total">

                    <span>
                        Total
                    </span>

                    <strong>
                        ${total.toLocaleString("es-CO")}
                    </strong>

                </div>

            </div>

            <button
                className="continue-button"
                onClick={next}
            >

                Continuar →

            </button>

        </div>

    );

}