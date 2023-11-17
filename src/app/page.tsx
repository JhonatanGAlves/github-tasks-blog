import CardProfile from "@/components/card-profile/CardProfile";
import SearchField from "@/components/search-field/SearchField";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen px-6 -mt-[5.375rem]">
      <div className="w-full lg:w-[54rem]">
        <CardProfile />
        <SearchField posts={[]} />
      </div>
    </main>
  );
}
