import React, { FC } from 'react';
import styled from 'styled-components';
import { TonkeeperLogoLottieIcon } from './lottie/LottieIcons';

export const TonkeeperIcon: FC<{
  width?: string;
  height?: string;
  loop?: boolean;
}> = ({ width = '128', height = '128', loop = false }) => {
  return <TonkeeperLogoLottieIcon width={width} height={height} loop={loop} />;
};

export const ChevronLeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.3075 3.50173C10.5846 3.19385 10.5596 2.71963 10.2517 2.44254C9.94384 2.16544 9.46962 2.1904 9.19253 2.49828L4.69253 7.49828C4.43582 7.78351 4.43582 8.2165 4.69253 8.50173L9.19253 13.5017C9.46962 13.8096 9.94384 13.8346 10.2517 13.5575C10.5596 13.2804 10.5846 12.8062 10.3075 12.4983L6.25902 8.00001L10.3075 3.50173Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChevronRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.69254 3.50173C5.41544 3.19385 5.4404 2.71963 5.74828 2.44254C6.05617 2.16544 6.53038 2.1904 6.80748 2.49828L11.3075 7.49828C11.5642 7.78351 11.5642 8.2165 11.3075 8.50173L6.80748 13.5017C6.53038 13.8096 6.05617 13.8346 5.74828 13.5575C5.4404 13.2804 5.41544 12.8062 5.69254 12.4983L9.74098 8.00001L5.69254 3.50173Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChevronDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.69495 6.64626C3.36148 6.40055 2.89197 6.47168 2.64626 6.80515C2.40055 7.13861 2.47168 7.60813 2.80515 7.85384L7.55515 11.3538C7.81972 11.5488 8.18038 11.5488 8.44495 11.3538L13.1949 7.85384C13.5284 7.60813 13.5996 7.13861 13.3538 6.80515C13.1081 6.47168 12.6386 6.40055 12.3052 6.64626L8.00005 9.81844L3.69495 6.64626Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2803 3.22065C14.5732 3.51354 14.5732 3.98841 14.2803 4.28131L6.28033 12.2813C5.98744 12.5742 5.51256 12.5742 5.21967 12.2813L1.71967 8.78131C1.42678 8.48841 1.42678 8.01354 1.71967 7.72065C2.01256 7.42775 2.48744 7.42775 2.78033 7.72065L5.75 10.6903L13.2197 3.22065C13.5126 2.92775 13.9874 2.92775 14.2803 3.22065Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CheckIcon: FC<{ width?: string; height?: string }> = ({
  width = '28',
  height = '28',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M22.2071 9.70711C22.5976 9.31658 22.5976 8.68342 22.2071 8.29289C21.8166 7.90237 21.1834 7.90237 20.7929 8.29289L10.5 18.5858L6.70711 14.7929C6.31658 14.4024 5.68342 14.4024 5.29289 14.7929C4.90237 15.1834 4.90237 15.8166 5.29289 16.2071L9.79289 20.7071C10.1834 21.0976 10.8166 21.0976 11.2071 20.7071L22.2071 9.70711Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L8 6.93934L12.4697 2.46967C12.7626 2.17678 13.2374 2.17678 13.5303 2.46967C13.8232 2.76256 13.8232 3.23744 13.5303 3.53033L9.06066 8L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L8 9.06066L3.53033 13.5303C3.23744 13.8232 2.76256 13.8232 2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697L6.93934 8L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const XmarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.78033 4.71967C5.48744 4.42678 5.01256 4.42678 4.71967 4.71967C4.42678 5.01256 4.42678 5.48744 4.71967 5.78033L6.93934 8L4.71967 10.2197C4.42678 10.5126 4.42678 10.9874 4.71967 11.2803C5.01256 11.5732 5.48744 11.5732 5.78033 11.2803L8 9.06066L10.2197 11.2803C10.5126 11.5732 10.9874 11.5732 11.2803 11.2803C11.5732 10.9874 11.5732 10.5126 11.2803 10.2197L9.06066 8L11.2803 5.78033C11.5732 5.48744 11.5732 5.01256 11.2803 4.71967C10.9874 4.42678 10.5126 4.42678 10.2197 4.71967L8 6.93934L5.78033 4.71967Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect width="16" height="16" rx="8" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4.25C8.41421 4.25 8.75 4.58579 8.75 5V7.68934L10.5303 9.46967C10.8232 9.76256 10.8232 10.2374 10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303L7.46967 8.53033C7.32902 8.38968 7.25 8.19891 7.25 8V5C7.25 4.58579 7.58579 4.25 8 4.25Z"
        fill="white"
      />
    </svg>
  );
};

