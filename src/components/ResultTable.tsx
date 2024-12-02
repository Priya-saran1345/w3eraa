import { div } from 'framer-motion/client';
import React from 'react';

interface ResultTableProps {
  result: Record<string, any>;
}

const ResultTable: React.FC<ResultTableProps> = ({ result }) => {
  const renderValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc pl-5">
          {value.map((item, index) => (
            // <li key={index}>
            <div key={index}>
              {typeof item === 'object' && item !== null ? (
                // Render a nested table if item is an object
                <NestedTable data={item} />
              ) : (
                // Render a normal value if it's not an object
                renderValue(item)
              )}
            {/* </li> */}
            </div>

          ))}
        </ul>
      );
    } else if (typeof value === 'object' && value !== null) {
      return (
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(value, null, 2)}
        </pre>
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

// A nested table for rendering dictionary items inside an array
const NestedTable: React.FC<{ data: Record<string, any> }> = ({ data }) => {
  return (
    <table className="border-collapse border mt-2 border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-200 text-homeblack">
          <th className="border flex  items-start border-gray-300 px-4 py-2">Key</th>
          <th className="border border-gray-300 px-4 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="border  flex  items-start text-homeblack border-gray-300 px-4 py-2 font-medium">{key}</td>
            <td className="border text-homegrey border-gray-300 px-4 py-2">
              {typeof value === 'object' && value !== null ? (
                <pre className="whitespace-pre-wrap">{JSON.stringify(value, null, 2)}</pre>
              ) : (
                String(value)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
