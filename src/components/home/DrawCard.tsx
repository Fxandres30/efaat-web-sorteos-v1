"use client";

import { useState } from "react";
import Link from "next/link";

import "./DrawCard.css";

import PurchaseModal from "../checkout/PurchaseModal";
import { Draw } from "../../types/Draw";

interface Props {
    draw: Draw;
}

export default function DrawCard({ draw }: Props) {

    const [open, setOpen] = useState(false);

    const progress = Math.round(
        (draw.sold / draw.total) * 100
    );

    const remaining = draw.total - draw.sold;

    return (

        <>

            <article className="draw-card">

                <div className="draw-image-box">

                    <span className="draw-status">

                        {draw.active
                            ? "🟢 Activo"
                            : "🔴 Finalizado"}

                    </span>

                    <img
                        src={draw.image}
                        alt={draw.title}
                        className="draw-image"
                    />

                </div>

                <div className="draw-content">

                    <span className="draw-label">

                        🏆 Premio principal

                    </span>

                    <h2 className="draw-title">

                        {draw.title}

                    </h2>

                    <p className="draw-description">

                        {draw.prize}

                    </p>

                    <div className="draw-progress">

                        <div className="draw-progress-top">

                            <span>

                                {draw.sold.toLocaleString("es-CO")} vendidos

                            </span>

                            <strong>

                                {progress}%

                            </strong>

                        </div>

                        <div className="progress">

                            <div

                                className="progress-fill"

                                style={{
                                    width: `${progress}%`
                                }}

                            />

                        </div>

                        <small>

                            {remaining.toLocaleString("es-CO")} disponibles

                        </small>

                    </div>

                    <div className="draw-info-grid">

                        <div className="draw-info">

                            <span>🎲 Lotería</span>

                            <strong>

                                {draw.lottery}

                            </strong>

                        </div>

                        <div className="draw-info">

                            <span>📅 Fecha</span>

                            <strong>

                                {draw.drawDate}

                            </strong>

                        </div>

                        <div className="draw-info">

                            <span>🕙 Hora</span>

                            <strong>

                                {draw.drawHour}

                            </strong>

                        </div>

                        <div className="draw-info">

                            <span>💰 Valor</span>

                            <strong>

                                ${draw.ticketPrice.toLocaleString("es-CO")}

                            </strong>

                        </div>

                    </div>

                    <div className="draw-actions">

                        <Link

                            href={`/sorteos/${draw.slug}`}

                            className="draw-button-secondary"

                        >

                            Ver detalles

                        </Link>

                        <button

                            className="draw-button-primary"

                            onClick={() => setOpen(true)}

                        >

                            Participar

                        </button>

                    </div>

                </div>

            </article>

            <PurchaseModal

                draw={draw}

                open={open}

                onClose={() => setOpen(false)}

            />

        </>

    );

}