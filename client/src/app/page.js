import Navbar from "@/components/Navbar";
import PrincipalCard from "@/components/Cards";
import ImagesSlider from "@/components/ImagesSlider";
import Slogan from "@/components/Slogan";
import CardsSlider from "../components/CardsSlider";
import Newsletter from "@/features/marketing/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImagesSlider />
      <PrincipalCard />
      <Slogan />
      <CardsSlider />
      <Newsletter />
      <Footer />

    </div>
  );
}
