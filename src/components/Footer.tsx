import clsx from "clsx";
import type { Component } from "solid-js";
import { SocialMedia } from "./SocialMedia";

export const Footer: Component<{ class?: string }> = (props) => {
  return (
    <footer
      class={clsx(
        props.class,
        "flex h-24 w-full flex-col justify-between pb-2"
      )}
    >
      <SocialMedia />
      <div class="text-center font-mono text-xs text-[#1E1A2A]">
        <p class="hover:text-primary-100">
          Designed & Built by Shakhruz Rakhmatov
        </p>
        <p class="font-semibold">© All rights reserved 2023.</p>
      </div>
    </footer>
  );
};
