import React from "react";

function InputForm() {
  return (
    <form className="relative shadow m-auto max-w-md flex">
      <input
        type="text"
        className="p-2 min-w-full  rounded-md border-none"
        placeholder="Search for any IP address or domain"
      />
      <button className="p-2 -ml-3  shadow-lg border-none cursor-pointer bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}

export default InputForm;
