import { RiCodeSSlashFill } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="w-full h-full bg-container-bg">
      <RiCodeSSlashFill size={50} className="animate-spin text-btn-bg" />
    </div>
  );
};

export default Loading;
