"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Spinner,
  Users,
} from "@phosphor-icons/react";

import Info from "../../info/Info";
import { getGithubUser } from "@/api/api";

export default function CardProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGithubUser("JhonatanGAlves")
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className={`py-8 px-10 flex items-center w-full gap-8 rounded-[0.625rem] bg-[--base-profile] relative`}
    >
      {!loading ? (
        <>
          <Image
            className="w-[9.25rem] h-[9.25rem] rounded-full"
            src={user?.avatar_url ?? ""}
            alt="Image profile"
            width={148}
            height={148}
          />
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold">{user?.name ?? "-"}</span>
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
            <p className="mb-6">{user?.bio ?? "-"}</p>
            <div className="flex gap-6">
              <Info
                icon={
                  <GithubLogo
                    size={16}
                    color={"var(--base-label)"}
                    weight="fill"
                  />
                }
                text={user?.name ?? "-"}
              />
              <Info
                icon={
                  <Buildings
                    size={16}
                    color={"var(--base-label)"}
                    weight="fill"
                  />
                }
                text={user?.company ?? "-"}
              />
              <Info
                icon={
                  <Users size={16} color={"var(--base-label)"} weight="fill" />
                }
                specificInfo={user?.followers}
                text="Followers"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-2 items-center">
          <Spinner className="animate-spin" size={16} />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}
