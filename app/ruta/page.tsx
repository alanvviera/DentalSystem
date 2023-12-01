"use client"
import { getCookie, setCookie } from "cookies-next";
import React from "react";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/alt-api/profile`
  );
  //const res = await fetch(`${process.env.NEXTAUTH_URL}/alt-api/clientcheckappointment/1`)
  if (res.ok) {
    return res.json();
  }
  throw new Error("Failed to fetch data.");
};

const page = async () => {
  //const appointments = await getData();
  //console.log(appointments);
  const cookie = getCookie("id");
  console.log(cookie);
  return <div>page</div>;
};

export default page;
