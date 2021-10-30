export interface Article {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArticlesListProps {
  articles: Array<Article>;
}

export function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <>
      {articles.map((article) => {
        return <></>;
      })}
    </>
  );
}
