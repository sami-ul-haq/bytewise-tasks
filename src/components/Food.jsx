import { useParams } from "react-router-dom";

const Food = () => {
  const { title } = useParams();
  return <div>Your Selected Food Item is <b>{title}</b></div>;
};

export default Food;
