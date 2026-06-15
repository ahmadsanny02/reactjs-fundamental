import { useState } from "react"

const Search = (props) => {
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value)
        props.onChangeSearch(e.target.value)
    }


    return (
        <div className="my-5">
            <form className="flex w-fit">
                <input
                    className="border px-2 py-1 rounded-lg"
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Data"
                />
            </form>

            <p className="">{props.totalPosts} ditemukan pencarian dengan kata: {search}</p>
        </div>
    )
}

export default Search