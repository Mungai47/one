import Hero from '../components/Hero'
import MyServices from '../components/MyServices'
import About from '../components/About'
import Education from '../components/Education'

function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MyServices/>
      <About />
      <Education />
    </div>
  )
}

export default Home

