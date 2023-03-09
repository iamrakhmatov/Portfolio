import { createSignal } from "solid-js";
import { Container } from "./Containers";
import { HomeIcon } from "./Icons";
import { NavLink } from "./Links";
import { SearchBar } from "./Search";
import { ModeToggler } from "./Toggler";

export const Header = () => {
  const [getMenuStatus, setMenuStatus] = createSignal(false);
  return (
    <nav class="border-b border-[#35325C]/80 py-6 font-acme">
      <Container>
        <div class="relative flex h-16 justify-between sm:h-9 lg:h-10">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#fff]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuStatus(!getMenuStatus())}
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div class="flex gap-6">
              <div class="hidden items-center rounded-full bg-transparent sm:flex">
                <a href="/blog" class="text-white sm:text-3xl lg:text-4xl">
                  <span class="text-primary-300 sm:text-xl lg:text-2xl">i</span>
                  R
                </a>
              </div>
              <SearchBar />
            </div>
            <div class="hidden rounded-full px-6 sm:flex sm:space-x-5 ">
              <NavLink href="/">
                <HomeIcon class="h-7 w-7" />
              </NavLink>
              <ModeToggler />
            </div>
          </div>
        </div>

        {getMenuStatus() && (
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 pt-2 pb-4">
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </a>
              <a
                href="/"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#fff] hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </a>
              <a
                href="/"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#fff] hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </a>
              <a
                href="/"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#fff] hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
