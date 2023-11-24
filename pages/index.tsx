import AsideBar from "@/components/aside-bar";
import Header from "@/components/header";
import MainSection from "@/components/main-section";

export default function Home() {
  return (
    <main className="grid grid-cols-[220px_1fr] h-screen overflow-auto no-scrollbar">
      <AsideBar />

      <section className="flex flex-col overflow-auto">
        <Header />
        <MainSection />
      </section>
    </main>
  );
}
