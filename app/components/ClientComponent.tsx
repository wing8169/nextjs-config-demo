"use client";

import { PropsWithChildren } from "react";
import { ServerComponentInsideClient } from "./ServerComponentInsideClient";

import getConfig from "next/config";

console.log("ClientComponent server config", process.env.ENV_VAR);
console.log("ClientComponent client config", process.env.NEXT_PUBLIC_ENV_VAR);
// console.log(
//   "ClientComponent server config file",
//   serverRuntimeConfig?.SERVER_RUNTIME_CONFIG
// );
// console.log(
//   "ClientComponent public config file",
//   publicRuntimeConfig?.PUBLIC_RUNTIME_CONFIG
// );

export const ClientComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const config = getConfig();
  console.log("config", config);

  return (
    <>
      {/* <p className="text-white">{process.env.ENV_VAR}</p> */}
      {/* <p className="text-white">{process.env.NEXT_PUBLIC_ENV_VAR}</p> */}
      {children}
    </>
  );
};
