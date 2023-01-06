import avatar from '../image/avatar.jpg'

function Home() {
    return (
        <div>
            <div className='flex items-center'>
                <div className='w-3/4 pr-16'>
                    <p className="text-[#ea8e55] text-2xl">Hi there,</p>
                    <h1 className='text-7xl font-bold my-5'>I am Keng I</h1>
                    A Penultimate Computer Science student at NUS, with a passion
                    in <span className='underline decoration-2 decoration-pink-500/70'>Software
                        Engineering</span>, <span className='underline decoration-2 decoration-green-500/70'>Computer
                            Security</span> and <span className='underline decoration-2 decoration-sky-500/70'>Artificial Intelligence</span>.
                    Welcome to my space on the web, feel free to look around!
                </div>
                <img src={avatar} className='rounded-full ring-4 ring-gray-400 dark:ring-gray-500 ml-auto items-end' style={{ width: "320px" }} alt="Avatar"></img>
            </div>

        </div>
    )
}

export default Home;