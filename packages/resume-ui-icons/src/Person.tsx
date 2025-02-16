import { type SVGProps } from "react";

export default function Person(props: SVGProps<SVGSVGElement>) {
  return <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 8.5C6.6249 8.5 5.1 6.9751 5.1 5.1C5.1 3.2249 6.6249 1.7 8.5 1.7C10.3751 1.7 11.9 3.2249 11.9 5.1C11.9 6.9751 10.3751 8.5 8.5 8.5ZM11.6943 9.07203C12.8554 8.13788 13.6 6.7065 13.6 5.1C13.6 2.2831 11.3169 0 8.5 0C5.6831 0 3.4 2.2831 3.4 5.1C3.4 6.7065 4.1446 8.13788 5.3057 9.07203C2.19555 10.2408 0 13.1283 0 17H1.7C1.7 12.75 4.75065 10.2 8.5 10.2C12.2493 10.2 15.3 12.75 15.3 17H17C17 13.1283 14.8044 10.2408 11.6943 9.07203Z"
      fill="currentColor"
    />
  </svg>

}
