
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { news, NewsItem } from "@/data/news";
import { format, parseISO } from "date-fns";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.tags && item.tags.some(tag => 
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  )
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcement':
        return 'bg-blue-100 text-blue-800';
      case 'event':
        return 'bg-green-100 text-green-800';
      case 'research':
        return 'bg-purple-100 text-purple-800';
      case 'award':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Layout>
      <div className="page-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">News & Announcements</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest department news and announcements.
          </p>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search news by title, content, or category"
            className="pl-10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map(item => (
              <Card key={item.id} className="overflow-hidden">
                <div className="md:flex">
                  {item.imageUrl && (
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className={`${item.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </Badge>
                        {item.tags && item.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        <span>{format(parseISO(item.date), 'MMMM d, yyyy')}</span>
                        <span className="mx-2">•</span>
                        <span>{item.author}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-lg mb-4">{item.summary}</p>
                      <p className="text-muted-foreground">
                        {item.content.substring(0, 200)}
                        {item.content.length > 200 ? '...' : ''}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center py-8 text-muted-foreground">No news items match your search.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
