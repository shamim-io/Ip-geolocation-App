import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="flex flex-col">
      <div className="p-24 min-h-full text-center bg-top-banner flex-col justify-center">
        <h1 className="text-white font-bold text-2xl md:text-3xl mb-6 ">
          IP Address Tracker
        </h1>
        <InputForm />
      </div>

      <div className="flex sm:flex-col lg:flex-row flex-col align-center justify-center -mt-12 bg-white max-w-3xl ml-auto mr-auto rounded-3xl p-10 z-50 shadow-lg ">
        <div className="flex flex-col justify-center border-r-2 align-top pr-10 pl-2 sm: pb-4">
          <h4 className="text-sm text-gray-600 font-semibold uppercase">
            IP Address
          </h4>
          <span className="font-bold text-lg">192.212.174.101</span>
        </div>

        <div className="flex flex-col justify-center border-r-2 align-top pr-10 pl-2 sm: pb-4">
          <h4 className="text-sm text-gray-600 font-semibold uppercase">
            IP Address
          </h4>
          <span className="font-bold text-lg">192.212.174.101</span>
        </div>

        <div className="flex flex-col justify-center border-r-2 align-top pr-10 pl-2 sm: pb-4">
          <h4 className="text-sm text-gray-600 font-semibold uppercase">
            IP Address
          </h4>
          <span className="font-bold text-lg">192.212.174.101</span>
        </div>

        <div className="flex flex-col justify-center align-top pr-10 pl-2 sm: pb-4">
          <h4 className="text-sm text-gray-600 font-semibold uppercase">
            IP Address
          </h4>
          <span className="font-bold text-lg">192.212.174.101</span>
        </div>
      </div>

      <div className="p-4 gray-500">map</div>
    </div>
  );
}

export default App;
