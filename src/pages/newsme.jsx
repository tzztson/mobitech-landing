const NewsMe = () => {
    return (
        <div className="">
            <div className='flex justify-end my-10 mx-8 items-center gap-4'>
                <img src={require('../assets/imgs/news.png')} className="w-[60px] h-[60px]" />
                <p className='text-[35px] font-[inter] font-bold'>News.me</p>
            </div>
            <div className='flex container mx-auto my-12 justify-between gap-8'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[80px]'>News.me</p>
                    <a className='my-[25px] underline text-[#1A16E4] text-[25px] active:text-red-800 hover:text-red-700' href='https://mobitech.io/' target='_blank' >Mobitech.io</a>
                    <p className='my-6 font-[inter] font-normal text-[20px]'>With News.me you can get only news that you like an exclusive content from premium news providers.<br /></p>
                    <div className='flex flex-col my-8 gap-4'>
                        <p className='font-[inter] font-semibold text-[20px]'>What is smart about the app?</p>
                        <li className='font-[inter] font-light text-[20px]'>The app will learn your preference and will collect among thousands of news sources the most updated and relevant news for you.</li>
                        <li className='font-[inter] font-light text-[20px]'>No more paging between tabs and searching interesting articles. In News.me the articles finds you.</li>
                        <li className='font-[inter] font-light text-[20px]'>Simply scroll with the beautiful pictures, videos and articles - and the app will do the rest.</li>
                        <li className='font-[inter] font-light text-[20px]'>The app is automatically adjusted according to your Internet connection and device power and will consume less resources when they are low.</li>
                    </div>
                    <div className='flex flex-col my-8 gap-4'>
                        <p className='font-[inter] font-semibold text-[20px]'>What further fun features the app has?</p>
                        <li className='font-[inter] font-light text-[20px]'>The app has built in search for news and more. Note: Search results are provided by Microsoft Bing.</li>
                        <li className='font-[inter] font-light text-[20px]'>Stay updated with news notification in categories you like. You are in full control of quantity.</li>
                        <li className='font-[inter] font-light text-[20px]'>The app utilizes the IP address in order to present news according to the user's location.</li>
                    </div>
                    <button className='mt-24 bg-[#6BA1F2] rounded-[50px] px-28 py-6 font-[inter] text-[30px] font-medium w-[360px]'>Download</button>
                </div>
                <img src={require('../assets/imgs/multi-iphones.png')} alt='multi-iphone' className='mt-16' />
            </div>
            <div className='flex container mx-auto gap-24 mb-12'>
                <a href='' className='text-[#1A16E4] text-[25px] font-light font-[inter]'>Contact Us</a>
                <a href='' className='text-[#1A16E4] text-[25px] font-light font-[inter]'>Privacy Policy</a>
            </div>
        </div >
    )
}

export default NewsMe;