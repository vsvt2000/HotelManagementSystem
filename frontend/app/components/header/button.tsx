import Link from "next/link";
import React from "react";

function HeaderButton({
  label,
  link,
  className,
}: {
  label: string;
  link?: string;
  className?: string;
}) {
  return (
    <Link href={link ? link : "/"}>
      <button className={className}>{label}</button>
    </Link>
  );
}

export default HeaderButton;

HeaderButton.defaultProps = {
  link: "/",
  className: "/",
};
