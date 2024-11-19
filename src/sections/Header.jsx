import React from 'react'

const Header = () => {
  return (
  <div className="bg-no-repeat bg-cover bg-[url('https://i.ibb.co/6v0bBDB/header.png')]">
   <header className=" flex justify-between place-items-baseline p-4 text-xl">
   <div className="flex justify-between items-center space-x-5">
                            <img src="https://i.ibb.co/V920xBb/UI-Logo.png" alt="icon" className='h-16' />
                            <nav className="flex space-x-6">
                            <a href="#" className="text-white">Explore</a>
                            <a href="#" className="text-white">FAQ's</a>
                            <a href="#" className="text-white">Pricing</a>
                        </nav>
                        </div>
                       
                        <div className="flex items-center space-x-4">
                            <img src="https://i.ibb.co/F3sk2BX/search.png" alt="search" className='h-5' />
                            <img src="https://i.ibb.co/LprgZMy/user.jpg" alt="User profile picture" className="rounded-full w-10 h-10"/>
                        </div>
                       
                        </header>
   <section className="flex justify-between items-center text-center py-20 ml-5 mr-6">
    <div className="flex flex-col justify-between items-baseline text-left py-7">
    <h1 className="text-4xl font-bold">Pixel Bloom: AI website agency</h1>
    <div className='flex text-center items-center'>
        <span className="text-m mt-4 text-slate-300">Habit Tracker App Figma iOS UI Kit</span>
    <img src="https://i.ibb.co/j8wVZsB/figma.png" alt="figma" className='rounded-full w-7 h-7 ml-3 mt-2' />
    </div>
    
    </div>
                            
                            <div className="flex justify-center mt-6 space-x-4">
                                <button className="bg-slate-800 bg-opacity-0 border-solid text-white py-2 px-4 rounded-2xl flex items-center space-x-2">
                                    {/* <i className="fas fa-comment-question"></i> */}
                                    <img className='rounded-full w-6 h-6 mr-1 ' src="https://i.ibb.co/60sWcVs/quest.png" alt="comment-que" />
                                    <span className='font-medium '>Give feedback</span>
                                   
                                </button>
                                <button className="bg-limeGreen text-black font-medium py-1 px-5 rounded-xl h-12">Add to cart $20</button>
                            </div>
                        </section>
  </div>                
  )
}

export default Header