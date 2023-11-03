
function Contact() {
  return (
    <div className="bg-[#09101a] text-white py-10 flex justify-center"> 
      <div className="flex flex-col border border-green w-full max-w-md p-10 mx-4 md:mx-0">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-8">I would love to hear from you!</p>
        <form className="flex flex-col gap-7">
          <input 
            type="text" 
            name="name" 
            style={{ background: 'transparent' }} 
            className="focus:outline-none border border-green py-3 px-5 w-full" 
            placeholder="Name"
          />
          <input 
            type="email" 
            name="email" 
            style={{ background: 'transparent' }} 
            className="focus:outline-none border border-green py-3 px-5 w-full" 
            placeholder="Email"
          />
          <textarea 
            name="message" 
            style={{ background: 'transparent' }}  
            className="focus:outline-none border border-green py-3 px-5 w-full h-32" 
            placeholder="Message"
          />
          <input 
            type="submit" 
            value="Let's Talk" 
            className="bg-green text-black rounded-xl py-3 px-5 mt-4"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact;
