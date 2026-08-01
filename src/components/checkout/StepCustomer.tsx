"use client";

import "./StepCustomer.css";

interface Props{

    name:string;

    setName:(value:string)=>void;

    phone:string;

    setPhone:(value:string)=>void;

    email:string;

    setEmail:(value:string)=>void;

    next:()=>void;

    back:()=>void;

}

export default function StepCustomer({

    name,

    setName,

    phone,

    setPhone,

    email,

    setEmail,

    next,

    back

}:Props){

    return(

        <div className="step-customer">

            <h3>

                Tus datos

            </h3>

            <p>

                Necesitamos estos datos para enviarte los números comprados.

            </p>

            <label>

                Nombre completo

            </label>

            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Ej: Andrés Mercado"
            />

            <label>

                WhatsApp

            </label>

            <input
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="3001234567"
            />

            <label>

                Correo electrónico (opcional)

            </label>

            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="correo@email.com"
            />

            <div className="customer-buttons">

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

                    Continuar →

                </button>

            </div>

        </div>

    );

}