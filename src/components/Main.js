import React, { useEffect, useState } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

let DefaultIcon = L.icon({
  ...L.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

let baseURL =
  "https://geo.ipify.org/api/v1?apiKey=at_t2aq9DdL6CJ9bpI73gasCJZ3opPCs&ipAddress=";

function Main(props) {
  const [myip, setMyip] = useState("");
  const [data, setData] = useState();

  const handleError = (err) => {
    if (err.message === "Network Error") {
      alert("No Internet. Connect to the Internet");
    } else if (err.response.status === 422) {
      alert("Enter a valid IP Address");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseURL + myip)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      });
  };

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="p-28 min-h-full text-center bg-top-banner flex-col justify-center">
          <h1 className="text-white font-bold text-2xl md:text-3xl mb-6 -mt-10">
            IP Address Tracker
          </h1>

          <form
            className="relative shadow m-auto max-w-md flex"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="p-2 min-w-full  rounded-md border-none outline-none"
              placeholder="Search for any IP address or domain"
              onChange={(e) => setMyip(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 -ml-3  shadow-lg border-none cursor-pointer bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex sm:flex-col lg:flex-row flex-col align-center justify-center -mt-16 bg-white max-w-3xl ml-auto mr-auto rounded-3xl p-10 z-50 shadow-lg ">
          {data && (
            <>
              <div className="flex flex-col justify-start border-r-2 align-top pr-10 pl-2 sm: pb-4">
                <h4 className="text-sm text-gray-600 font-semibold uppercase">
                  IP Address
                </h4>
                <span className="font-bold text-lg">{data.ip}</span>
              </div>

              <div className="flex flex-col justify-start border-r-2 align-top pr-10 pl-2 sm: pb-4">
                <h4 className="text-sm text-gray-600 font-semibold uppercase">
                  Location
                </h4>
                <span className="font-bold text-lg">
                  {data.location.city} {data.location.region}{" "}
                  {data.location.country}
                </span>
              </div>

              <div className="flex flex-col justify-start border-r-2 align-top pr-10 pl-2 sm: pb-4">
                <h4 className="text-sm text-gray-600 font-semibold uppercase">
                  Timezone
                </h4>
                <span className="font-bold text-lg">
                  {data.location.timezone}
                </span>
              </div>

              <div className="flex flex-col justify-start align-top pr-10 pl-2 sm: pb-4">
                <h4 className="text-sm text-gray-600 font-semibold uppercase">
                  ISP
                </h4>
                <span className="font-bold text-lg">{data.isp}</span>
              </div>
            </>
          )}
        </div>

        {data && (
          <MapContainer
            className="-mt-36 z-0"
            center={[data.location.lat, data.location.lng]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "600px" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.location.lat, data.location.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <ChangeMapView coords={[data.location.lat, data.location.lng]} />
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default Main;
