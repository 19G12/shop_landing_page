import Image from "next/image";

export default function Rating() {
  const empt_arr = [];
  for (let index = 0; index < 6; index++) {
    empt_arr.push(index);
  }

  return (
    <div className="w-full h-full flex lg:flex-row flex-col-reverse justify-evenly items-center p-3">
      <div className="hidden md:flex lg:h-3/4 lg:w-1/2 md:w-4/5 md:h-1/2 flex gap-x-20 md:flex-row md:justify-center bg-[#34A7BD] md:overflow-y-auto p-3 rounded-xl">
        <div className="w-1/2 h-max flex flex-col flex-start relative -top-3">
          {empt_arr.map((val, ind) => {
            return (
              <div
                key={val * ind}
                className={`w-full h-[250px] my-3 bg-[#F1F1E8] rounded-xl p-2 relative`}
              >
                <div className="h-1/5 rounded-xl w-full text-center font-bold text-[#000]">
                  Hero product
                </div>
                <div className="h-1/5 rounded-xl w-full text-center text-[#000]">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus,
                    qui blanditiis praesentium voluptatum deleniti atque.
                  </p>
                </div>
                <div className="w-full text-left overflow-hidden pt-3 absolute bottom-3 left-[3%]">
                  <Image
                    src="https://www.clipartmax.com/png/middle/67-677159_5-star-rating-cliparts-11-star-ratings-5-5.png"
                    width={50}
                    height={50}
                    alt="star_img"
                    className="object-cover w-1/4 bg-[#F1F1E8]"
                  />
                </div>
                <div className="text-right overflow-hidden pt-3 absolute bottom-2 right-[3%]">
                  <Image
                    src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                    width={80}
                    height={30}
                    alt="star_img"
                    className="object-contain rounded-full bg-[#F1F1E8]"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/2 flex h-max flex-col flex-end relative top-3 p-2">
          {empt_arr.map((val, ind) => {
            return (
              <div
                key={val * ind}
                className={`w-full h-[250px] my-3 bg-[#F1F1E8] rounded-xl relative p-2`}
              >
                <div className="h-1/5 rounded-xl w-full text-center font-bold text-[#000]">
                  Hero product
                </div>
                <div className="h-1/5 rounded-xl w-full text-center text-[#000]">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus,
                    qui blanditiis praesentium voluptatum deleniti atque.
                  </p>
                </div>
                <div className="w-full text-left overflow-hidden pt-3 absolute bottom-3 left-[3%]">
                  <Image
                    src="https://www.clipartmax.com/png/middle/67-677159_5-star-rating-cliparts-11-star-ratings-5-5.png"
                    width={50}
                    height={50}
                    alt="star_img"
                    className="object-cover w-1/4 bg-[#F1F1E8]"
                  />
                </div>
                <div className="text-right overflow-hidden pt-3 absolute bottom-2 right-[3%]">
                  <Image
                    src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                    width={80}
                    height={30}
                    alt="star_img"
                    className="object-contain rounded-full bg-[#F1F1E8]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row w-full sm:h-[50vh] h-[40vh] bg-[#34A7BD] md:hidden rounded-xl">
        <div className="w-max overflow-x-auto overflow-y-hidden flex flex-row h-full py-2">
          {empt_arr.map((val, ind) => {
            return (
              <div
                key={val * ind}
                className={`h-11/12 sm:basis-1/3 basis-full flex-shrink-0 bg-[#F1F1E8] rounded-xl mx-2 p-2 relative`}
              >
                <div className="h-1/5 rounded-xl w-full text-center font-bold text-[#000]">
                  Hero product
                </div>
                <div className="h-1/5 rounded-xl w-full text-center text-[#000]">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus,
                    qui blanditiis praesentium voluptatum deleniti atque.
                  </p>
                </div>
                <div className="w-full text-left overflow-hidden pt-3 absolute bottom-3 left-[3%]">
                  <Image
                    src="https://www.clipartmax.com/png/middle/67-677159_5-star-rating-cliparts-11-star-ratings-5-5.png"
                    width={50}
                    height={50}
                    alt="star_img"
                    className="object-cover w-1/4 bg-[#F1F1E8]"
                  />
                </div>
                <div className="text-right overflow-hidden pt-3 absolute bottom-2 right-[3%]">
                  <Image
                    src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                    width={80}
                    height={30}
                    alt="star_img"
                    className="object-contain rounded-full bg-[#F1F1E8]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-full text-center text-[#000] rounded-lg">
        <h1 className="w-full font-extrabold text-2xl p-2">
          {" "}
          What people think about our product
        </h1>
        <h1 className="w-full font-extrabold text-2xl p-2">...</h1>
        <p className="w-full text-md p-2">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using <strong>Content here</strong>, content
          here, making it look like readable English.
        </p>
      </div>
    </div>
  );
}
