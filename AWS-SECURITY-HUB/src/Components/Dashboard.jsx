import React from "react";
import FailedChecks from "./FailedChecks";
import ControlStatus from "./ControlStatus";

import AppliedFilter from "./AppliedFilter";
import BasicPie from "./BasicPie";
import TickPlacementBars from "./TickPlacementBars";
import DataTable from "./DataTable";
const Dashboard = () => {
  var controlsCount = 501;


  const failedChecks = [
    { severity: "CRITICAL", count: "3" },
    { severity: "HIGH", count: "23" },
    { severity: "MEDIUM", count: "32" },
    { severity: "LOW", count: "0" },
  ];

  return (
    <div className="bg-[#010409] w-full h-fit flex flex-col px-4 md:px-20 py-10 gap-5">
      <h1 className="text-3xl text-white font-bold text-start">Controls</h1>
        <div className="two_containers flex gap-5">
          
      <div className="controlsDashboard border border-white rounded-2xl mt-5   text-white flex bg-gray-800 w-5/10 py-5 px-5 ">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold underline">Security Score</h2>
          <h1 className="text-5xl font-bold text-green-500">94%</h1>
          <h5 className="text-md text-gray-400">
            268 out of 286 control passed
          </h5>
          <h2 className="text-md font-semibold">Control Status</h2>
        </div>
        <BasicPie className="text-white" />
        </div>

        <div className="controlsDashboard border border-white rounded-2xl mt-5   text-white flex bg-gray-800 w-5/10 py-5 px-5 ">
        <div className="flex flex-col justify-center">
        <h2 className="text-lg font-semibold underline">Failed Checks</h2>
        <div className="flex items-baseline">
                  <h1 className="text-5xl font-bold">58 </h1>
                  <h4 className="text-md text-gray-300"> / 2893</h4>
                </div>
        </div>
        <TickPlacementBars className="text-white" />
        </div>


        
        </div>
        <DataTable/>
       

        {/* Divider */}
        {/* <div className="hidden lg:block w-px bg-gray-200 mx-4" /> */}

        {/* Right */}
        {/*  */}
     

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* <div className="filterBy text-white w-full lg:w-1/3 border border-white rounded-xl p-5 flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Filter by</h1>
          <ul className="text-sm">
            <div className="flex flex-wrap gap-5">
              <li>
                <input type="radio" id="option1" name="options" />
                <label htmlFor="option1">All</label>
              </li>
              <li>
                <input type="radio" id="option2" name="options" />
                <label htmlFor="option2">Enabled</label>
              </li>
              <li>
                <input type="radio" id="option3" name="options" />
                <label htmlFor="option3">Disabled</label>
              </li>
            </div>
          </ul>
          <h1 className="text-xl font-semibold">Control Status</h1>
          <ul className="text-sm text-blue-500 font-semibold">
            <li>Failed</li>
            <li>Passed</li>
            <li>Unknown</li>
            <li>No data</li>
          </ul> */}
      </div>

      {/* All Controls
        <div className="allControls h-100 text-white  w-full lg:w-2/3 border border-white rounded-xl p-5 flex flex-col gap-2 overflow-scroll ">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <h1 className="text-xl font-semibold">All Controls ({controlsCount})</h1>
            <button className="border-2 border-blue-400 hover:text-blue-400 text-blue-800 font-semibold py-2 px-4 inline-flex items-center rounded-2xl text-white">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>

          <input
            className="border border-white px-2 py-2 w-full sm:w-1/2 rounded-md h-8"
            type="text"
            placeholder="Filter Controls"
          />

          <div className="flex flex-wrap gap-3">
          <AppliedFilter filterName="Product name" value="Config"/>
            <button className="h-7 bg-blue-100 px-2 border-2 border-blue-800 rounded-xl text-blue-800 font-semibold text-sm">
              Clear filters
            </button>
          </div>

          {/* Table */}
      {/* <div className="flex flex-col gap-2 text-sm overflow-auto">
            <div className="grid grid-cols-2 sm:grid-cols-7 font-semibold gap-2">
              <div></div>
              <div>ID</div>
              <div>Title</div>
              <div>Control Status</div>
              <div>Severity</div>
              <div>Failed Checks</div>
              <div>Custom Parameters</div>
            </div>

            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                <input className="w-4 h-4" type="radio" />
                <div>IAM.1</div>
                <div>Avoid the use of root account</div>
                <div className="text-green-600 font-semibold">PASSED</div>
                <div className="text-red-600 font-semibold">High</div>
                <div>0</div>
                <div>-</div>
              </div>
            ))}
          </div>
        </div>*/}
    </div>
  );
};

export default Dashboard;
