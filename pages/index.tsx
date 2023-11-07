import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a CS & design student passionate about design, product, and engineering." }}>
      <Hero />
    </Page>
  );
}
