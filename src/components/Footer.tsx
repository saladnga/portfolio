import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center md:items-start items-center w-full md:w-3/4 lg:w-1/2 mx-auto gap-6 md:gap-0 px-4 md:px-0">
      <div className="flex flex-col md:items-start">
        <div className="font-bold text-base md:text-base mb-2">
          Contact Here:
        </div>
        <div className="flex flex-row items-start justify-start md:justify-end gap-3">
          <a
            className="cursor-pointer border-2 rounded-md border-foreground bg-foreground text-background p-1 hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl"
            href="https://www.linkedin.com/in/vuhoang1604/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="cursor-pointer border-2 rounded-md border-foreground bg-foreground text-background p-1 hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl"
            href="https://github.com/saladnga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hoanganvu.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer border-2 rounded-md border-foreground bg-foreground text-background p-1 hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl"
          >
            <Mail />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center md:items-end">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 mb-2">
          <div className="flex gap-1 px-5 py-1 md:px-2 md:py-1  justify-center border-2 rounded-md items-center border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl text-sm">
            <a
              href="/public/VuAnHoang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-semibold"
            >
              My Resume
            </a>
            <ExternalLink size={15} />
          </div>
          <div className="flex gap-1 px-5 py-1 md:px-2 md:py-1 justify-center items-center border-2 border-foreground rounded-lg bg-foreground text-background font-bold cursor-pointer hover:bg-background hover:text-foreground transition shadow-lg hover:shadow-xl text-sm">
            <div className="cursor-pointer font-semibold">My Blog</div>
            <ExternalLink size={15} />
          </div>
        </div>
        <div className="font-bold text-sm md:text-base mt-5 md:mt-0 mb-15">
          Copyright © Vu Hoang 2026
        </div>
      </div>
    </div>
  );
};

export default Footer;
