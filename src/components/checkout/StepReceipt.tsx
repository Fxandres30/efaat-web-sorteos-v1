"use client";

import { useState } from "react";

import "./StepReceipt.css";

interface Props{

    next:()=>void;

    back:()=>void;

}

export default function StepReceipt({

    next,

    back

}:Props){

    const [file,setFile]=useState<File|null>(null);

    return(

        <div className="step-receipt">

            <h3>

                Subir comprobante

            </h3>

            <p>

                Adjunta la imagen del comprobante de pago.

            </p>

            <label className="upload-box">

                <input

                    type="file"

                    accept="image/*"

                    onChange={(e)=>{

                        if(e.target.files){

                            setFile(

                                e.target.files[0]

                            );

                        }

                    }}

                />

                {

                    file ? (

                        <>

                            <div className="upload-icon">

                                ✅

                            </div>

                            <strong>

                                {file.name}

                            </strong>

                            <small>

                                Archivo seleccionado

                            </small>

                        </>

                    ) : (

                        <>

                            <div className="upload-icon">

                                📤

                            </div>

                            <strong>

                                Selecciona una imagen

                            </strong>

                            <small>

                                JPG · PNG · WEBP

                            </small>

                        </>

                    )

                }

            </label>

            <div className="receipt-buttons">

                <button

                    className="back-btn"

                    onClick={back}

                >

                    ← Atrás

                </button>

                <button

                    className="next-btn"

                    disabled={!file}

                    onClick={next}

                >

                    Enviar comprobante

                </button>

            </div>

        </div>

    );

}