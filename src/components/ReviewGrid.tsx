'use client';

import { motion } from 'framer-motion';
import { Review } from '@/lib/data';
import { Star, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// 🔑 关键修复：明确告诉组件，我要接收 reviews 和 isFeatured
interface ReviewGridProps {
  reviews: Review[];
  isFeatured?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// 🔑 关键修复：把 props 放入函数参数
export default function ReviewGrid({ reviews, isFeatured = false }: ReviewGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]"
    >
      {reviews.map((review, index) => {
        const isWide = isFeatured && (index % 4 === 0 || index % 4 === 3);
        
        return (
          <motion.div
            key={review.id}
            variants={item}
            className={`${isWide ? 'lg:col-span-2' : 'col-span-1'}`}
          >
            <Link href={`/review/${review.id}`} className="block h-full">
              <div className={`group relative h-full brutalist-card p-6 flex flex-col justify-between ${
                isWide ? 'bg-void-light' : ''
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 flex-wrap">
                    {review.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase border border-neutral-700 px-1 text-concrete group-hover:border-signal group-hover:text-signal transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-signal">
                    <Star className="w-3 h-3 fill-signal" />
                    <span className="font-mono text-sm font-bold">{review.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className={`font-bold mb-2 text-paper group-hover:text-signal transition-colors ${
                    isWide ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    {review.title}
                  </h3>
                  <p className="text-concrete text-sm line-clamp-3 font-mono">
                    {review.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex justify-between items-center border-t border-neutral-800 pt-4">
                  <span className="text-xs text-neutral-500 uppercase font-bold tracking-widest">
                    {review.author}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-blood group-hover:rotate-45 transition-all" />
                </div>
                
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-signal transition-all" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}