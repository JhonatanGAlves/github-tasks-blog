"use client";
import { useEffect, useState } from "react";

import _ from "lodash";
import { Spinner } from "@phosphor-icons/react";

import CardProfile from "@/components/cards/profile/CardProfile";
import SearchField from "@/components/search-field/SearchField";
import CardPost from "@/components/cards/publications/CardPost";
import { getIssuesByParams } from "@/api/api";

export default function Home() {
  const [inputTxt, setInputTxt] = useState("");
  const [posts, setPosts] = useState<IssueByParams[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getIssueByDebounce = _.debounce(() => {
      getIssuesByParams(inputTxt, "JhonatanGAlves", "github-tasks-blog").then(
        (res) => {
          setPosts(res);
          setIsLoading(false);
        }
      );
    }, 1000);

    getIssueByDebounce();
  }, [inputTxt]);

  return (
    <main className="flex flex-col items-center px-6 -mt-[5.375rem] pb-[14.625rem]">
      <div className="w-full lg:w-[54rem]">
        <CardProfile />
        <SearchField
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
          posts={posts}
        />
        {posts.length > 0 ? (
          isLoading ? (
            <div className="flex gap-2 w-full h-[16.25rem] justify-center items-center">
              <Spinner className="animate-spin" size={16} />
              <span>Loading...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {posts.map((post, index) => (
                <CardPost
                  key={index}
                  title={post.title}
                  number={post.number}
                  created_at={post.created_at}
                  body={post.body}
                />
              ))}
            </div>
          )
        ) : (
          <div className="flex gap-2 w-full h-[16.25rem] justify-center items-center">
            <span>No posts were found.</span>
          </div>
        )}
      </div>
    </main>
  );
}
