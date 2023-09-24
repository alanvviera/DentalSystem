import { redirect } from "next/navigation";

export default async function Home({ params }) {
  redirect('/login');
}
