import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function Testimonials() {
  return (
    <div className="bg-[#020509] text-white"> 
        <div className="w-4/5 mx-auto py-20">
            <div>
                <h3 className="text-green text-center text-xl font-semibold">Client Review</h3>
                <h2 className="text-3xl font-bold text-center">Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 py-10">
                <div className="flex flex-col items-center py-3 border border-green">
                    <img src="/images/avatar1.jpg" alt="client" className='w-24 h-24 rounded-full object-cover'/>
                    <h3 className="text-xl font-bold mt-4">John Doe</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit euismod, malesuada nunc vel, blandit odio. Nullam euismod, velit vel bibendum bibendum, elit sapien aliquet velit, vel lacinia enim velit vel odio.</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 border border-green">
                    <img src="/images/avatar2.jpg" alt="client" className='w-24 h-24 rounded-full object-cover'/>
                    <h3 className="text-xl font-bold mt-4">Jane Doe</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit euismod, malesuada nunc vel, blandit odio. Nullam euismod, velit vel bibendum bibendum, elit sapien aliquet velit, vel lacinia enim velit vel odio.</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarHalf size={30} className="text-green"/>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 border border-green">
                    <img src="/images/avatar3.jpg" alt="client" className='w-24 h-24 rounded-full object-cover'/>
                    <h3 className="text-xl font-bold mt-4">Jane Doe</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit euismod, malesuada nunc vel, blandit odio. Nullam euismod, velit vel bibendum bibendum, elit sapien aliquet velit, vel lacinia enim velit vel odio.</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarHalf size={30} className="text-green"/>
                        <BsStar size={30} className="text-green"/>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 border border-green">
                    <img src="/images/avatar4.jpg" alt="client" className='w-24 h-24 rounded-full object-cover'/>
                    <h3 className="text-xl font-bold mt-4">John Doe</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit euismod, malesuada nunc vel, blandit odio. Nullam euismod, velit vel bibendum bibendum, elit sapien aliquet velit, vel lacinia enim velit vel odio.</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                        <BsStarFill size={30} className="text-green"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
