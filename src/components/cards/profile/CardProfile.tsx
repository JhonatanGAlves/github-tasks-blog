"use client";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

import Info from "../../info/Info";

export default function CardProfile() {
  return (
    <div
      className={`py-8 px-10 flex items-center w-full gap-8 rounded-[0.625rem] bg-[--base-profile] relative`}
    >
      <Image
        className="w-[9.25rem] h-[9.25rem] rounded-lg"
        src={`https://avatars.githubusercontent.com/u/56327172?v=4`}
        alt="Image profile"
        width={148}
        height={148}
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold">Jhonatan Alves</span>
          <div className="hover:border-b border-solid border-[--blue-link]">
            <Link
              className="flex items-center gap-2 text-xs font-bold uppercase text-[--blue-link]"
              href={"https://github.com/JhonatanGAlves"}
              target="_blank"
            >
              github
              <ArrowSquareOut size={16} color={"var(--blue-link)"} />
            </Link>
          </div>
        </div>
        <p className="mb-6">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="flex gap-6">
          <Info
            icon={
              <GithubLogo size={16} color={"var(--base-label)"} weight="fill" />
            }
            text="JhonatanGAlves"
          />
          <Info
            icon={
              <Buildings size={16} color={"var(--base-label)"} weight="fill" />
            }
            text="Intelie by Viasat"
          />
          <Info
            icon={<Users size={16} color={"var(--base-label)"} weight="fill" />}
            specificInfo="32"
            text="Followers"
          />
        </div>
      </div>
    </div>
  );
}
