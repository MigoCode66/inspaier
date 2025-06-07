import Navbar from './components/navbar';
import Images from './components/images';
import Footer from './components/footer';
import ViewContext from './components/context';
import Addyourpage from './components/Addyourpage';
export default function Home() {
  return (
    <div className="Main">
      <ViewContext>
        <Navbar />
        <Addyourpage />
      </ViewContext>
      <header>
        <h1>Welcome to Inspaier</h1>
        <p>Completely free portfolios database </p>
      </header>
      <Images />
      <Footer />
    </div>
  );
}
