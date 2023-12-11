// import getConfig from "next/config";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request) {
  // const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  const data = {
    first: process.env.ENV_VAR,
    second: process.env.NEXT_PUBLIC_ENV_VAR,
    // third: serverRuntimeConfig.SERVER_RUNTIME_CONFIG,
    // forth: publicRuntimeConfig.PUBLIC_RUNTIME_CONFIG,
    time: new Date(),
  };
  console.log("data", data);

  return Response.json({ data });
}
