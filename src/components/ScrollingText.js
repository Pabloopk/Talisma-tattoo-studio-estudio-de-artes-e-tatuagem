import React from "react";

const ScrollingText = ({ text, speed = 10}) => {
  return (
    <div className="container relative mt-20 transition-all h-32 flex items-right ">
      <div
        className="absolute whitespace-nowrap animate-scrolling"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span
          className="text-[100px] font-extrabold  uppercase text-transparent"
          style={{
            WebkitTextStroke: "2px gray",
             // Define a cor e a espessura da borda
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;