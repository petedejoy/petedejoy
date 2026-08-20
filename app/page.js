import { PT_Serif } from "next/font/google"
import BusinessCard from "../components/BusinessCard"

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-card",
  display: "swap",
})

export const metadata = {
  title: "Pete DeJoy",
}

export default function HomePage() {
  return (
    <main className={ptSerif.variable}>
      <BusinessCard />
    </main>
  )
}
