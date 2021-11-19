import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TweetPage } from "./pages/TweetPage";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/tweets/:tweetId" element={<TweetPage />} />
  </Routes>
)
