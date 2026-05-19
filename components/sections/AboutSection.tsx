import type { AboutData } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

// Mengambil data achievement dari content.ts kamu
import { myAchievements } from "@/data/content";

type AboutSectionProps = {
  data: AboutData;
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function AboutSection({
  data,
  onExpand,
  isExpanded = false,
}: AboutSectionProps) {
  if (isExpanded) {
    return (
      // Kontainer utama dengan scrollbar halus dan scroll-smooth
      <div className="relative h-full overflow-y-auto pr-2 pb-32 custom-scrollbar scroll-smooth">
        <CloseButton onClick={onExpand} />

        {/* ─── SCREEN 1: MURNI ABOUT ME (min-h-[85vh] agar memenuhi satu layar awal) ─── */}
        <div className="flex min-h-[85vh] flex-col md:flex-row md:items-center md:gap-12 lg:gap-12 px-6 md:px-12 py-12">
          <div className="flex shrink-0 items-center justify-center py-6 md:w-2/5 md:py-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Head.svg"
              alt={data.imageAlt}
              className="h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />
          </div>
          <div className="md:w-3/5">
            <SectionHeading_Clickable onClick={onExpand}>
              {`About Me`}
            </SectionHeading_Clickable>
            <p className="text-body leading-relaxed text-black md:text-lg md:leading-relaxed">
              I am a creative Graphic Designer with a strong passion for visual storytelling and brand identity. I specialize in turning complex ideas into clean, impactful, and aesthetically pleasing designs that capture attention and communicate effectively across digital platforms. Constantly inspired by contemporary art and design trends, I always strive to push creative boundaries, pay close attention to typography and layouts, and deliver high-quality visual experiences.
            </p>
            {/* Indikator kecil pengingat scroll down */}
            <p className="mt-8 text-xs text-gray-400 animate-pulse hidden md:block">
              Scroll down to view achievements ↓
            </p>
          </div>
        </div>

        {/* ─── SCREEN 2: TIMELINE ACHIEVEMENTS SELANG-SELING (KIRI-KANAN) ─── */}
        <div className="mt-12 max-w-5xl mx-auto px-6">
          {/* Judul Gede di Tengah */}
          <h3 className="text-3xl md:text-4xl font-black text-black text-center mb-28 uppercase tracking-widest">
            Achievements
          </h3>
          
          {/* Wrapper Timeline Utama */}
          <div className="relative md:after:absolute md:after:top-0 md:after:bottom-0 md:after:left-1/2 md:after:w-1 md:after:bg-black md:after:-ml-[2px]">
            {/* Mobile: Garis kiri biasa untuk HP kecil agar tidak berantakan */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-black md:hidden" />

            {/* Jarak antar poin renggang (space-y-36 di mobile, md:space-y-44 di desktop) */}
            <div className="space-y-36 md:space-y-44 relative py-8">
              {myAchievements?.map((achieve, index) => {
                // Logika matematika penentu posisi ganjil/genap (selang-seling)
                const isEven = index % 2 === 0;

                return (
                  <div 
                    key={index} 
                    className="flex flex-col md:flex-row items-start md:items-center relative pl-10 md:pl-0 w-full"
                  >
                    {/* Bulatan titik hitam pas di tengah-tengah garis (Hanya di desktop) */}
                    <span className="absolute left-[10px] md:left-1/2 top-2 md:top-1/2 h-4 w-4 rounded-full bg-black ring-4 ring-white z-10 md:-translate-x-2 md:-translate-y-2" />
                    
                    {/* Pengaturan Grid Kiri & Kanan otomatis */}
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left md:ml-auto"}`}>
                      <div className="flex flex-col gap-3">
                        {/* Tanggal */}
                        <span className="text-sm md:text-base font-bold text-gray-400 tracking-widest uppercase">
                          {achieve.date}
                        </span>
                        {/* Judul Achievement */}
                        <h4 className="text-xl md:text-2xl font-black text-black leading-tight">
                          {achieve.title}
                        </h4>
                        {/* Deskripsi */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl md:inline-block">
                          {achieve.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  {/* ─── SCREEN TAMPILAN AWAL (Bento Box Kecil saat belum di-expand) ─── */}
  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          {`About Me`}
        </SectionHeading_Clickable>
      </div>

      <div className="mt-3 flex items-start gap-3 sm:mt-4 sm:gap-4 xl:gap-6">
        <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-56 xl:w-56">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Head.svg"
            alt="just a head"
            className="h-auto w-full p-5 object-contain"
          />
        </div>
        <p className="flex-1 text-[19px] text-body text-black">
          I am a creative Graphic Designer with a strong passion for visual storytelling and brand identity. I specialize in turning complex ideas into clean, impactful, and aesthetically pleasing designs that capture attention and communicate effectively across digital platforms. Constantly inspired by contemporary art and design trends, I always strive to push creative boundaries, pay close attention to typography and layouts, and deliver high-quality visual experiences.
        </p>
      </div>
    </div>
  );
}