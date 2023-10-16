import { redirect } from 'next/navigation'

/**
 * Home component representing the main page of the application.
 *
 * @component
 * @returns {JSX.Element} JSX element for the Home page.
 */

export default function Home() {
  redirect('/dashboard/home')
}
