import { useParams } from "react-router-dom";
import { Bms } from "./home";

export default function Switches() {
  const { ip } = useParams();
  return (
    <div className="p-4 flex flex-col">
      <Bms />
      <button
        className="w-[90vw] mt-10 bg-blue-500 p-4 rounded-lg text-white nunito text-lg font-bold"
        onClick={async () => {
          try {
            await fetch(`http://${ip}:80/relay/on?relay=1`);
            console.log("sent");
          } catch {
            console.log("error");
          }
        }}
      >
        Turn on fan
      </button>
      <button
        className="w-[90vw] mt-4 bg-blue-500 p-4 rounded-lg text-white nunito text-lg font-bold"
        onClick={async () => {
          try {
            await fetch(`http://${ip}:80/relay/off?relay=1`);
            console.log("sent");
          } catch {
            console.log("error");
          }
        }}
      >
        Turn off fan
      </button>
      <button
        className="w-[90vw] mt-4 bg-blue-500 p-4 rounded-lg text-white nunito text-lg font-bold"
        onClick={async () => {
          try {
            await fetch(`http://${ip}:80/relay/on?relay=2`);
            console.log("sent");
          } catch {
            console.log("error");
          }
        }}
      >
        Turn on bulb
      </button>
      <button
        className="w-[90vw] mt-4 bg-blue-500 p-4 rounded-lg text-white nunito text-lg font-bold"
        onClick={async () => {
          try {
            await fetch(`http://${ip}:80/relay/off?relay=2`);
            console.log("sent");
          } catch {
            console.log("error");
          }
        }}
      >
        Turn off bulb
      </button>
    </div>
  );
}
