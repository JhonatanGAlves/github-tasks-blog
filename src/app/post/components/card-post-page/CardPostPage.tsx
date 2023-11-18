import Link from "next/link";

import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircleText,
  GithubLogo,
} from "@phosphor-icons/react";

import Info from "@/components/info/Info";

interface CardPostPageProps {
  postId: number;
}

export default function CardPostPage({ postId }: CardPostPageProps) {
  return (
    <div
      className={`py-8 px-10 flex items-center w-full gap-8 rounded-[0.625rem] bg-[--base-profile] relative`}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-5">
          <Link
            className="flex items-center gap-2 text-xs font-bold uppercase text-[--blue-link] border-b border-solid border-transparent hover:border-[--blue-link]"
            href={"/"}
          >
            <CaretLeft size={16} color={"var(--blue-link)"} />
            back
          </Link>

          <div className="border-b border-solid border-transparent hover:border-[--blue-link]">
            <Link
              className="flex items-center gap-2 text-xs font-bold uppercase text-[--blue-link]"
              href={"https://github.com/JhonatanGAlves"}
              target="_blank"
            >
              see on github
              <ArrowSquareOut size={16} color={"var(--blue-link)"} />
            </Link>
          </div>
        </div>
        <span className="text-2xl font-bold mb-2">
          JavaScript data types and data structures
        </span>
        <div className="flex gap-6">
          <Info
            icon={
              <GithubLogo size={16} color={"var(--base-label)"} weight="fill" />
            }
            text="JhonatanGAlves"
          />
          <Info
            icon={
              <Calendar size={16} color={"var(--base-label)"} weight="fill" />
            }
            text="1 day ago"
          />
          <Info
            icon={
              <ChatCircleText
                size={16}
                color={"var(--base-label)"}
                weight="fill"
              />
            }
            specificInfo="5"
            text="comments"
          />
        </div>
      </div>
    </div>
  );
}
