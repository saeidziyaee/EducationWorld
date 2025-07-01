"use client";

import { useState } from 'react';
import type { Article, Topic } from '@/lib/data';
import { articles as allArticles } from '@/lib/data';
import TopicSidebar from '@/components/topic-sidebar';
import MainContent from '@/components/main-content';

export type Tab = Article;

export default function Home() {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const sidebarItems: Topic[] = allArticles.map((article) => ({
    id: article.id,
    name: article.title,
  }));

  const handleSidebarItemClick = (item: Topic) => {
    const articleToOpen = allArticles.find(
      (article) => article.id === item.id
    );

    if (!articleToOpen) {
      return;
    }

    const isAlreadyOpen = openTabs.some((tab) => tab.id === articleToOpen.id);

    if (!isAlreadyOpen) {
      setOpenTabs((prevTabs) => [...prevTabs, articleToOpen]);
    }
    setActiveTabId(articleToOpen.id);
  };

  const handleCloseTab = (tabIdToClose: string) => {
    setOpenTabs(prevTabs => {
      const tabIndex = prevTabs.findIndex(tab => tab.id === tabIdToClose);
      if (tabIndex === -1) return prevTabs;

      const newTabs = prevTabs.filter(tab => tab.id !== tabIdToClose);
      
      // If the closed tab was active, set a new active tab
      if (activeTabId === tabIdToClose) {
        if (newTabs.length > 0) {
          // Activate the previous tab, or the first one if the closed one was the first
          const newActiveIndex = Math.max(0, tabIndex - 1);
          setActiveTabId(newTabs[newActiveIndex].id);
        } else {
          setActiveTabId(null);
        }
      }
      
      return newTabs;
    });
  };

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <TopicSidebar topics={sidebarItems} onTopicClick={handleSidebarItemClick} />
      </aside>
      <section className="lg:col-span-3">
        <MainContent 
          tabs={openTabs}
          activeTabId={activeTabId}
          onCloseTab={handleCloseTab}
          onTabClick={handleTabClick}
        />
      </section>
    </div>
  );
}
