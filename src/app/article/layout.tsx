import TopicSidebar from '@/components/topic-sidebar';
import { articles as allArticles } from '@/lib/data';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <TopicSidebar articles={allArticles} />
      </aside>
      <section className="lg:col-span-3">
        {children}
      </section>
    </div>
  );
}
