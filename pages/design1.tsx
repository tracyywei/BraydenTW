import React from "react";
import Design1 from "@/components/home/Design1";
import Page from "@/components/utility/Page";

export default function Design1Page() {
  return (
    <Page currentPage="Design 1" meta={{ desc: "Understanding police militarization quantatiatively and empathetically" }}>
      <Design1 />
    </Page>
  );
}