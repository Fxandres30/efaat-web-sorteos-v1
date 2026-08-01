import "./DrawPrize.css";

export default function DrawPrize() {

    return (

        <section className="draw-prize">

            <div className="container">

                <div className="section-title">

                    <span>

                        🏍 Premio principal

                    </span>

                    <h2>

                        ¿Qué incluye este premio?

                    </h2>

                    <p>

                        Todo listo para entregar al ganador del sorteo.

                    </p>

                </div>

                <div className="prize-grid">

                    <div className="prize-left">

                        <img

                            src="/images/draws/nkd.jpg"

                            alt="Moto"

                        />

                    </div>

                    <div className="prize-right">

                        <div className="prize-item">

                            <span>✅</span>

                            <div>

                                <strong>

                                    Modelo 2026

                                </strong>

                                <p>

                                    Última versión disponible.

                                </p>

                            </div>

                        </div>

                        <div className="prize-item">

                            <span>🛡️</span>

                            <div>

                                <strong>

                                    Documentación al día

                                </strong>

                                <p>

                                    Lista para entregar.

                                </p>

                            </div>

                        </div>

                        <div className="prize-item">

                            <span>🔑</span>

                            <div>

                                <strong>

                                    Entrega inmediata

                                </strong>

                                <p>

                                    Al confirmar el ganador.

                                </p>

                            </div>

                        </div>

                        <div className="prize-item">

                            <span>🏆</span>

                            <div>

                                <strong>

                                    Premio garantizado

                                </strong>

                                <p>

                                    Sorteo transparente.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}