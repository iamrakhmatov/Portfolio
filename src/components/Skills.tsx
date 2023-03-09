import {
  ApolloIcon,
  AstroIcon,
  AWSIcon,
  BranchIcon,
  DockerIcon,
  DraftIcon,
  GitHub2Icon,
  GraphQLIcon,
  JavaScriptIcon,
  LambdaIcon,
  MergeIcon,
  MongoDBIcon,
  NestJSIcon,
  NextJSIcon,
  NodeJSIcon,
  OAuthIcon,
  PostgreSQLIcon,
  PrismaIcon,
  PullRequestIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TerraformIcon,
  TRPCIcon,
  TypeScriptIcon,
} from "./Icons";

export const Skills = () => {
  return (
    <div class="relative h-screen w-full">
      <div class="absolute top-[25%] left-0 flex h-full w-screen items-center justify-center">
        {/* Background Texts */}
        <div class="absolute left-2/3 top-1/3">
          <h1 class="-ml-5 -mb-6 font-acme text-6xl text-purple-50 sm:-ml-0 sm:mb-20 sm:text-9xl sm:font-extrabold sm:text-purple-50/60">
            TS
          </h1>
        </div>
        <div class="absolute right-[5%] top-0">
          <h1 class="-ml-5 -mb-6 font-acme text-6xl text-purple-50 sm:-ml-0 sm:mb-20 sm:text-6xl sm:font-extrabold sm:text-indigo-50/50">
            Git
          </h1>
        </div>
        <div class="absolute bottom-1/3 left-[15%]">
          <h1 class="-ml-5 -mb-6 font-acme text-6xl text-purple-50 sm:-ml-0 sm:mb-20 sm:text-6xl sm:font-extrabold sm:text-indigo-50/70">
            Full-Stack
          </h1>
        </div>
        <div class="absolute bottom-2/3">
          <h1 class="-ml-5 -mb-6 font-acme text-6xl text-purple-50 sm:-ml-0 sm:mb-20 sm:text-5xl sm:font-extrabold sm:text-purple-100/40">
            Serverless
          </h1>
        </div>
        <div class="absolute bottom-[60%] left-20">
          <h1 class="-ml-5 -mb-6 font-acme text-6xl text-purple-50 sm:-ml-0 sm:mb-20 sm:text-3xl sm:font-extrabold sm:text-blue-100/40">
            DevOps
          </h1>
        </div>
        <div class="absolute top-1/2 right-[5%]">
          <h1 class="-ml-5 -mb-6 font-acme text-6xl tracking-wider text-purple-50 sm:-ml-0 sm:mb-20 sm:text-4xl sm:font-extrabold sm:text-purple-100/70">
            Architecture
          </h1>
        </div>
        <div class="absolute top-[56%]">
          <h1 class="font-acme text-6xl tracking-wider text-purple-50 sm:text-4xl sm:font-extrabold sm:text-purple-100/70">
            Ecosystem
          </h1>
        </div>

        {/* Forth level --------------------------------------------*/}
        <div class="absolute flex h-[60rem] w-[60rem] animate-spin-115 items-center justify-center rounded-full border-l border-r border-dashed border-purple-300/70">
          <div class="absolute h-[42.5rem] w-[42.5rem] -rotate-[20deg]">
            <div class="absolute -top-[18px] -right-[18px] h-9 w-9 animate-spin-115-back">
              <NestJSIcon class="h-full w-full rotate-[20deg]" />
            </div>
          </div>
          <div class="absolute h-[42.5rem] w-[42.5rem] -rotate-[28deg]">
            <div class="absolute -top-6 -left-6 h-12 w-12 animate-spin-115-back">
              <TerraformIcon class="h-full w-full rotate-[28deg]" />
            </div>
          </div>
          <div class="absolute h-[42.5rem] w-[42.5rem] rotate-[20deg]">
            <div class="absolute -top-6 -right-6 h-12 w-12 animate-spin-115-back">
              <PostgreSQLIcon class="h-full w-full -rotate-[20deg]" />
            </div>
          </div>

          {/* One Box */}
          <div class="absolute h-[42.5rem] w-[42.5rem]">
            {/* Authentication Icon */}
            <div class="absolute -right-5 -bottom-5 h-10 w-10 animate-spin-115-back">
              <OAuthIcon class="h-full w-full rounded-full shadow-lg shadow-black/40" />
            </div>
            <div class="absolute -left-5 -top-5 h-10 w-10 animate-spin-115-back rounded-full">
              <TailwindIcon class="absolute h-full w-full" />
            </div>
            {/* GitHub Icons */}
            <div class="absolute -left-12 -bottom-12 h-24 w-24 animate-spin-115-back">
              <div class="flex h-full w-full items-center justify-center ">
                <GitHub2Icon class="relative h-10 w-10 rounded-full border border-black bg-white shadow-md shadow-black/40" />
                <PullRequestIcon class="absolute right-1/3 -top-2 h-5 w-5 fill-green-500" />
                <DraftIcon class="absolute right-1 bottom-1/2 h-5 w-5 fill-gray-500" />
                <BranchIcon class="absolute right-1/3 -bottom-1 h-6 w-6 stroke-yellow-400" />
                <MergeIcon class="absolute left-0 bottom-1/4 h-5 w-5 fill-purple-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Third level ------------------------------------------------------ */}
        <div class="absolute flex h-[47rem] w-[47rem] animate-spin-95 items-center justify-center rounded-full border-t border-b border-gray-200/80">
          <div class="absolute h-[532px] w-[532px]">
            <div class="absolute -left-4 -bottom-4 h-8 w-8 animate-spin-95-back">
              <DockerIcon class="h-full w-full" />
            </div>
            <div class="absolute -right-3.5 -bottom-3.5 h-7 w-7 animate-spin-95-back">
              <LambdaIcon class="h-full w-full" />
            </div>
            <div class="absolute -right-3.5 -top-3.5 h-7 w-7 animate-spin-95-back">
              <ReduxIcon class="h-full w-full" />
            </div>

            {/* Prisma Icon */}
            <div class="absolute h-full w-full rotate-[28deg]">
              <div class="absolute -right-5 -top-5 h-10 w-10 -rotate-[28deg]">
                <PrismaIcon class="h-full w-full animate-spin-95-back" />
              </div>
            </div>
            <div class="h-full w-full -rotate-45">
              {/* TRPC Icon */}
              <div class="absolute -right-6 -top-6 h-12 w-12 animate-spin-95-back">
                <div class="flex h-full w-full rotate-45 items-center justify-center">
                  <TRPCIcon class="h-full w-full" />
                </div>
              </div>
              {/* AWS Icon */}
              <div class="absolute -left-6 -bottom-6 h-12 w-12 animate-spin-95-back">
                <div class="h-full w-full rotate-45">
                  <AWSIcon class="h-full w-full" />
                </div>
              </div>
              <div class="absolute -left-4 -top-4 flex h-8 w-8 animate-spin-95-back items-center justify-center">
                <ApolloIcon class="h-full w-full rotate-45 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Second level circle ----------------------------------------------------------------> */}
        <div class="absolute flex h-[34rem] w-[34rem] animate-spin-72 items-center justify-center rounded-full border-r border-l border-gray-200/80">
          <div class="absolute h-[24rem] w-[24rem]">
            <div class="h-full w-full rotate-[55deg]">
              <div class="absolute -top-7 -right-7 flex h-14 w-14 -rotate-[55deg] items-center justify-center">
                <MongoDBIcon class="h-full w-full animate-spin-72-back" />
              </div>
            </div>
          </div>
          <div class="absolute h-[24rem] w-[24rem]">
            <div class="h-full w-full rotate-[20deg]">
              <div class="absolute -top-5 -left-5 h-10 w-10 animate-spin-72-back">
                <AstroIcon class="h-full w-full -rotate-[20deg]" />
              </div>
            </div>
          </div>

          <div class="absolute h-[24rem] w-[24rem]">
            <div class="absolute -bottom-[36px] -left-[36px] h-[72px] w-[72px] animate-spin-72-back">
              <NextJSIcon class="h-full w-full" />
            </div>
            <div class="absolute -top-5 -right-5 h-10 w-10 animate-spin-72-back">
              <GraphQLIcon class="h-full w-full" />
            </div>
          </div>
        </div>

        {/* First level circle ----------------------------------------------------------------> */}
        <div class="absolute flex h-[21rem] w-[21rem] animate-spin-75 items-center justify-center rounded-full border-t border-b border-gray-200/60">
          {/* TypeScript Icon*/}
          <div class="absolute h-[15rem] w-[15rem] rotate-45">
            <div class="absolute -top-6 -left-6 h-12 w-12 animate-spin-75-back">
              <TypeScriptIcon class="h-full w-full -rotate-45 rounded-md shadow-lg shadow-blue-500/50" />
            </div>
          </div>
          {/* React Icon */}
          <div class="absolute h-[15rem] w-[15rem]">
            <div class="absolute -bottom-6 -right-6 h-12 w-12 animate-spin-75-back">
              <ReactIcon class="h-full w-full" />
            </div>
            <div class="absolute -bottom-6 -left-6 h-12 w-12 animate-spin-75-back">
              <NodeJSIcon class="h-full w-full" />
            </div>
          </div>
        </div>
        {/* ---------------------- C E N T E R ---------------------- */}
        <div class="absolute flex h-24 w-24 items-center justify-center">
          <div class="group relative">
            <div class="absolute -inset-1 animate-tilt rounded-sm bg-gradient-to-br from-yellow-600 via-yellow-600  to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <JavaScriptIcon class="relative h-16 w-16 rounded-md hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
