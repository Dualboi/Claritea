import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Sue Blenkhorn Coaching coming soon!
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
