import React from 'react'

const Comments = () => {
  return (
<div className="p-8">
                    <div className="bg-gray-900 p-6 rounded-lg" id='bg-primary '>
                        <h2 className="text-2xl font-bold mb-4">Comments</h2>
                        <div className="flex flex-col items-start mb-4">
                            <div className="flex items-start mb-4">
                            <img src="https://placehold.co/50x50" alt="Profile picture of a woman with long hair" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                            <h3 className="text-lg font-semibold">Kristie Robson</h3>
                                <p className="text-gray-600">Gave feedback on 17th Sept 2024</p>
                            </div>
                            </div>
                            <div className='ml-3'>
                                <p className="mt-2">The template I bought looked great in the preview, but the actual file was </p>
                                <p >poorly designed and hard to customize. Definitely not worth the price</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-secondary p-4 rounded-lg">
                            <input type="text" placeholder="Drop a comment, be helpful" className="bg-gray-800 text-gray-400 flex-grow outline-none" />
                            <button className="bg-lime-600 text-black font-semibold py-2 px-4 rounded-lg ml-4">Submit</button>
                        </div>
                    </div>
                </div>
  )
}

export default Comments