

const Table = () => {
  return (
    <div className="container mx-auto pt-10">
      <div className="overflow-x-auto px-20">
        <table className="w-full border-2 border-gray-300 bg-gray-50 rounded-lg">
          <thead className="bg-slate-100 text-slate-500 text-xs">
            <tr>
              <th className="px-10 py-3 text-left ">NAME</th>
              <th className="px-6 py-3 text-center">DATE TIME</th>
              <th className="px-6 py-3 text-center">STATUS</th>
              
            </tr>
          </thead>
          <tbody>
            <TableRow   name="Jane Copper" subject="Maths" date="9th March 2024" status="Completed" role="Owner"  />
            <TableRow   name="Cody Fisher" subject="Maths" date="9th March 2024"  status="Pending" role="Owner" />
            <TableRow  name="Ether Howard" subject="Maths" date="9th March 2024" status="Failed" role="Member"  />
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableRow = ({ name, subject, date, status, job }) => {
    let statusColorClass = "";
    switch (status) {
      case "Completed":
        statusColorClass = "bg-green-200";
        break;
      case "Failed":
        statusColorClass = "bg-red-200";
        break;
      case "Pending":
        statusColorClass = "bg-yellow-200";
        break;
      default:
        statusColorClass = "bg-gray-200";
    }
  
    return (
      <tr className={`border-b border-gray-400 `}>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="ml-4 text-left">
              <div className="text-sm font-medium text-gray-900 flex-row  ">{name}</div>
              <div className="text-sm text-gray-500">{subject}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 text-center">
          <div className="text-sm text-gray-900 font-semibold">{date}<br/>{job}</div>
        </td>
        <td className="px-6 py-4 text-center">
          <span className={`px-5 py-1 text-sm rounded-full font-semibold ${statusColorClass}`}>{status}  </span> <span className="px-6  py-4 text-blue-400 cursor-pointer">View details</span>
        </td>
      
      </tr>
    );
  };
  

export default Table;
