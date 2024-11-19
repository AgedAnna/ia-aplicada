import { useEffect } from "react";
import logo from "../../assets/_.svg";
import style from "./IntroPage.module.css";
import { useNavigate } from "react-router-dom";

const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={style.intropage}>
      <img src={logo} alt="logo" className={style.logo} />
    </div>
  );
};

export default IntroPage;
