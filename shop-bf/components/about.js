import Image from "next/image";

export default function About() {
  return (
    <div
      className="flex flex-row justify-start items-start h-full w-full bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url(https://st3.depositphotos.com/1665362/15741/i/450/depositphotos_157415652-stock-photo-assortment-of-healthy-high-magnesium.jpg",
      }}
    >
      <div className="lg:h-full h-full lg:w-1/2 w-full flex flex-col lg:flex-col md:flex-row justify-evenly items-center md:gap-x-2 lg:items-start p-6">
        <div className="lg:w-1/2 sm:w-5/12 w-3/4 relative z-10 lg:my-2">
          <Image
            width={400}
            height={400}
            alt="prd_image"
            src="https://thumbs.dreamstime.com/b/magnesium-symbol-magnesium-symbol-mg-made-food-over-white-background-108381165.jpg"
            className="object-cover h-full w-full md:rounded-xl"
          />
          <div className="opacity-50 md:rounded-xl absolute w-full h-full top-4 left-4 border-solid border-4 border-[#81B214] -z-10"></div>
        </div>
        <div className="lg:w-3/4 md:w-1/2 w-full my-2 bg-[#F1F1E8] rounded-xl">
          <div className="w-full text-center text-[#000] p-3">
            <h1 className="my-2 font-bold text-3xl font-serif"> About magnesium </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
