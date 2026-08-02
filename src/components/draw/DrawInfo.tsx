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

                <div className="draw-summary">

                    <div className="summary-row">
                        <span>🎲 Lotería</span>
                        <strong>{draw.lottery}</strong>
                    </div>

                    <div className="summary-row">
                        <span>📅 Fecha</span>
                        <strong>{draw.drawDate}</strong>
                    </div>

                    <div className="summary-row">
                        <span>🕙 Hora</span>
                        <strong>{draw.drawHour}</strong>
                    </div>

                    <div className="summary-row">
                        <span>💰 Valor</span>
                        <strong>${draw.ticketPrice.toLocaleString("es-CO")}</strong>
                    </div>

                    <div className="summary-row">
                        <span>👥 Vendidos</span>
                        <strong>{draw.sold.toLocaleString("es-CO")}</strong>
                    </div>

                    <div className="summary-row">
                        <span>🔥 Disponibles</span>
                        <strong>{remaining.toLocaleString("es-CO")}</strong>
                    </div>

                </div>

            </div>

        </section>

    );

}