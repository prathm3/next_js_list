import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((list) => {
    return {
      params: { id: list.id.toString() },
    };
  });
  return {
    paths: paths, //paths
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data);
  return {
    props: { list: data },
  };
};

function Details({ list }) {
  return (
    <div>
      <h1>{list.name}</h1>
      <p>{list.email}</p>
      <p>{list.website}</p>
      <p>{list.address.city}</p>
    </div>
  );
}

export default Details;
