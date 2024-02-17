import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function useCheckLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/login')
    }
  }, [])

  return {}
}