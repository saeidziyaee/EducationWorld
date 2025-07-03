'use client';

import type { Article } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

interface TopicSidebarProps {
  articles: Article[];
}

const TopicSidebar = ({ articles }: TopicSidebarProps) => {
  const params = useParams();
  const activeSlug = typeof params.slug === 'string' ? params.slug : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>مقالات</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {articles.map((article) => (
            <Button
              key={article.id}
              variant="ghost"
              className={cn(
                'h-auto justify-start whitespace-normal text-base text-right',
                activeSlug === article.slug && 'bg-accent text-accent-foreground'
              )}
              asChild
            >
              <Link href={`/article/${article.slug}`}>
                <FileText className="h-5 w-5 flex-shrink-0" />
                {article.title}
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicSidebar;
