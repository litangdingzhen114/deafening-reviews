import { getReviewById, ARCHIVE_REVIEWS } from '@/lib/data';
import Navbar from '@/components/Navbar';
import ReviewReader from '@/components/ReviewReader'; // 引入新组件
import { notFound } from 'next/navigation';

// 生成静态路径 (SSG)
export async function generateStaticParams() {
  return ARCHIVE_REVIEWS.map((review) => ({
    id: review.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReviewPage({ params }: PageProps) {
  const { id } = await params;
  const review = getReviewById(id);

  if (!review) {
    notFound();
  }

  return (
    <>
      <Navbar />
      {/* 将获取到的 review 数据传给客户端组件 */}
      <ReviewReader review={review} />
    </>
  );
}