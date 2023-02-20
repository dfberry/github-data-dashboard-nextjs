import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import DataTableRepos from "../../components/repos/table";
import { repos as reposDB } from "../../db/repos";

const Repo: NextPage<{ repos: IRepo[] }> = ({ repos }) => {
  return (
    <div>
      <Head>
        <title>Repos</title>
      </Head>

      <main>
        <h1>Repos</h1>

        <DataTableRepos data={repos}  />

        <p style={{ color: "#0070f3" }}>
          <Link href="/">Back Home</Link>
        </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const repos = await reposDB();

  return {
    props: {
      repos,
    },
  };
};

export default Repo;
