import React from "react";

const ScrollLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ to, children, className, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink;
