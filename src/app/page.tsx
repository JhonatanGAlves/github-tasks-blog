"use client";
import CardProfile from "@/components/cards/profile/CardProfile";
import SearchField from "@/components/search-field/SearchField";
import CardPost from "@/components/cards/publications/CardPost";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 -mt-[5.375rem] pb-[14.625rem]">
      <div className="w-full lg:w-[54rem]">
        <CardProfile />
        <SearchField posts={[]} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          <CardPost />
        </div>
      </div>
    </main>
  );
}
