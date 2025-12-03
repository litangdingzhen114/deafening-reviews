import Navbar from '@/components/Navbar';
import SearchEngine from '@/components/SearchEngine';
import { ARCHIVE_REVIEWS } from '@/lib/data';

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-noise pb-20">
      <Navbar />
      
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-black text-paper mb-4 uppercase">
            影评 <span className="text-transparent text-stroke">库</span> {/* 修改点：改为“影评库” */}
          </h1>
          <p className="font-mono text-concrete">
            正在加载影评文章...
          </p>
        </div>

        <SearchEngine initialReviews={ARCHIVE_REVIEWS} />
      </main>
    </div>
  );
}