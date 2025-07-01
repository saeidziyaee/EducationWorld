'use client';

import type { Topic } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TopicSidebarProps {
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
}

const TopicSidebar = ({ topics, onTopicClick }: TopicSidebarProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>مقالات</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {topics.map((topic) => (
            <Button
              key={topic.id}
              variant="ghost"
              className="h-auto justify-start whitespace-normal text-base text-right"
              onClick={() => onTopicClick(topic)}
            >
              {topic.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicSidebar;
