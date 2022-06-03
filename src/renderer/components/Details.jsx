import React from "react";
import PartyList from "./PartyList";

const demoPartyList = [
  { name: "John Doe", level: 10, health: 100 },
  { name: "John Snow", level: 40, health: 140 },
  { name: "Jane Ane", level: 100, health: 999 },
];
export default function Details() {
  return (
    <div>
      <PartyList party={demoPartyList} />
    </div>
  );
}
