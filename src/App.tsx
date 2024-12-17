import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";

import About from "./pages/about";
import { useEffect } from "react";
import { supabase } from "./supabase";

import AuthGuard from "./components/route-guards/auth";
import ProfileView from "./pages/profileView";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import QuestionForm from "./pages/write";

function App() {
  // const { handleSetUser } = useAuthContext();

  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);

      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <AuthGuard>
              <Login />
            </AuthGuard>
          }
        />
        <Route path="write" element={<QuestionForm />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
