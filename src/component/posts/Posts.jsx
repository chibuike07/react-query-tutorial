import { useState } from "react";
import { useQuery } from "react-query";
import { fetchPosts } from "../query/Posts";

const Post = () => {
  const [data, setData] = useState([]);
  const [condition, setcondition] = useState(true);
  const [conditionTwo, setconditionTwo] = useState("fetch");
  console.log(`conditionTwo`, conditionTwo);

  const { isLoading, isFetching, refetch } = useQuery(
    ["fetchPost", { limit: 8 }],

    fetchPosts,
    {
      enabled: condition,

      notifyOnChangeProps: [condition, conditionTwo],

      retry: 1,
      retryDelay: 3000,
      refetchOnWindowFocus: false,

      onError: (error) => {
        console.log(`error?.response?.data`, error?.response?.data);
      },

      onSuccess: (data) => {
        setData(() => data);
        //   do something else
      },
    }
  );

  if (isLoading) return <p>data is loading, please wait...</p>;
  if (isFetching) return <p>fetching new data, please wait...</p>;
  const dataResult =
    data &&
    data.map(({ body, title, id }) => (
      <section key={id} className="m-3 card">
        <h2 className="cart-title">
          {title} {id}
        </h2>
        <p className="card-body">{body}</p>
      </section>
    ));

  return (
    <div className="container-fluid">
      {dataResult}
      <button onClick={() => setconditionTwo("flex")}>click</button>
    </div>
  );
};

export default Post;
