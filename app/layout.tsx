import AuthProvider from '../components/authprovider/AuthProvider'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Sistema Dental',
  description: 'Sistema Dental es una plataforma tecnológica avanzada diseñada específicamente para satisfacer las necesidades de las clínicas dentales modernas. Esta solución integral está destinada a mejorar la eficiencia operativa, agilizar la atención al paciente y permitir una administración efectiva de todos los aspectos relacionados con la práctica odontológica.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className={montserrat.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
