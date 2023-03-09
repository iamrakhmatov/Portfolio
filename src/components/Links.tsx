import clsx from "clsx";
import type { ParentComponent } from "solid-js";

type SocialLinkProps = {
  class?: string;
  href: string;
};
export const SocialLink: ParentComponent<SocialLinkProps> = (props) => {
  return <a href={props.href}>{props.children}</a>;
};

type NavLinkProps = {
  class?: string;
  href: string;
};
export const NavLink: ParentComponent<NavLinkProps> = (props) => {
  return (
    <a
      href={props.href}
      class={clsx(
        props.class,
        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium tracking-widest text-primary-300 hover:text-primary-50"
      )}
    >
      {props.children}
    </a>
  );
};
