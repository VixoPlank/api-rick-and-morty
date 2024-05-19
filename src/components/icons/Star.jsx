// import "@/styles/star.css";
import { useState } from "react";

const Star = ({ isFavorite, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Cambia el estado clicked cuando se hace clic
    onclick && onClick(); // Ejecuta la función onClick si se proporciona
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isFavorite || clicked ? "#86f54e" : "currentColor"} // Cambia el color si es favorito o si se hizo clic
      className="icon icon-tabler icons-tabler-filled icon-tabler-star size-7 transition-transform duration-500 hover:scale-110"
      onclick={handleClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
    </svg>
  );
};

export default Star;
