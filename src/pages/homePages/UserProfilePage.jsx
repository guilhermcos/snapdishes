import { Route, Routes } from "react-router-dom";
import UserProfileContent from "../../components/UserProfile/UserProfileContent";
import EditContent from "../../components/UserProfile/EditContent";

export default function UserProfilePage() {
  return (
    <Routes>
      <Route path="/" element={<UserProfileContent />} />
      <Route path="/edit" element={<EditContent />} />
    </Routes>
  );
}
