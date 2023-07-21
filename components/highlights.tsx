import React from "react";
import Image from "next/image";

interface Highlight {
  title: string;
  description: string;
  image: string;
}

export const Highlights = ({ highlights }: { highlights: Highlight[] }) => {
  return (
    <section className="pt-[40px] sm:pb-[60px] pb-[59px]">
      <div className="container !px-0 !md:px-[16px]">
        <h5 className="mb-[24px] px-[16px]">Highlights</h5>
        <div className="flex space-x-4 px-[16px] pb-[21px] overflow-auto">
          {highlights.map(({ title, description, image }, index) => (
            <div className="card sm:w-[33%] shrink-0 sm:shrink" key={index}>
              <div className="relative h-[170px]">
                <Image
                  className="relative object-left sm:object-center"
                  src={image}
                  fill
                  alt="image"
                />
              </div>
              <div className="px-[24px] pt-[24px] pb-[50px] sm:pb-[70px] relative min-h-[170px]">
                <h4 className="mb-[17px] object-left sm:object-center">
                  {title}
                </h4>
                <p className="leading-[19px] line-clamp-2">{description}</p>
                <span
                  className="bg-[#E6F2F2] bg-[url('https://api.iconify.design/mdi/arrow-right.svg?color=teal')] bg-no-repeat bg-[length:61%] bg-center rounded-full absolute
                   h-[40px] w-[40px] 
                   bottom-[23px] right-[24px]"
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
