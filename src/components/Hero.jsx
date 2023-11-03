import { BiDownload } from 'react-icons/bi'
import { AiFillPlayCircle } from 'react-icons/ai'

function Hero() {
    return (
        <div className="bg-[#09101a] text-white h-screen flex items-center">
            <div className="w-4/5 mx-auto flex items-center gap-10">               
                <div className="lg:w-2/3 lg:p-4">  
                    <h2 className="uppercase py-4 text-4xl md:text-4xl lg:text-6xl font-bold">
                        Hi, I&rsquo;m Mungai 
                        <br />
                        A <span className="text-green">full-stack web Developer</span>
                    </h2>
                    <p className="text-[#94a3b8] pb-4 font-medium">
                    I am a full stack web developer with expertise in both front-end and back-end technologies. I design and implement web applications that seamlessly combine the user interface with the server-side logic. I take pride in my ability to tackle a project from concept to deployment, collaborating with teams to create dynamic, efficient, and secure web solutions that meet the needs of clients and users alike.
                    </p>
                    <div className='flex items-center gap-6 lg:gap-10 p-5'>
                        <button className="bg-green text-black px-5 py-3 rounded-xl text-lg font-semibold hover:opacity-80 flex items-center gap-2">
                            Download Cv 
                            <BiDownload size={30}/>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <AiFillPlayCircle size={30} className="text-green"/>
                            <p className='text-base md:text-lg font-semibold hover:text-green'>Watch The Video</p>
                        </div>
                    </div>
                </div>                    
                <div className='hidden lg:block '>
                    <img src="/images/image1.png" alt="Profile Image" className=" w-full h-full object-cover" />                    
                </div>
            </div>
        </div>
    )
}

export default Hero
