import React from "react";

export const Categories = ({
  categories,
}: {
  categories: { name: string }[];
}) => {
  return (
    <div className="md:w-1/2 md:max-w-[543px]">
      <h5 className="mb-[16px]">Catergories</h5>
      {categories.map(({ name }, index) => (
        <div
          className="bg-white rounded-lg py-[22px] px-[24px] mb-2 relative"
          key={index}
        >
          {name}
          <span className="bg-[url('https://api.iconify.design/mdi/arrow-right.svg?color=teal')] bg-no-repeat bg-contain  absolute h-[23px] w-[23px] bottom-[23px] right-[19px]"></span>
        </div>
      ))}
    </div>
  );
};
