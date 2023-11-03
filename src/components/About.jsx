import { BiDownload } from 'react-icons/bi'

function About() {
  return (
    <div className="bg-[#020509] text-white">
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2">
            <div>
                <h3 className="uppercase text-green font-semibold text-lg pb-10">About me</h3>
                <h2 className=' text-3xl font-bold pb-10'>Transforming visions into exceptional portfolios</h2>
                <p className='text-[#94a3b8] pb-10 font-medium'>Nemo design enim ipsam Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
                <button className="bg-green text-black px-5 py-3 rounded-xl text-lg font-semibold hover:opacity-80 flex items-center gap-2">
                            Download Cv 
                            <BiDownload size={30}/>
                        </button>
            </div>
            <div className="pb-20">
                <img src="/images/image1.png" alt="Profile Image" className=""/>
            </div>
        </div>
    </div>
  )
}

export default About
