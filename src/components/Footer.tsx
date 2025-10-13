export function Footer() {
  return (
    <div className="w-full h-[280px] bg-blue-600 py-[40px] gap-[12px]">
      <div className="flex gap-[8px] ml-[80px]">
        <img src="film.svg" className="w-[20px] h-[20px]"></img>
        <p className="text-[16px] text-[#FAFAFA] font-bold">Movie Z</p>
      </div>
      <div>
        <p className=" ml-[80px] text-[#FAFAFA] font-normal">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>

      <div>
        <p className="text-[#FAFAFA] text-[14px]">Contact Information</p>
      </div>
    </div>
  );
}
