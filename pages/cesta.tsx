import React from "react";
import Cesta from "@/components/home/Cesta";
import Page from "@/components/utility/Page";

export default function CestaPage() {
  return (
    <Page currentPage="Police Militarization Data" meta={{ desc: "Understanding police militarization quantatiatively and empathetically" }}>
      <Cesta />
    </Page>
  );
}