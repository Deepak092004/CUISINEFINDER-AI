export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Search cuisines, restaurants near you..."
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="bg-primary text-white px-6 rounded-lg hover:opacity-90"
      >
        Search
      </button>
    </div>
  );
}
