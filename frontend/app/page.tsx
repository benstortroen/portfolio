// this is the home page
// it will redirect you to my linked in

import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://www.linkedin.com/in/benjamin-stortroen/");
}