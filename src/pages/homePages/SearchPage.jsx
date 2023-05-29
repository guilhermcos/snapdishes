import { Route, Routes } from "react-router-dom";
import SearchContent from "../../components/SearchPage/SearchContent";
import ProfileContent from "../../components/SearchPage/ProfileContent";

export default function SearchPage() {
  return (
    <Routes>
      <Route path="/" element={<SearchContent />} />
      <Route path="/users/:id" element={<ProfileContent />} />
    </Routes>
  );
}
