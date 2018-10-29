import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  #community-satellite {
    &-right {
      animation: community-ellipse-right 35s ease-in infinite;
      animation-delay: 11s;
      opacity: 0;
    }
    @keyframes community-ellipse-right {
      2% {
        opacity: 0;
      }
      3% {
        opacity: 1;
      }
      56% {
        opacity: 1;
      }
      57% {
        opacity: 0;
      }
    }

    &-top {
      animation: community-ellipse-top 30s ease-in infinite;
      animation-delay: 5s;
      opacity: 0;
    }
    @keyframes community-ellipse-top {
      1% {
        opacity: 0;
      }
      3% {
        opacity: 1;
      }
      59% {
        opacity: 1;
      }
      61% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    &-left {
      animation: community-ellipse-left 25s ease-in infinite;
      opacity: 0;
    }
    @keyframes community-ellipse-left {
      6% {
        opacity: 1;
      }
      61% {
        opacity: 1;
      }
      63% {
        opacity: 0;
      }
    }
  }
`;

const CommunitySvg = () => (
  <StyledSvg
    width="555px"
    height="455px"
    viewBox="60 -20 532 436.7"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="connectivity-title"
  >
    <path fill="#096FD5" d="M260.5,167.2c-8.5-17.1-22.9-20.9-36-16.8c-17.7,5.5-22.4,28.2-16.4,42.3c4.2,11.9,19.8,16.6,34.8,11.7
          C258.2,199.8,267.1,183.7,260.5,167.2z M493.8,140.8c-3.3-29.7-20.1-40.9-38.7-39.4c-25.1,2-41.3,35.7-39.8,59.7
          c0.1,20,18,33.1,39.4,31.1C476.4,190.6,494.9,168.9,493.8,140.8L493.8,140.8z"/>
    <g>
      <path fill="#2C85DE" d="M357.1,57.9c-79.3,0-143.5,64.2-143.5,143.5c0,29.3,8.8,56.5,23.8,79.2c3.7-34.2,35.8-72.3,77.5-65.2
            c32.4,5.4,59.8,28.4,60.9,72.7c-1.6,27.6-18,47.3-40,55.3c6.9,1,14,1.6,21.3,1.6c14.3,0,28.1-2.1,41.1-6
            c-8.3-24.5,1-57.6,32.4-65.2c15.5-3.8,32.2-2.5,46.9,5.9c14.6-22.5,23.2-49.3,23.2-78.2C500.6,122.1,436.4,57.9,357.1,57.9
            L357.1,57.9z M241.2,238c-5.4,1.7-11,0-12.5-4.2c-2.2-5.1-0.5-13.3,5.9-15.2c4.7-1.5,9.9-0.1,13,6.1
            C250,230.6,246.8,236.4,241.2,238L241.2,238z M270.1,150.6c-3.5,2.2-9.8,1.9-12-2.6c-1.6-3.3-1.2-7.3,3-10.3
            c4.1-2.5,8.8-0.8,10.7,3.1C273.7,144.6,273.1,148.9,270.1,150.6z M290.6,136.7c-1.6,1-4.6,0.9-5.6-1.2c-0.8-1.6-0.6-3.4,1.4-4.8
            c1.9-1.1,4.1-0.4,5,1.5C292.3,133.9,292,136,290.6,136.7z M286.8,127.9c-9.6,3.1-28.7,0.3-31.4-7.3c-3.8-9-0.8-23.5,10.5-27
            c8.4-2.6,17.6-0.2,23,10.7C293,114.9,296.6,124.9,286.8,127.9z M324.7,116.9c-3.4,1.5-7.4,0.9-10.1-3.5c-2.2-4.3-0.3-8.8,3.7-10.5
            c3.9-1.7,5,1.9,6.5,5C326.7,111.5,329.3,114.9,324.7,116.9z M391.6,293.7c-1.6,1-4.6,0.9-5.6-1.2c-0.8-1.6-0.6-3.4,1.4-4.8
            c1.9-1.1,4.1-0.4,5,1.5C393.3,290.9,393,293,391.6,293.7z M408.6,265.9c-3.4,1.5-5.2,2.4-8-2c-2.2-4.3-0.3-7.3,3.6-9
            c3.9-1.7,8.2-0.9,9.7,2.2C415.9,260.7,413.2,263.9,408.6,265.9L408.6,265.9z M470.6,203.2c-18.3,8.7-56.3-1-63.7-26.2
            c-5.4-18.7,8.9-39.2,33.4-50.8c23.7-8.9,40.4,8.3,46.6,30.1C493.4,177.7,488.1,198.5,470.6,203.2L470.6,203.2z"/>
      <path fill="#086BCF" d="M375.9,288c-1.1-44.2-28.5-67.2-60.9-72.7c-41.7-7-73.8,31.1-77.5,65.2c3.9,5.8,8.2,11.4,12.8,16.6
            c-0.1-0.5-0.2-0.9-0.3-1.4c-4.2-26.2,6.9-52.8,41.9-64.5c33.5-8.2,61.8,13.1,66.5,43.7c5.2,30-8,58.5-31.8,63.5
            c-2.3,0.6-4.6,1.1-7,1.4c5.3,1.4,10.8,2.6,16.4,3.4C357.9,335.3,374.2,315.5,375.9,288z"/>
      <path fill="#095EB3" d="M358.4,275c-4.7-30.6-33-51.8-66.5-43.7c-35,11.7-46.1,38.3-41.9,64.5c0.1,0.5,0.2,0.9,0.3,1.4
            c18.2,20.3,42.1,35.4,69.2,42.7c2.4-0.3,4.8-0.8,7-1.4C350.4,333.6,363.6,305,358.4,275z"/>
      <path fill="#086BCF" d="M430.6,273.7c-31.4,7.6-40.6,40.8-32.4,65.2c3-0.9,5.9-1.9,8.8-3c-1-21.8,9.1-46.2,32.2-53.4
            c11.7-3.6,24-3.6,35.2,1.4c1-1.5,2-2.9,3-4.4C462.8,271.2,446.1,269.9,430.6,273.7L430.6,273.7z"/>
      <path fill="#096ED4" d="M486.9,156.4c-6.2-21.8-22.9-39-46.6-30.1c-24.5,11.6-38.9,32.1-33.4,50.8c7.3,25.2,45.4,34.9,63.7,26.2
            C488.1,198.5,493.4,177.7,486.9,156.4z M464.6,196.6c-16.3,6.3-42.3,0.7-48.3-18.7c-4.4-14.4,4.7-34.3,24.5-43.3
            c19.2-6.9,33,7.3,38,24.1C484.1,175.2,478.4,192.2,464.6,196.6L464.6,196.6z"/>
      <path fill="#095EB3" d="M440.9,134.6c-19.8,9-28.9,28.9-24.5,43.3c5.9,19.5,32,25.1,48.3,18.7c13.7-4.4,19.5-21.4,14.2-37.9
            C473.8,141.8,460,127.7,440.9,134.6z M439.3,282.6c-23.1,7.1-33.2,31.5-32.2,53.4c27.4-10.2,50.8-28.5,67.4-51.9
            C463.3,279,450.9,279,439.3,282.6L439.3,282.6z"/>
      <path fill="#086DD2" d="M265.8,93.6c-11.3,3.5-14.3,18-10.5,27c2.7,7.6,21.8,10.4,31.4,7.3c9.8-2.9,6.3-12.9,2.1-23.5
            C283.4,93.4,274.2,91,265.8,93.6z M282.1,122.1c-7.1,2.3-21.4,0.2-23.4-5.4c-2.9-6.7-0.6-17.5,7.8-20.1c6.2-1.9,13.1-0.1,17.2,8
            C286.8,112.5,289.4,119.9,282.1,122.1z"/>
      <path fill="#095EB3" d="M266.5,96.6c-8.4,2.6-10.7,13.4-7.8,20.1c2,5.7,16.3,7.7,23.4,5.4c7.3-2.2,4.7-9.7,1.6-17.5
            C279.6,96.4,272.8,94.6,266.5,96.6z"/>
      <path fill="#1A71C8" d="M234.6,218.5c-6.4,2-8.1,10.2-5.9,15.2c1.5,4.3,7.1,6,12.5,4.2c5.5-1.7,8.7-7.4,6.3-13.4
            C244.5,218.4,239.3,217.1,234.6,218.5L234.6,218.5z M261.1,137.7c-4.2,3-4.6,7-3,10.3c2.2,4.5,8.5,4.8,12,2.6c3-1.6,3.6-6,1.7-9.8
            C269.9,136.9,265.2,135.2,261.1,137.7z M286.4,130.7c-2,1.4-2.1,3.3-1.4,4.8c1,2.1,4,2.2,5.6,1.2c1.4-0.8,1.7-2.8,0.8-4.6
            C290.5,130.3,288.4,129.6,286.4,130.7z M387.4,287.7c-2,1.4-2.1,3.3-1.4,4.8c1,2.1,4,2.2,5.6,1.2c1.4-0.8,1.7-2.8,0.8-4.6
            C391.5,287.3,389.4,286.6,387.4,287.7z M318.3,102.9c-4,1.7-5.9,6.2-3.7,10.5c2.8,4.4,6.7,5,10.1,3.5c4.6-2,2-5.4,0-9
            C323.3,104.8,322.1,101.2,318.3,102.9z M404.3,254.9c-4,1.7-5.9,4.7-3.6,9c2.8,4.4,4.6,3.5,8,2c4.6-2,7.3-5.2,5.3-8.8
            C412.5,254,408.1,253.2,404.3,254.9L404.3,254.9z"/>
    </g>
    <path opacity="0.6" fill="#095EB3" enableBackground="new" d="M397.4,109.8c-8.9-10-22.1-14.7-33.6-15.2 c-15.5-0.8-18.1,9.5-11.7,17.5c4.7,6.6,19,12,32.1,12.5C397.7,125.3,404.5,119.1,397.4,109.8z"/>
    <path fill="#FCD100" d="M498.8,8.7L496,19l-10.3,2.7l10.3,2.8l2.8,10.3l2.7-10.3l10.3-2.8L501.5,19L498.8,8.7z M70.7,353.9 l-2.8,10.3l-10.3,2.7l10.3,2.8l2.8,10.3l2.7-10.3l10.3-2.8l-10.3-2.7L70.7,353.9z"/>
    <path fill="#FCD000" d="M101.5,208.5l10.3-2.8l-10.3-2.7l-2.7-10.3L96,203l-10.3,2.7l10.3,2.8l2.8,10.3L101.5,208.5z"/>
    <circle fill="#4D10E1" cx="153.1" cy="205.4" r="15.5"/>
    <circle fill="#4D10E1" cx="124.4" cy="305.6" r="32"/>
    <path fill="#3298FF" d="M92.4,303.5c-0.1,0.6-0.1,2.2-0.1,2.8c-6.3,4-11,7.3-9.6,8.6c2.7,2.5,22.1,1.3,45.2-4s40-12.5,39.2-16.1
          c-0.5-2.1-4.1-4.1-13.9-3.2c-0.3-0.8-1.2-2.2-1.4-2.5c17-1.8,21,1.5,22.2,6.7c1.6,7.1-18.9,17.8-45.9,24.1s-50.2,5.6-51.9-1.5
          C75.2,314.2,81.9,308.4,92.4,303.5z"/>
    <g id="community-satellite-left">
      <circle opacity="0.6" fill="#00E833" enableBackground="new" cx="0" cy="0" r="12"/>
      <circle fill="#00E833" cx="0" cy="0" r="8.1"/>
      <animateMotion dur="25s" repeatCount="indefinite">
        <mpath xlinkHref="#community-ellipse-3"> </mpath>
      </animateMotion>
    </g>
    <g id="community-satellite-right">
      <circle opacity="0.6" fill="#00E833" enableBackground="new" cx="0" cy="0" r="12"/>
      <circle fill="#00E833" cx="0" cy="0" r="8.1"/>
      <animateMotion dur="35s" repeatCount="indefinite" begin="11s">
        <mpath xlinkHref="#community-ellipse-2"> </mpath>
      </animateMotion>
    </g>
    <g id="community-satellite-top">
      <circle opacity="0.6" fill="#00E833" enableBackground="new" cx="0" cy="0" r="12"/>
      <circle fill="#00E833" cx="0" cy="0" r="8.1"/>
      <animateMotion dur="30s" repeatCount="indefinite" begin="5s">
        <mpath xlinkHref="#community-ellipse-1"> </mpath>
      </animateMotion>
    </g>
    <path fill="none" stroke="#00E833" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10"
          strokeDasharray="2,12" d="M323.9,59.8c12.1-19.6,24.9-30.3,36.6-28.3c28.6,4.7,39.7,82.9,24.8,174.7S335.1,368.6,306.5,364c-11.6-1.9-20.3-15.8-25.6-37.7"/>
    <path fill="none" stroke="#00E833" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10"
          strokeDasharray="2,12" d="M496.7,155.7c9.3,3.7,15.3,8.8,17,15.4c7.2,27.1-59.4,68.2-148.7,91.8s-167.5,20.9-174.7-6.2c-2.9-10.9,6.3-24.2,24.1-37.6"/>
    <path fill="none" stroke="#00E833" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10"
          strokeDasharray="2,12" d="M502.8,206.8c17.4,19.2,25.2,35.3,19.7,44.9c-12.5,21.6-88.8,0.8-170.4-46.5S214.5,102,227,80.4c5.3-9.2,22.2-10.7,46.2-5.8"/>

    <path id="community-ellipse-1" opacity="0" xmlns="http://www.w3.org/2000/svg" className="st17"
          d="M323.9,59.8c12.1-19.6,24.9-30.3,36.6-28.3c28.6,4.7,39.7,82.9,24.8,174.7S335.1,368.6,306.5,364  c-11.6-1.9-20.3-15.8-25.6-37.7L323.9,59.8z"/>
    <path id="community-ellipse-2" opacity="0" xmlns="http://www.w3.org/2000/svg" className="st17"
          d="M496.7,155.7c9.3,3.7,15.3,8.8,17,15.4c7.2,27.1-59.4,68.2-148.7,91.8s-167.5,20.9-174.7-6.2  c-2.9-10.9,6.3-24.2,24.1-37.6L336,149.5L496.7,155.7z"/>
    <path id="community-ellipse-3" opacity="0" xmlns="http://www.w3.org/2000/svg" className="st17"
          d="M502.8,206.8c17.4,19.2,25.2,35.3,19.7,44.9c-12.5,21.6-88.8,0.8-170.4-46.5S214.5,102,227,80.4  c5.3-9.2,22.2-10.7,46.2-5.8L386,119L502.8,206.8z"/>
  </StyledSvg>
);

export default CommunitySvg;
