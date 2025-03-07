import Navbar from './components/navbar';
import Images from './components/images';
import Footer from './components/footer';
export default function Home() {
  return (
    <div className="Main">
      <Navbar />
      <header>
        <h1>Welcome to Inspaier</h1>
        <p>Completely free portfolios database </p>
      </header>
      <Images />
      <Footer />
    </div>
  );
}
