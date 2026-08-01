import { notFound } from "next/navigation";

import { draws } from "../../../data/Draws";

import DrawPage from "../../../components/draw/DrawPage";

interface Props{

    params:Promise<{

        slug:string;

    }>;

}

export default async function Page({params}:Props){

    const {slug}=await params;

    const draw=draws.find(

        item=>item.slug===slug

    );

    if(!draw){

        notFound();

    }

    return(

        <DrawPage

            draw={draw}

        />

    );

}