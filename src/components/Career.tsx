import { DownloadIcon, TimelineIcon } from "./Icons";

export const Career = () => {
  return (
    <div class="relative w-full">
      <div class="absolute -top-80 left-0 h-[40rem] w-full bg-gradient-to-t from-white via-white"></div>
      <div class="relative h-36 w-full bg-transparent"></div>
      {/* <h1 class="absolute top-10 z-30 w-full text-center font-acme text-[10rem] font-semibold tracking-wide">
        <span class="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent opacity-10">
          Career
        </span>
      </h1> */}
      <div class="relative z-20 flex justify-center bg-white">
        <p class="absolute -top-20 -left-5 font-acme text-[12rem] font-extrabold tracking-widest text-purple-100/30">
          <span class="bg-gradient-to-r from-purple-100/50 bg-clip-text text-transparent">
            Timeline
          </span>
        </p>
        <TimelineIcon class="ml-[120px]" />
      </div>
      <div class="flex h-96 w-full justify-center pt-10">
        <button class="group flex h-12 w-32 items-center justify-center rounded-md border-2 border-purple-400 transition duration-200 hover:bg-purple-100">
          <p class="font-acme tracking-wide text-purple-600 opacity-100 transition duration-150 group-hover:opacity-0">
            Resume
          </p>
          <div class="absolute flex items-center gap-2">
            <p class="font-acme text-purple-600 opacity-0 transition duration-150 group-hover:opacity-100">
              Download
            </p>
            <DownloadIcon class="h-5 w-5 fill-purple-700 opacity-0 transition duration-150 group-hover:opacity-100" />
          </div>
        </button>
      </div>
    </div>
  );
};
