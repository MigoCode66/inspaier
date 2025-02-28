
import Navbar from './components/navbar';
import Images from './components/images';
export default function Home() {
  return (
    <div className="Main">
      <Navbar />
      <h1>Welcome to Inspaier</h1>
      <p>Completely free portfolios database </p>
      <Images />
    </div>
  );
}
