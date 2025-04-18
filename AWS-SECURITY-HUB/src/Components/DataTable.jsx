import * as React from 'react';

const rows = [
  { id: 'IAM.1', title: 'Avoid the use of root account', controlStatus: 'PASSED', severity: 'High', failedChecks: 0, customParameters: '-' },
  { id: 'IAM.2', title: 'Require multi-factor authentication', controlStatus: 'FAILED', severity: 'Critical', failedChecks: 2, customParameters: 'MFA setup required' },
  { id: 'IAM.3', title: 'Use of least privilege', controlStatus: 'PASSED', severity: 'Medium', failedChecks: 1, customParameters: 'Review IAM roles' },
  { id: 'IAM.4', title: 'Ensure strong passwords', controlStatus: 'PASSED', severity: 'Low', failedChecks: 0, customParameters: '-' },
];

export default function DataTable() {
  return (
    <div className="overflow-auto text-white bg-gray-700 rounded-2xl py-2 px-2">
      {/* Table Header */}
      <h1>All Controls</h1>
      <div className="grid grid-cols-2 sm:grid-cols-7 font-semibold gap-2 mb-4">
        <div></div>
        <div>ID</div>
        <div>Title</div>
        <div>Control Status</div>
        <div>Severity</div>
        <div>Failed Checks</div>
        <div>Custom Parameters</div>
      </div>

      {/* Table Rows */}
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-2 sm:grid-cols-7 gap-2 mb-2 items-center">
          {/* Radio Button */}
          <input type="radio" className="w-4 h-4" />
          <div>{row.id}</div>
          <div>{row.title}</div>
          <div className={`font-semibold ${row.controlStatus === 'PASSED' ? 'text-green-600' : 'text-red-600'}`}>
            {row.controlStatus}
          </div>
          <div className={row.severity === 'Critical' ? 'text-red-600' : row.severity === 'High' ? 'text-orange-600' : row.severity === 'Medium' ? 'text-yellow-600' : 'text-green-600'}>
            {row.severity}
          </div>
          <div>{row.failedChecks}</div>
          <div>{row.customParameters}</div>
        </div>
      ))}
    </div>
  );
}
