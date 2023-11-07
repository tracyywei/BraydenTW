import React from "react";
import FirstPlate from "@/components/home/FirstPlate";
import Page from "@/components/utility/Page";

export default function FirstPlatePage() {
  return (
    <Page currentPage="First Plate" meta={{ desc: "A food-inspired dating app prioritizing in-person interaction" }}>
      <FirstPlate />
    </Page>
  );
}