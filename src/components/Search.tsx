export const SearchBar = () => {
  return (
    <div class="relative flex items-center">
      <input
        type="text"
        name="search"
        placeholder="Search.."
        class="block w-full rounded-md border-primary-900 bg-primary-900 pr-12 shadow-sm focus:border-[#7E7BB7] focus:ring-[#7E7BB7] sm:text-sm"
      />
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd class="inline-flex items-center rounded border border-primary-700 px-2 font-sans text-sm font-medium text-gray-200">
          ⌘K
        </kbd>
      </div>
    </div>
  );
};
