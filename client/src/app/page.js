import Navbar from "@/components/Navbar";
import PrincipalCard from "@/components/PrincipalCard";
import Slider from "@/components/Slider";
import Slogan from "@/components/Slogan";
import PhoneSlider from "../components/PhoneSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <PrincipalCard />
      <Slogan />
      <PhoneSlider />

    </div>
  );
}
