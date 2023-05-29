import { Route, Routes } from "react-router-dom";
import UserProfileContent from "../../components/UserProfile/UserProfileContent";
import EditContent from "../../components/UserProfile/EditContent";
import FollowersContent from "../../components/UserProfile/FollowersContent";
import FollowingContent from "../../components/UserProfile/FollowingContent";

export default function UserProfilePage() {
  return (
    <Routes>
      <Route path="/" element={<UserProfileContent />} />
      <Route path="/edit" element={<EditContent />} />
      <Route path="/followers" element={<FollowersContent />} />
      <Route path="/followings" element={<FollowingContent />} />
    </Routes>
  );
}
