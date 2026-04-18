import { Badge } from "@/components/ui/badge";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

const socials = [
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
    link: "https://discord.com/",
  },
  {
    icon: <EnvelopeClosedIcon />,
    username: "hoanganvu.work@gmail.com",
    link: "mailto:hoanganvu.work@gmail.com",
  },
];

export default function Contacts() {
  return (
    <div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0">
        <div className="text-2xl md:text-4xl font-semibold tracking-widest text-left mb-6 md:mb-10">
          GET IN TOUCH
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="text-left text-base md:text-xl">
            Want to chat? Feel free to reach out via email
          </div>
          <div className="text-left text-base md:text-xl">
            <p>• Ask questions</p>
            <p>• Explore collaboration opportunities</p>
          </div>

          <div className="text-left text-base md:text-xl mb-2">
            Feel free to connect with me on any of these platforms!
          </div>
          <div className="justify-start flex gap-2 md:gap-3 flex-wrap">
            {socials.map((social, index) => (
              <Badge
                asChild
                className="text-xs md:text-sm cursor-pointer transition-all duration-100 border-b-4 border-r-4 border-orange-600 dark:border-orange-700 active:border-b-2 active:border-r-2 hover:scale-105"
                key={index}
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <div className="text-base md:text-lg flex justify-center items-center gap-2">
                    {social.icon}
                    <span className="text-xs md:text-sm">
                      {social.username}
                    </span>
                  </div>
                </a>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
