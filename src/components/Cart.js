// function Banner() {
//   const title = "La maison jungle";
//   return <h1>{title}</h1>;
// }

function Cart() {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (
    <div className="Cart">
      <div>
        <h2>Panier</h2>
        <ul>
          <li>Monstera : {monsteraPrice}€</li>
          <li>Lierre : {ivyPrice}€</li>
          <li>Fleurs : {flowerPrice}€</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice}€
      </div>
    </div>
  );
}

export default Cart;
