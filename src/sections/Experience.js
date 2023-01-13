import lta from '../image/lta-fixed.jpg'
import sapura from '../image/sapura.jpg'
import shopee from '../image/shopee.jpg'
import runnus from '../image/runnus.jpg'
import arrow from '../image/arrow-removed.png'
import hack from '../image/hack.jpg'



function Experience() {
    return (
        <div>
            <div className='flex flex-col h-[75vh]'>
                <h1 className='text-center text-4xl sm:text-6xl font-bold w-10/15 mb-8'>My Experience</h1>
                <div className='relative flex flex-row h-3/4 sm:h-full overflow-x-auto snap-x snap-mandatory sm:snap-proximity sm:m-4 shadow-[3px_3px_6px_0px_inset_rgb(36,50,64),-3px_-3px_6px_1px_inset_rgba(36,50,64,0.3)] rounded-lg select-none'>
                    {/* <div className="absolute flex flex-col divide-y-4 divide-slate-500 h-full">
                        <div className="top-0 h-5/6 border-b-4 border-slate-500 w-[470vw] sm:w-[170vw]"></div>
                    </div> */}
                    {/* <div className="fixed border-2 w-full h-5/6"></div> */}

                    <div className="relative flex flex-col items-center sm:items-end shrink-0 w-[55vw] sm:w-96 h-full pt-8 sm:pt-16 snap-center mx-16">
                        <div className="relative flex flex-col h-4/6 sm:h-3/5 w-full sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05)] z-10">
                            <img className='w-full h-3/5 opacity-40' src={lta} alt="logo"></img>
                            <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                <span className=''>Award</span>
                                <span className='sm:text-sm font-bold py-1'>LTA Engineering Challenge 2016</span>
                                <span> Merit Award — Singapore International Transport Congress and Exhibition (SITCE) 2016</span>
                            </div>
                        </div>
                        <div className='self-center sm:self-start mt-auto sm:ml-8 sm:mb-6'>
                            <span className="font-medium text-4xl text-[#ea8e55]">Oct'16</span>
                        </div>
                        <img className='hidden sm:flex absolute bottom-16 left-4 h-1/3 w-1/3 -rotate-45 -translate-x-8' src={arrow} alt="direction" draggable="false"></img>
                    </div>

                    <div className="relative flex flex-col items-center sm:items-end shrink-0 w-[60vw] sm:w-96 h-full pt-8 sm:pt-16 snap-center mx-16">
                        <div className="relative flex flex-col h-4/6 sm:h-3/5 w-full sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05)] z-10">
                            <img className='w-full h-3/5 opacity-60' src={sapura} alt="logo"></img>
                            <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                <span className=''>Internship</span>
                                <span className='sm:text-sm font-bold py-1'>Sapura Synergy Singapore</span>
                                <span>Student Internship on Education through E-Books and Technology</span>
                            </div>
                        </div>
                        <div className='self-center sm:self-start mt-auto sm:ml-8 sm:mb-6'>
                            <span className="font-medium text-4xl text-[#ea8e55]">Dec'16</span>
                        </div>
                        <img className='hidden sm:flex absolute bottom-16 left-4 h-1/3 w-1/3 -rotate-45 -translate-x-8' src={arrow} alt="direction" draggable="false"></img>
                    </div>


                    <div className="relative flex flex-col items-center sm:items-end shrink-0 w-[60vw] sm:w-96 h-full pt-8 sm:pt-16 snap-center mx-16">
                        <div className="relative flex flex-col h-4/6 sm:h-3/5 w-full sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05)] z-10">
                            <img className='w-full h-3/5 opacity-60 self-center bg-white' src={hack} alt="logo"></img>
                            <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                <span className=''>Hackathon</span>
                                <span className='sm:text-sm font-bold py-1'>Hack&Roll 2022</span>
                                <span>Built a telegram bot within 24 hours</span>
                            </div>
                        </div>
                        <div className='self-center sm:self-start mt-auto sm:ml-8 sm:mb-6'>
                            <span className="font-medium text-4xl text-[#ea8e55]">May'22</span>
                        </div>
                        <img className='hidden sm:flex absolute bottom-16 left-4 h-1/3 w-1/3 -rotate-45 -translate-x-8' src={arrow} alt="direction" draggable="false"></img>
                    </div>

                    <div className="relative flex flex-col items-center sm:items-end shrink-0 w-[60vw] sm:w-96 h-full pt-8 sm:pt-16 snap-center mx-16">
                        <div className="relative flex flex-col h-4/6 sm:h-3/5 w-full sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05)] z-10">
                            <img className='w-full h-3/5 opacity-60' src={shopee} alt="logo"></img>
                            <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                <span className=''>Internship</span>
                                <span className='sm:text-sm font-bold py-1'>Shopee Singapore</span>
                                <span>3 Months in Automation Quality Assurance Engineer, iOS Frontend testing team</span>
                            </div>
                        </div>
                        <div className='self-center sm:self-start mt-auto sm:ml-8 sm:mb-6'>
                            <span className="font-medium text-4xl text-[#ea8e55]">May'22</span>
                        </div>
                        <img className='hidden sm:flex absolute bottom-16 left-4 h-1/3 w-1/3 -rotate-45 -translate-x-8' src={arrow} alt="direction" draggable="false"></img>
                    </div>

                    <div className="relative flex flex-col items-center sm:items-end shrink-0 w-[60vw] sm:w-96 h-full pt-8 sm:pt-16 snap-center mx-16">
                        <div className="relative flex flex-col h-4/6 sm:h-3/5 w-full sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05)] z-10">
                            <img className='w-full h-3/5 opacity-60' src={runnus} alt="logo"></img>
                            <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                <span className=''>Project</span>
                                <span className='sm:text-sm font-bold py-1'>NUS Student's Sports Club - RunNUS</span>
                                <span>Design and update website regularly during each phase of event</span>
                            </div>
                        </div>
                        <div className='self-center sm:self-start mt-auto sm:ml-8 sm:mb-6'>
                            <span className="font-medium text-4xl text-[#ea8e55]">Jun'22</span>
                        </div>
                        <img className='hidden sm:flex absolute bottom-16 left-4 h-1/3 w-1/3 -rotate-45 -translate-x-8' src={arrow} alt="direction" draggable="false"></img>
                    </div>



                    {/* <div className="relative flex flex-col items-end shrink-0 w-[50vw] sm:w-[27vw] h-4/5 snap-center mx-4">
                        <div className="relative flex flex-col h-3/4 w-3/4 rounded-3xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.4),-10px_10px_rgba(253,126,20,0.3),-15px_15px_rgba(253,126,20,0.2),-20px_20px_rgba(253,126,20,0.1),-25px_25px_rgba(253,126,20,0.05)] z-10">
                            <img className='w-full h-3/5 opacity-70' src={sapura} alt="logo"></img>
                            <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                <span className='py-1'>Internship</span>
                                <span className='text-sm font-bold'>Sapura Syngery Singapore</span>
                                <span> Student Internship on Education through E-Books and Technology</span>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-16 border-l-4 border-dashed h-1/2 w-full rounded-l-full"></div>
                    </div>





                    <div className="flex flex-col shrink-0 w-[50vw] sm:w-[20vw] h-1/2 snap-center self-end mx-4">
                        <div className="border-l-2 border-dashed h-1/4 w-full rounded-tl-3xl"></div>
                        <div className="relative flex flex-col h-3/4 bg-[#f3f1f141] rounded-xl overflow-clip">
                            <img className='absolute w-full h-full top-0 opacity-10 ' src={sapura} alt="logo"></img>
                            <span className="font-bold text-4xl text-[#ea8e55] z-10 p-4">Dec 2016</span>
                            <span className="h-full z-10 pl-4">Internship at Sapura Synergy Singapore</span>
                        </div>
                    </div>


                    <div className="flex flex-col shrink-0 w-[50vw] sm:w-[20vw] h-1/2 snap-center ml-[16rem] pt-4">
                        <div className="relative flex flex-col h-3/4 bg-[#d8d8d85d] rounded-xl overflow-clip">
                            <img className='absolute w-full h-full top-0 opacity-30' src={shopee} alt="logo"></img>
                            <span className="text-4xl text-[#ea8e55] z-10 p-4">May 2022</span>
                            <span className="h-full z-10 pl-4">Shopee Singapore<br></br>3 months internship as an Automation Quality Assurance Engineer</span>
                        </div>

                        <div className="border-l-2 border-dashed h-1/4 w-full rounded-bl-3xl"></div>
                    </div>

                    <div className="flex flex-col shrink-0 w-[50vw] sm:w-[20vw] h-1/2 snap-center self-end mx-4">
                        <div className="border-l-2 border-dashed h-1/4 w-full rounded-tl-3xl"></div>
                        <div className="relative flex flex-col h-3/4 bg-[#707070] rounded-xl overflow-clip">
                            <img className='absolute w-full h-full top-0 opacity-30' src={runnus} alt="logo"></img>
                            <span className="text-4xl text-[#ea8e55] z-10 p-4">June 2022</span>
                            <span className="h-full z-10 pl-4">Website design for RunNUS</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Experience;