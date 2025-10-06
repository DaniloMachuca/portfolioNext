"use client";

import { useState } from "react";
import Link from "next/link";

import Logo from "../Logo";
import { Menu } from "@geist-ui/icons";
import * as S from "./styles";

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
            <Link href="/home/experiencias">Experiências</Link>
          </li>
          <li>
            <Link href="/home/contato">Contatos</Link>
          </li>
        </S.LinkList>
        <S.MobileBtn onClick={toggleMenu}>
          <Menu />
        </S.MobileBtn>
        <S.MobileMenu className={menu ? "active" : ""}>
          <Link href="#">Formação Acadêmica</Link>
          <Link href="/home/experiencias">Experiências</Link>
          <Link href="/home/contato">Contatos</Link>
        </S.MobileMenu>
      </div>
    </S.Header>
  );
};

export default Header;
