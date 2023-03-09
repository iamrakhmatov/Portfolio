import clsx from "clsx";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";

type AvatarContainerProps = {
  className?: string;
} & JSX.HTMLAttributes<HTMLDivElement>;
export const AvatarContainer: Component<AvatarContainerProps> = (props) => {
  const [className] = splitProps(props, ["className"]);
  return (
    <div
      class={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
};

export const Container: Component<{
  children: JSX.Element;
  class?: string;
}> = (props) => {
  return (
    <div class={clsx(props.class, "mx-auto h-full w-full max-w-4xl")}>
      {props.children}
    </div>
  );
};
