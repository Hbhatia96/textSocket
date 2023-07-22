import React,{ useEffect } from "react";
import Image from "next/image";
// import { getAllAPI } from "../services/rest-services";
import { Highlights } from "../components/highlights";
import { Categories } from "../components/categories";
import { GetServerSideProps } from "next";
import { io } from "socket.io-client";
import to from "await-to-js";
let socket: any;

export default function Index() {

  const socketInitializer = async () => {
    console.log('tt------------');
    socket = io("https://test-socket.adaptable.app",{
      path: '/api/socket',
      // extraHeaders: {
      //   "my-custom-header": "abcd"
      // }
      })

    socket.on('connect', () => {
      console.log('connected------------');
      socket.on('input-received', (msg: any) => {
        console.log('received------------',msg);
      })
    })
  }

  const onChangeHandler = (e: any) => {
    // setInput(e.target.value)
    // console.log('check------------',e.target.value);
    socket.emit('input-change', e.target.value)
  }

  useEffect(() => {socketInitializer()}, [])

  return (
    <>

<input
    placeholder="Type something"
    onChange={onChangeHandler}
  />
      {/* {error && <p>Some Error Occured</p>}
      {!error && (
        <div>
          <section className="h-[480px] md:h-[560px] heroBanner">
            <h1>Welcome to Hawaii</h1>
          </section>

          <Highlights highlights={highlights} />

          <section className="bg-[#E6F2F2] pt-[40px] pb-[72px]">
            <div className="container">
              <div className="md:flex md:space-x-8">
                <Categories categories={categories} />
                <div className="mt-[40px] ml-[2px] md:mt-0 md:w-1/2 md:ml-0">
                  <h5 className="mb-[16px]">Travel Guide</h5>
                  <div className="flex justify-between bg-white rounded-lg p-[24px] mb-2">
                    <div className="flex-initial flex flex-col items-start">
                      <h4 className="text-[#001A1A] mb-[13px] md:mb-1.5">
                        Hadwin Malone
                      </h4>
                      <p className="grow mb-[32px] md:mb-0">Guide since 2012</p>
                      <button className="text-[14px] font-button px-[24px] py-[8px] text-[#008080] border-[1px] border-[#008080] border-solid rounded-lg ">
                        Contact
                      </button>
                    </div>
                    <div className="relative h-[74px] w-[74px] md:h-[128px] md:w-[128px]">
                      <Image
                        // className="relative"
                        src="/user.png"
                        fill
                        alt="background image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )} */}
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const { response, error } = await getAllAPI(
//     [
//       "https://web-dev.dev.kimo.ai/v1/highlights",
//       "https://web-dev.dev.kimo.ai/v1/categories",
//     ],
//     false
//   );
//   const test = {
//     props: {
//       highlights: response?.[0] || null,
//       categories: response?.[1] || null,
//       error: error?.message || null,
//     },
//   };
//   console.log("check2----", test, error);
//   return test;
// };
