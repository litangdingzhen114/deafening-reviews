'use client';

import { useState } from 'react';
import { Review } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft, Star, Calendar, User, Moon, Sun } from 'lucide-react';

interface ReviewReaderProps {
  review: Review;
}

export default function ReviewReader({ review }: ReviewReaderProps) {
  // 昼夜模式状态：false = 夜间(默认), true = 日间
  const [isDayMode, setIsDayMode] = useState(false);

  return (
    // 最外层容器：控制背景色和文字色的过渡
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${
      isDayMode ? 'bg-paper text-ink' : 'bg-void text-paper'
    }`}>
      {/* 悬浮切换按钮 */}
      <div className={`fixed bottom-8 right-8 z-50 flex gap-4 p-2 rounded-full transition-colors ${
        isDayMode ? 'bg-white shadow-lg shadow-black/10' : 'bg-void-light border border-neutral-800'
      }`}>
        <button 
          onClick={() => setIsDayMode(!isDayMode)}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDayMode 
              ? 'bg-ink text-white hover:bg-neutral-800 rotate-0' 
              : 'bg-signal text-void hover:bg-white rotate-180'
          }`}
          title="切换阅读模式"
        >
          {isDayMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        {/* 返回按钮 */}
        <Link 
          href="/archive"
          className={`inline-flex items-center gap-2 mb-8 transition-colors font-mono text-sm ${
            isDayMode ? 'text-neutral-600 hover:text-blood' : 'text-concrete hover:text-signal'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          返回影评库
        </Link>

        {/* 文章头部 */}
        <header className={`mb-12 border-b pb-8 transition-colors ${
          isDayMode ? 'border-neutral-300' : 'border-neutral-800'
        }`}>
          <div className="flex flex-wrap gap-2 mb-4">
            {review.tags.map(tag => (
              <span key={tag} className={`px-2 py-1 text-xs font-mono uppercase border transition-colors ${
                isDayMode 
                  ? 'bg-white border-neutral-300 text-neutral-600' 
                  : 'bg-void-light border-neutral-700 text-concrete'
              }`}>
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className={`text-3xl md:text-5xl font-black mb-6 leading-tight transition-colors ${
            isDayMode ? 'text-ink' : 'text-paper'
          }`}>
            {review.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-6 text-sm font-mono transition-colors ${
            isDayMode ? 'text-neutral-600' : 'text-concrete'
          }`}>
            <div className="flex items-center gap-2">
              <User className={`w-4 h-4 ${isDayMode ? 'text-blood' : 'text-signal'}`} />
              <span className="uppercase tracking-widest">{review.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{review.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className={`w-4 h-4 ${isDayMode ? 'fill-blood text-blood' : 'fill-signal text-signal'}`} />
              <span className="font-bold text-lg">{review.rating}</span>
            </div>
          </div>
        </header>

        {/* 文章内容 */}
        <article className={`prose prose-lg max-w-none leading-relaxed text-justify whitespace-pre-line transition-colors duration-500 ${
          isDayMode ? 'text-neutral-800' : 'text-neutral-300'
        }`}>
          {review.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </article>

        {/* 彩蛋链接: 只有当 review.downloadUrl 存在时才显示 */}
        {review.downloadUrl && (
          <div className="mt-12 mb-8 flex flex-col items-center">
            <div className={`p-1 rounded-xl bg-gradient-to-r from-signal via-blood to-signal animate-shimmer bg-[length:200%_auto] shadow-lg ${
              isDayMode ? 'shadow-blood/20' : 'shadow-signal/20'
            }`}>
              <a 
                href={review.downloadUrl}
                download
                className={`block px-8 py-4 rounded-lg font-black text-2xl md:text-4xl transition-all active:scale-95 ${
                  isDayMode ? 'bg-white text-ink hover:bg-neutral-50' : 'bg-void text-paper hover:bg-void-light'
                }`}
              >
                🪄 神奇妙妙工具
              </a>
            </div>
            <p className={`mt-4 text-xs font-mono uppercase tracking-widest opacity-50 ${
              isDayMode ? 'text-neutral-500' : 'text-concrete'
            }`}>
              [ 发现隐藏彩蛋 ]
            </p>
          </div>
        )}

        {/* 底部导航 */}
        <div className={`mt-16 pt-8 border-t flex justify-between transition-colors ${
          isDayMode ? 'border-neutral-300' : 'border-neutral-800'
        }`}>
           <Link href="/archive" className={`px-6 py-3 text-sm font-bold border transition-colors ${
             isDayMode 
               ? 'border-neutral-300 text-ink hover:bg-neutral-100 hover:border-blood hover:text-blood' 
               : 'border-neutral-700 bg-void-light text-paper hover:border-signal hover:text-signal'
           }`}>
             浏览更多影评
           </Link>
        </div>
      </div>
    </div>
  );
}