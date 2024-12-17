import { BoxRevealDemo } from "@/components/box/Boxreveal";
import CardProject from "@/components/cards/CardProject";
import { HeroVideoDialogDemo } from "@/components/herovideoDialog/HerovideoDialog";
import { MarqueeDemo } from "@/components/marqueeies/Marquee";
import fongNy from "@/app/assets/fongny.jpg";
import Image from "next/image";
import { IconCloudDemo } from "@/components/common/iconCloud/IntersctiveIcon";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | Ny Fong",
    default: "Ny Fong",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default function Home() {
  let arr: number[];
  arr = [1, 1, 1, 1, 1, 1];

  return (
    <>
      {/* banner */}
      <section className="max-w-screen-xl min-w-screen-80 mx-auto my-10 my-5 grid gap-4 grid-cols-1 p-5 md:p-0 md:grid-cols-2">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src={fongNy}
            className="max-w-screen-xl min-w-screen-80 mx-auto my-10 h-60 w-60 rounded-full"
            alt=""
          />
          {/* <IconCloudDemo /> */}
        </div>
        <BoxRevealDemo />
      </section>
      {/* marquee */}
      <section className="my-5">
        <MarqueeDemo />
      </section>
      <main className="p-5 md:p-3 lg:p-0  gap-5 md:gap-3 max-w-screen-xl min-w-screen-80 mx-auto my-10">
        {/* marquee */}

        {/* project section */}
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* <CardProject /> */}
        </section>

        <section className="my-5 grid gap-4 grid-cols-1 md:grid-cols-3">
          {/* <HeroVideoDialogDemo /> */}
        </section>
      </main>
    </>
  );
}
