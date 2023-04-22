import Link from "next/link";
import React from "react";
import { LinkedInIcon, MailIcon } from "./iconstore";

function FooterButton({
  type,
  link,
  className,
}: {
  type: "linkedIn" | "mail";
  link?: string;
  className?: string;
}) {
  return (
    <Link href={link ? link : "/"}>
      <button className={className}>
        {type === "linkedIn" ? <LinkedInIcon /> : <MailIcon />}
      </button>
    </Link>
  );
}

export default FooterButton;

FooterButton.defaultProps = {
  link: "/",
  className: "",
};
