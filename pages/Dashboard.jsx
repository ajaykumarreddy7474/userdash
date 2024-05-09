import { HomeIcon } from '@heroicons/react/outline';
import Cards from '../components/Cards';
import Header from '../components/Header';
import TableDashboard from '../components/TableDashboard';
const Dashboard = () => {
  return (
    <div className=" ">
<Header />
{/* ------------------------------------ - ----------------------------------- */}  
<div className="w-full ">
      <div className="flex flex-row items-center justify-start bg-slate-200 border-b-slate-300 p-1 md:mx-20 md:my-5 md:px-10 md:gap-4">
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
    {/* ------------------------------------ - ----------------------------------- */}  
  
    <Cards/>

  <TableDashboard />
    </div>

  )
}

export default Dashboard