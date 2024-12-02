import React from 'react';

interface ResultTableProps {
  result: Record<string, any>;
}

const ResultTable: React.FC<ResultTableProps> = ({ result }) => {
  const renderValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      return <NestedTable data={value} />;
    } else if (typeof value === 'object' && value !== null) {
      return (
        <table className="border-collapse border mt-2 border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-200 text-homeblack">
              {Object.keys(value).map((key) => (
                <th key={key} className="border border-gray-300 px-4 py-2">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.entries(value).map(([key, val]) => (
                <td key={key} className="border text-homegrey border-gray-300 px-4 py-2">
                  {String(val)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      );
    } else {
      return String(value);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <p className="text-homeblack text-[24px] font-medium">Results:</p>
      <table className="border-collapse min-w-[500px] border mt-4 border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-grey text-homeblack">
            <th className="border border-gray-300 px-4 py-2">Key</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(result).map(([key, value]) => (
            <tr key={key}>
              <td className="border text-homeblack flex items-start border-gray-300 min-h-full px-4 py-2 font-medium">{key}</td>
              <td className="border text-homegrey border-gray-300 px-4 py-2">
                {renderValue(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// A nested table for rendering items in an array as rows with their keys as headers
const NestedTable: React.FC<{ data: any[] }> = ({ data }) => {
  // Check if all array items are objects
  const allObjects = data.every((item) => typeof item === 'object' && item !== null);

  return (
    <table className="border-collapse border mt-2 border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-200 text-homeblack">
          {allObjects && data.length > 0
            ? Object.keys(data[0]).map((key) => (
                <th key={key} className="border border-gray-300 px-4 py-2">{key}</th>
              ))
            : <th colSpan={data.length} className="border border-gray-300 px-4 py-2">Array Values</th>
          }
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {allObjects
              ? Object.entries(item).map(([key, value]) => (
                  <td key={key} className="border text-homegrey border-gray-300 px-4 py-2">
                    {String(value)}
                  </td>
                ))
              : <td colSpan={1} className="border text-homegrey border-gray-300 px-4 py-2">
                  {String(item)}
                </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
