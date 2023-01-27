import React from 'react'

import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
        <main id='content' className="grid grid-cols-1">
                <div className="mt-5 item">
                    <div className="w-full">
                        <div className="flex py-4 px-16">
                            <Link to="/" className="flex gap-1">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                <p className="m-auto text-xl font-semibold text-center text-gray-800">Back to Polls Lists</p>
                            </Link>
                        </div>
                    </div>
                </div>


                <div class="section relative z-0 py-16 md:pt-10 md:pb-20  item">
                    <div class="container xl:max-w-6xl mx-auto px-4 text-center">

                        <div class="p-8 bg-white shadow mt-4">
                            <div class="grid grid-cols-1 md:grid-cols-3">

                            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

                                <div>
                                    <p class="font-bold text-gray-700 text-xl">1000</p>
                                    <p class="text-gray-400">Votes</p>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-700 text-xl">200</p>
                                    <p class="text-gray-400">Polls</p>
                                </div>

                                <div>
                                    <p class="font-bold text-gray-700 text-xl">89</p>
                                    <p class="text-gray-400">Followers</p>
                                </div>
                            </div>

                            <div class="relative">
                                <div class="w-48 h-48 bg-slate-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                                </div>
                            </div>
                        
                            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                             
                                    <Link  href="{% url 'profileSettings' user.id %}"
                                        class="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">Edit</Link>
                                
                                    <Link 
                                    class="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">Contact</Link>
                                    <Link 
                                        class="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">Follow</Link>

                            </div>

                            </div>
                        
                            <div class="mt-20 text-center border-b pb-12">
                            <h1 class="text-4xl font-medium text-gray-700">Khalid</h1>
                            <h3 class="text-lg font-medium text-gray-700">(Supporter)</h3>
                            <p class="font-light text-gray-600 mt-3">Dubai, UAE</p>
                        
                            <p class="mt-8 text-gray-500">A Professional Software Engineer</p>
                            <p class="mt-2 text-gray-500">Somehthing about summary</p>
                            </div>
                        
    
                            <div class="mt-12 flex flex-col justify-center">
                                <div class="section relative z-0 py-16 md:pt-32 md:pb-20">
                                <div class="container xl:max-w-6xl mx-auto text-center">
                        
                              
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    </>
  )
}

export default Profile