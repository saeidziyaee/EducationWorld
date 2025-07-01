import { notFound } from 'next/navigation';
import { articles } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'مقاله یافت نشد',
    }
  }

  const description = article.content.replace(/<[^>]*>?/gm, '').substring(0, 160);

  return {
    title: article.title,
    description: `${description}...`,
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const slug = decodeURIComponent(params.slug);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
          <Image 
              src={`https://placehold.co/800x400.png`}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
              data-ai-hint="article image"
          />
        <div className="prose prose-lg max-w-none dark:prose-invert break-words" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </CardContent>
    </Card>
  );
}
