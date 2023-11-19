"use client";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import CardPostPage from "../components/card-post-page/CardPostPage";
import { getIssueById } from "@/api/api";

export default function Post() {
  const [post, setPost] = useState<Issue | null>(null);
  const { id } = useParams();

  useEffect(() => {
    getIssueById("JhonatanGAlves", "github-tasks-blog", Number(id)).then(
      (issue) => setPost(issue)
    );
  }, []);

  return (
    <main className="flex flex-col items-center px-6 -mt-[5.375rem] pb-[14.625rem]">
      <div className="w-full lg:w-[54rem]">
        <CardPostPage
          html_url={post?.html_url}
          title={post?.title}
          user={post?.user}
          created_at={post?.created_at}
          comments={post?.comments}
        />
        <div className="px-8 py-10">
          <p>{post?.body}</p>
        </div>
      </div>
    </main>
  );
}
