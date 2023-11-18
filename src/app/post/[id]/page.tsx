"use client";
import { useParams } from "next/navigation";

import CardPostPage from "../components/card-post-page/CardPostPage";

export default function Post() {
  const { id } = useParams();

  return (
    <main className="flex flex-col items-center px-6 -mt-[5.375rem] pb-[14.625rem]">
      <div className="w-full lg:w-[54rem]">
        <CardPostPage postId={Number(id)} />
        <div className="px-8 py-10">
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </div>
      </div>
    </main>
  );
}
