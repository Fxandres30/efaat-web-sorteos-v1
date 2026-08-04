import "./Hero.css";
import { Draw } from "../../types/Draw";

interface Props {

    draw: Draw;

}

export default function Hero({ draw }: Props) {

    const porcentaje = Math.round(
        (draw.sold / draw.total) * 100
    );

    return (

        <section className="hero">

            <div className="container hero-container">

                <div className="hero-left">

                    <span className="hero-badge">
                        🎉 Plataforma Oficial de Sorteos
                    </span>

                    <h1 className="hero-title">
                        Participa en sorteos reales.
                        <br />
                        Gana premios increíbles.
                    </h1>

                    <p className="hero-text">
                        Compra tus números en menos de un minuto,
                        paga fácilmente por Bre y recibe tus números
                        automáticamente por WhatsApp.
                    </p>

                    <div className="hero-buttons">

                        <button className="hero-primary">

                            Ver sorteos

                        </button>

                        <button className="hero-secondary">

                            ¿Cómo funciona?

                        </button>

                    </div>

                </div>

                <aside className="hero-right">

                    <div className="hero-card">

                        <span className="hero-card-status">

                            🟢 Evento destacado

                        </span>

                        <img

                            src={draw.image}

                            alt={draw.title}

                            className="hero-card-image"

                        />

                        <div className="hero-card-content">

                            <h2>

                                {draw.title}

                            </h2>

                            <small>

                                {draw.prize}

                            </small>

                            <h3>

                                ${draw.ticketPrice.toLocaleString("es-CO")} c/u

                            </h3>

                            <div className="hero-progress">

                                <div

                                    className="hero-progress-fill"

                                    style={{

                                        width: `${porcentaje}%`

                                    }}

                                />

                            </div>

                            <div className="hero-card-footer">

                                <span>

                                    {draw.sold.toLocaleString("es-CO")}

                                    {" / "}

                                    {draw.total.toLocaleString("es-CO")}

                                    {" vendidos"}

                                </span>

                                <strong>

                                    {porcentaje}%

                                </strong>

                            </div>

                            <button className="hero-buy">

                                Participar ahora

                            </button>

                        </div>

                    </div>

                </aside>

            </div>

        </section>

    );

}