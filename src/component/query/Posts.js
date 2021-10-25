import axios from "axios";

export const fetchPosts = async ({ queryKey: [, { limit }] }) =>
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
