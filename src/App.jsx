import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SetAvatarPage from "./pages/SetAvatarPage";
import Home from "./pages/Home";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/upload/avatar" element={<SetAvatarPage />} />
        <Route path="/posts/new" element={<CreatePostPage />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
