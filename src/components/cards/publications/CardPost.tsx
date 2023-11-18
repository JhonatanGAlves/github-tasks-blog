export default function CardPost() {
  return (
    <div className="flex flex-col gap-5 h-[16.25rem] p-8 bg-[--base-post] rounded-[0.625rem]">
      <div className="flex justify-between items-start">
        <h2 className="max-w-[17.6875rem] font-bold text-xl text-[--base-title]">
          JavaScript data types and data structures
        </h2>
        <span className="text-sm text-[--base-span]">1 day ago</span>
      </div>

      <p className="text-ellipsis overflow-hidden">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = ; // foo is now a string foo
        = true; // foo is now a boolean
      </p>
    </div>
  );
}
