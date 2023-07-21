import "../styles/globals.css";
import { LogoIcon } from "../components/logo";
import Link from "next/link";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";

const Plex = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={Plex.className}>
      <header className="z-10 relative md:absolute top-0 md:top-[24px] w-full">
        <div className="relative max-w-[1136px] mx-auto bg-white md:rounded-[12px] md:flex items-center px-[24px] py-[22px]">
          <LogoIcon />
          <input
            id="menuCheckbox"
            value={1}
            type="checkbox"
            className="hidden"
          />
          <label
            id="menuIcon"
            htmlFor="menuCheckbox"
            className="z-10 absolute md:relative top-[29px] right-[25px] md:hidden flex cursor-pointer flex-col justify-between w-[30px] h-[22px] transform origin-center transition-all"
          >
            <div className="bg-[#001A1A] h-[2px] w-full transform transition-all duration-300 origin-left"></div>
            <div className="bg-[#001A1A] h-[2px] w-full rounded delay-[100ms]"></div>
            <div className="bg-[#001A1A] h-[2px] w-full transform transition-all duration-300 origin-left"></div>
          </label>
          <div className="menuBox fixed right-0 top-0 h-screen w-[94vw] px-[42px] pt-[116px] translate-x-[94vw] md:translate-x-0 md:static md:p-0 md:h-auto md:w-auto bg-white md:flex grow justify-between items-center transform transition-all duration-300 ">
            <div className="flex flex-col md:flex-row justify-evenly text-[20px] md:text-[16px] md:mx-[38px] max-w-[417px] grow">
              <Link href="/" className="mb-[30px] md:mb-0">
                Home
              </Link>
              <Link href="/surfing" className="mb-[30px] md:mb-0">
                Surfing
              </Link>
              <Link href="/hula" className="mb-[30px] md:mb-0">
                Hula
              </Link>
              <Link href="/vulcano" className="mb-[30px] md:mb-0">
                Vulcano
              </Link>
            </div>
            <button className="bg-[#008080] text-[15px] font-button py-[9px] px-[24px] my-[5px] md:my-[-2px] font-mono rounded-lg text-white">
              Book a trip
            </button>
          </div>
        </div>
      </header>
      <Component key={router.route} {...pageProps} />
      <footer className="bg-[#001A1A] py-[22px]">
        <div className="container">
          <LogoIcon color="#ffffff" />
        </div>
      </footer>
    </main>
  );
}
