import { useState, useEffect } from "react";
import type { ProjectCategory } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { ProjectCard } from "./ui/ProjectCard";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type WorkSectionProps = {
  data: ProjectCategory[];
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function WorkSection({
  data,
  onExpand,
  isExpanded = false,
}: WorkSectionProps) {
  // State untuk menyimpan index project yang terpilih acak di tampilan bento kecil
  const [randomIndices, setRandomIndices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Jalankan pengacakan hanya saat pertama kali halaman dibuka di browser (Client-side)
    if (data) {
      const newIndices: { [key: string]: number } = {};
      data.forEach((group) => {
        if (group.projects && group.projects.length > 0) {
          // Ambil index acak dari total jumlah project yang tersedia
          newIndices[group.category] = Math.floor(Math.random() * group.projects.length);
        }
      });
      setRandomIndices(newIndices);
    }
  }, [data]);

  return (
    // FIX: overflow-hidden diubah menjadi overflow-visible saat EXPAND agar halaman bisa di-scroll bebas ke bawah
    <div className={`relative w-full ${isExpanded ? "h-auto overflow-visible" : "h-full overflow-hidden"}`}>
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          Work
        </SectionHeading_Clickable>
      </div>
      {isExpanded && <CloseButton onClick={onExpand} />}
      
      {data?.map((group) => {
        // LOGIKA DINAMIS:
        // 1. Kalau sedang EXPAND -> Tampilkan semua project (seperti biasa).
        // 2. Kalau SEDANG KECIL (Tampilan awal) -> Ambil 1 project acak berdasarkan state di atas.
        let projectsToShow = group.projects;
        
        if (!isExpanded) {
          const randomIndex = randomIndices[group.category] ?? 0;
          projectsToShow = group.projects.slice(randomIndex, randomIndex + 1);
        }

        return (
          <div key={group.category} className="mb-4 text-xl">
            {isExpanded && <p className="mt-2 text-meta">{group.category}</p>}
            <div
              className={`mt-4 ${isExpanded ? "grid grid-cols-2 gap-6" : "space-y-4"}`}
            >
              {projectsToShow.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  image={project.image}
                  techStack={project.techStack}
                  href={project.href}
                  description={project.decs} // <-- Mengirim data deskripsi ke Card
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}