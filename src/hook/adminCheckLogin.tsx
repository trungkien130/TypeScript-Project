import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function adminCheckLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/login')
    }
  }, [])

  return {}
}