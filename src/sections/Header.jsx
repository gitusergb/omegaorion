import React from 'react'

const Header = () => {
  return (
  <div className="bg-no-repeat bg-[url('https://i.ibb.co/2SZJXPk/upper.png')]">
   <header className=" font-serif flex justify-between place-items-baseline p-4">
   <div className="flex justify-between items-center space-x-5">
                            <img src="https://i.ibb.co/V920xBb/UI-Logo.png" alt="icon" className='h-12' />
                            <nav className="flex space-x-6">
                            <a href="#" className="text-white">Explore</a>
                            <a href="#" className="text-white">FAQ's</a>
                            <a href="#" className="text-white">Pricing</a>
                        </nav>
                        </div>
                       
                        <div className="flex items-center space-x-4">
                            {/* <i className="fas fas-search text-white"></i> */}
                            <img src="https://i.ibb.co/F3sk2BX/search.png" alt="search" className='h-5' />
                            <img src="https://placehold.co/40x40" alt="User profile picture" className="rounded-full w-10 h-10"/>
                        </div>
                       
                        </header>
   <section className="flex justify-between items-center text-center py-20 ml-5 mr-6">
    <div className="flex flex-col justify-between items-baseline text-left py-7">
    <h1 className="text-4xl font-bold">Pixel Bloom: AI website agency</h1>
    <div>
        <span className="text-lg mt-4 text-slate-300">Habit Tracker App Figma iOS UI Kit</span>
    <i className="fab fa-figma text-2xl ml-2"></i>
    </div>
    
    </div>
                            
                            <div className="flex justify-center mt-6 space-x-4">
                                <button className="bg-slate-800 border-spacing-0 border-white-300 text-white py-2 px-4 rounded-2xl flex items-center space-x-2">
                                    <i className="fas fa-comment-dots"></i>
                                    <span>Give feedback</span>
                                   
                                </button>
                                <button className="bg-lime-500 text-black py-2 px-4 rounded-2xl">Add to cart $20</button>
                            </div>
                        </section>
  </div>                
  )
}

export default Header