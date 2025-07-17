import Loading from "@/components/Loading";
import VerifyOtp from "@/components/VerifyOtp";
import { Suspense } from "react";

const VerifyPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <VerifyOtp />
    </Suspense>
  );
};

export default VerifyPage;
