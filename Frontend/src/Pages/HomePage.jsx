import React, { useCallback, useEffect, useState } from "react";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/AuthContext";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");
  const { authUser } = useAuthContext();

  const getUserProfileAndRepos = useCallback(
    async (username = authUser.username) => {
      setLoading(true);
      try {
        const userResp = await fetch(`/api/users/profile/${username}`);
        const { repos, userProfile } = await userResp.json();
        setUserProfile(userProfile);

        setRepos(repos);

        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, []);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
  };

  const onSort = (sortType) => {
    if (sortType == "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType == "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
