import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
    <Divider />
      <Year>February, 2017 - April, 2017</Year>
      <ul>
        <Step title="Research Fello @BSMRAU">
          <li>• I was responsible for Developing an android application for the farmers to train them about various crop-related diseases.</li>
          <li>•	Surveyed and analyzed the result of the usage of the application.</li>
          <li>•	Engineered in the Deployment of the E-Village data center.</li>
        </Step>
      </ul>

      <Divider />
      <Year>January, 2014 - July, 2016</Year>
      <ul>
        <Step title="Front-end Developer @Kodeeo">
          <li>•	Writing Pixel Perfect Web Interface with HTML, CSS and JavaScript.</li>
          <li>•	Developed some WordPress themes and plugins for clients</li>
          <li>•	Developed several hybrid applications using Angular 1.3 and Ionic and published to Google and Apple app store.</li>
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Work Experience</h3>
      <Year>January, 2022</Year>
      <ul>
        <Step title="Senior UI Engineer @ Dorik Inc.">
          Developing next generational No-Code Website Builder.
        </Step>
      </ul>
      <Divider />
      <Year>January, 2020 - December, 2021</Year>
      <ul>
        <Step title="Senior Front-end Developer @Makdos Bilisim">
         <li>• Developing rich user interfaces for their upcoming mail delivery platform</li>
         <li>•	Implementing real-time data fetching using WebSocket API to enhance user engagement. </li>
         <li>•	Supervising and mentoring Junior Developers in different projects to boost up productivity and implement state-of-the-art solutions for complicated problems.</li>
         <li>•	<strong>Technology:</strong> Typescript, ReactJS, Gatsby, NextJS, WebSocket, PWA, Redux, Zustand</li>
        </Step>
      </ul>
      <Divider />
      <Year>October, 2018 - December, 2019</Year>
      <ul>
        <Step title="Front-end Engineer @Kodeeo">
          <li>•	I was leading their Front-end team to develop a rich multi-vendor and multi-auth Single-page Point of Sale system with Vue.JS.</li>
          <li>•	Worked with several client projects to improve their Web performance and Lighthouse score.</li>
        </Step>
      </ul>



      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
