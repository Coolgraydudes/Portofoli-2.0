import type { HeroData } from "@/data/types";
import RotatingText from "@/components/ReactBits/RotatingText";

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="heading-display md:text-[60px] text-[40px]">Hi, I am IzzamQassam</h1>
      <RotatingText
        texts={["Web Developer", "Frontend Engineer", "UI/UX Designer"]}
        mainClassName="heading-display"
        staggerFrom={"random"}
        initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
        staggerDuration={0.02}
        splitLevelClassName="overflow-hidden text-[24px] md:text-[55px] font-semibold pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
        rotationInterval={4000}
      />
    </div>
  );
}
