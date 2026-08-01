"use client";

import { useState } from "react";

import "./PurchaseModal.css";

import { Draw } from "../../types/Draw";

import StepIndicator from "./StepIndicator";
import StepQuantity from "./StepQuantity";
import StepCustomer from "./StepCustomer";
import StepPayment from "./StepPayment";
import StepReceipt from "./StepReceipt";
import StepSuccess from "./StepSuccess";

interface Props {
    draw: Draw;
    open: boolean;
    onClose: () => void;
}

export default function PurchaseModal({

    draw,
    open,
    onClose

}: Props) {

    const [step, setStep] = useState(1);

    const [quantity, setQuantity] = useState(1);

    const [name, setName] = useState("");

    const [phone, setPhone] = useState("");

    const [email, setEmail] = useState("");

    if (!open) return null;

    return (

        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="purchase-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="purchase-header">

                    <div>

                        <h2>

                            Comprar números

                        </h2>

                        <p>

                            {draw.title}

                        </p>

                    </div>

                    <button
                        className="modal-close"
                        onClick={onClose}
                    >

                        ✕

                    </button>

                </div>

                <StepIndicator
                    step={step}
                />

                <div className="purchase-content">

                    {

                        step === 1 && (

                            <StepQuantity

                                draw={draw}

                                quantity={quantity}

                                setQuantity={setQuantity}

                                next={() => setStep(2)}

                            />

                        )

                    }

                    {

                        step === 2 && (

                            <StepCustomer

                                name={name}

                                setName={setName}

                                phone={phone}

                                setPhone={setPhone}

                                email={email}

                                setEmail={setEmail}

                                next={() => setStep(3)}

                                back={() => setStep(1)}

                            />

                        )

                    }

                    {

    step===3 && (

        <StepPayment

            next={()=>setStep(4)}

            back={()=>setStep(2)}

        />

    )

}

                    {

    step===4 && (

        <StepReceipt

            next={()=>setStep(5)}

            back={()=>setStep(3)}

        />

    )

}

{

    step===5 && (

        <StepSuccess

            code="EFAAT-2026-000231"

            drawTitle={draw.title}

            quantity={quantity}

            total={draw.ticketPrice*quantity}

        />

    )

}
                </div>

            </div>

        </div>

    );

}