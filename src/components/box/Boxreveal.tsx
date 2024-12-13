import { RainbowButton } from "../ui/rainbow-button";

export function RainbowButtonDemo() {
  return <RainbowButton>Get Unlimited Access</RainbowButton>;
}

import BoxReveal from "../ui/box-reveal";

export async function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Ny Fong<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] font-kh">
          និសិត្ស RUPP, ITE, 9th Generation{" "}
          <span className="text-[#5046e6]">Software Dev</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <RainbowButton className="mt-[1.6rem] bg-[#5046e6]">
          Explore
        </RainbowButton>
      </BoxReveal>
    </div>
  );
}
