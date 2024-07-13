import Footer from "./_components/footer";
import NavBar from "./_components/navbar";

export default async function Home() {
  return (
    <main className="min-w-screen  grid min-h-screen grid-rows-8 items-center justify-center bg-gray-50 text-poff_black">
      <div className="row-span-7  grid w-screen grid-flow-row-dense grid-cols-5 xl:grid-cols-3 2xl:grid-cols-8">
        <div className="w-max-[500px] col-span-2 hidden lg:block xl:col-span-1 2xl:col-span-2">
          <NavBar />
        </div>
        <div className="col-span-5 h-[100%] w-[100%] bg-red-200 lg:col-span-3 xl:col-span-2 2xl:col-span-6">
          hello
        </div>
      </div>
      <div className="row-span-1 mt-4 flex justify-around">
        <Footer />
      </div>
    </main>
  );
}
