import { CirclesWithBar } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 m-auto mt-20">
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
