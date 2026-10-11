import { useParams } from "react-router-dom";

const Menu = () => {
    const { id } = useParams();

    return (
        <main className="">
            <h1 className="">Menu page</h1>
            <p className="">{id}</p>
        </main>
    );
};

export default Menu;
