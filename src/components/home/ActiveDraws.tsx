import "./ActiveDraws.css";
import DrawCard from "./DrawCard";

import { Draw } from "../../types/Draw";

interface Props {

    draws: Draw[];

}

export default function ActiveDraws({ draws }: Props) {

    const activos = draws.filter(
        (draw: Draw) => draw.active
    );
    return (

        <section className="active-draws">

            <div className="container">

                <div className="active-header">

                    <div>

                        <span className="section-badge">

                            🎯 Sorteos disponibles

                        </span>

                        <h2>

                            Participa hoy y gana grandes premios

                        </h2>

                        <p>

                            Compra tus números en menos de un minuto,
                            realiza el pago y recibe tu confirmación
                            automáticamente por WhatsApp.

                        </p>

                    </div>

                    <div className="header-stats">

                        <div className="stat-card">

                            <strong>

                                {activos.length}

                            </strong>

                            <span>

                                Sorteos activos

                            </span>

                        </div>

                        <div className="stat-card">

                            <strong>

                                100%

                            </strong>

                            <span>

                                Pago seguro

                            </span>

                        </div>

                        <div className="stat-card">

                            <strong>

                                24/7

                            </strong>

                            <span>

                                Compra online

                            </span>

                        </div>

                    </div>

                </div>

                <div className="draw-filters">

                    <button className="filter active">

                        Todos

                    </button>

                    <button className="filter">

                        🏍 Vehículos

                    </button>

                    <button className="filter">

                        📱 Tecnología

                    </button>

                    <button className="filter">

                        💵 Dinero

                    </button>

                </div>

                <div className="draws-grid">

                    {

                        activos.map(draw => (

                            <DrawCard

                                key={draw.id}

                                draw={draw}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}