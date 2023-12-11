import { ClientComponent } from "./components/ClientComponent";
import { ServerComponent } from "./components/ServerComponent";
import { ServerComponentInsideClient } from "./components/ServerComponentInsideClient";

console.log(process.env.NEXT_PUBLIC_ENV_VAR);
console.log(process.env.ENV_VAR);

export default function Home() {
  return (
    <main className="w-screen h-screen items-center justify-center bg-black">
      {/* <h1 className="text-white text-4xl">{process.env.NEXT_PUBLIC_ENV_VAR}</h1>
      <h1 className="text-white text-4xl">{process.env.ENV_VAR}</h1> */}
      <ClientComponent />
      {/* <ServerComponent /> */}
      {/* <ClientComponent>
        <ServerComponentInsideClient text="Hi there" />
      </ClientComponent> */}
    </main>
  );
}
