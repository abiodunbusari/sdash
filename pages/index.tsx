import AsideBar from "@/components/aside-bar";
import Header from "@/components/header";
import MainSection from "@/components/main-section";

export default function Home() {
  return (
    <main className="grid grid-cols-[220px_1fr] h-screen">
      <AsideBar />
      <section className="flex flex-col">
        <Header />
        <MainSection />
      </section>
    </main>
  );
}
