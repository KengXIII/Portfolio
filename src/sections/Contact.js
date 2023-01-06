function Contact() {
    return (
        <div className="mb-[25vh]">
            <h1 className='text-6xl font-bold text-center'>Get In Touch</h1>
            <div className="flex flex-col text-center w-full mt-4 mx-auto">
                If you would like to get in touch, or want to know more, be sure to drop me an email!
                <span>Looking for a Summer Internship from May — Jul 2022</span>
                <button className="flex shrink mt-5 mx-auto p-3 rounded-full min-w-1/2 justify-center bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl">
                    <a href='mailto:liaokengi@gmail.com' className="flex text-center w=full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className='mt-0.5 text-xs sm:text-base'>Drop me an email!</span>
                    </a>

                </button>
            </div>

        </div>
    )
}

export default Contact;