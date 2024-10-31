import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const calsses = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "txt-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const runderButton = () => (
    <button className={calsses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
 
  const runderLink = () => (
    <a href={href} className={calsses}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  
  return href ? runderLink() : runderButton();
};

export default Button;
