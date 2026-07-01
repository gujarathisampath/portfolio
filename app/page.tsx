import Contact from "@/components/sections/contact"
import Experience from "@/components/sections/experience"
import Footer from "@/components/sections/footer"
import Intro from "@/components/sections/intro"
import Personal from "@/components/sections/personal"
import Signature from "@/components/sections/signature"
import Work from "@/components/sections/work"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-15">  
      <Intro/>
      <Work/>
      <Experience/>
      <Personal/>
      <Contact/>
      <Signature/>
      <Footer/>
    </main>
  )
}
