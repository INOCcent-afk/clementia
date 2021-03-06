import React, { FC } from "react";

import Meta from "../../components/Meta";
import Link from "next/link";

import styles from "../../styles/Ninjas.module.css";

type Props = {
  ninjas: NinjasInfo[];
};

type NinjasInfo = {
  id: number;
  name: string;
  username: string;
  website: string;
};

const index: FC<Props> = ({ ninjas }: Props) => {
  return (
    <>
      <Meta title="Vercel | Ninjas" />
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
