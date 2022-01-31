import UserState from "./context/Auth/UserState";
import CartState from "./context/Cart/CartState";
import LayoutApp from "./LayoutApp";

function App() {
  return (
    <UserState>
      <CartState>
        <LayoutApp />
      </CartState>
    </UserState>
  );
}

export default App;
