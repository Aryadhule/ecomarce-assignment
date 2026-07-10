import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'20px 50px', background:'#111', color:'#fff'}}>
      <h2>StyleHub</h2>
      <div style={{display:'flex', gap:'20px'}}>
        <Link to="/" style={{color:'#fff'}}>Home</Link>
        <Link to="/shop" style={{color:'#fff'}}>Shop</Link>
        <Link to="/about" style={{color:'#fff'}}>About</Link>
        <Link to="/contact" style={{color:'#fff'}}>Contact</Link>
      </div>
    </nav>
  );
}