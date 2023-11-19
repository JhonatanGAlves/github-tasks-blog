import { ReactNode } from "react";

import { useParams } from "next/navigation";

interface InfoProps {
  icon: ReactNode;
  text: string;
  specificInfo?: string | number;
}

export default function Info({ icon, text, specificInfo }: InfoProps) {
  const { id } = useParams();

  return (
    <div className="flex items-center gap-2">
      {icon}
      <span
        className={`text-base ${
          id ? "text-[--base-span]" : "text-[--base-subtitle]"
        }`}
      >
        {(specificInfo as number) >= 0 ? `${specificInfo} ${text}` : text}
      </span>
    </div>
  );
}
