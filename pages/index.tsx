import AsideBar from "@/components/aside-bar";
import Header from "@/components/header";
import MainSection from "@/components/main-section";

export default function Home() {
  return (
    <main className="grid grid-cols-[clamp(180px,7vw,220px)_1fr] h-screen">
      <AsideBar />
      <section className="flex flex-col">
        <Header />
        <MainSection />
      </section>
    </main>
  );
}
