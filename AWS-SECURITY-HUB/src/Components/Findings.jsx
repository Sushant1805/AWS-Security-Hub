import React, { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import FailedChecks from './FailedChecks';
import WorkflowProgress from './WorkflowProgress';

const Findings = () => {
  const dummyData = [
    {
      finding: "Open port detected",
      severity: "High",
      workflowStatus: "New",
      region: "us-east-1",
      accountId: "123456789012",
      product: "Amazon EC2",
      resource: "i-0abcd1234efgh5678",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-17",
    },
    {
      finding: "IAM policy too permissive",
      severity: "Medium",
      workflowStatus: "InProgress",
      region: "us-west-2",
      accountId: "234567890123",
      product: "IAM",
      resource: "policy/AllowAll",
      complianceStatus: "Compliant",
      updatedAt: "2025-04-15",
    },
    {
      finding: "Outdated SSL certificate",
      severity: "Low",
      workflowStatus: "Resolved",
      region: "eu-central-1",
      accountId: "345678901234",
      product: "Amazon CloudFront",
      resource: "dist/abc123",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-16",
    },
    {
      finding: "Unencrypted S3 bucket",
      severity: "High",
      workflowStatus: "New",
      region: "ap-south-1",
      accountId: "456789012345",
      product: "S3",
      resource: "bucket-name",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-14",
    },
    // repeat to show scroll
    {
      finding: "Open port detected",
      severity: "High",
      workflowStatus: "New",
      region: "us-east-1",
      accountId: "123456789012",
      product: "Amazon EC2",
      resource: "i-0abcd1234efgh5678",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-17",
    },
    {
      finding: "IAM policy too permissive",
      severity: "Medium",
      workflowStatus: "InProgress",
      region: "us-west-2",
      accountId: "234567890123",
      product: "IAM",
      resource: "policy/AllowAll",
      complianceStatus: "Compliant",
      updatedAt: "2025-04-15",
    },
    {
      finding: "Outdated SSL certificate",
      severity: "Low",
      workflowStatus: "Resolved",
      region: "eu-central-1",
      accountId: "345678901234",
      product: "Amazon CloudFront",
      resource: "dist/abc123",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-16",
    },
    {
      finding: "Unencrypted S3 bucket",
      severity: "High",
      workflowStatus: "New",
      region: "ap-south-1",
      accountId: "456789012345",
      product: "S3",
      resource: "bucket-name",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-14",
    },
  ];

  const [selectedSeverity, setSelectedSeverity] = useState("");

  const handleSeverityChange = (e) => {
    setSelectedSeverity(e.target.value);
  };

  const filteredData = selectedSeverity
    ? dummyData.filter((item) => item.severity === selectedSeverity)
    : dummyData;

  return (
    <div className='bg-[#eaebf0] min-h-screen w-full flex justify-center px-4 py-6'>
      <div className='bg-[#f8f9fb] px-4 py-5 w-9/10 rounded-xl h-6/10 flex flex-col gap-5'>
        <h1 className='text-2xl font-semibold'>Findings</h1>

        {/* Search and Export */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <input
            className='bg-white border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/3'
            type="text"
            placeholder='Add filter'
          />
          <button className='flex items-center justify-center gap-2 border border-gray-500 px-4 py-2 rounded-2xl text-blue-500 font-semibold w-fit self-end md:self-auto'>
            <FiUpload className='w-5 h-5' />
            Export
          </button>
        </div>

        {/* Table */}
        <div className="overflow-auto max-h-[500px]">
          <div className="min-w-[1200px]">
            {/* Table Header */}
            <div className="grid grid-cols-10 gap-2 font-semibold border-b border-gray-300 py-2 sticky top-0 bg-[#f8f9fb] z-10">
              <div><input type="checkbox" /></div>
              <div>Finding</div>
              <div>Severity</div>
              <div>Workflow</div>
              <div>Region</div>
              <div>Account</div>
              <div>Product</div>
              <div>Resource</div>
              <div>Compliance</div>
              <div>Updated</div>
            </div>

            {/* Table Rows */}
            {filteredData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-10 gap-2 items-center py-2 border-b border-gray-200"
              >
                <div><input type="checkbox" /></div>
                <div className="break-words whitespace-normal">{item.finding}</div>
                <div><FailedChecks severity={item.severity} /></div>
                <div><WorkflowProgress status={item.workflowStatus} /></div>
                <div className="break-words whitespace-normal">{item.region}</div>
                <div className="break-words whitespace-normal">{item.accountId}</div>
                <div className="break-words whitespace-normal">{item.product}</div>
                <div className="break-words whitespace-normal">{item.resource}</div>
                <div className="break-words whitespace-normal">{item.complianceStatus}</div>
                <div className="break-words whitespace-normal">{item.updatedAt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findings;
