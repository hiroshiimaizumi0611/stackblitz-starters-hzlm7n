import React from 'react'
import type { News } from '@/types/news'

type Props = {
  news: News
}

export const NewsCard: React.FC<Props> = ({ news }) => {
  return (
    <article className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
      <p className="text-gray-600 mb-4">{news.content}</p>
      <div className="text-sm text-gray-500">
        <time dateTime={news.publishedAt}>
          公開日: {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
        </time>
      </div>
    </article>
  )
}