import "./DrawPrize.css";

export default function DrawPrize() {

    const items = [

        {
            icon: "✅",
            title: "Modelo 2026",
            text: "Última versión disponible."
        },

        {
            icon: "🛡️",
            title: "Documentación al día",
            text: "Lista para entregar."
        },

        {
            icon: "🔑",
            title: "Entrega inmediata",
            text: "Al confirmar el ganador."
        },

        {
            icon: "🏆",
            title: "Premio garantizado",
            text: "Sorteo transparente."
        }

    ];

    return (

        <section className="draw-prize">

            <div className="container">

                <div className="section-title">

                    <span>
                        🏍 Premio principal
                    </span>

                    <h2>
                        ¿Por qué participar?
                    </h2>

                    <p>
                        Todo listo para entregar al ganador.
                    </p>

                </div>

                <div className="prize-list">

                    {

                        items.map((item,index)=>(

                            <div
                                key={index}
                                className="prize-item"
                            >

                                <div className="prize-icon">
                                    {item.icon}
                                </div>

                                <div>

                                    <strong>
                                        {item.title}
                                    </strong>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}