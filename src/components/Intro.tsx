const scrollToSection = (id: string, offset = 100) => {
  const container = document.getElementById("scroll-container");
  const section = document.getElementById(id);
  if (container && section) {
    container.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });
  }
};

const Intro = () => {
  return (
    <div className="text-base md:text-lg text-center md:text-left md:px-0 mx-auto flex flex-col gap-4">
      <div className="section-title text-2xl md:text-4xl font-semibold tracking-wider hover:bg-accent w-fit text-accent hover:text-white bg-transparent mx-auto md:mx-0 transition-all">
        HI, I'M VU
      </div>

      <p>
        I'm a recent Computer Science graduate from Troy University with a focus
        on Full-Stack Development and Artificial Intelligence.
      </p>

      <p>
        I build applications that bridge modern web engineering with intelligent
        systems to solve real-world problems. I'm currently seeking Software
        Engineering opportunities and love collaborating on high-impact projects
        that drive meaningful change.
      </p>

      <button
        onClick={() => scrollToSection("contact")}
        className="group hover:text-accent cursor-pointer transition-colors font-bold w-fit mx-auto md:mx-0"
      >
        Let's build something great together!{" "}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lg">
          →
        </span>
      </button>
    </div>
  );
};

export default Intro;
