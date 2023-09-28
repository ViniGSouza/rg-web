import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { UserStoreProvider } from '@/store/User'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MIR4 Rogue',
  description: 'Servidor privado de MIR4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserStoreProvider>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      </UserStoreProvider>
    </html>
  )
}
