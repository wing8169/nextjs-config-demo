// import getConfig from "next/config";

// const config = getConfig();

// console.log("config", config);

// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

console.log("ServerComponent server config", process.env.ENV_VAR);
console.log("ServerComponent client config", process.env.NEXT_PUBLIC_ENV_VAR);
// console.log(
//   "ServerComponent server config file",
//   serverRuntimeConfig?.SERVER_RUNTIME_CONFIG
// );
// console.log(
//   "ServerComponent public config file",
//   publicRuntimeConfig?.PUBLIC_RUNTIME_CONFIG
// );

export const ServerComponentInsideClient = async ({
  text,
}: {
  text: string;
}) => {
  // const data = await fetch("http://localhost:3000/api", {
  //   cache: "no-store",
  // });
  // const dataStr = JSON.stringify(await data.json());

  //   console.log("Logging", serverRuntimeConfig?.SERVER_RUNTIME_CONFIG);
  //   console.log("Logging", publicRuntimeConfig?.PUBLIC_RUNTIME_CONFIG);

  //   const variable = process.env.ENV_VAR;

  return (
    <p className="text-white">
      Server Inside Client - {/* {dataStr} -  */}
      {process.env.ENV_VAR} - {process.env.NEXT_PUBLIC_ENV_VAR} - {text}
      {/* {serverRuntimeConfig?.SERVER_RUNTIME_CONFIG} */}
    </p>
  );
};
