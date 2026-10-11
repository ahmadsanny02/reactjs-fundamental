import { useEffect, useState } from "react";
import useCounterStore from "../../../stores/CounterStore";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { count, increment, decrement } = useCounterStore();

  // const [menu, setMenu] = useState([])
  // const [error, setError] = useState("")

  // useEffect(() => {
  //   fetch("https://wpu-cafe.vercel.app/api/menu")
  //     .then((response) => response.json)
  //     .then((result) => {
  //       setMenu(result.data)
  //     }).catch((error) => {
  //       setError(error.error)
  //     })
  // }, [])

  const { data, isLoading } = useQuery({
    queryKey: ["dataMenu"],
    queryFn: async () => {
      return await fetch("https://wpu-cafe.vercel.app/api/menu")
        .then((response) => response.json())
    }
  })

  console.log(data)

  return (
    <main className="">
      <h1 className="">Home Page</h1>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>

      <div className="">
        {isLoading ? "Loading" : ""}
        {data?.data.map((item) => (
          <img key={item.id} src={item.image_url} alt={item.name} style={{ width: "200px" }} />
        ))}
      </div>
    </main>
  );
};

export default Home;
