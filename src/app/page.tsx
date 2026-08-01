import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ActiveDraws from "../components/home/ActiveDraws";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ActiveDraws />
    </>
  );
}