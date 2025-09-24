"use client";

import Link from "next/link";

import { FaWhatsapp, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import * as S from "./styles";

const SocialMediaHeaderList = () => {
  return (
    <S.List>
      <li>
        <Link href="https://github.com/DaniloMachuca/" target="_blank">
          <div className="github">
            <FaGithub color="#fff" />
          </div>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/danilo-machuca-de-souza/"
          target="_blank"
        >
          <div className="linkedin">
            <FaLinkedin color="transparent" fill="#fff" />
          </div>
        </Link>
      </li>
      <li>
        <Link href="https://wa.me/5512996502006" target="_blank">
          <div className="whatsapp">
            <FaWhatsapp color="transparent" fill="#fff" />
          </div>
        </Link>
      </li>
      <li>
        <Link href="mailto:danilo.machuca.dev@gmail.com">
          <div className="google">
            <FaGoogle color="transparent" fill="#fff" />
          </div>
        </Link>
      </li>
    </S.List>
  );
};

export default SocialMediaHeaderList;
