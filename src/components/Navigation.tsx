import {
  CircleUser,
  BriefcaseBusiness,
  MonitorCloud,
  Contact,
} from "lucide-react";

const Navigation = () => {
  return (
    <div
      className="
        fixed bottom-5 left-1/2 -translate-x-1/2 z-50
        flex justify-between items-center px-4 py-2 w-auto rounded-xl
        backdrop-blur-sm
        bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        shadow-sm
        text-black
      "
    >
      <div className="flex-1" />
      <div className="flex justify-center gap-5">
        <div className="flex flex-col justify-center items-center py-1 px-2 rounded-lg text-slate-800 font-semibold cursor-pointer transition-colors hover:text-blue-500">
          <CircleUser />
        </div>
        <div className="flex flex-col justify-center items-center py-1 px-2 rounded-lg text-slate-800 font-semibold cursor-pointer transition-colors hover:text-blue-500">
          <BriefcaseBusiness />
        </div>
        <div className="flex flex-col justify-center items-center py-1 px-2 rounded-lg text-slate-800 font-semibold cursor-pointer transition-colors hover:text-blue-500">
          <MonitorCloud />
        </div>
        <div className="flex flex-col justify-center items-center py-1 px-2 rounded-lg text-slate-800 font-semibold cursor-pointer transition-colors hover:text-blue-500">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
