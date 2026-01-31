export const metadata = {
  title: 'Restaurant Le Gourmet - Réservation',
  description: 'Réservez votre table dans notre restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
