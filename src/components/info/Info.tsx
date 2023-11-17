import { ReactNode } from "react";

interface InfoProps {
  icon: ReactNode;
  text: string;
  specificInfo?: string | number;
}

export default function Info({ icon, text, specificInfo }: InfoProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-base text-[--base-subtitle]">
        {specificInfo ? `${specificInfo} ${text}` : text}
      </span>
    </div>
  );
}
