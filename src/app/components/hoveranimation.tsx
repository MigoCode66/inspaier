'use client';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
type HoverAnimationProps = {
  children: ReactNode;
};

const HoverAnimation = ({ children }: HoverAnimationProps) => {
  const [show, setShow] = useState<boolean>(true);
  const rauter = useRouter();

  if (!Array.isArray(children) || children.length < 2) {
    throw new Error('Invalid children props');
  }
  const author = children[0] as ReactNode;
  const url = children[1] as string;

  const HoverStartHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(false);
  };
  const HoverEndHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(true);
  };

  return (
    <>
      <p className="author sp gray">{show ? 'Creted by @' + author : null}</p>
      <div
        className="hoverelement sp"
        onMouseEnter={HoverStartHandler}
        onMouseLeave={HoverEndHandler}
        onClick={() => {
          window.open(url);
        }}
      >
        Creted by <p className="">@{author}</p>
      </div>
    </>
  );
};

export default HoverAnimation;
