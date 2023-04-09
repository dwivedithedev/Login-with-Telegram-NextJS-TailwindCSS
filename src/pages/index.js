import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LoginPage } from './login';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <LoginPage />
    </main>
  )
}
