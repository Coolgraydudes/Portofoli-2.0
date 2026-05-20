import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  techStack: string[];
  href?: string;
  description?: string;
};

export function ProjectCard({
  title,
  image,
  techStack,
  href,
  description,
}: ProjectCardProps) {
  // Konten utama kartu dipisah biar kodenya bersih dan gak duplikat
  const CardContent = (
    <>
      {/* Image Area dengan aspek rasio yang proporsional untuk mobile ke bawah */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Footer Area yang otomatis renggang dan fleksibel */}
      <div className="absolute bottom-0 w-full bg-white/95 px-4 py-3 border-t border-neutral-100 translate-y-[calc(100%-44px)] transition-transform duration-300 ease-out group-hover:translate-y-0">
        
        {/* Baris Atas: Title & Tech Stack */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
          {/* Title */}
          <h4 className="heading-card text-black font-bold text-base sm:text-lg leading-tight">
            {title}
          </h4>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            {techStack.map((tech) => (
              <span key={tech} className="text-meta text-[11px] sm:text-xs text-neutral-500 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Baris Bawah: Deskripsi (Muncul pas di-hover) */}
        {description && (
          <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 line-clamp-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {description}
          </p>
        )}
      </div>
    </>
  );

  const sharedClassName = "relative group block w-full overflow-hidden rounded-2xl bg-[#fdfdfd] border border-neutral-100 transition-shadow hover:shadow-lg mb-4";

  // Kondisional rendering: Kalau ada href pakai Link Next.js, kalau tidak ada pakai div biasa
  if (href) {
    return (
      <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={sharedClassName}
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div className={sharedClassName}>
      {CardContent}
    </div>
  );
}