import "./DrawHero.css";
import { Draw } from "../../types/Draw";

interface Props {
  draw: Draw;
  onBuy: () => void;
}

export default function DrawHero({
  draw,
  onBuy,
}: Props) {

  const progress = Math.round(
    (draw.sold / draw.total) * 100
  );

  return (
    <section className="draw-hero">

      <div className="container draw-hero-container">

        <div className="draw-hero-image">

          <img
            src={draw.image}
            alt={draw.title}
          />

        </div>

        <div className="draw-hero-content">

          <span className="draw-badge">
            🟢 Sorteo activo
          </span>

          <h1>
            {draw.title}
          </h1>

          <p>
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

          </div>

          <div className="draw-details">

            <div>

              <span>🎲 Lotería</span>

              <strong>{draw.lottery}</strong>

            </div>

            <div>

              <span>📅 Fecha</span>

              <strong>{draw.drawDate}</strong>

            </div>

            <div>

              <span>🕙 Hora</span>

              <strong>{draw.drawHour}</strong>

            </div>

            <div>

              <span>💰 Valor</span>

              <strong>

                ${draw.ticketPrice.toLocaleString("es-CO")}

              </strong>

            </div>

          </div>

          <button
            className="draw-button"
            onClick={onBuy}
          >
            Participar ahora
          </button>

        </div>

      </div>

    </section>
  );
}