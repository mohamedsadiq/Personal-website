import { ReactNode } from "react";

interface SparkContainerProps {
  children: ReactNode;
}

const SparkContainer = ({ children }: SparkContainerProps) => (
  <section className="w-full px-4 pt-10 sm:px-6 lg:px-0">
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-2">
      {children}
    </div>
  </section>
);

export default SparkContainer;
