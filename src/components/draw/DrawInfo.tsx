import "./DrawInfo.css";
import { Draw } from "../../types/Draw";

interface Props {
    draw: Draw;
}

export default function DrawInfo({ draw }: Props) {

    const remaining = draw.total - draw.sold;

    return (

        <section className="draw-info-section">

            <div className="container">

                <div className="section-header">

                    <span>

                        📊 Información del sorteo

                    </span>

                    <h2>

                        Todo lo que necesitas saber

                    </h2>

                    <p>

                        Consulta la información más importante antes de participar.

                    </p>

                </div>

                <div className="draw-info-grid">

                    <div className="info-card">

                        <span>🎲</span>

                        <small>Lotería</small>

                        <strong>{draw.lottery}</strong>

                    </div>

                    <div className="info-card">

                        <span>📅</span>

                        <small>Fecha</small>

                        <strong>{draw.drawDate}</strong>

                    </div>

                    <div className="info-card">

                        <span>🕙</span>

                        <small>Hora</small>

                        <strong>{draw.drawHour}</strong>

                    </div>

                    <div className="info-card">

                        <span>💰</span>

                        <small>Valor</small>

                        <strong>

                            ${draw.ticketPrice.toLocaleString("es-CO")}

                        </strong>

                    </div>

                    <div className="info-card">

                        <span>👥</span>

                        <small>Vendidos</small>

                        <strong>

                            {draw.sold.toLocaleString("es-CO")}

                        </strong>

                    </div>

                    <div className="info-card">

                        <span>🔥</span>

                        <small>Disponibles</small>

                        <strong>

                            {remaining.toLocaleString("es-CO")}

                        </strong>

                    </div>

                </div>

            </div>

        </section>

    );

}