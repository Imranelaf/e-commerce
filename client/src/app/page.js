import PrincipalCard from "@/components/Cards";
import ImagesSlider from "@/components/ImagesSlider";
import Slogan from "@/components/Slogan";
import CardsSlider from "../components/CardsSlider";
import Newsletter from "@/features/marketing/Newsletter";


export default function Home() {
  return (
    <div>
      
      <ImagesSlider />
      <PrincipalCard />
      <Slogan />
      <CardsSlider />
      <Newsletter />
      

    </div>
  );
}
