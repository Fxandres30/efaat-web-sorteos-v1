"use client";

import { useState } from "react";

import DrawHero from "./DrawHero";
import DrawTrust from "./DrawTrust";
import PurchaseModal from "../checkout/PurchaseModal";

import { Draw } from "../../types/Draw";
import DrawPrize from "./DrawPrize";
import DrawInfo from "./DrawInfo";

interface Props{
    draw:Draw;
}

export default function DrawPage({draw}:Props){

    const [open,setOpen]=useState(false);

    return(

        <>

            <DrawHero

    draw={draw}

    onBuy={() => setOpen(true)}

/>

<DrawTrust />


<DrawPrize />

<DrawInfo
    draw={draw}
/>

<PurchaseModal

    draw={draw}

    open={open}

    onClose={() => setOpen(false)}

/>

        </>

    );

}