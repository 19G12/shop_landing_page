import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-100 flex flex-row justify-between items-center bg-[#05386B] relative z-10">
      <div className="lg:basis-1/5 md:basis-2/5 basis-1/3 text-center flex flex-row justify-evenly py-4 ml-3 text-[#5CDB95]">
        <div className="w-1/5 text-center">
          <a href="#">Home</a>
        </div>
        <div className="w-1/5 text-center">
          <span>/</span>
        </div>
        <div className="w-1/5 text-center">
          <a href="#">Variants</a>
        </div>
        <div className="w-1/5 text-center">
          <span>/</span>
        </div>
        <div className="w-1/5 text-center">
          <a href="#">About</a>
        </div>
      </div>
      <div className="md:w-3/4 basis-1/3 text-center">
        <div className="w-14 overflow-hidden m-auto p-2">
          <Image
            src="https://cdn.shopify.com/s/files/1/0700/5339/6764/files/half_B-5f008a6c1658.png?v=1672982810"
            alt="half_b"
            width={50}
            height={50}
            className="w-full"
          />
        </div>
      </div>
      <div className="lg:basis-1/5 md:basis-2/5 basis-1/3 overflow-hidden flex flex-row justify-center text-[#5CDB95]">
        <button className="text-center p-2 w-2/4 rounded-full border-2 border-solid border-lime-100	hover:bg-lime-500">
          shop
        </button>
      </div>
    </div>
  );
}
