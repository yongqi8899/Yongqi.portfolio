import { CirclesWithBar } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="absolute flex flex-col items-center justify-center w-screen h-screen gap-10 m-auto bg-primary">
      <CirclesWithBar
        height="400"
        width="400"
        color="#915EFF"
        outerCircleColor="#915EFF"
        innerCircleColor="#915EFF"
        barColor="#915EFF"
        ariaLabel="circles-with-bar-loading"
       
        visible={true}
      />
      <p className="text-3xl">Yongqi's Website</p>
    </div>
  );
}
