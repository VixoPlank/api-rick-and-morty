import CardDetails from "@/components/card/CardDetails";

const Page = ({ params: { characterId } }) => {
  return <CardDetails characterId={characterId} />;
};

export default Page;
