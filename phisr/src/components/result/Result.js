import "./Result.css";
import { Header } from "../header/Header";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import WarningGif from "../../assets/Warning.gif";
import SafeGif from "../../assets/Safe.gif";
import URLSafeGif from "../../assets/UrlSafe.gif";


export function Result(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;

  //----------------------------------------------------------

  // Runs at Initial Render. Redirects if State is null.
  useEffect(() => {
    if (locationState == null) {
      console.log("Redirecting to Home");
      navigate("/");
    }
  }, [locationState, navigate]);

  if (locationState == null) {
    console.log("LocationState is null");
    return null;
  }

  //----------------------------------------------------------

  // Extract Data 
  const HIGHEST_URL_SCORE = 180
  const input_url = locationState["inputUrl"];
  const output = locationState["output"];
  console.log("OUTPUT : ", output)

  // Legitimate URLs have higher scores
  const url_score = output["SCORE"]
  let THREAT_LEVEL = null;
  if (url_score >= 120) {
    THREAT_LEVEL = "SAFE";
  } else if (url_score > 60 & url_score < 120) {
    THREAT_LEVEL = "POTENTIAL";
  } else {
    THREAT_LEVEL = "RISKY";
  }


  function OutputStatement(props) {

    if (props.THREAT_LEVEL == "SAFE") {
      return (
        <>
          <h1 className="font-light text-center mt-3 max-sm:text-lg sm:text-2xl md:text-3xl ">
            Kiritilgan URL manzili <span className="font-extrabold"> XAVFSIZ </span> ! ✅ Hech qanday zararli hodisa aniqlanmadi.
          </h1>
        </>
      )
    }

    if (props.THREAT_LEVEL == "POTENTIAL") {
      return (
        <>
          <h1 className="font-light text-center mt-3 max-sm:text-lg sm:text-2xl md:text-3xl ">
            Kiritilgan URL manzili <span className="font-extrabold"> Potensial xavfli </span> ! ⚠️ Xavfsizlik uchun Inkognito rejimi va VPNdan foydalaning.
          </h1>
        </>
      )
    }

    return (
      <>
        <h1 className="font-light text-center mt-3 max-sm:text-lg sm:text-2xl md:text-3xl ">
          The given URL is <span className="font-extrabold"> Juda zararli </span> ! ❌ Iltimos, u manzilga tashrif buyurmang.
        </h1>
      </>
    )

  }

  function GifOutput(props) {

    if (props.THREAT_LEVEL == "SAFE") {
      return (
        <>
          <img src={SafeGif} alt="URL Safe Gif" className="ml-[23%] w-[55%] sm:ml-[31%] sm:w-[38%] lg:ml-[37%] lg:w-[26%] mt-2" />
        </>
      )
    }

    return (
      <>
        <img src={WarningGif} alt="Warn Gif" className="ml-[23%] w-[55%] sm:ml-[33%] sm:w-[38%] lg:ml-[37%] lg:w-[26%] mt-2" />
      </>
    )

  }

  //----------------------------------------------------------

  return (
    <>
      <Header />

      <GifOutput THREAT_LEVEL={THREAT_LEVEL} />

      <h1 className="font-semibold text-center max-sm:text-xl sm:text-2xl">"{input_url}"</h1>

      <OutputStatement THREAT_LEVEL={THREAT_LEVEL} />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 max-w-2xl mt-8">
          <div className="text-center bg-gray-200 p-2 rounded">
            Eng ko'p tashrif buyurilgan saytlarda: {output.InTop1Million ? '✅ Bor' : '❌ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            SSL sertifikati aniqlandi : {output.hasSSLCertificate ? '✅ Bor' : '❌ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            Domen 3 oydan beri ish faoliyatida: {output.isOlderThan3Months ? '✅ Xa' : '❌ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            Vaqtinchalik domenni ro'yxatdan o'tkazishdan foydalanadi (Vercel, Heroku masalan): {output.isTemporaryDomain ? '❌ Xa' : '✅ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            Google WebSafe baholashdan otdi: {output.GoogleSafePassed ? '✅ Xa' : '❌ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            Nortan WebSafe baholashdan o‘tdi: {output.NortanWebSafePassed ? '✅ Xa' : '❌ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            URLVoid manbalarida qora royxatga kiritilgan: {output.InURLVoidBlackList ? '❌ Xa' : '✅ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            Mcaffe manbalarida qora royxatga kiritilgan: {output.InMcaffeBlackList ? '❌ Xa' : '✅ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            Sucuri manbalarida qora roʻyxatga kiritilgan: {output.InSucuriBlacklist ? '❌ Xa' : '✅ Yoq'}
          </div>
          <div className="text-center bg-gray-200 p-2 rounded">
            IpSet manbalarida qora ro'yxatga kiritilgan: {output.isBlackListedinIpSets ? '❌ Xa' : '✅ Yoq'}
          </div>
        </div>
      </div>

      

      <button
        className="px-5 py-3 text-center mt-8 w-fit bg-amber-400 hover:bg-amber-500 
      active:bg-amber-300 text-white font-extrabold text-roboto rounded ml-[37%] sm:ml-[42%] md:ml-[44%] lg:ml-[46%] mb-16"
        onClick={() => navigate("/")}> Yana tekshirib korasizmi ? </button>
    </>

  );
}
