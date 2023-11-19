import moment from "moment";
import Link from "next/link";

export default function CardPost({
  title,
  number,
  created_at,
  body,
}: IssueByParams) {
  return (
    <div className="flex flex-col gap-5 h-[16.25rem] p-8 bg-[--base-post] rounded-[0.625rem]">
      <div className="flex justify-between items-start">
        <Link href={`/post/${number}`}>
          <h2 className="max-w-[17.6875rem] font-bold text-xl text-[--base-title] hover:underline transition-all">
            {title}
          </h2>
        </Link>
        <span className="text-sm text-[--base-span] mt-[3px]">
          {moment(created_at).startOf("day").fromNow()}
        </span>
      </div>

      <p className="text-ellipsis overflow-hidden">{body}</p>
    </div>
  );
}
