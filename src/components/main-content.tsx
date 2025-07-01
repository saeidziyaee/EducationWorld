'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Tab } from '@/app/page';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';

interface MainContentProps {
  tabs: Tab[];
  activeTabId: string | null;
  onCloseTab: (tabId: string) => void;
  onTabClick: (tabId: string) => void;
}

const MainContent = ({ tabs, activeTabId, onCloseTab, onTabClick }: MainContentProps) => {
  if (tabs.length === 0) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px] border-2 border-dashed rounded-lg">
        <p className="text-muted-foreground">برای مشاهده مقاله، یک موضوع را از نوار کناری انتخاب کنید.</p>
      </div>
    );
  }

  return (
    <Tabs value={activeTabId ?? ''} onValueChange={onTabClick} className="w-full">
      <TabsList className="grid w-full grid-cols-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="relative pr-8">
            <span>{tab.title}</span>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(tab.id);
              }}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">بستن تب</span>
            </Button>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">{tab.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image 
                    src={`https://placehold.co/800x400.png`}
                    alt={tab.title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-6"
                    data-ai-hint="article image"
                />
              <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: tab.content }}></div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MainContent;
