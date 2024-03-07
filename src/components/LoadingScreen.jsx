import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader2 className="md:h-20 md:w-20 h-8 w-8 text-blue-600 animate-spin" />
    </div>
  );
};

export default LoadingScreen;
