import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import DataTableRepos from "../../components/repos/table";
import { repos as reposDB } from "../../db/repos";
import { touch } from "../../db/touch";

const Repo: NextPage<{ repos: IRepo[], timestamp: string, version:string, url:string }> = ({ repos, timestamp, version, url }) => {
  return (
    <div>
      <Head>
        <title>Repos</title>
      </Head>

      <main>
        <DataTableRepos data={repos}  />
        <p style={{ padding: 20 }}>
            Generated: <a style={{ color: "#0070f3"}} href={url}>{version} - { timestamp }</a>
        </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const repos = await reposDB();
  const { timestamp, version, url} = touch();

  return {
    props: {
      repos,
      timestamp,
      version,
      url
    },
  };
};

export default Repo;
