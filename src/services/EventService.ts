import { supabase } from "../lib/supabase";
import { Draw } from "../types/Draw";

function mapDraw(evento: any): Draw {

    const fecha = evento.fecha_sorteo
        ? new Date(evento.fecha_sorteo)
        : null;

    return {

        description: evento.descripcion,

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

}

export async function getDraws(): Promise<Draw[]> {

    const { data, error } = await supabase
        .from("eventos")
        .select("*")
        .eq("publicado", true)
        .eq("estado", "activo")
        .order("created_at", {
            ascending: false
        });


    console.log("ERROR:", error);
    console.log("DATA:", data);



    if (error) {

        console.error(error);

        return [];

    }

    return data.map(mapDraw);

}

export async function getDrawBySlug(slug: string): Promise<Draw | null> {

    const { data, error } = await supabase
        .from("eventos")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !data)
        return null;

    return mapDraw(data);

}