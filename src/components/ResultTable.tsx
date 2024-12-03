import React from 'react';

interface ResultTableProps {
  result: Record<string, any>;
  lastSegment: any;
}

const ResultTable: React.FC<ResultTableProps> = ({ result, lastSegment }:any) => {
  console.log(result);
  
  const renderTableForArray = (data: any[]) => {
    // Check if all items are objects and get the unique keys
    const headers = Array.from(
      new Set(data.flatMap((item) => (typeof item === 'object' && item !== null ? Object.keys(item) : [])))
    );
    return (
      <table className="border-collapse border mt-4 border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-200 text-homeblack">
            {headers.map((header) => (
              <th key={header} className="border border-gray-300 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={`${rowIndex}-${header}`} className="border text-homegrey border-gray-300 px-4 py-2">
                  {row[header] !== undefined ? String(row[header]) : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return <p className="text-homegrey">0</p>;
      }
      if (value.every((item) => typeof item === 'object' && item !== null)) {
        // If all items are objects, render a nested table
        return renderTableForArray(value);
      }
      return value.map((item, index) => (
        <p key={index} className="mb-1 text-homegrey">
          {String(item)}
        </p>
      ));
    } else if (typeof value === 'object' && value !== null) {
      if (Object.keys(value).length === 0) {
        return <p className="text-homegrey">0</p>;
      }
      return (
        <div>
          {Object.entries(value).map(([key, val], index) => (
            <p key={index} className="mb-1 text-homegrey">
              <span className="text-homeblack font-semibold">{key}</span>: 
              <span className="ml-3">{String(val)}</span>
            </p>
          ))}
        </div>
      );
    } else {
      return <span>{String(value)}</span>;
    }
  };

  // The render function that renders the DNS records
  const render = (value: any) => {
    return  value.map((elem: any, key: any) => (
      
      <div key={key}>
        {Object.entries(elem).map(([key, value]) => (
          <div key={key} className=" text-homeblack flex items-start border-b-0 border-x-0 border-gray-300 px-4 py-2 ">
            <span className='font-semibold'>{key}</span>: <span className='text-homegrey mx-4'>{String(value)}</span>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="w-full overflow-x-auto">
      <p className="text-homeblack text-[24px] font-medium">Results:</p>
      {(lastSegment === 'find-dns-records' ) && (
        <div>
          {Object.entries(result).map(([key, value]) => (
            <div key={key}>
              <p className="text-[20px] my-3 p-4 rounded-lg bg-lightblue font-semibold text-homeblack">{key}</p>
              <div className=" bg-grey p-3 rounded-lg text-homegrey border-gray-300 px-4 py-2">
                {/* Render the value as string or nested structure */}
                {render(value)}
              </div>
            </div>
          ))}
        </div>
      )}
            {lastSegment === 'keyword-density-checker' && (
          <div>
            <p className="text-homeblack text-[20px] font-medium mb-4">Total Words: <span className="text-homegrey">{result.total_words}</span></p>
            <table className="border-collapse min-w-[500px] border mt-4 border-gray-300 w-full text-left">
              <thead>
                <tr className="bg-gray-200 text-homeblack">
                  <th className="border border-gray-300 px-4 py-2">Keyword</th>
                  <th className="border border-gray-300 px-4 py-2">Count</th>
                  <th className="border border-gray-300 px-4 py-2">Density (%)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(result.keyword_density).map(([keyword, data]: [string, any]) => (
                  <tr key={keyword}>
                    <td className="border text-homeblack border-gray-300 px-4 py-2">{keyword}</td>
                    <td className="border text-homegrey border-gray-300 px-4 py-2">{data.count}</td>
                    <td className="border text-homegrey border-gray-300 px-4 py-2">{data.density.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
            {lastSegment === 'robots-txt-generator' && (
   <div className="w-full overflow-x-auto">
<pre> {result}</pre>
 </div>
        )}
      {(lastSegment === 'server-status-checker') && (
  <table className="border-collapse min-w-[500px] border mt-4 border-gray-300 w-full text-left">
    <thead>
      <tr className="bg-gray-200 text-homeblack">
        {Object.keys(result[0]).map((header) => (
          <th key={header} className="border border-gray-300 px-4 py-2">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {result.map((row:any, rowIndex:any) => (
        <tr key={rowIndex}>
          {Object.values(row).map((value, cellIndex) => (
            <td key={cellIndex} className="border text-homegrey border-gray-300 px-4 py-2">
              {String(value)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)}

{
  (lastSegment !== 'find-dns-records' && lastSegment !== 'server-status-checker' && lastSegment !== 'keyword-density-checker'  && lastSegment !== 'robots-txt-generator') && (

      <table className="border-collapse min-w-[500px] border mt-4 border-gray-300 w-full text-left">
        <tbody>
          {Object.entries(result).map(([key, value]) => (
            <tr key={key}>
              <td className="border text-homeblack flex items-start border-b-0 border-x-0 border-gray-300 px-4 py-2 font-medium">
                {key}
              </td>
              <td className="border text-homegrey border-gray-300 px-4 py-2">
                {renderValue(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>)
      }
    </div>
  );
};

export default ResultTable;
