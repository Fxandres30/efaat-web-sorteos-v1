import "./globals.css";

export const metadata = {
  title: "EFAAT",
  description: "Plataforma oficial de sorteos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}