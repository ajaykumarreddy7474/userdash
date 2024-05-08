import { HomeIcon, UsersIcon } from '@heroicons/react/outline';
import Image from "next/image";
import Link from "next/link";
import Logo from '../public/logo.png';

const Sidebar = ({children}) => {
  return (
    <div className="flex">
    
        <div className="fixed w-60 h-screen pt-8 py-3 pr-1  bg-blue-900  flex flex-col justify-between">

            <div className="flex flex-col items-center gap-5 ml-10 ">
                    <Link href='/Home'>
                        <div className='mr-10 ' ><Image src={Logo} alt="Logo" /></div>
                    </Link>
                    
<div className="text-left mt-5">
                    <Link href='/Dashboard' >
                        <div className="flex gap-5 text-white pr-20 items-center hover:bg-blue-800 rounded-md  px-2  py-4 mr-8">
                    <div className=""><HomeIcon className="w-6 h-6 text-white-500" /></div>
                    <div ><h1>Dashboard</h1></div>
                </div>
                </Link>
                <Link href='/'>
                        <div className="flex gap-5 text-white pr-5 items-center hover:bg-blue-800 rounded-md px-2 py-4 mr-8">
                    <div className=""> <UsersIcon className="w-6 h-6 text-white" /></div>
                    <div ><h1>Users</h1></div>
                </div>
                </Link>
               
                </div>

            </div>

        </div> 
    
       <main className="ml-60 w-full ">{children}</main>
    </div>
  )
}

export default Sidebar