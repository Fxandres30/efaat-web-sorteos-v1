import "./PurchaseCard.css";
import { Draw } from "../../types/Draw";

interface Props {
  draw: Draw;
}

export default function PurchaseCard({ draw }: Props) {
  return (
    <section className="purchase">

      <div className="container">

        <div className="purchase-card">

          <h2>Participar en este sorteo</h2>

          <p>
            Selecciona la cantidad de números que deseas comprar.
          </p>

          <div className="purchase-options">

            <button>1 Número</button>

            <button>5 Números</button>

            <button>10 Números</button>

            <button>20 Números</button>

          </div>

          <div className="purchase-custom">

            <label>

              Cantidad personalizada

            </label>

            <input
              type="number"
              placeholder="Ej. 7"
              min="1"
            />

          </div>

          <div className="purchase-summary">

            <div>

              <span>Valor por número</span>

              <strong>

                ${draw.ticketPrice.toLocaleString("es-CO")}

              </strong>

            </div>

            <div>

              <span>Total</span>

              <strong>

                $0

              </strong>

            </div>

          </div>

          <button className="purchase-button">

            Continuar con la compra

          </button>

        </div>

      </div>

    </section>
  );
}