export const GearIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
    >
      <path
        opacity="0.32"
        d="M84 64C84 75.0457 75.0457 84 64 84C52.9543 84 44 75.0457 44 64C44 52.9543 52.9543 44 64 44C75.0457 44 84 52.9543 84 64Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3199 27.8L28.3199 27.8L14.8099 51.2C12.1177 55.8631 10.7715 58.1946 10.2447 60.6734C9.77847 62.8666 9.77847 65.1334 10.2447 67.3266C10.7715 69.8054 12.1177 72.1369 14.8099 76.8L28.3199 100.2C31.0121 104.863 32.3582 107.195 34.2415 108.89C35.9078 110.391 37.8708 111.524 40.0033 112.217C42.4134 113 45.1057 113 50.4901 113H77.5101C82.8946 113 85.5868 113 87.997 112.217C90.1294 111.524 92.0925 110.391 93.7588 108.89C95.642 107.195 96.9881 104.863 99.6804 100.2L113.19 76.8L113.19 76.7999C115.883 72.1369 117.229 69.8053 117.756 67.3266C118.222 65.1334 118.222 62.8666 117.756 60.6734C117.229 58.1946 115.883 55.8631 113.19 51.2001L113.19 51.2L99.6804 27.8C96.9881 23.1369 95.642 20.8054 93.7588 19.1097C92.0925 17.6093 90.1294 16.476 87.997 15.7831C85.5868 15 82.8946 15 77.5101 15H50.4901C45.1057 15 42.4134 15 40.0033 15.7831C37.8708 16.476 35.9078 17.6093 34.2415 19.1097C32.3582 20.8054 31.0121 23.1369 28.3199 27.8ZM63.9999 84C75.0456 84 83.9999 75.0457 83.9999 64C83.9999 52.9543 75.0456 44 63.9999 44C52.9542 44 43.9999 52.9543 43.9999 64C43.9999 75.0457 52.9542 84 63.9999 84Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CheckMarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
    >
      <path
        opacity="0.32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.8284 48.1716C88.3905 49.7337 88.3905 52.2663 86.8284 53.8284L58.8284 81.8284C57.2663 83.3905 54.7337 83.3905 53.1716 81.8284L41.1716 69.8284C39.6095 68.2663 39.6095 65.7337 41.1716 64.1716C42.7337 62.6095 45.2663 62.6095 46.8284 64.1716L56 73.3431L81.1716 48.1716C82.7337 46.6095 85.2663 46.6095 86.8284 48.1716Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 116C92.7188 116 116 92.7188 116 64C116 35.2812 92.7188 12 64 12C35.2812 12 12 35.2812 12 64C12 92.7188 35.2812 116 64 116ZM86.8284 53.8284C88.3905 52.2663 88.3905 49.7337 86.8284 48.1716C85.2663 46.6095 82.7337 46.6095 81.1716 48.1716L56 73.3431L46.8284 64.1716C45.2663 62.6095 42.7337 62.6095 41.1716 64.1716C39.6095 65.7337 39.6095 68.2663 41.1716 69.8284L53.1716 81.8284C54.7337 83.3905 57.2663 83.3905 58.8284 81.8284L86.8284 53.8284Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const WriteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
    >
      <path
        opacity="0.32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2867 28.1587C10.541 30.9415 11.2397 34.2284 12.637 40.8022L25.278 100.274L92.9104 65.4329L81.4603 76.883C79.827 78.5163 78.5117 80.4391 77.5814 82.5534L76.5951 84.795C75.8677 86.4482 77.552 88.1325 79.2052 87.4051L81.4468 86.4188C83.561 85.4885 85.4839 84.1732 87.1172 82.5398L125.456 44.201C127.018 42.6389 127.018 40.1063 125.456 38.5442C123.894 36.9821 121.361 36.9821 119.799 38.5442L105.222 53.1218L98.714 22.5059L98.7139 22.5059C97.3167 15.9322 96.618 12.6453 94.805 10.4064C93.2102 8.43697 91.0328 7.023 88.585 6.36711C85.8023 5.62147 82.5154 6.32012 75.9416 7.71741L27.4255 18.0298C20.8517 19.4271 17.5648 20.1258 15.3259 21.9388C13.3565 23.5336 11.9426 25.7109 11.2867 28.1587Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3079 18.5521C20 21.1191 20 24.4794 20 31.2V96.8C20 103.521 20 106.881 21.3079 109.448C22.4584 111.706 24.2942 113.542 26.5521 114.692C29.1191 116 32.4794 116 39.2 116H88.8C95.5206 116 98.8809 116 101.448 114.692C103.706 113.542 105.542 111.706 106.692 109.448C108 106.881 108 103.521 108 96.8V61.657L87.1171 82.5398C85.4838 84.1732 83.561 85.4885 81.4467 86.4188L79.2051 87.4051C77.5519 88.1325 75.8676 86.4482 76.595 84.795L77.5813 82.5534C78.5116 80.4391 79.827 78.5163 81.4603 76.883L108 50.3433V31.2C108 24.4794 108 21.1191 106.692 18.5521C105.542 16.2942 103.706 14.4584 101.448 13.3079C98.8809 12 95.5206 12 88.8 12H39.2C32.4794 12 29.1191 12 26.5521 13.3079C24.2942 14.4584 22.4584 16.2942 21.3079 18.5521Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SpinnerIcon = () => (
  <StyledSpinner viewBox="0 0 50 50" width="1em" height="1em">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 1em;
  height: 1em;

  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const ToncoinIcon: FC<{ width?: string; height?: string }> = ({
  width = '44',
  height = '44',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
    >
      <rect width="44" height="44" rx="22" fill="#0088CC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1557 31.4672L30.0161 19.9928C30.7071 18.8369 31.0526 18.259 31.1463 17.7999C31.4212 16.4532 30.6595 15.1104 29.3626 14.6552C28.9205 14.5 28.2471 14.5 26.9005 14.5H17.0997C15.7531 14.5 15.0797 14.5 14.6376 14.6552C13.3407 15.1104 12.579 16.4532 12.8539 17.7999C12.9476 18.259 13.2931 18.8369 13.9841 19.9928L20.8445 31.4672C21.0894 31.8768 21.2119 32.0816 21.3417 32.1913C21.7218 32.5126 22.2784 32.5126 22.6585 32.1913C22.7884 32.0816 22.9108 31.8768 23.1557 31.4672ZM21.0001 16.5V27.9L15.1768 17.9916C14.9921 17.6774 14.8997 17.5202 14.875 17.3953C14.8027 17.029 15.0108 16.6653 15.3633 16.542C15.4835 16.5 15.6658 16.5 16.0303 16.5H21.0001ZM23.0001 27.9V16.5H27.9699C28.3345 16.5 28.5167 16.5 28.6369 16.542C28.9894 16.6653 29.1975 17.029 29.1252 17.3953C29.1005 17.5202 29.0081 17.6774 28.8235 17.9916L23.0001 27.9Z"
        fill="white"
      />
    </svg>
  );
};

