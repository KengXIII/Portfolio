function Experience() {
    return (
        <div>
            <div className='flex flex-col h-[80vh]'>
                <h1 className='text-center text-6xl font-bold w-10/15'>My Experience</h1>
                <div className='relative flex my-8 p-8 h-full overflow-x-auto overflow-y-hidden'>
                    <div className="absolute m-4 flex flex-col divide-y-4 divide-slate-500 h-full">
                        <div className="top-0 h-1/2 w-[200vw]"></div>
                        <div className="bottom-0 h-1/2 w-[200vw]"></div>
                    </div>
                    <div className="border">hello</div>

                </div>
            </div>
        </div>
    )
}

export default Experience;