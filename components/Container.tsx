import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>;
}
