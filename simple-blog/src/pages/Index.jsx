import { useState } from "react";
import Article from "../components/Article/Article";
import Search from "../components/Search/Search";
import postsData from "./../../posts.json";

const HomePage = () => {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);

    const onChangeSearch = (value) => {
        const filteredData = postsData.filter(
            (item) => item.title.includes(value) || item.tags.includes(value),
        );

        setPosts(filteredData);
        setTotalPosts(filteredData.length);
    };
    return (
        <div className="m-10">
            <h1 className="text-blue-500 text-7xl font-bold">Simple Blog</h1>

            <Search onChangeSearch={onChangeSearch} totalPosts={totalPosts} />

            {posts.map((item, index) => (
                <Article {...item} key={index} />
            ))}
        </div>
    );
};

export default HomePage;
