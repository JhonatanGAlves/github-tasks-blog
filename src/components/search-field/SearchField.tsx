"use client";

import { ChangeEvent } from "react";

interface SearchFieldProps {
  inputTxt: string;
  setInputTxt: (inputTxt: string) => void;
  posts: IssueByParams[];
}

export default function SearchField({
  posts,
  inputTxt,
  setInputTxt,
}: SearchFieldProps) {
  return (
    <div className="flex flex-col gap-3 w-full mt-[4.5rem]">
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg text-[--base-subtitle]">Posts</span>
        <span className="font-normal text-sm text-[--base-span]">
          {posts.length} Posts
        </span>
      </div>

      <input
        className="outline-none px-4 py-3 font-normal text-xs placeholder:text-[--base-label] bg-[--base-input] border border-solid border-[--base-border] focus:border-[--blue-link] transition-all rounded-md"
        type="search"
        value={inputTxt}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          e.stopPropagation();

          setInputTxt(e.target.value);
        }}
        placeholder="Search content"
      />
    </div>
  );
}
