const Article = (props) => {
    return (
        <div className="">
            <div className="my-5">
                <h3 className="text-2xl font-semibold">{props.title}</h3>
                <p className="">{props.tags.join(", ")}</p>
                <p className="text-sm">{props.date}</p>
            </div>
        </div>
    );
};

export default Article;
