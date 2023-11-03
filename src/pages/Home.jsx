import Hero from '../components/Hero'
import MyServices from '../components/MyServices'
import About from '../components/About'
import Education from '../components/Education'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MyServices/>
      <About />
      <Education />
      <Portfolio />
      <Testimonials />
    </div>
  )
}

export default Home

