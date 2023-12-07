import React from "react";
import image1 from "../images/logistics.png";

function LogisticsSection() {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 justify-center bg-black">
          <div className="grid grid-cols-3">
            <div className="pl-28">
              <h1 className="text-white text-lg font-semibold mt-28 mb-10 ">
                Logistics and <br />
                Trucking
              </h1>
              <ul className="text-gray-500 space-y-8 ">
                <li>
                  Hazardous <br />
                  Cargo
                </li>
                <li>School </li>
                <li>Concretec </li>
                <li>
                  Machinery- <br />
                  Infra
                </li>
                <li>
                  Automobile <br />
                  Industries
                </li>
              </ul>
            </div>
            <div className="col-span-2 ml-12">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="pl-28">
            <div>
              <h1 className="text-white text-3xl font-semibold mt-24">Logistics and Trucking</h1>

              <h4 className="text-gray-200 text-lg mt-4 mb-1">Support for wired and wirefree (battery based) trackers</h4>
              <p className="text-gray-500">
                Geo-fence with real-time alerts <br />
                Keep all stakeholders informed about real-time status of
                vehicles <br />
                Proof of delivery, customer feedback taken real-time <br />
                Fleet utilisation metric analysis
              </p>

              <h4 className="text-gray-200 text-lg mt-4 mb-1">Vehicle Maintenance Alerts</h4>
              <p className="text-gray-500">
                Multiple mobile apps for end user, customer, manager that work
                <br />
                in sync with the device fitted on the vehicles. <br />
                Configurable dashboard, landing page and reports Safety <br />
                analytics Automatic Report Scheduling
              </p>
            </div>
            <div>
              <h1 className="text-white text-3xl font-semibold mt-20">Hazardous Cargo</h1>

              <p className="text-gray-500">
                3-axis accelerometer data integrated with speed info to
                <br />
                analyze driving safety analytics <br />
                Real-time in cabin alerts for the driver <br />
                Safe To Load work – flow automation <br />
                Journey Risk Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogisticsSection;
