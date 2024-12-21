import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import InstagramBanner from "@/components/InstaBanner";
import NewArrival from "@/components/NewArrival";
import Table from "@/components/Table";
import TopPicks from "@/components/TopPicks";

export default function Home() {
  return (
    <div className='overflow-hidden w-dvw min-h-screen'>
      <Hero />
      <Table />
      <TopPicks />
      <NewArrival />
      <Blog />
      <InstagramBanner />
    </div>
  );
}
