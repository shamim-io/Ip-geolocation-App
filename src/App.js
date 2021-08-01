import "./App.css";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Sawo from "sawo";
import Cookies from "js-cookie";

function App() {
  const [userPayload, setUserPayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let config = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: process.env.REACT_APP_API_SAWO,
      onSuccess: onSuccessLogin,
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  useEffect(() => {
    readCookie();
  }, []);

  const onSuccessLogin = async (payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
    Cookies.set("payload", payload);
    console.log(payload);
  };

  const readCookie = () => {
    const payload = Cookies.get("payload");
    if (payload) {
      setIsLoggedIn(true);
    }
  };

  return (
    <section>
      {/* Showing Successful login message */}
      {isLoggedIn && (
        <>
          <Main />
        </>
      )}

      {/* Showing login form */}
      {!isLoggedIn && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#f3f3f3",
            height: "300px",
            width: "400px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="sawo-container"
        >
          {/* Sawo form will appear here */}
        </div>
      )}
    </section>
  );
}

export default App;
