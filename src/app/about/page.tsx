'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowDown, VolumeX, Fingerprint, Scale } from 'lucide-react';

function ParallaxSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    // 修改点：移动端取消 min-h-screen 强制高度，避免内容被截断，改为 py-16 增加内边距
    <section className={`relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0 ${className}`}>
      {children}
    </section>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // 移动端禁用强烈的文字缩放，防止排版跳动
  const scaleText = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

  return (
    <div ref={containerRef} className="bg-void text-paper relative w-full overflow-x-hidden">
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <ParallaxSection className="z-10 border-b border-neutral-900 px-4">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }} 
          className="text-center relative z-20 w-full"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4 inline-block p-3 md:p-4 border-2 border-signal rounded-full"
          >
            <VolumeX className="w-10 h-10 md:w-12 md:h-12 text-signal" />
          </motion.div>
          
          {/* 响应式字体优化：手机端使用更紧凑的 leading 和 break-words */}
          <h1 className="text-[12vw] md:text-9xl font-black tracking-tighter uppercase text-paper leading-[0.9] 'break-words">
            DEAFEN<span className="text-transparent text-stroke">ING</span>
          </h1>
          
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-widest text-signal mt-4">
            震耳欲聋
          </h2>
          <p className="mt-6 md:mt-8 text-xs md:text-xl font-mono text-concrete tracking-[0.3em] md:tracking-[0.5em]">
            2025 · 犯罪 · 剧情 · 现实主义
          </p>
        </motion.div>
        
        <div className="absolute inset-0 z-0 opacity-20 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-void to-void" />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-concrete"
        >
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
        </motion.div>
      </ParallaxSection>

      {/* --- 2. STORY SECTION --- */}
      <section className="bg-void-light z-20 py-16 md:py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            style={{ scale: scaleText, opacity: scaleText }}
            className="relative order-2 md:order-1"
          >
            <div className="hidden md:block absolute -top-10 -left-10 text-9xl font-black text-neutral-800 select-none -z-10">01</div>
            <h3 className="text-3xl md:text-4xl font-bold text-signal mb-6">无声世界的<br/>惊雷与救赎</h3>
            <p className="text-sm md:text-lg text-neutral-400 leading-relaxed text-justify">
              普通人听见的是声音，他们听见的是生存的轰鸣。
              <br/><br/>
              电影讲述了出身聋人家庭的“灰度律师”李淇（檀健次 饰），在名利场中迷失后，意外卷入一起针对听障群体的巨额诈骗案。面对同类的绝望与资本的冷血，他必须在自我保全与良知觉醒之间做出抉择。
            </p>
          </motion.div>
          
          {/* 移动端高度适配 */}
          <div className="order-1 md:order-2 relative 'h-[240px] md:h-[400px] w-full bg-neutral-900 border border-neutral-800 overflow-hidden group">
            <div className="absolute inset-0 'bg-gradient-to-br from-neutral-800 to-black opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
               <span className="text-neutral-600 font-mono text-xs md:text-sm border border-neutral-600 px-4 py-1">
                 剧照：李淇在法庭的沉默时刻
               </span>
            </div>
            <div className="absolute top-4 right-4 w-12 h-1 bg-signal" />
          </div>
        </div>
      </section>

      {/* --- 3. CHARACTER SECTION --- */}
      <section className="py-16 md:py-32 bg-void relative z-20 overflow-hidden border-t border-neutral-900 px-6">
        <div className="container mx-auto">
          <div className="mb-10 md:mb-20 text-center md:text-left">
            <span className="text-signal font-mono text-[10px] md:text-xs tracking-widest uppercase border border-signal px-2 py-1">Cast & Crew</span>
            <h3 className="text-3xl md:text-5xl font-black text-paper mt-4 md:mt-6">核心 <span className="text-transparent text-stroke">人物</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-void-light border border-neutral-800 p-6 hover:border-signal transition-colors duration-300"
            >
              <div className="mb-4 p-2 bg-neutral-900 w-fit rounded-full">
                <Scale className="w-6 h-6 text-paper" />
              </div>
              <h4 className="text-xl font-bold text-paper mb-1">李淇</h4>
              <p className="text-xs font-mono text-blood mb-3">檀健次 饰</p>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                游走在灰色地带的律师。作为CODA（聋人子女），他既不完全属于有声世界，也不完全属于无声世界。
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-void-light border border-neutral-800 p-6 hover:border-blood transition-colors duration-300"
            >
              <div className="mb-4 p-2 bg-neutral-900 w-fit rounded-full">
                <Fingerprint className="w-6 h-6 text-paper" />
              </div>
              <h4 className="text-xl font-bold text-paper mb-1">受害者群体</h4>
              <p className="text-xs font-mono text-blood mb-3">群像演绎</p>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                他们被骗走的不仅仅是钱财，更是对这个世界的信任。他们的手语是无声的咆哮。
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-void-light border border-neutral-800 p-6 hover:border-white transition-colors duration-300"
            >
              <div className="mb-4 p-2 bg-neutral-900 w-fit rounded-full">
                <VolumeX className="w-6 h-6 text-paper" />
              </div>
              <h4 className="text-xl font-bold text-paper mb-1">幕后制作</h4>
              <p className="text-xs font-mono text-blood mb-3">声音设计</p>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                通过低频震动、静音留白和模糊音效，让健全观众切身体验“听觉剥离”的孤独感。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. QUOTE SECTION --- */}
      <section className="min-h-[40vh] flex items-center justify-center bg-signal text-void py-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl md:text-4xl font-black mb-6 leading-tight">
              我每天都在说话，<br/>但没有人听得见。
            </p>
            <div className="w-12 md:w-24 h-1 md:h-2 bg-void mx-auto mb-6"></div>
            <p className="font-mono text-[10px] md:text-sm tracking-widest uppercase">
              —— 电影台词 / THE LINES
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer className="py-12 bg-void border-t border-neutral-900 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent text-stroke mb-6">CREDITS</h2>
        <div className="space-y-2 font-mono text-neutral-500 text-xs">
          <p>DIRECTED BY <span className="text-paper">ANONYMOUS</span></p>
          <p>WRITTEN BY <span className="text-paper">DEAFENING TEAM</span></p>
          <p>STARRING <span className="text-paper">TAN JIANCI</span></p>
          <div className="pt-8 text-[10px] text-neutral-700">
            © 2025 DEAFENING FILM SOCIETY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}