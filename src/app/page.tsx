import TopicSidebar from '@/components/topic-sidebar';
import { articles as allArticles } from '@/lib/data';
import { HeroSlider } from '@/components/hero-slider';
import { ArticleGrid } from '@/components/article-grid';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSlider />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <TopicSidebar articles={allArticles} />
        </aside>
        <main className="lg:col-span-3">
            <ArticleGrid articles={allArticles} />
        </main>
      </div>
    </div>
  );
}
