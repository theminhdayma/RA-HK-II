import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return null;
}
