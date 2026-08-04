import { notFound } from "next/navigation";

import DrawPage from "../../../components/draw/DrawPage";

import { getDrawBySlug } from "../../../services/EventService";

interface Props {

    params: Promise<{

        slug: string;

    }>;

}

export default async function Page({ params }: Props) {

    const { slug } = await params;

    const draw = await getDrawBySlug(slug);

    if (!draw) {

        notFound();

    }

    return (

        <DrawPage

            draw={draw}

        />

    );

}
