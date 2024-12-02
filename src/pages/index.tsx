import { Header } from '@/components/ui/Header'
import { NewsList } from '@/components/features/News/NewsList'

export default function Home() {
  return (
    <main>
      <Header />
      <NewsList />
    </main>
  )
}