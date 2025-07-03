import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function ArticleGrid({ articles }: { articles: Article[] }) {
    return (
        <div>
            <h2 className="text-3xl font-bold font-headline mb-6">آخرین مقالات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                    <Card key={article.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                        <Link href={`/article/${article.slug}`} className="block group">
                            <div className="overflow-hidden rounded-t-lg">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    data-ai-hint={article.imageHint}
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col flex-grow p-6">
                            <CardHeader className="p-0 pb-4">
                                <CardTitle className="text-xl font-headline leading-tight">
                                    <Link href={`/article/${article.slug}`} className="hover:text-primary transition-colors inline-flex items-center gap-2">
                                        <FileText className="h-5 w-5 flex-shrink-0" />
                                        {article.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow">
                                <p className="text-sm text-muted-foreground mb-4">
                                    {article.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                                </p>
                            </CardContent>
                            <div className="mt-auto">
                                <Button asChild variant="link" className="p-0 h-auto font-semibold">
                                    <Link href={`/article/${article.slug}`}>
                                        ادامه مطلب &larr;
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
