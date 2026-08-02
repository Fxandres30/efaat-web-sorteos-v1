import "./DrawHero.css";
import { Draw } from "../../types/Draw";

interface Props {
  draw: Draw;
  onBuy: () => void;
}

export default function DrawHero({ draw, onBuy }: Props) {

  const progress = Math.round(
    (draw.sold / draw.total) * 100
  );

  const available = draw.total - draw.sold;

  return (
    <section className="draw-hero">

      <div className="draw-card">

        <div className="draw-hero-image">
          <img
            src={draw.image}
            alt={draw.title}
          />
        </div>

        <div className="draw-body">

          <div className="draw-header">

            <span className="draw-badge">
              🟢 Sorteo activo
            </span>

            <strong>{progress}%</strong>

          </div>

          <h1>{draw.title}</h1>

          <p>{draw.prize}</p>

          <div className="draw-progress">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`
              }}
            />
          </div>

          <div className="draw-stats">

            <span>
              {draw.sold.toLocaleString("es-CO")} vendidos
            </span>

            <span>
              {available.toLocaleString("es-CO")} disponibles
            </span>

          </div>

          <div className="draw-info">

            <div>
              <span>🎲</span>
              <strong>{draw.lottery}</strong>
            </div>

            <div>
              <span>📅</span>
              <strong>{draw.drawDate}</strong>
            </div>

            <div>
              <span>🕙</span>
              <strong>{draw.drawHour}</strong>
            </div>

            <div>
              <span>💰</span>
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