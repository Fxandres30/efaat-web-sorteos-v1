import "./Hero.css";

export default function Hero() {

    return (

        <section className="hero">

            <div className="container hero-container">

                {/* Lado izquierdo */}
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
                        Compra tus números en menos de un minuto, paga fácilmente por Bre,
                        envía tu comprobante y recibe automáticamente tus números por WhatsApp.
                    </p>

                    <div className="hero-buttons">

                        <button className="hero-primary">
                            Ver sorteos
                        </button>

                        <button className="hero-secondary">
                            ¿Cómo funciona?
                        </button>

                    </div>

                    <div className="hero-features">

                        <div className="feature">
                            <span>✅</span>
                            <p>Pago seguro</p>
                        </div>

                        <div className="feature">
                            <span>📲</span>
                            <p>Entrega automática</p>
                        </div>

                        <div className="feature">
                            <span>🏆</span>
                            <p>Ganadores publicados</p>
                        </div>

                        <div className="feature">
                            <span>⚡</span>
                            <p>Compra en 1 minuto</p>
                        </div>

                    </div>

                </div>

                {/* Solo escritorio */}
                <aside className="hero-right">

                    <div className="hero-card">

                        <span className="hero-card-status">
                            🟢 Sorteo destacado
                        </span>

                        <img
                            src="/images/draws/nkd.jpg"
                            alt="Moto NKD 125"
                            className="hero-card-image"
                        />

                        <div className="hero-card-content">

                            <h2>
                                Moto NKD 125
                            </h2>

                            <small>
                                Modelo 2026
                            </small>

                            <h3>
                                $12.000.000
                            </h3>

                            <div className="hero-progress">

                                <div
                                    className="hero-progress-fill"
                                    style={{
                                        width: "92%"
                                    }}
                                />

                            </div>

                            <div className="hero-card-footer">

                                <span>
                                    4.612 / 5.000 vendidos
                                </span>

                                <strong>
                                    92%
                                </strong>

                            </div>

                            <button className="hero-buy">
                                Participar ahora
                            </button>

                            <p className="hero-info">
                                🎯 Compra 100% online y recibe tus números automáticamente.
                            </p>

                        </div>

                    </div>

                </aside>

            </div>

        </section>

    );

}