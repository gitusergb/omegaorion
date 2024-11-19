import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-almostBlack text-gray-400 py-10 mt-3">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
      <div>
        <div className="flex justify-between items-center mb-5 md:mb-0">
        <img src="https://i.ibb.co/V920xBb/UI-Logo.png" alt="icon" className="h-16 mr-6 rounded-full" /> 
        <div className="flex flex-col md:flex-row md:space-x-20 mb-6 md:mb-0 font-medium text-m">
            <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-white">Explore</a>
                <a href="#" className="hover:text-white">FAQ</a>
                <a href="#" className="hover:text-white">Pricing</a>
            </div>
            <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-white">Licensing</a>
                <a href="#" className="hover:text-white">Terms of use</a>
                <a href="#" className="hover:text-white">Privacy policy</a>
            </div>
            </div>
         </div>
         <div className="text-left mt-10 ml-28">
        <p className="text-gray-600">© 2024, Omega Orion Pvt. Ltd.</p>
    </div>
         </div>
        {/* <div className="flex flex-col justify-center items-start md:items-end"> */}
            <div className="mb-1">
                <h3 className="text-white mb-4">Join our monthly newsletter 🙌</h3>
                <div className="flex mb-4">
                    <input type="email" placeholder="designer@example.com" className="bg-gray-800 text-gray-400 p-2 rounded-l-md focus:outline-none" />
                    
                    <button className="bg-limeGreen text-black p-2 rounded-r-md ">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <h3 className="text-white mb-4">Connect With us 🤝 </h3>
                <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-dribbble"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-behance"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fas fa-envelope"></i></a>
            </div>

            {/* </div> */}
            
        </div>
    </div>
    <img src="https://i.ibb.co/ZgjVmJK/o7.png" alt="foot" />
  
</footer>
  )
}

export default Footer