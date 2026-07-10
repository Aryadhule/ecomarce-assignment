export default function ProductCard({title, price, img}) {
  return (
    <div style={{border:'1px solid #ddd', padding:'10px', borderRadius:'8px', textAlign:'center', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
      <img src={img} alt={title} style={{width:'100%', height:'200px', objectFit:'cover', borderRadius:'5px'}}/>
      <h3>{title}</h3>
      <p style={{fontWeight:'bold', color:'#ff3366'}}>₹{price}</p>
    </div>
  );
}