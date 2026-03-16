import { ClipLoader } from "react-spinners";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-[9999]">
      <ClipLoader size={60} color="#000000ff" />
    </div>
  );
};

export default GlobalLoading;