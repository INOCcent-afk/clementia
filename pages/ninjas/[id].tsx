import { useRouter } from "next/router";
import React from "react";

const Details = ({ ninja }) => {
  const router = useRouter();

  return (
    <div>
      <a onClick={() => router.back()}>Go Back</a>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
