import { ANALYSIS } from "../page";
import CheckIQ from "./check-iq";
import FallBack from "./fallback";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function SingleAnalysis({ params }: Params) {
  const id = (await params).id;
  console.log(id);

  const isId = ANALYSIS.tools.find((tool) => tool.slug === id);

  if (!isId) {
    return <h2>Tool Not found</h2>;
  }

  switch (id) {
    case "check-iq":
      return <CheckIQ />;
    default:
      return <FallBack id={id} />;
  }
}
