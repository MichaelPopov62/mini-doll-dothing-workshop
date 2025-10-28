import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#eddd46ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
