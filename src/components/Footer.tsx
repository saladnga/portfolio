import { Linkedin, Github, Mail, Link } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-between w-1/2 mx-auto">
      <div className=" flex flex-col items-start">
        <div className="font-bold">contact</div>
        <div className="flex flex-row items-start justify-end gap-3">
          <a
            className="cursor-pointer border rounded-md bg-black text-white p-1 hover:border-black hover:bg-white hover:text-black transition"
            href="https://www.linkedin.com/in/vuhoang1604/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="cursor-pointer border rounded-md bg-black text-white p-1 hover:border-black hover:bg-white hover:text-black transition"
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
            className="cursor-pointer border rounded-md bg-black text-white p-1 hover:border-black hover:bg-white hover:text-black transition"
          >
            <Mail />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end">
        <div className="flex gap-1">
          <div className="flex gap-1 px-1 justify-center border rounded-md items-center bg-black text-white hover:border-black hover:bg-white hover:text-black transition">
            <div className="cursor-pointer underline">Resume</div>
            <Link size={15} />
          </div>
          <div className="flex gap-1 px-1 justify-center border rounded-md items-center bg-black text-white hover:border-black hover:bg-white hover:text-black transition">
            <div className="cursor-pointer underline">Blog</div>
            <Link size={15} />
          </div>
        </div>
        <div>Copyright © Vu Hoang 2026</div>
      </div>
    </div>
  );
};

export default Footer;
