import React, { useEffect } from 'react'
import { NewsCard } from '../NewsCard'
import { useNews } from '@/hooks/useNews'

export const NewsList: React.FC = () => {
  const { news, isLoading, error, fetchNews } = useNews()

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">ニュース</h2>
        <div className="text-center">読み込み中...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">ニュース</h2>
        <div className="text-red-600">エラーが発生しました: {error.message}</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">ニュース</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  )
}