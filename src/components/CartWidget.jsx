export default function CartWidget({ count = 0 }) {
  return (
    <button className="cart" aria-label="Carrito de compras">
      <svg
        className="cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="20" r="1.6" />
        <circle cx="18" cy="20" r="1.6" />
        <path d="M3 3h2l2.2 10.5a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 2-1.5L21 7H6" />
      </svg>
      {count > 0 && <span className="badge">{count}</span>}
    </button>
  );
}
