"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];
const user = false;
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src={"/open.png"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={"/close.png"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-80  w-full flex flex-col gap-8 items-center justify-center">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )}
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
