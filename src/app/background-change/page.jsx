"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useEffect, useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("");

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-center font-semibold text-2xl mb-8">
          Change background color on button click
        </h2>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
            onClick={() => {
              changeColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center"
            onClick={() => {
              changeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-center"
            onClick={() => {
              changeColor("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-center"
            onClick={() => {
              changeColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 text-center"
            onClick={() => {
              changeColor("pink");
            }}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default ColorChange;
