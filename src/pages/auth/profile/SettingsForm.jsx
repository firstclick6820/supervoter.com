import React from 'react'

const SettingsForm = () => {
  return (
    <>
        <form class="mt-6 border-gray-400" action="{% url 'profileSettings' user.id %}" method="POST">
                            
                            <div class='flex flex-wrap -mx-3 mb-6'>
                                
                                <div class="personal w-full border-gray-400 pt-2">
                                    <h2 class="text-2xl text-gray-900 mb-4">Account Settings:</h2>

                                    <div class='w-full md:w-full px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                        <input 
                                            class='bg-gray-200 appearance-none block w-full text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                                            type='text'  
                                            required
                                            disabled
                                            value="{{ user.username }}" />
                                    </div>
                                    <div class="flex items-center justify-between mt-4">
                                        <div class='w-full md:w-1/2 px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                                            type='text'  
                                            required
                                            name='first_name'
                                            value="{{ user.first_name }}" />
                                        </div>
                                        <div class='w-full md:w-1/2 px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                                            type='text'  
                                            required
                                            name='last_name'
                                            value="{{ user.last_name}}" />
                                        </div>
                                    </div>

                                    <div class='w-full md:w-full px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Address</label>
                                        <input class='rounded-md leading-normal resize-none w-full  py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                                        required
                                        type="text"
                                        name="address"
                                        value="{{ user.profile.address }}"
                                        />
                                    </div>
                                    
                                    
                                    <div class='w-full md:w-full px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                        <input class='rounded-md leading-normal resize-none w-full  py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                                        required
                                        type="text"
                                        name="bio"
                                        value="{{ user.profile.bio }}"
                                        />
                                    </div>

                                    <div class='w-full md:w-full px-3 mb-6'>
                                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Summary</label>
                                        <textarea class='rounded-md leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                                        required
                                        name="summary"
                                        >Summary</textarea>
                                    </div>
                                    <div class="flex justify-end">
                                        <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                                    </div>
                                </div>
                            </div>
        </form>
    </>
  )
}

export default SettingsForm