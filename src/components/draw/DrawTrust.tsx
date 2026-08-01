import "./DrawTrust.css";

export default function DrawTrust() {

    const items = [

        {
            icon: "🛡️",
            title: "Compra segura",
            text: "Todos los pagos son verificados automáticamente."
        },

        {
            icon: "📲",
            title: "Números automáticos",
            text: "Recibe tus números por WhatsApp al instante."
        },

        {
            icon: "⚡",
            title: "Menos de 1 minuto",
            text: "Compra rápida y sin complicaciones."
        },

        {
            icon: "🏆",
            title: "Sorteos reales",
            text: "Ganadores publicados y verificables."
        }

    ];

    return (

        <section className="draw-trust">

            <div className="container">

                <div className="draw-trust-grid">

                    {

                        items.map((item, index) => (

                            <div
                                key={index}
                                className="trust-card"
                            >

                                <div className="trust-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.text}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}