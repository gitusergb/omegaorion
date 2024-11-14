import React from 'react'

const Description = () => {
  return (
    <div className="bg-black font-sans pl-11 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                        <div>
                            <h1 className="text-3xl font-bold mb-6">Description</h1>
                            <p className="text-lg mb-6">Hello Friends <span role="img" aria-label='skin tone waving hand'>👋🏻</span></p>
                            <p className="mb-6">
                                Achieving your goals is now simpler than ever with Beetroot. Take control of your habits by setting personalized goals, receiving timely reminders, and effortlessly tracking your progress. The app records your journey and provides insights to help you build a healthier, more organized life. It addresses several challenges, from maintaining consistency to monitoring your overall progress. Your path to a better you has never been this straightforward!
                            </p>
                            <p className="mb-6">
                                I also want to share my exploration of our app's features. You can set specific quitting goals, find tips for overcoming cravings, and access support resources whenever you need them. I hope you guys find it useful. Feel free to comment!
                            </p>
                            <p className="mb-6">
                                <span role="img" aria-label="fire symbol">🔥</span> Checkout our other product - <a href="https://ui8.net/omega-orion/products/forgo---quit-smoking-app" className="text-white">https://ui8.net/omega-orion/products/forgo---quit-smoking-app</a> <span role="img" aria-label="envelope">✉️</span>
                            </p>
                        </div>
                        <div className='ml-8'>
                            <h1 className="text-3xl font-bold mb-6">Features</h1>
                            <ul className="list-none space-y-2 mb-11">
                                <li className="flex items-center mb-4"><i className="fas fa-check-circle text-green-500 mr-2"></i> 120+ Screens</li>
                                <li className="flex items-center mb-4"><i className="fas fa-check-circle text-green-500 mr-2"></i> Fully customisable designs</li>
                                <li className="flex items-center mb-4"><i className="fas fa-check-circle text-green-500 mr-2"></i> Organised Design system</li>
                                <li className="flex items-center mb-4"><i className="fas fa-check-circle text-green-500 mr-2"></i> Light & Dark mode</li>
                                <li className="flex items-center mb-4"><i className="fas fa-check-circle text-green-500 mr-2"></i> Customised Illustration</li>
                                <li className="flex items-center mb-4"><i className="fas fa-check-circle text-green-500 mr-2"></i> Neatly Organised layer</li>
                            </ul>
                            <h1 className="text-3xl font-bold mb-4">Format</h1>
                            <div className="flex items-center">
                                <i className="fab fa-figma text-2xl mr-2"></i>
                                <span>15.2mb</span>
                            </div>
                        </div>
        </div>
    </div>
  )
}

export default Description