import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="cursor-pointer" onClick={handleLogoClick}>
      <p>AMARA</p>
    </div>
  );
}

export default Logo;