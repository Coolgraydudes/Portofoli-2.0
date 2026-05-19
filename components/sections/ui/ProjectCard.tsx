import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  techStack: string[];
  href?: string;
  description?: string; // Menerima deskripsi singkat project
};

export function ProjectCard({
  title,
  image,
  techStack,
  href,
  description,
}: ProjectCardProps) {
  const CardWrapper = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="relative group block overflow-hidden rounded-2xl bg-[#fdfdfd] transition-shadow hover:shadow-lg"
    >
      {/* Image Area */}
      <div className="relative aspect-2/1 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Footer dengan Efek Slide-Up */}
      <div className="absolute bottom-0 w-full bg-white/95 px-4 py-3 border-t border-neutral-100 translate-y-[calc(100%-36px)] transition-transform duration-300 ease-out group-hover:translate-y-0">
        
        {/* Baris Atas: Title & Tech Stack (Selalu Kelihatan di Awal) */}
        <div className="flex items-center justify-between h-[16px] mb-2">
          {/* Title */}
          <h4 className="heading-card text-black font-semibold">{title}</h4>

          {/* Tech Stack */}
          <div className="flex items-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="text-meta text-xs text-neutral-500">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Baris Bawah: Deskripsi (Muncul pas di-hover) */}
        {description && (
          <p className="text-sm text-neutral-600 mt-2 line-clamp-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {description}
          </p>
        )}
      </div>
    </CardWrapper>
  );
}