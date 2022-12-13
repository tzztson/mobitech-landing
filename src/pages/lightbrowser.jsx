const LightBrowswer = () => {
    return (
        <div className="">
            <div className='flex justify-end my-10 mx-8 items-center gap-4'>
                <img src={require('../assets/imgs/search.png')} className="w-[60px] h-[60px]" />
                <p className='text-[35px] font-[inter] font-bold'>Light Browser</p>
            </div>
            <div className='flex flex-col container mx-auto'>
                <p className='font-bold text-[80px]'>Light Browser</p>
                <a className='my-[25px] underline text-[#1A16E4] text-[25px] active:text-red-800 hover:text-red-700' href='https://mobitech.io/' target='_blank' >Mobitech.io</a>
                <div className='flex flex-col gap-8 my-12'>
                    <p className='font-[inter] font-light text-[30px] '>Lightweight browser with the main purpose to provide fast internet browsing.</p>
                    <p className='font-[inter] font-light text-[30px]'>
                        Get instant trending news relevant for your location and preferences <br /> and get powered by smart search suggestions and auto complete.
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <button className='bg-[#6BA1F2] rounded-[50px] px-28 py-6 font-[inter] text-[30px] font-medium'>Download</button>
                    <img src={require('../assets/imgs/iphone.png')} className='w-[882px] h-[482px]' />
                </div>
            </div>
            <div className='h-96'></div>
        </div>
    )
}

export default LightBrowswer;