import { ArticleContainer } from "../../components/ArticleContainer";

export default async function Index({
  params: { id },
}: Readonly<{
  params: { id: number };
}>) {
  return <ArticleContainer {...{ id }} />;
}
