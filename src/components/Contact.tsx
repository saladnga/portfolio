import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import type { ReactNode } from "react";

type Social = {
  icon: ReactNode;
  username: string;
  link: string;
};

const socials: Social[] = [
  {
    icon: <GitHubLogoIcon />,
    username: "saladnga",
    link: "https://github.com/saladnga",
  },
  {
    icon: <LinkedInLogoIcon />,
    username: "vuhoang1604",
    link: "https://www.linkedin.com/in/vuhoang1604/",
  },
  {
    icon: <TwitterLogoIcon />,
    username: "saladnga4",
    link: "https://x.com/saladnga4",
  },
  {
    icon: <DiscordLogoIcon />,
    username: "@saladnga",
    link: "https://discord.com/users/saladnga",
  },
];

export default function Contact() {
  return (
    <div>
      <PageContainer>
        <SectionTitle>GET IN TOUCH</SectionTitle>

        <div className="flex flex-col gap-8">
          <p className="text-left text-base md:text-lg leading-relaxed">
            I'm currently open to new opportunities. Whether you have a
            question, a project idea, or just want to say hi — my inbox is
            always open!
          </p>

          <a
            href="mailto:hoanganvu.work@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-200 w-fit font-semibold mx-auto"
          >
            <EnvelopeClosedIcon className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-foreground/10" />
            <span className="text-sm opacity-50">or find me on</span>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            {socials.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-theme hover-border-accent hover-bg-accent rounded-lg transition-all duration-200 text-sm"
              >
                {social.icon}
                {social.username}
              </a>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
