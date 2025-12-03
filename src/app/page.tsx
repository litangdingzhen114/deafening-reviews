import Navbar from '@/components/Navbar';
import ReviewGrid from '@/components/ReviewGrid';
import { FEATURED_REVIEWS } from '@/lib/data';
import { VolumeX } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-noise pb-20">
      <Navbar />

      <main className="pt-16">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-neutral-800">
          <div className="absolute inset-0 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-void to-void z-0" />
          
          <div className="container px-4 relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 border-2 border-signal rounded-full animate-pulse-fast">
                <VolumeX className="w-12 h-12 text-signal" />
              </div>
            </div>

            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-paper uppercase">
              震耳<span className="text-transparent text-stroke">欲聋</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-mono text-concrete max-w-2xl mx-auto tracking-widest mb-8">
              &quot;在无声的世界里，听见罪恶的轰鸣。&quot;
            </p>

            <div className="inline-block bg-blood text-white px-6 py-2 font-bold transform -rotate-2">
              正在热映 / 2025
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-12 border-b-4 border-neutral-800 pb-4">
            <h2 className="text-4xl font-black text-paper uppercase">
              精选 <span className="text-signal">影评</span>
            </h2>
            <span className="font-mono text-concrete hidden md:block">VOL. 01 — OCT 2025</span>
          </div>

          <ReviewGrid reviews={FEATURED_REVIEWS} isFeatured={true} />
        </section>
      </main>
    </div>
  );
}
