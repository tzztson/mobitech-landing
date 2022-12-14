const LightBrowswer = () => {
    return (
        <div className="">
            <div className='flex justify-end my-10 mx-8 items-center gap-4 max-[500px]:flex-col max-[500px]:mx-4'>
                <img src={require('../assets/imgs/search.png')} className="w-[60px] h-[60px]" />
                <a href={'https://play.google.com/store/apps/details?id=io.mobitech.browser'} target='_blank' className='text-[35px] max-[300px]:text-[24px] font-[inter] font-bold'>Light Browser</a>
            </div>
            <div className='flex flex-col container mx-auto my-12 px-12 max-sm:px-4'>
                <p className='font-bold text-[80px] max-sm:text-[40px]'>Light Browser</p>
                <a className='my-[25px] underline text-[#1A16E4] text-[25px] active:text-red-800 hover:text-red-700' href='https://mobitech.io/' target='_blank' >Mobitech.io</a>
                <div className='flex flex-col gap-8 my-12'>
                    <p className='font-[inter] font-light text-[30px]'>Lightweight browser with the main purpose to provide fast internet browsing.</p>
                    <p className='font-[inter] font-light text-[30px]'>
                        Get instant trending news relevant for your location and preferences <br /> and get powered by smart search suggestions and auto complete.
                    </p>
                </div>
                <div className='flex justify-between items-start max-xl:flex-col max-xl:items-center max-xl:gap-8'>
                    <button className='mt-24 bg-[#6BA1F2] rounded-[50px] px-28 max-[500px]:px-12  py-6 max-[500px]:py-2 font-[inter] text-[30px] font-medium'>Download</button>
                    <div className='flex flex-col items-center max-xl:mb-12'>
                        <img src={require('../assets/imgs/iphone.png')} className='w-[882px] h-[482px] max-sm:w-full max-sm:object-cover ' />
                        <div className='flex justify-center items-center bg-[#0B2D6130] rounded-[50px] w-[200px]'>
                            <img src={require('../assets/imgs/play_arrow.png')} alt='play_arrow' className='w-[52px] h-[57px]' />
                            <a href={'https://youtu.be/V9MTDypjdmQ'} target='_blank' className='text-[25px] font-medium font-[inter]'>Trailer</a>
                        </div>
                    </div>
                </div>
                <div className='flex gap-24 max-[500px]:flex-col max-[500px]:gap-8'>
                    <a href='' className='text-[#1A16E4] text-[25px] font-light font-[inter]'>Contact Us</a>
                    <a href='' className='text-[#1A16E4] text-[25px] font-light font-[inter]'>Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default LightBrowswer;