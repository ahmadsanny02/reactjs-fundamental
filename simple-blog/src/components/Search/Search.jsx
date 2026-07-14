import { useState } from "react";

const Search = (props) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault()
        props.onChangeSearch(search);
    };

    return (
        <div className="my-5">
            <form className="flex gap-2 w-fit">
                <input
                    className="border px-2 py-1 rounded-lg"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Data"
                />

                <button
                    className="bg-slate-700 text-white px-2 py-1 rounded-lg"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </form>

            <p className="">
                {props.totalPosts} ditemukan pencarian dengan kata: {search}
            </p>
        </div>
    );
};

export default Search;
