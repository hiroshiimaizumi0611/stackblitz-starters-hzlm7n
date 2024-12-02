import { createClient } from 'microcms-js-sdk'
import type { News } from '@/types/news'

const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY

// 開発環境用のフォールバック値
const fallbackServiceDomain = 'demo'
const fallbackApiKey = 'dummy_key_00000000000000000000000000000000000'

export const client = createClient({
  serviceDomain: serviceDomain || fallbackServiceDomain,
  apiKey: apiKey || fallbackApiKey,
})

export const getNewsList = async () => {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
    })
    return response
  } catch (error) {
    // 開発環境用のモックデータを返す
    if (process.env.NODE_ENV === 'development') {
      return {
        contents: [
          {
            id: '1',
            title: 'サンプルニュース1',
            content: 'これはサンプルのニュース記事です。',
            publishedAt: '2023-12-25T00:00:00.000Z',
            updatedAt: '2023-12-25T00:00:00.000Z',
          },
          {
            id: '2',
            title: 'サンプルニュース2',
            content: 'これは2つ目のサンプルニュース記事です。',
            publishedAt: '2023-12-24T00:00:00.000Z',
            updatedAt: '2023-12-24T00:00:00.000Z',
          },
        ],
        totalCount: 2,
        offset: 0,
        limit: 10,
      }
    }
    throw error
  }
}