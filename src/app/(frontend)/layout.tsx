import React from 'react'

export const metadata = {
  title: 'Payload Demo',
  description: 'Payload CMS Demo with MongoDB',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
