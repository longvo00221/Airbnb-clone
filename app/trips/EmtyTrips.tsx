"use client";
import React from "react";
import Container from "../components/Container";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
interface EmptyTrips {
  title: string;
  subtitle: string;
  description: string;
  button: string;
}
const EmtyTrips: React.FC<EmptyTrips> = ({
  title,
  subtitle,
  description,
  button,
}) => {
  const router = useRouter();
  return (
    <Container>
      <h1
        className="font-bold text-3xl py-5"
        style={{ borderBottom: "1px solid #ccc" }}
      >
        {title}
      </h1>
      <div className="py-5" style={{ borderBottom: "1px solid #ccc" }}>
        <h2 className="font-semibold text-2xl">{subtitle}</h2>
        <p className="my-3">
          {description}
        </p>
        <button
          onClick={() => router.push("/")}
          className="py-[13px] px-[23px] rounded-lg text-[#000]"
          style={{ border: "1px solid #000" }}
        >
          {button}
        </button>
      </div>
    </Container>
  );
};

export default EmtyTrips;
