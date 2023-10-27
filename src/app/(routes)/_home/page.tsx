import Hero from './(sections)/Hero'
import Destinations from './(sections)/Destinations'
import Courses from './(sections)/Courses'
import About from './(sections)/About'
import Testimonials from './(sections)/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <About />
      <Courses />
      <Testimonials />
    </>
  )
}
