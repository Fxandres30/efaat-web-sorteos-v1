import { supabase } from "../lib/supabase";
import { Draw } from "../types/Draw";

export async function getDraws(): Promise<Draw[]> {

    const { data, error } = await supabase
        .from("eventos")
        .select("*")
        .eq("publicado", true)
        .eq("estado", "activo")
        .order("created_at", {
            ascending: false
        });

    if (error) {

        console.error("Error obteniendo eventos:", error);

        return [];

    }

    return data.map((evento): Draw => {

        const fecha = evento.fecha_sorteo
            ? new Date(evento.fecha_sorteo)
            : null;

        return {

            id: evento.id,

            slug: evento.slug,

            title: evento.titulo,

            image: evento.imagen,

            prize: evento.premio,

            lottery: evento.loteria ?? "",

            drawDay: fecha
                ? fecha.toLocaleDateString("es-CO", {
                    weekday: "long"
                })
                : "",

            drawDate: fecha
                ? fecha.toLocaleDateString("es-CO")
                : "",

            drawHour: fecha
                ? fecha.toLocaleTimeString("es-CO", {
                    hour: "2-digit",
                    minute: "2-digit"
                })
                : "",

            ticketPrice: Number(evento.precio_boleta),

            sold: evento.boletas_vendidas,

            total: evento.total_boletas,

            active: evento.estado === "activo"

        };

    });

}