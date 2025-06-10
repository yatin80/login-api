import React from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom';

const api = "https://jsonplaceholder.typicode.com/posts";

// export const postLoader = async () => {
//     const res = await fetch(api);
//     const response = await res.json();
   
//     return response;
// }

export default function Post() {
    const result = useLoaderData();
    const navigation = useNavigation();
  
    if (navigation.state === "loading") {
      return <h1>Loading!</h1>;
    }

  return (
    <div>
      <h1>Post</h1>
      <div>
      {result.map((res) => (
        <div key={res.id}>
          <Link to={`/posts/${res.id}`}>
            <h1>{res.title}</h1>
          </Link>
          <p>{res.body}</p>
        </div>
      ))}
    </div>
    </div>
  )
}


export const dataLoader = async () => {
    const res = await fetch(api);
    const jsonResult = await res.json();
  
    return jsonResult;
  };