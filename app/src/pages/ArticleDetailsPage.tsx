type Props = {
  id: number;
  title: string;
  description: string;
};

export default function ArticleCard({ id, title, description }: Props) {
  return (
    <div data-testid={`article-card-${id}`}>
      <h2>{title}</h2>
      <p>{description}</p>

      <a
        href={`/blog/${id}`}
        data-testid={`article-link-${id}`}
      >
        Read More
      </a>
    </div>
  );
}