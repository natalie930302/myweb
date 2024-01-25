const Button = ({ params, type = "primary" }) => {
  let buttonClasses = "";

  switch (type) {
    case "primary":
      buttonClasses = "primary-btn";
      break;
    case "secondary":
      buttonClasses = "secondary-btn";
      break;
    case "tertiary":
      buttonClasses = "tertiary-btn";
      break;
    case "quaternary":
      buttonClasses = "quaternary-btn";
      break;
    case "quinary":
      buttonClasses = "quinary-btn";
      break;
    case "senary":
      buttonClasses = "senary-btn";
      break;
    default:
      buttonClasses = "primary-btn";
  }

  return <button className={` ${buttonClasses}`}>{params}</button>;
};

export default Button;
