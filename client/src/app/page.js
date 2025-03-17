import Navbar from "@/components/Navbar";
import PrincipalCard from "@/components/Cards";
import ImagesSlider from "@/components/ImagesSlider";
import Slogan from "@/components/Slogan";
import CardsSlider from "../components/CardsSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImagesSlider />
      <PrincipalCard />
      <Slogan />
      <CardsSlider />

    </div>
  );
}
