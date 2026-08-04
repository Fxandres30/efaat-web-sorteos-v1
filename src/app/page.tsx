import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ActiveDraws from "../components/home/ActiveDraws";

import { getDraws } from "../services/EventService";

export default async function Home() {

    const draws = await getDraws();

    if (draws.length === 0) {

        return (
            <>
                <Navbar />

                <main
                    style={{
                        padding: "80px 20px",
                        textAlign: "center"
                    }}
                >
                    <h2>No hay eventos activos</h2>

                    <p>
                        Pronto tendremos nuevos sorteos disponibles.
                    </p>

                </main>
            </>
        );

    }

    const destacado = draws[0];

    return (
        <>
            <Navbar />

            <Hero draw={destacado} />

            <ActiveDraws draws={draws} />
        </>
    );

}