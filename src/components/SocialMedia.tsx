import { copyTextToClipboard } from "src/utils/copy-to-clipboard";
import { GitHubIcon, LinkedInIcon, MailIcon, TwitterIcon } from "./Icons";
import { SocialLink } from "./Links";

export const SocialMedia = () => {
  return (
    <div class="flex items-center gap-8">
      <div class="w-full border-t border-[#35325C]/80"></div>
      <div class="flex gap-6">
        <SocialLink href="www.twitter.com">
          <TwitterIcon class="h-7 w-7 fill-[#1E1D35]  hover:fill-primary-100" />
        </SocialLink>
        <SocialLink href="www.linkedin.com">
          <LinkedInIcon class="h-7 w-7 fill-[#1E1D35]  hover:fill-primary-100" />
        </SocialLink>
        <SocialLink href="www.github.com">
          <GitHubIcon class="h-7 w-7 fill-[#1E1D35]  hover:fill-primary-100" />
        </SocialLink>
        <button onClick={copyTextToClipboard}>
          <MailIcon class="h-7 w-7 fill-[#1E1D35]  hover:fill-primary-100" />
        </button>
      </div>
      <div class="w-full border-t border-[#35325C]/80"></div>
    </div>
  );
};
