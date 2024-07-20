import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  noStore();

  return process.env["DYNAMIC_ENV_VAR"];
}

export default function Home() {
  const data = getData();

  return <div>DYNAMIC_ENV_VAR is dynamic: {data}</div>;
}
