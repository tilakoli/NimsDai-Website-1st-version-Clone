import Head from "next/head";
import FifthPage from "../component/FifthPage";
import Footer from "../component/Footer";
import FourthSec from "../component/FourthSec";
import LandingPage from "../component/LandingPage";
import LogoAnimation from "../component/LogoAnimation";
import NewsLetter from "../component/NewsLetter";
import OldLogoanimation from "../component/OldLogoanimation";
import SecondSec from "../component/SecondSec";
import SixthPage from "../component/SixthPage";
import ThirdSec from "../component/ThirdSec";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-optWhite-default">
      <Head>
        <title>Nimsdai ko clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <LandingPage />
      <SecondSec />
      <LogoAnimation />
      <ThirdSec />
      <FourthSec />
      <FifthPage />
      <SixthPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}
