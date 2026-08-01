"use client";

import "./StepQuantity.css";

import { Draw } from "../../types/Draw";

interface Props{

    draw:Draw;

    quantity:number;

    setQuantity:(value:number)=>void;

    next:()=>void;

}

export default function StepQuantity({

    draw,

    quantity,

    setQuantity,

    next

}:Props){

    const options=[

        1,

        5,

        10,

        20

    ];

    const total=draw.ticketPrice*quantity;

    return(

        <div className="step-quantity">

            <h3>

                ¿Cuántos números deseas comprar?

            </h3>

            <p>

                Selecciona una cantidad o escribe una personalizada.

            </p>

            <div className="quantity-grid">

                {

                    options.map((item)=>(

                        <button

                            key={item}

                            className={

                                quantity===item

                                ? "quantity-card active"

                                : "quantity-card"

                            }

                            onClick={()=>setQuantity(item)}

                        >

                            <strong>

                                {item}

                            </strong>

                            <span>

                                Número{item>1?"s":""}

                            </span>

                        </button>

                    ))

                }

            </div>

            <div className="custom-quantity">

                <label>

                    Cantidad personalizada

                </label>

                <input

                    type="number"

                    min={1}

                    value={quantity}

                    onChange={(e)=>

                        setQuantity(

                            Number(e.target.value)

                        )

                    }

                />

            </div>

            <div className="summary-box">

                <div>

                    <span>

                        Valor por número

                    </span>

                    <strong>

                        ${draw.ticketPrice.toLocaleString("es-CO")}

                    </strong>

                </div>

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

                        Total a pagar

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