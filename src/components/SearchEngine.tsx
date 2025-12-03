'use client';

import { useState } from 'react';
import { Review } from '@/lib/data';
import ReviewGrid from './ReviewGrid';
import { Search } from 'lucide-react';

interface SearchEngineProps {
  initialReviews: Review[];
}

export default function SearchEngine({ initialReviews }: SearchEngineProps) {
  const [query, setQuery] = useState('');
  
  const filteredReviews = initialReviews.filter(review => 
    review.title.toLowerCase().includes(query.toLowerCase()) || 
    review.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
    review.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="搜索标题、作者或标签..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-void border-2 border-neutral-700 p-4 pl-12 text-lg font-mono text-signal placeholder-neutral-700 focus:outline-none focus:border-signal transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-700 w-6 h-6" />
        
        <div className="absolute -bottom-8 right-0 font-mono text-xs text-concrete">
          已加载 {filteredReviews.length} 条档案
        </div>
      </div>

      {filteredReviews.length > 0 ? (
        <ReviewGrid reviews={filteredReviews} />
      ) : (
        <div className="text-center py-20 border border-dashed border-neutral-800">
          <p className="text-concrete font-mono">虚空中未发现相关记录。</p>
        </div>
      )}
    </div>
  );
}