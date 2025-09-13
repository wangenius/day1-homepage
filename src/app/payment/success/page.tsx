import { Suspense } from "react";
import { PaymentSuccessContent } from "./success-content";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center text-muted-foreground p-8">正在验证支付结果...</div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
