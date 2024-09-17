import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
            <Navbar />
            <Hero />
          </div>
          <Tech />
          <Works />
          <Experience />
          <div className="relative z-0">
            <Contact />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
