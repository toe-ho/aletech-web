import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us | Aletech",
  description:
    "Learn about Aletech's problem-centered approach, key strengths, and the experienced team behind our innovative technology solutions.",
}

export default function AboutPage() {
  return <AboutPageClient />
}

