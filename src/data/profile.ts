import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

import type { ComponentType } from "react";

export type Social = {
  icon?: ComponentType<{ className?: string }>[];
  username: string;
  link: string;
};

const socials: Social[] = [
  {
    icon: [GitHubLogoIcon],
    username: "saladnga",
    link: "https://github.com/saladnga",
  },
  {
    icon: [LinkedInLogoIcon],
    username: "vuhoang1604",
    link: "https://www.linkedin.com/in/vuhoang1604/",
  },
  {
    icon: [TwitterLogoIcon],
    username: "saladnga4",
    link: "https://x.com/saladnga4",
  },
  {
    icon: [DiscordLogoIcon],
    username: "saladnga",
    link: "https://discord.com/users/saladnga",
  },
];

export const profile = {
  name: "Vu A. Hoang",
  tagline: {
    pre: "i'm vu. i make ",
    accent: "software.",
  },
  availability: "Open to software engineering roles",
  blurb: "Full-stack developer, focused on applied AI.",
  email: "hoanganvu.work@gmail.com",
  contactHeadline: {
    pre: "Let's build something ",
    accent: "great",
    post: " together.",
  },
  contactBlurb:
    "I'm currently open to new opportunities. A question, a project idea, or just hi - my inbox is always open.",
  recruiterNote: {
    role: "Full-time SWE / Data Scientist, US / Remote",
    focus: "Frontend · Full-stack · AI/ML",
  },
  socials: socials,
};
