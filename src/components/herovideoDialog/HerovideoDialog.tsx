import HeroVideoDialog from "../ui/hero-video-dialog";
import Image from "next/image";
import thumb1 from "@/app/assets/res1.png";
export function HeroVideoDialogDemo() {
  const imgThumb: string =
    "https://i.ytimg.com/an_webp/ipudz0pWMpU/mqdefault_6s.webp?du=3000&sqp=CK-Z7roG&rs=AOn4CLB4DHZLNOw9hRa7AIR3rQfK2gpo3A";
  const videoSrc: string =
    "https://www.youtube.com/embed/ipudz0pWMpU?si=qXndCGva89DVVH_d";
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={imgThumb}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={imgThumb}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
