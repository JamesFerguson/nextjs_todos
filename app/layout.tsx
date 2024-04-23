import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To Dos',
  description: 'A kickaround todoing app.',
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/docs/1', label: 'Docs' },
  { href: '/todos', label: 'To Dos' }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>To Dos App</h1>
          <nav>
            <ul className='flex items-center'>
              {
                links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))                
              }
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
