'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowDown, VolumeX, Fingerprint, Scale } from 'lucide-react';

// --- 组件：视差背景层 ---
function ParallaxSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
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

  // 视差参数配置
  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const scaleText = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const yText = useTransform(scrollYProgress, [0.2, 0.5], ["50%", "0%"]);

  return (
    <div ref={containerRef} className="bg-void text-paper relative">
      <Navbar />

      {/* --- 1. HERO SECTION: 标题视差 --- */}
      <ParallaxSection className="z-10 border-b border-neutral-900">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }} 
          className="text-center relative z-20"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4 inline-block p-4 border-2 border-signal rounded-full"
          >
            <VolumeX className="w-12 h-12 text-signal" />
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-paper leading-none">
            DEAFEN<span className="text-transparent text-stroke">ING</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-signal mt-2">
            震耳欲聋
          </h2>
          <p className="mt-8 text-xl font-mono text-concrete tracking-[0.5em]">
            2025 · 犯罪 · 剧情 · 现实主义
          </p>
        </motion.div>
        
        {/* 背景装饰：模拟声波纹理 */}
        <div className="absolute inset-0 z-0 opacity-20 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-void to-void" />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-concrete"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </ParallaxSection>

      {/* --- 2. STORY SECTION: 故事梗概 (文字浮动) --- */}
      <ParallaxSection className="bg-void-light z-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            style={{ scale: scaleText, opacity: scaleText }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-9xl font-black text-neutral-800 select-none -z-10">01</div>
            <h3 className="text-4xl font-bold text-signal mb-6">无声世界的<br/>惊雷与救赎</h3>
            <p className="text-lg text-neutral-400 leading-relaxed text-justify">
              普通人听见的是声音，他们听见的是生存的轰鸣。
              <br/><br/>
              电影讲述了出身聋人家庭的“灰度律师”李淇（檀健次 饰），在名利场中迷失后，意外卷入一起针对听障群体的巨额诈骗案。面对同类的绝望与资本的冷血，他必须在自我保全与良知觉醒之间做出抉择。
            </p>
          </motion.div>
          
          <div className="relative h-[400px] w-full bg-neutral-900 border border-neutral-800 overflow-hidden group">
            {/* 模拟电影剧照的抽象色块 */}
            <div className="absolute inset-0 bg-linear-to-br from-neutral-800 to-black opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-neutral-600 font-mono text-sm border border-neutral-600 px-4 py-1">剧照：李淇在法庭的沉默时刻</span>
            </div>
            {/* 装饰线 */}
            <div className="absolute top-4 right-4 w-12 h-1 bg-signal" />
          </div>
        </div>
      </ParallaxSection>

      {/* --- 3. CHARACTER SECTION: 角色 (横向滚动感) --- */}
      <section className="py-32 bg-void relative z-20 overflow-hidden border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-signal font-mono text-xs tracking-widest uppercase border border-signal px-2 py-1">Cast & Crew</span>
            <h3 className="text-5xl font-black text-paper mt-6">核心 <span className="text-transparent text-stroke">人物</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-void-light border border-neutral-800 p-8 hover:border-signal transition-colors duration-300"
            >
              <div className="mb-6 p-3 bg-neutral-900 w-fit rounded-full group-hover:bg-signal group-hover:text-void transition-colors">
                <Scale className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-paper mb-2">李淇</h4>
              <p className="text-sm font-mono text-blood mb-4">檀健次 饰</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                游走在灰色地带的律师。作为CODA（聋人子女），他既不完全属于有声世界，也不完全属于无声世界。他的觉醒，是电影的灵魂。
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-void-light border border-neutral-800 p-8 hover:border-blood transition-colors duration-300"
            >
              <div className="mb-6 p-3 bg-neutral-900 w-fit rounded-full group-hover:bg-blood group-hover:text-white transition-colors">
                <Fingerprint className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-paper mb-2">受害者群体</h4>
              <p className="text-sm font-mono text-blood mb-4">群像演绎</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                他们被骗走的不仅仅是钱财，更是对这个世界的信任。他们的手语是无声的咆哮，是全片最震耳欲聋的控诉。
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-void-light border border-neutral-800 p-8 hover:border-white transition-colors duration-300"
            >
              <div className="mb-6 p-3 bg-neutral-900 w-fit rounded-full group-hover:bg-white group-hover:text-void transition-colors">
                <VolumeX className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-paper mb-2">幕后制作</h4>
              <p className="text-sm font-mono text-blood mb-4">声音设计</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                极具实验性的声音处理。通过低频震动、静音留白和模糊音效，让健全观众切身体验“听觉剥离”的孤独感。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. QUOTE SECTION: 经典台词 (大字报风格) --- */}
      <section className="min-h-[50vh] flex items-center justify-center bg-signal text-void py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-4xl font-black mb-8">
               我每天都在说话，<br/>但没有人听得见。
            </p>
            <div className="w-24 h-2 bg-void mx-auto mb-8"></div>
            <p className="font-mono text-sm tracking-widest uppercase">
              —— 电影台词 / THE LINES
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 5. FOOTER: 演职员表 --- */}
      <footer className="py-20 bg-void border-t border-neutral-900 text-center">
        <h2 className="text-3xl font-bold text-transparent text-stroke mb-8">CREDITS</h2>
        <div className="space-y-4 font-mono text-neutral-500 text-sm">
          <p>DIRECTED BY <span className="text-paper">ANONYMOUS</span></p>
          <p>WRITTEN BY <span className="text-paper">DEAFENING TEAM</span></p>
          <p>STARRING <span className="text-paper">TAN JIANCI</span></p>
          <div className="pt-12 text-xs text-neutral-700">
            © 2025 DEAFENING FILM SOCIETY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}