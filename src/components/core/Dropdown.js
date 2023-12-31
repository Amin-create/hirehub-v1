import { Menu, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { Icons } from '..'
import avatar from "../../assets/images/avatars/8.png"

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left -ml-3">
            <div>
                <Menu.Button className="inline-flex w-full justify-center items-center gap-x-2 rounded-md hover:bg-black/10 px-2 py-1">
                    <div class="relative inline-block">
                        <img class="inline-block h-[32px] w-[32px] rounded-full" src={avatar} alt="Image Description" />
                        <span class="absolute bottom-0 end-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-1"></span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-black-1 text-[14px] leading-[20px] font-medium'>Wells Fargo</span>
                        <span className='text-gray-6 text-[12px] leading-[18px]'>Admin</span>
                    </div>
                    <Icons.GoChevronDown
                        className="ml-1 h-5 w-5 text-gray-1 hover:text-violet-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <Icons.BsCardText className="mr-2 h-5 w-5 text-white" />
                                    ) : (
                                        <Icons.BsCardText className="mr-2 h-5 w-5 text-[purple]" />
                                    )}
                                    View Profile
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <Icons.BsCardText className="mr-2 h-5 w-5 text-white" />
                                    ) : (
                                        <Icons.BsCardText className="mr-2 h-5 w-5 text-[purple]" />
                                    )}
                                    Change Password
                                </button>
                            )}
                        </Menu.Item>
                    </div>                     
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <Icons.BsCardText className="mr-2 h-5 w-5 text-white" />
                                    ) : (
                                        <Icons.BsCardText className="mr-2 h-5 w-5 text-[purple]" />
                                    )}
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
} 
