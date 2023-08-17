export const metadata = {
  title: 'Blesseg Generation | Content Manager System for BG',
  description: 'Blessed Generation CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
