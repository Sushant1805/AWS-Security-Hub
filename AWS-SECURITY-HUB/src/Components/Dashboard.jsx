import React from "react";
import FailedChecks from "./FailedChecks";
import ControlStatus from "./ControlStatus";
import { RxCrossCircled } from "react-icons/rx";
const Dashboard = () => {
  var controlsCount = 501;
  const controlStatus = [
    {
      status: "Passed",
      count: "268",
    },
    {
      status: "Failed",
      count: "17",
    },
    {
      status: "No data",
      count: "6",
    },
    {
      status: "Unknown",
      count: "1",
    },
    {
      status: "Disabled",
      count: "209",
    },
  ];

  const failedChecks = [
    {
      severity: "CRITICAL",
      count: "3",
    },
    {
      severity: "HIGH",
      count: "23",
    },
    {
      severity: "MEDIUM",
      count: "32",
    },
    {
      severity: "LOW",
      count: "0",
    },
  ];
  return (
    <div className="right bg-[#0a0a0a] w-8/10 flex box-content flex-col  px-20 py-10 gap-5 ">
      <h1 className="text-3xl text-white font-bold text-start">Controls</h1>
      <div
        className="controlsDashboard  border-1 border-white 
        h-3/10 rounded-2xl mt-5 text-white flex flex-col box-content  gap-2 py-10 px-5"
      >
        <h1 className="text-2xl font-semibold ">Overview</h1>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="controls-overview-left w-9/10 h-fit gap-2 flex flex-col ">
              <h2 className="text-l font-semibold text-decoration-line: underline">
                Security Score
              </h2>
              <h1 className="text-5xl font-bold text-green-500">94%</h1>
              <h5 className="text-md text-gray-400">
                268 out of 286 control passed
              </h5>
              <h2 className="text-md font-semibold">Control Status</h2>
              <div className="flex gap-4">
                {controlStatus.map((item) => {
                  return (
                    <ControlStatus
                      key={item}
                      status={item.status}
                      count={item.count}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-px h-full bg-gray-200 mx-4" />
            <div className=" w-5/10 flex flex-col gap-2 controls-overview-right">
              <h1 className="text-l font-semibold text-decoration-line: underline">
                Failed Checks
              </h1>
              <div className="flex items-baseline">
                <h1 className="text-5xl font-bold ">58 </h1>
                <h4 className="text-md text-gray-300"> / 2893</h4>
              </div>

              <h1 className="text-sm font-semibold">
                Failed Checks by severity
              </h1>
              <div className="flex gap-5 w-8/10">
                {failedChecks.map((item) => {
                  return (
                    <FailedChecks
                      key={item}
                      severity={item.severity}
                      count={item.count}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="flex h-full gap-5">
        {/* Filter By */}
        <div className="filterBy text-white  h-8/10  w-3/10 border-1 border-white rounded-xl p-5 flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Filter by</h1>
          <ul className="text-sm">
            <div className="flex gap-5 ">
              <li>
                {" "}
                <input type="radio" id="option1" name="options" />
                <label htmlFor="option1">All</label>
              </li>
              <li>
                {" "}
                <input type="radio" id="option2" name="options" />
                <label htmlFor="option1">Enabled</label>
              </li>
              <li>
                {" "}
                <input type="radio" id="option3" name="options" />
                <label htmlFor="option1">Disabled</label>
              </li>
            </div>
          </ul>
          <h1 className="text-xl font-semibold">Control Status</h1>
          <ul className="text-sm text-blue-500 font-semibold">
            <li>Failed</li>
            <li>Passed</li>
            <li>Unknown</li>
            <li>No data</li>
          </ul>
        </div>

        {/* All Filters */}
        <div className="allControls text-white h-8/10 w-/10 border-1 border-white rounded-xl p-5 flex flex-col gap-2 overflow-scroll">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">
              All Controls ({controlsCount}){" "}
            </h1>
            <button class="border-2 border-blue-400 hover:text-blue-400  text-blue-800 font-semibold py-2 px-6  inline-flex w-2/10 h-9 items-center rounded-2xl text-white">
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>

          <input
            className="border-1 border-white px-2 py-2 w-5/10 rounded-md h-8"
            type="text"
            name=""
            id=""
            placeholder="Filter Controls"
          />

          <div className="flex gap-5">
            <div className="h-7 bg-blue-100 w-50 box-border px-2 border-2 border-blue-800 rounded-xl flex justify-around">
              <h1 className="text-black text-sm font-semibold">
                Control Status = FAILED{" "}
              </h1>
              <RxCrossCircled className="text-black h-6" />
            </div>
            <button className="h-7 bg-blue-100 w-2/10 box-border px-2 py-0.5 border-2 border-blue-800 rounded-xl flex justify-around text-blue-800 font-semibold text-sm">
              Clear filters
            </button>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {/* Header */}
            <div className="grid grid-cols-6 font-semibold">
              <div>ID</div>
              <div>Title</div>
              <div>Control Status</div>
              <div>Severity</div>
              <div>Failed Checks</div>
              <div>Custom Parameters</div>
            </div>

            {/* Rows */}
            <div className="grid grid-cols-6">
              <div>IAM.1</div>
              <div>Avoid the use of root account</div>
              <div className="text-green-600 font-semibold">PASSED</div>
              <div className="text-red-600 font-semibold">High</div>
              <div>0</div>
              <div>-</div>
            </div>

            <div className="grid grid-cols-6">
              <div>IAM.1</div>
              <div>Avoid the use of root account</div>
              <div className="text-green-600 font-semibold">PASSED</div>
              <div className="text-red-600 font-semibold">High</div>
              <div>0</div>
              <div>-</div>
            </div>

            <div className="grid grid-cols-6">
              <div>IAM.1</div>
              <div>Avoid the use of root account</div>
              <div className="text-green-600 font-semibold">PASSED</div>
              <div className="text-red-600 font-semibold">High</div>
              <div>0</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
