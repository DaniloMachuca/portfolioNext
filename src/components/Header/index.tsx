"use client";

import Logo from "../Logo";
import * as S from "./styles";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "@geist-ui/icons";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <S.Header>
      <div>
        <Logo />
        <S.LinkList>
          <li>
            <Link href="#">Formação Acadêmica</Link>
          </li>
          <li>
            <Link href="#">Experiências</Link>
          </li>
          <li>
            <Link href="#">Contatos</Link>
          </li>
        </S.LinkList>
        <S.MobileBtn onClick={toggleMenu}>
          <Menu />
        </S.MobileBtn>
        <S.MobileMenu className={menu ? "active" : ""}>
          <Link href="#">Formação Acadêmica</Link>
          <Link href="#">Experiências</Link>
          <Link href="#">Contatos</Link>
        </S.MobileMenu>
      </div>
    </S.Header>
  );
};

export default Header;
