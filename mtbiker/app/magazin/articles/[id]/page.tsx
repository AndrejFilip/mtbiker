import { ArticleContainer } from "../../components/ArticleContainer";

export default async function Index({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id = params.id;
  return <ArticleContainer {...{ id }} />;
}
