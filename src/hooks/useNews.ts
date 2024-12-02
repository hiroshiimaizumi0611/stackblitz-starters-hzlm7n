import { useCallback, useState } from 'react'
import type { News } from '@/types/news'
import { getNewsList } from '@/services/microcms'

export const useNews = () => {
  const [news, setNews] = useState<News[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchNews = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await getNewsList()
      setNews(response.contents)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'))
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { news, isLoading, error, fetchNews }
}