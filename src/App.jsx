import InputMenu from "./components/InputMenu";
import "./App.css";
// import { useEffect, useState } from "react";

// const VITE_API_BASE_URL = "https://friends-2v7s.onrender.com";

function App() {
  // const [bStatus, setBStatus] = useState("unknown");
  // const [bannerVisible, setBannerVisible] = useState(false);

  // useEffect(() => {
  //   let showBannerTimeout;
  //   let hideBannerTimeout;
  //   let hasShownAsleepBanner = false;

  //   const pingBackend = async (retries = 3, delay = 5000) => {
  //     showBannerTimeout = setTimeout(() => {
  //       setBannerVisible(true);
  //       setBStatus("asleep");
  //       hasShownAsleepBanner = true;
  //     }, 1000);

  //     for (let attempt = 1; attempt <= retries; attempt++) {
  //       try {
  //         const res = await fetch(`${VITE_API_BASE_URL}/api/ping`);
  //         if (res.ok) {
  //           clearTimeout(showBannerTimeout);

  //           if (hasShownAsleepBanner) {
  //             setBStatus("awake");
  //             hideBannerTimeout = setTimeout(() => {
  //               setBannerVisible(false);
  //               setBStatus("unknown");
  //             }, 1000);
  //           } else {
  //             setBStatus("unknown");
  //           }

  //           return;
  //         }
  //       } catch (error) {
  //         console.warn(`Ping attempt ${attempt} failed`);
  //         if (attempt < retries) {
  //           await new Promise((resolve) => setTimeout(resolve, delay));
  //         }
  //       }
  //     }

  //     clearTimeout(showBannerTimeout);
  //     setBannerVisible(true);
  //     setBStatus("asleep");
  //     console.error("Backend did not respond after multiple attempts.");
  //   };

  //   pingBackend();

  //   return () => {
  //     clearTimeout(showBannerTimeout);
  //     clearTimeout(hideBannerTimeout);
  //   };
  // }, []);

  return (
    <>
      {/* <div
        className={`asleepBackend ${bStatus === "awake" ? "awake" : ""} ${
          !bannerVisible ? "hidden" : ""
        }`}
      >
        <p>
          {bStatus === "asleep"
            ? "Backend is asleep. Wait ~ 20s."
            : bStatus === "awake"
            ? "Backend is now awake!"
            : ""}
        </p>
      </div> */}
      <InputMenu />
    </>
  );
}

export default App;
