import { pokeballDimensions } from "@/interfaces/interfaces";

const PokeballSvg = ({ width, height }: pokeballDimensions) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-pokeball"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="#74BEB5"
      stroke-linecap="round"
      stroke-linejoin="round"
      style={{ opacity: 0.06, position: "absolute", zIndex: -1 }}
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
      <circle cx="9" cy="9" r="9" transform="translate(3 3)" />{" "}
      <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" />{" "}
    </svg>
  );
};

export default PokeballSvg;
