import { BellIcon, HomeIcon, SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import T7 from '../public/four4.jpg';

const Dashboard = () => {
  return (
    <div className="bg-slate-200 min-h-screen ">


<div className="flex justify-between items-center px-6 py-4 bg-slate-200 border-b-slate-300 border-2 ">
        <div className="flex items-center gap-2 md:w-auto ">
          <SearchIcon className="w-6 h-6 text-gray-500" />
          <input type="text" placeholder="Search" className="relative font-semibold border-none px-2 bg-slate-200" />
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-0">
          <BellIcon className="w-6 h-6 text-gray-500 mr-2" />
          <div className="h-8 w-8 relative">
            <Image src={T7} alt="Profile Picture" layout="fill" className="rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full ">
      <div className="flex flex-row items-center justify-start bg-gray-300 border-b-slate-200 p-1 md:mx-20 md:my-5 md:px-10 md:gap-4">
        <div className="flex items-center gap-2 relative">
          <HomeIcon className="w-6 h-6" />
        
        </div>
        <div className="relative w-14 h-14 mx-3 bg-slate-100 clip-path-polygon"></div>
        <div className="flex items-center">
          <span>Dashboard</span>
        </div>
        <div className="relative w-14 h-14 mx-3 bg-slate-100 clip-path-polygon"></div>
      </div>
    </div>

<div className="px-20">
    <div class="w-full h-96 bg-slate-300 border-dashed border-4 border-slate-400">
      
    </div>
    </div>
    </div>
  )
}

export default Dashboard