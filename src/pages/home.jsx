import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function Home() {
  const [ip, setIp] = useState("");
  return (
    <div className="w-screen p-4 ">
      <Bms />
      <div className="mt-10 text-lg text-slate-600 nunito text-center">
        Smart Home Automation Project by:
      </div>
      <div className="text-center text-xl mt-10 text-blue-500 font-bold nunito">
        Mayank Jaiswal
      </div>
      <div className="text-center text-xl text-blue-500 font-bold nunito">
        Aarya Mohan
      </div>
      <div className="text-center text-xl text-blue-500 font-bold nunito">
        Bhuvana
      </div>
      <div className="text-center text-xl text-blue-500 font-bold nunito">
        Prasanna
      </div>
      <input
        type="text"
        placeholder="Enter IP address of the nodemcu"
        className="bg-slate-300 outline-none text-blue-500 nunito text-lg font-bold focus:outline-blue-500 w-[90vw] h-16 rounded-lg mt-10 mb-4 p-2"
        value={ip}
        onChange={(e) => {
          setIp(e.target.value);
        }}
      />
      <Link to={`/switches/${ip}`}>
        <button className="bg-blue-500 p-4 w-[90vw] rounded-lg text-lg text-white">
          Continue
        </button>
      </Link>
    </div>
  );
}

export function Bms() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/1200px-BMS_College_of_Engineering.svg.png"
        alt=""
        className="w-24 h-24 mx-auto"
      />
      <div className="text-center p-2 nunito font-semibold text-xl">
        Department of Electronics and Telecommunication Engineering
      </div>
    </div>
  );
}
