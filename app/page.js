import HeroBanner from "../components/landingPage/HeroBanner"; // opcional, se quiseres já adicionar
import SobreMundo from "../components/landingPage/SobreMundo"; // opcional, se quiseres já adicionar

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <SobreMundo /> {/* opcional - próxima secção */}
    </>
  );
}
