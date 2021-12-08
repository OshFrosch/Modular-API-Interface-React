import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return <button onClick={handleStart}>Start Application</button>;
}

export default Start;
