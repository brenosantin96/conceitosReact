"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@/contexts/UserContext'
import { PostContextProvider } from '@/contexts/PostContext'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostContextProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </PostContextProvider>
      </body>
    </html>
  )
}
