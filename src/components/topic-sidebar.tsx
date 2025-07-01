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
        <CardTitle>موضوعات</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {topics.map((topic) => (
            <Button
              key={topic.id}
              variant="ghost"
              className="justify-start text-base"
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
