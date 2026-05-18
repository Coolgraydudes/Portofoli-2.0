import type { ContactEntry } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";

type ContactSectionProps = {
  data: ContactEntry[];
};

export function ContactSection({ data }: ContactSectionProps) {
  // Daftar kontak manual kamu yang sudah dirapikan link-nya
  const myContacts = [
    { value: "izzamnuddinalqassam@gmail.com", href: "mailto:izzamnuddinalqassam@gmail.com" },
    { value: "GitHub", href: "https://github.com/Coolgraydudes" },
    { value: "LinkedIn", href: "https://www.linkedin.com/in/izzamnuddin-al-qassam-80958337b/" }, // Spasi diganti strip biar link valid
    { value: "Instagram", href: "https://instagram.com/coolgreydude" }, // Nanti ganti username IG-mu di sini ya
  ];

  return (
    <div className="h-full">
      <h3 className="heading-section-sm">Contact Me</h3>
      
      {/* flex flex-wrap membuat item berjejer ke samping */}
      <div className="mt-4 flex flex-wrap gap-y-3">
        {myContacts.map((entry, index) => (
          <a
            key={index}
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            // w-1/2 membuat setiap item memakan 50% lebar (jadi pas 2 item per baris)
            className="w-1/2 flex items-baseline gap-2 text-gray-600 hover:text-black transition-colors text-sm sm:text-base pr-2"
          >
            {/* break-all khusus buat email panjang agar tidak meluber keluar kotak */}
            <span className="break-all font-medium">{entry.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}