import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {title:'Denim Jacket', price:1299, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'},
    {title:'Summer Dress', price:899, img:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400'},
    {title:'Sneakers', price:1999, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'},
    {title:'Wrist Watch', price:2499, img:'https://images.unsplash.com/photo-1524805444758-089113d48a4d?w=400'}
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{background:'linear-gradient(to right, #ff3366, #ff6b9d)', color:'#fff', textAlign:'center', padding:'80px 20px'}}>
        <h1 style={{fontSize:'48px'}}>Welcome to StyleHub</h1>
        <p style={{fontSize:'20px'}}>New Season Collection - Up to 50% OFF</p>
        <button style={{padding:'12px 30px', background:'#fff', color:'#ff3366', border:'none', borderRadius:'5px', marginTop:'20px', cursor:'pointer'}}>Shop Now</button>
      </div>

      {/* Categories */}
      <h2 style={{textAlign:'center', marginTop:'40px'}}>Shop by Category</h2>
      <div style={{display:'flex', justifyContent:'center', gap:'30px', padding:'20px'}}>
        <div style={{textAlign:'center'}}><h3>Men</h3></div>
        <div style={{textAlign:'center'}}><h3>Women</h3></div>
        <div style={{textAlign:'center'}}><h3>Accessories</h3></div>
      </div>

      {/* Products */}
      <h2 style={{textAlign:'center', marginTop:'30px'}}>Featured Products</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'20px', padding:'30px 50px'}}>
        {products.map(p => <ProductCard key={p.title} {...p} />)}
      </div>

      {/* Testimonials */}
      <div style={{background:'#f5f5f5', padding:'40px', textAlign:'center'}}>
        <h2>What Our Customers Say</h2>
        <p>"Best quality clothes and fast delivery!" - Priya</p>
      </div>
    </div>
  );
}