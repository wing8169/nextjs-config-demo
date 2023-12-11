import { GetServerSideProps, InferGetServerSidePropsType } from "next";

console.log("ClientComponent server config", process.env.ENV_VAR);
console.log("ClientComponent client config", process.env.NEXT_PUBLIC_ENV_VAR);

export function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //   const variable = process.env.ENV_VAR;

  return <p className="text-white">{JSON.stringify(data)}</p>;
}

export const getServerSideProps = (async (context) => {
  return {
    props: {
      data: {
        first: process.env.ENV_VAR,
        second: process.env.NEXT_PUBLIC_ENV_VAR,
        time: new Date(),
      },
    },
  };
}) satisfies GetServerSideProps<{
  data: any;
}>;
