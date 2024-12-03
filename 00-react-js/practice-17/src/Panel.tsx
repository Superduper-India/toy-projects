import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => {
  return (
    <>
      <div>판넬 컴포넌트 입니다.</div>
      {children}
    </>
  );
};

export default Panel;
