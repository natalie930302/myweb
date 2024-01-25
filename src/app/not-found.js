"use client";
import { useState, useEffect } from "react";

const NotFound = () => {
  const [cx, setCx] = useState(115);
  const [cy, setCy] = useState(50);

  useEffect(() => {
    const handleMouseMove = (evt) => {
      const x = evt.clientX / window.innerWidth;
      const y = evt.clientY / window.innerHeight;

      setCx(115 + 30 * x);
      setCy(50 + 30 * y);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <head>
        <title>404 Not Found</title>
      </head>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Bungee&display=swap");
          body {
            background: #1b1b1b;
            color: white;
            font-family: "Bungee", sans-serif;
            margin-top: 50px;
            text-align: center;
            margin-top: 10%;
          }
          a {
            color: #2aa7cc;
            text-decoration: none;
          }
          a:hover {
            color: white;
          }
          svg {
            width: 50vw;
            margin: auto;
          }
          .lightblue {
            fill: #444;
          }
          .eye {
            cx: ${cx}px;
            cy: ${cy}px;
          }
          #eye-wrap {
            overflow: hidden;
          }
          .error-text {
            font-size: 120px;
          }
          .alarm {
            animation: alarmOn 0.5s infinite;
          }
          @keyframes alarmOn {
            to {
              fill: darkred;
            }
          }
        `}
      </style>
      <body>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="robot-error"
          viewBox="0 0 260 118.9"
        >
          <defs>
            <clipPath id="white-clip">
              <circle id="white-eye" fill="#cacaca" cx="130" cy="65" r="20" />
            </clipPath>
            <text id="text-s" className="error-text" y="106">
              404
            </text>
          </defs>
          <path
            className="alarm"
            fill="#e62326"
            d="M120.9 19.6V9.1c0-5 4.1-9.1 9.1-9.1h0c5 0 9.1 4.1 9.1 9.1v10.6"
          />
          <use xlinkHref="#text-s" x="-0.5px" y="-1px" fill="black"></use>
          <use xlinkHref="#text-s" fill="#2b2b2b"></use>
          <g id="robot">
            <g id="eye-wrap">
              <use xlinkHref="#white-eye"></use>
              <circle
                id="eyef"
                className="eye"
                clipPath="url(#white-clip)"
                fill="#000"
                stroke="#2aa7cc"
                strokeWidth="2"
                strokeMiterlimit="10"
                cx="130"
                cy="65"
                r="11"
              />
              <ellipse
                id="white-eye"
                fill="#2b2b2b"
                cx="130"
                cy="40"
                rx="18"
                ry="12"
              />
            </g>
            <circle
              className="lightblue"
              cx="105"
              cy="32"
              r="2.5"
              id="tornillo"
            />
            <use xlinkHref="#tornillo" x="50"></use>
            <use xlinkHref="#tornillo" x="50" y="60"></use>
            <use xlinkHref="#tornillo" y="60"></use>
          </g>
        </svg>
        <h1>Not Found</h1>
        <h2>
          Go <a href="/">Home!</a>
        </h2>
      </body>
    </>
  );
};

export default NotFound;
