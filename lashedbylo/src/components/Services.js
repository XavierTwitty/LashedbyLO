import React from "react";
import { data } from "../state";
import ServiceCard from "./ServiceCard";

export default function Services() {
  console.log(data);
  return (
    <div>
      <div className="service_tab">
        <h2> Eyelash Extentions </h2>
        <h2> Lash Fills </h2>
        <h2> Eyebrows </h2>
        <h2> Lash Lifts </h2>
        <h2> Permanent Make-Up </h2>
      </div>

      <h3 className="service_title"> Eyelash Services </h3>

      <div className="service_img"> img </div>
      <ServiceCard />
    </div>
  );
}
