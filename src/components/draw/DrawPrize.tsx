import "./DrawPrize.css";
import { Draw } from "../../types/Draw";

interface Props {

    draw: Draw;

}

export default function DrawPrize({ draw }: Props) {

    return (

        <section className="draw-prize">

            <div className="container">

                <div className="section-title">

                    <span>

                        🎁 Premio principal

                    </span>

                    <h2>

                        {draw.prize}

                    </h2>

                    <p>

                        {draw.description ?? "Participa y gana este increíble premio."}

                    </p>

                </div>

                <div className="prize-list">

                    <div className="prize-item">

                        <div className="prize-icon">
                            🎁
                        </div>

                        <div>

                            <strong>

                                Premio

                            </strong>

                            <p>

                                {draw.prize}

                            </p>

                        </div>

                    </div>

                    <div className="prize-item">

                        <div className="prize-icon">
                            💰
                        </div>

                        <div>

                            <strong>

                                Valor por número

                            </strong>

                            <p>

                                ${draw.ticketPrice.toLocaleString("es-CO")}

                            </p>

                        </div>

                    </div>

                    <div className="prize-item">

                        <div className="prize-icon">
                            🎲
                        </div>

                        <div>

                            <strong>

                                Modalidad

                            </strong>

                            <p>

                                {draw.lottery}

                            </p>

                        </div>

                    </div>

                    <div className="prize-item">

                        <div className="prize-icon">
                            📅
                        </div>

                        <div>

                            <strong>

                                Fecha del sorteo

                            </strong>

                            <p>

                                {draw.drawDate} - {draw.drawHour}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}