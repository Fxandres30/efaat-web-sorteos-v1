interface Props {
    params: Promise<{
        codigo: string;
    }>;
}

export default async function Page({ params }: Props) {

    const { codigo } = await params;

    return (
        <div>
            Compra: {codigo}
        </div>
    );
}