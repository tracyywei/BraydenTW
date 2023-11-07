import React from "react";
import Bottle from "@/components/home/Bottle";
import Page from "@/components/utility/Page";

export default function BottlePage() {
  return (
    <Page currentPage="Bottle" meta={{ desc: "A social app for long-distance loved ones" }}>
      <Bottle />
    </Page>
  );
}