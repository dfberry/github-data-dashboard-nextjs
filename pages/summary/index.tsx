import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { ISummary } from "../../definitions/summary";
import { summary } from "../../ssg/summary";

const Summary: NextPage<ISummary> = ({ summaryText, raw }) => {
  return (
    <div>
      <Head>
        <title>Summary</title>
      </Head>

      <main>
        <p style={{padding: 20}}>{summaryText}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { summaryText, raw } = await summary();

  return {
    props: {
      summaryText,
      raw,
    },
  };
};

export default Summary;
