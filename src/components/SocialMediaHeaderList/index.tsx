"use client";

import Link from "next/link";
import * as S from "./styles";
import { FaWhatsapp, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const SocialMediaHeaderList = () => {
  return (
    <S.List>
      <li>
        <Link href="#">
          <div className="github">
            <FaGithub color="#fff" />
          </div>
        </Link>
      </li>
      <li>
        <Link href="#">
          <div className="linkedin">
            <FaLinkedin color="transparent" fill="#fff" />
          </div>
        </Link>
      </li>
      <li>
        <Link href="#">
          <div className="whatsapp">
            <FaWhatsapp color="transparent" fill="#fff" />
          </div>
        </Link>
      </li>
      <li>
        <Link href="#">
          <div className="google">
            <FaGoogle color="transparent" fill="#fff" />
          </div>
        </Link>
      </li>
    </S.List>
  );
};

export default SocialMediaHeaderList;
