import { CirclesWithBar } from "react-loader-spinner";
export default function Loading() {
  return (
    <CirclesWithBar
        height="400"
        width="400"
        color="#915EFF"
        outerCircleColor="#915EFF"
        innerCircleColor="#915EFF"
        barColor="#915EFF"
        ariaLabel="circles-with-bar-loading"
        wrapperClass="flex items-center justify-center mt-20"
        visible={true}
      />
  );
}