export const CheckboxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
    >
      <path
        d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L4 6.58579L1.70711 4.29289C1.31658 3.90237 0.683418 3.90237 0.292893 4.29289C-0.0976311 4.68342 -0.0976311 5.31658 0.292893 5.70711L3.29289 8.70711C3.68342 9.09763 4.31658 9.09763 4.70711 8.70711L11.7071 1.70711Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
    >
      <path
        d="M1.69495 0.646258C1.36148 0.400546 0.891968 0.471684 0.646257 0.805149C0.400546 1.13861 0.471685 1.60813 0.80515 1.85384L5.55515 5.35384C5.81972 5.54879 6.18038 5.54879 6.44495 5.35384L11.1949 1.85384C11.5284 1.60813 11.5996 1.13861 11.3538 0.805149C11.1081 0.471684 10.6386 0.400546 10.3052 0.646258L6.00005 3.81844L1.69495 0.646258Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.75 1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H7.25V14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V8.75H14.25C14.6642 8.75 15 8.41421 15 8C15 7.58579 14.6642 7.25 14.25 7.25H8.75V1.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SettingsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99116 1.0011L5.89497 1.00104C5.39263 1.00054 4.97766 1.00014 4.59384 1.12651C4.25688 1.23747 3.94738 1.41887 3.68593 1.65866C3.38813 1.93179 3.18573 2.29406 2.94071 2.73259L2.89377 2.81655L0.961754 6.26655L0.916807 6.34669L0.916805 6.3467C0.681201 6.76648 0.486501 7.11339 0.407652 7.49415C0.3384 7.82857 0.3384 8.17363 0.407652 8.50805C0.486501 8.88881 0.681202 9.23572 0.916807 9.65551L0.961754 9.73565L2.89377 13.1857L2.94071 13.2696C3.18573 13.7081 3.38813 14.0704 3.68593 14.3435C3.94738 14.5833 4.25688 14.7647 4.59384 14.8757C4.97766 15.0021 5.39263 15.0017 5.89497 15.0012L5.99116 15.0011H10.0089L10.1051 15.0012C10.6074 15.0017 11.0224 15.0021 11.4062 14.8757C11.7432 14.7647 12.0527 14.5833 12.3141 14.3435C12.6119 14.0704 12.8143 13.7081 13.0593 13.2696L13.1063 13.1856L15.0383 9.73563L15.0832 9.65549C15.3188 9.23571 15.5135 8.8888 15.5923 8.50805C15.6616 8.17363 15.6616 7.82857 15.5923 7.49415C15.5135 7.1134 15.3188 6.7665 15.0832 6.34671L15.0383 6.26657L13.1063 2.81657L13.0593 2.73261L13.0593 2.73261C12.8143 2.29407 12.6119 1.9318 12.3141 1.65867C12.0527 1.41888 11.7432 1.23747 11.4062 1.12652C11.0224 1.00014 10.6074 1.00054 10.1051 1.00104L10.0089 1.0011H5.99116ZM5.06298 2.55127C5.18817 2.51004 5.34233 2.5011 5.99116 2.5011H10.0089C10.6577 2.5011 10.8119 2.51004 10.9371 2.55127C11.0718 2.59565 11.1956 2.66821 11.3002 2.76413C11.3974 2.85322 11.4805 2.98336 11.7975 3.54947L13.7295 6.99947C14.0329 7.54135 14.0978 7.67402 14.1235 7.79832C14.1512 7.93209 14.1512 8.07011 14.1235 8.20388C14.0978 8.32818 14.0329 8.46085 13.7295 9.00273L11.7975 12.4527C11.4805 13.0188 11.3974 13.149 11.3002 13.2381C11.1956 13.334 11.0718 13.4066 10.9371 13.4509C10.8119 13.4922 10.6577 13.5011 10.0089 13.5011H5.99116C5.34233 13.5011 5.18817 13.4922 5.06298 13.4509C4.92819 13.4066 4.80439 13.334 4.69981 13.2381C4.60267 13.149 4.51954 13.0188 4.20252 12.4527L2.27051 9.00274C1.96705 8.46085 1.90223 8.32818 1.87649 8.20388C1.84879 8.07011 1.84879 7.93209 1.87649 7.79832C1.90223 7.67402 1.96705 7.54135 2.27051 6.99946L4.20252 3.54946C4.51954 2.98336 4.60267 2.85322 4.69981 2.76413C4.80439 2.66821 4.92819 2.59565 5.06298 2.55127ZM6.50002 8.0011C6.50002 7.17267 7.17159 6.5011 8.00002 6.5011C8.82844 6.5011 9.50002 7.17267 9.50002 8.0011C9.50002 8.82953 8.82844 9.5011 8.00002 9.5011C7.17159 9.5011 6.50002 8.82953 6.50002 8.0011ZM8.00002 5.0011C6.34316 5.0011 5.00002 6.34425 5.00002 8.0011C5.00002 9.65795 6.34316 11.0011 8.00002 11.0011C9.65687 11.0011 11 9.65795 11 8.0011C11 6.34425 9.65687 5.0011 8.00002 5.0011Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99986 5.00108C6.34301 5.00108 4.99986 6.34423 4.99986 8.00108C4.99986 9.65794 6.34301 11.0011 7.99986 11.0011C9.65672 11.0011 10.9999 9.65794 10.9999 8.00108C10.9999 6.34423 9.65672 5.00108 7.99986 5.00108ZM6.49986 8.00108C6.49986 7.17265 7.17144 6.50108 7.99986 6.50108C8.82829 6.50108 9.49986 7.17265 9.49986 8.00108C9.49986 8.82951 8.82829 9.50108 7.99986 9.50108C7.17144 9.50108 6.49986 8.82951 6.49986 8.00108Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.1227 1.00103C5.54082 1.00057 5.08365 1.00021 4.66203 1.13904C4.29137 1.26109 3.95092 1.46063 3.66332 1.7244C3.33619 2.02444 3.11313 2.4235 2.82922 2.93141L1.02305 6.1567C0.750249 6.64297 0.53584 7.02516 0.449223 7.44344C0.373045 7.8113 0.373045 8.19087 0.449223 8.55873C0.53584 8.977 0.75025 9.35919 1.02305 9.84547L2.82922 13.0708C3.11313 13.5787 3.33619 13.9777 3.66332 14.2778C3.95092 14.5415 4.29137 14.7411 4.66203 14.8631C5.08366 15.002 5.54082 15.0016 6.1227 15.0011H9.87701C10.4589 15.0016 10.9161 15.002 11.3377 14.8631C11.7084 14.7411 12.0488 14.5415 12.3364 14.2778C12.6635 13.9777 12.8866 13.5787 13.1705 13.0707L14.9767 9.84544C15.2494 9.35917 15.4638 8.97699 15.5505 8.55872C15.6266 8.19086 15.6266 7.8113 15.5505 7.44344C15.4638 7.02517 15.2494 6.64298 14.9766 6.15671L13.1705 2.93142C12.8866 2.42351 12.6635 2.02445 12.3364 1.72441C12.0488 1.46064 11.7084 1.26109 11.3377 1.13904C10.9161 1.00021 10.4589 1.00057 9.87702 1.00103H6.1227ZM5.13116 2.56379C5.29445 2.51002 5.49128 2.50108 6.22545 2.50108H9.77426C10.5084 2.50108 10.7053 2.51002 10.8686 2.56379C11.037 2.61927 11.1918 2.70997 11.3225 2.82987C11.4492 2.94607 11.5532 3.11344 11.9119 3.75401L13.6199 6.80401C13.9633 7.4172 14.0481 7.58552 14.0816 7.74761C14.1163 7.91482 14.1163 8.08735 14.0816 8.25455C14.0481 8.41664 13.9633 8.58497 13.6199 9.19815L11.9119 12.2482C11.5532 12.8887 11.4492 13.0561 11.3225 13.1723C11.1918 13.2922 11.037 13.3829 10.8686 13.4384C10.7053 13.4921 10.5084 13.5011 9.77426 13.5011H6.22545C5.49128 13.5011 5.29445 13.4921 5.13116 13.4384C4.96268 13.3829 4.80793 13.2922 4.67721 13.1723C4.55051 13.0561 4.44654 12.8887 4.08782 12.2482L2.3798 9.19817C2.03641 8.58497 1.95162 8.41665 1.91806 8.25456C1.88343 8.08735 1.88343 7.91482 1.91806 7.74761C1.95162 7.58552 2.03641 7.41719 2.3798 6.804L4.08782 3.754C4.44654 3.11343 4.55051 2.94606 4.67721 2.82986C4.80793 2.70997 4.96268 2.61927 5.13116 2.56379Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ReorderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M6 8.75C6 8.33579 6.33579 8 6.75 8H21.25C21.6642 8 22 8.33579 22 8.75C22 9.16421 21.6642 9.5 21.25 9.5H6.75C6.33579 9.5 6 9.16421 6 8.75Z"
        fill="currentColor"
      />
      <path
        d="M6 14C6 13.5858 6.33579 13.25 6.75 13.25H21.25C21.6642 13.25 22 13.5858 22 14C22 14.4142 21.6642 14.75 21.25 14.75H6.75C6.33579 14.75 6 14.4142 6 14Z"
        fill="currentColor"
      />
      <path
        d="M6.75 18.5C6.33579 18.5 6 18.8358 6 19.25C6 19.6642 6.33579 20 6.75 20H21.25C21.6642 20 22 19.6642 22 19.25C22 18.8358 21.6642 18.5 21.25 18.5H6.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EllipsisIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 9.5C3.32843 9.5 4 8.82843 4 8C4 7.17157 3.32843 6.5 2.5 6.5C1.67157 6.5 1 7.17157 1 8C1 8.82843 1.67157 9.5 2.5 9.5ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM15 8C15 8.82843 14.3284 9.5 13.5 9.5C12.6716 9.5 12 8.82843 12 8C12 7.17157 12.6716 6.5 13.5 6.5C14.3284 6.5 15 7.17157 15 8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const VerificationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_3608_14949)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.45739 0.627004C7.19814 0.727617 6.96231 0.941576 6.49066 1.36949C6.26848 1.57108 6.15739 1.67187 6.03317 1.74698C5.86594 1.84811 5.68056 1.91558 5.48744 1.94561C5.34401 1.96791 5.19412 1.96211 4.89435 1.95051C4.25798 1.92587 3.93979 1.91356 3.67652 2.00313C3.322 2.12375 3.02542 2.37261 2.84507 2.7008C2.71114 2.94452 2.66802 3.26001 2.58177 3.89098C2.54115 4.18822 2.52083 4.33684 2.47396 4.47422C2.41086 4.65919 2.31222 4.83004 2.18358 4.97717C2.08804 5.08645 1.96949 5.17835 1.73239 5.36216C1.22907 5.75233 0.977414 5.94742 0.83331 6.18527C0.639262 6.50555 0.572032 6.88683 0.644835 7.25416C0.6989 7.52695 0.868659 7.79635 1.20818 8.33514C1.36811 8.58895 1.44808 8.71586 1.50048 8.85122C1.57104 9.03348 1.60529 9.22776 1.60133 9.42316C1.59839 9.56828 1.56665 9.71489 1.50316 10.0081C1.3684 10.6305 1.30102 10.9417 1.34351 11.2166C1.40073 11.5866 1.59432 11.9219 1.8862 12.1565C2.10296 12.3307 2.40617 12.428 3.01259 12.6225C3.29825 12.7141 3.44109 12.7599 3.56824 12.8299C3.73944 12.9242 3.89056 13.051 4.01312 13.2032C4.10415 13.3163 4.17407 13.449 4.3139 13.7144C4.61075 14.2778 4.75919 14.5596 4.9684 14.7428C5.25012 14.9895 5.61393 15.1219 5.98832 15.114C6.26636 15.1081 6.56114 14.9877 7.1507 14.7469C7.42843 14.6335 7.5673 14.5768 7.70971 14.5487C7.90144 14.5109 8.09872 14.5109 8.29046 14.5487C8.43287 14.5768 8.57174 14.6335 8.84947 14.7469C9.43903 14.9877 9.73381 15.1081 10.0118 15.114C10.3862 15.1219 10.7501 14.9895 11.0318 14.7428C11.241 14.5596 11.3894 14.2779 11.6863 13.7144C11.8261 13.449 11.896 13.3163 11.987 13.2032C12.1096 13.051 12.2607 12.9242 12.4319 12.8299C12.5591 12.7599 12.7019 12.7141 12.9876 12.6225C13.594 12.428 13.8972 12.3307 14.114 12.1565C14.4059 11.9219 14.5994 11.5866 14.6567 11.2166C14.6992 10.9417 14.6318 10.6305 14.497 10.0081C14.4335 9.71491 14.4018 9.56828 14.3988 9.42316C14.3949 9.22776 14.4291 9.03348 14.4997 8.85122C14.5521 8.71586 14.6321 8.58895 14.792 8.33514C15.1315 7.79635 15.3013 7.52695 15.3553 7.25416C15.4281 6.88683 15.3609 6.50555 15.1669 6.18527C15.0228 5.94742 14.7711 5.75233 14.2678 5.36216C14.0307 5.17835 13.9121 5.08645 13.8166 4.97717C13.688 4.83004 13.5893 4.65919 13.5262 4.47422C13.4793 4.33684 13.459 4.18822 13.4184 3.89098C13.3321 3.26001 13.289 2.94452 13.1551 2.7008C12.9748 2.37261 12.6782 2.12375 12.3236 2.00313C12.0604 1.91356 11.7422 1.92587 11.1058 1.95051C10.806 1.96211 10.6562 1.96791 10.5127 1.94561C10.3196 1.91558 10.1342 1.84811 9.96699 1.74698C9.84278 1.67187 9.73169 1.57108 9.50951 1.36949C9.03786 0.941576 8.80203 0.727617 8.54277 0.627004C8.19366 0.49152 7.8065 0.49152 7.45739 0.627004ZM11.0304 7.03036C11.3233 6.73746 11.3233 6.26259 11.0304 5.9697C10.7375 5.6768 10.2626 5.6768 9.96975 5.9697L7.00008 8.93937L5.78041 7.7197C5.48752 7.4268 5.01265 7.4268 4.71975 7.7197C4.42686 8.01259 4.42686 8.48746 4.71975 8.78036L6.46975 10.5304C6.76265 10.8233 7.23752 10.8233 7.53041 10.5304L11.0304 7.03036Z"
          fill="#8994A3"
        />
      </g>
      <defs>
        <clipPath id="clip0_3608_14949">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckmarkCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM22.0607 14.0607C22.6464 13.4749 22.6464 12.5251 22.0607 11.9393C21.4749 11.3536 20.5251 11.3536 19.9393 11.9393L14 17.8787L11.8107 15.6893C11.2249 15.1036 10.2751 15.1036 9.68934 15.6893C9.10355 16.2751 9.10355 17.2249 9.68934 17.8107L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607L22.0607 14.0607Z"
        fill="currentColor"
      />
      <path
        opacity="0.32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0607 11.9393C22.6464 12.5251 22.6464 13.4749 22.0607 14.0607L15.0607 21.0607C14.4749 21.6464 13.5251 21.6464 12.9393 21.0607L9.68934 17.8107C9.10355 17.2249 9.10355 16.2751 9.68934 15.6893C10.2751 15.1036 11.2249 15.1036 11.8107 15.6893L14 17.8787L19.9393 11.9393C20.5251 11.3536 21.4749 11.3536 22.0607 11.9393Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ExclamationMarkCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM14.0999 9.99751C14.0455 8.91083 14.912 8 16 8C17.088 8 17.9545 8.91083 17.9001 9.9975L17.5749 16.5019C17.5329 17.3411 16.8403 18 16 18C15.1597 18 14.4671 17.3411 14.4251 16.5019L14.0999 9.99751ZM14 22C14 20.8954 14.8954 20 16 20C17.1046 20 18 20.8954 18 22C18 23.1046 17.1046 24 16 24C14.8954 24 14 23.1046 14 22Z"
        fill="currentColor"
      />
      <g opacity="0.32">
        <path
          d="M16 8C14.912 8 14.0455 8.91083 14.0999 9.99751L14.4251 16.5019C14.4671 17.3411 15.1597 18 16 18C16.8403 18 17.5329 17.3411 17.5749 16.5019L17.9001 9.9975C17.9545 8.91083 17.088 8 16 8Z"
          fill="currentColor"
        />
        <path
          d="M16 20C14.8954 20 14 20.8954 14 22C14 23.1046 14.8954 24 16 24C17.1046 24 18 23.1046 18 22C18 20.8954 17.1046 20 16 20Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M4.60237 3.36036C5.20058 1.9221 5.49968 1.20297 6.00003 1.20297C6.50037 1.20297 6.79947 1.9221 7.39768 3.36036C7.49017 3.58275 7.53642 3.69394 7.62743 3.76007C7.71845 3.82619 7.83849 3.83582 8.07858 3.85506C9.6313 3.97954 10.4077 4.04178 10.5623 4.51764C10.7169 4.99349 10.1254 5.50018 8.94237 6.51355C8.75945 6.67025 8.66799 6.74859 8.63323 6.85558C8.59846 6.96257 8.62641 7.07972 8.68229 7.314C9.04372 8.82919 9.22444 9.58679 8.81965 9.88088C8.41486 10.175 7.75019 9.769 6.42084 8.95704C6.2153 8.83149 6.11252 8.76872 6.00003 8.76872C5.88753 8.76872 5.78476 8.83149 5.57921 8.95704C4.24986 9.769 3.58519 10.175 3.1804 9.88088C2.77562 9.58679 2.95633 8.82919 3.31776 7.314C3.37364 7.07972 3.40159 6.96257 3.36682 6.85558C3.33206 6.74859 3.2406 6.67025 3.05768 6.51355C1.87467 5.50018 1.28316 4.99349 1.43778 4.51764C1.59239 4.04178 2.36875 3.97954 3.92148 3.85506C4.16156 3.83582 4.28161 3.82619 4.37262 3.76007C4.46363 3.69394 4.50988 3.58275 4.60237 3.36036Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ScanIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        opacity="0.32"
        d="M9 12.2C9 11.0799 9 10.5198 9.21799 10.092C9.40973 9.71569 9.71569 9.40973 10.092 9.21799C10.5198 9 11.0799 9 12.2 9H15.8C16.9201 9 17.4802 9 17.908 9.21799C18.2843 9.40973 18.5903 9.71569 18.782 10.092C19 10.5198 19 11.0799 19 12.2V15.8C19 16.9201 19 17.4802 18.782 17.908C18.5903 18.2843 18.2843 18.5903 17.908 18.782C17.4802 19 16.9201 19 15.8 19H12.2C11.0799 19 10.5198 19 10.092 18.782C9.71569 18.5903 9.40973 18.2843 9.21799 17.908C9 17.4802 9 16.9201 9 15.8V12.2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64757 3L8.5 3.00001C9.32843 3.00001 10 3.67158 10 4.50001C10 5.32843 9.32843 6 8.5 6H6.8C6.51998 6 6.37997 6 6.27301 6.0545L6.26693 6.05765C6.17765 6.10469 6.10469 6.17765 6.05765 6.26693L6.0545 6.27301C6 6.37997 6 6.51998 6 6.80001V8.5C6 9.32843 5.32843 10 4.5 10C3.67158 10 3 9.32843 3 8.5L3 7.64757C2.99997 7.1326 2.99993 6.65963 3.03223 6.26426C3.06706 5.838 3.14679 5.37165 3.38148 4.91104C3.71704 4.25247 4.25247 3.71704 4.91104 3.38148C5.37165 3.14679 5.838 3.06706 6.26426 3.03223C6.65963 2.99993 7.1326 2.99997 7.64757 3ZM6.05946 6.26175L6.05834 6.26478C6.05904 6.26265 6.05946 6.26175 6.05946 6.26175ZM6.26175 6.05946C6.26175 6.05946 6.26265 6.05904 6.26478 6.05834L6.26175 6.05946Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 6C18.6716 6 18 5.32843 18 4.50001C18 3.67158 18.6716 3.00001 19.5 3.00001L20.3524 3C20.8674 2.99997 21.3404 2.99993 21.7358 3.03223C22.162 3.06706 22.6284 3.14679 23.089 3.38148C23.7475 3.71704 24.283 4.25247 24.6185 4.91104C24.8532 5.37165 24.9329 5.838 24.9678 6.26426C25.0001 6.65963 25 7.13258 25 7.64754L25 8.5C25 9.32843 24.3284 10 23.5 10C22.6716 10 22 9.32843 22 8.5L22 6.80001C22 6.51998 22 6.37997 21.9455 6.27301L21.9424 6.26693C21.8953 6.17765 21.8224 6.10469 21.7331 6.05765L21.727 6.0545C21.62 6 21.48 6 21.2 6H19.5ZM21.7383 6.05946L21.7352 6.05835C21.7374 6.05905 21.7383 6.05946 21.7383 6.05946ZM21.9406 6.26176C21.9406 6.26176 21.941 6.26263 21.9417 6.26476L21.9406 6.26176Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19.5C22 18.6716 22.6716 18 23.5 18C24.3284 18 25 18.6716 25 19.5L25 20.3525C25 20.8674 25.0001 21.3404 24.9678 21.7358C24.9329 22.162 24.8532 22.6284 24.6185 23.089C24.283 23.7475 23.7475 24.283 23.089 24.6185C22.6284 24.8532 22.162 24.9329 21.7358 24.9678C21.3404 25.0001 20.8674 25 20.3525 25L19.5 25C18.6716 25 18 24.3284 18 23.5C18 22.6716 18.6716 22 19.5 22L21.2 22C21.48 22 21.62 22 21.727 21.9455L21.7331 21.9424C21.8224 21.8953 21.8953 21.8224 21.9424 21.7331L21.9455 21.727C22 21.62 22 21.48 22 21.2L22 19.5ZM21.9406 21.7383L21.9417 21.7352C21.941 21.7373 21.9406 21.7383 21.9406 21.7383ZM21.7383 21.9406C21.7383 21.9406 21.7374 21.941 21.7353 21.9417L21.7383 21.9406Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 22C9.32843 22 10 22.6716 10 23.5C10 24.3284 9.32843 25 8.5 25L7.64754 25C7.13258 25 6.65963 25.0001 6.26426 24.9678C5.838 24.9329 5.37165 24.8532 4.91104 24.6185C4.25247 24.283 3.71704 23.7475 3.38148 23.089C3.14679 22.6284 3.06706 22.162 3.03223 21.7358C2.99993 21.3404 2.99997 20.8674 3 20.3524L3 19.5C3 18.6716 3.67158 18 4.5 18C5.32843 18 6 18.6716 6 19.5V21.2C6 21.48 6 21.62 6.0545 21.727L6.05765 21.7331C6.10469 21.8224 6.17765 21.8953 6.26693 21.9424L6.27301 21.9455C6.37997 22 6.51998 22 6.8 22L8.5 22ZM6.26175 21.9406L6.26475 21.9417C6.26264 21.941 6.26175 21.9406 6.26175 21.9406ZM6.05946 21.7383C6.05946 21.7383 6.05905 21.7374 6.05835 21.7353L6.05946 21.7383Z"
        fill="currentColor"
      />
      <path
        d="M7.5 12.5C6.67157 12.5 6 13.1716 6 14C6 14.8284 6.67157 15.5 7.5 15.5H20.5C21.3284 15.5 22 14.8284 22 14C22 13.1716 21.3284 12.5 20.5 12.5H7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SaleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <g filter="url(#filter0_d_6325_2611)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6567 4H16.5998C18.14 4 18.91 4 19.4983 4.29973C20.0157 4.56338 20.4364 4.98408 20.7001 5.50153C20.9998 6.08978 20.9998 6.85986 20.9998 8.4V9.34315C20.9998 9.95462 20.9998 10.2604 20.9307 10.5481C20.8695 10.8032 20.7685 11.047 20.6314 11.2707C20.4768 11.523 20.2606 11.7392 19.8283 12.1716L16.7717 15.2281C15.8014 16.1984 15.3163 16.6835 14.7569 16.8653C14.2649 17.0251 13.7348 17.0251 13.2427 16.8653C12.6833 16.6835 12.1982 16.1984 11.228 15.2281L9.77168 13.7719C8.80144 12.8016 8.31632 12.3165 8.13456 11.7571C7.97468 11.265 7.97468 10.735 8.13456 10.2429C8.31632 9.6835 8.80144 9.19838 9.77168 8.22814L12.8283 5.17157C13.2606 4.73919 13.4768 4.523 13.7291 4.3684C13.9528 4.23133 14.1967 4.13032 14.4517 4.06908C14.7395 4 15.0452 4 15.6567 4ZM18.3748 7.75C18.9961 7.75 19.4998 7.24632 19.4998 6.625C19.4998 6.00368 18.9961 5.5 18.3748 5.5C17.7535 5.5 17.2498 6.00368 17.2498 6.625C17.2498 7.24632 17.7535 7.75 18.3748 7.75Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6325_2611"
          x="0.0146484"
          y="0"
          width="28.9854"
          height="28.9852"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6325_2611"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6325_2611"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const FireBadgeIcon = () => {
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_9578_3142)">
      <path d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.3911 16.0701 13.0207 16.8659 9.15186C16.9718 8.63724 17.0247 8.37994 17.1549 8.24449C17.2664 8.12847 17.4272 8.05474 17.5878 8.04589C17.7754 8.03557 17.9371 8.1255 18.2604 8.30537C20.5637 9.58683 20.75 12.0683 20.75 12.5C20.75 14.25 19.7462 15.7462 20.5 16.5C21.0752 17.0751 22.0657 16.6655 22.3922 15.5181C22.4634 15.2677 22.499 15.1425 22.592 15.0719C22.6654 15.0161 22.7861 14.9891 22.8763 15.0082C22.9905 15.0324 23.0417 15.0911 23.1441 15.2083C23.5509 15.6739 24 16.5226 24 18Z" fill="#FF4766"/>
      <path d="M18 24.75C21.7279 24.75 24.75 21.7279 24.75 18C24.75 16.3572 24.2453 15.3289 23.709 14.7149C23.7035 14.7087 23.6976 14.7017 23.691 14.6941C23.5994 14.587 23.3984 14.3522 23.0318 14.2745C22.7283 14.2102 22.3853 14.287 22.1383 14.4747C21.9447 14.6218 21.8467 14.8055 21.7905 14.9418C21.7442 15.0541 21.7069 15.1858 21.677 15.291C21.6749 15.2984 21.6728 15.3057 21.6708 15.3128C21.5536 15.7247 21.343 15.917 21.2133 15.9796C21.1499 16.0102 21.1102 16.0097 21.0944 16.0075C21.0827 16.0059 21.062 16.0013 21.0303 15.9697C21.0087 15.9481 20.9765 15.9113 20.9703 15.7705C20.9631 15.6051 20.9966 15.3774 21.0735 15.0404C21.0989 14.9293 21.129 14.8076 21.1613 14.677C21.3079 14.0844 21.5 13.3077 21.5 12.5C21.5 11.9921 21.2985 9.13742 18.625 7.64997C18.6173 7.6457 18.6096 7.6414 18.6018 7.63708C18.4606 7.55845 18.3067 7.47273 18.163 7.41255C17.9912 7.34058 17.7879 7.28375 17.5466 7.29703C17.1965 7.3163 16.8572 7.47192 16.6142 7.72478C16.4215 7.92531 16.3342 8.16576 16.2817 8.34473C16.2301 8.52057 16.185 8.73983 16.1368 8.9742C16.135 8.98302 16.1332 8.99187 16.1313 9.00073C15.794 10.6405 14.7981 11.7775 13.7037 13.027C13.6592 13.0777 13.6147 13.1286 13.5699 13.1797C12.465 14.4432 11.25 15.8828 11.25 18C11.25 21.7279 14.2721 24.75 18 24.75Z" stroke="white" strokeWidth="1.5"/>
    </g>
    <defs>
      <filter id="filter0_d_9578_3142" x="4.5" y="2.5451" width="27" height="30.9549" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9578_3142"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9578_3142" result="shape"/>
      </filter>
    </defs>
  </svg>
}
