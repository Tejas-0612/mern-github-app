import React from "react";
import { FaHeart } from "react-icons/fa";
const userData = {
  login: "akshaymarch7",
  id: 12824231,
  node_id: "MDQ6VXNlcjEyODI0MjMx",
  avatar_url: "https://avatars.githubusercontent.com/u/12824231?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/akshaymarch7",
  html_url: "https://github.com/akshaymarch7",
  followers_url: "https://api.github.com/users/akshaymarch7/followers",
  following_url:
    "https://api.github.com/users/akshaymarch7/following{/other_user}",
  gists_url: "https://api.github.com/users/akshaymarch7/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/akshaymarch7/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/akshaymarch7/subscriptions",
  organizations_url: "https://api.github.com/users/akshaymarch7/orgs",
  repos_url: "https://api.github.com/users/akshaymarch7/repos",
  events_url: "https://api.github.com/users/akshaymarch7/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/akshaymarch7/received_events",
  type: "User",
  site_admin: false,
  name: "Akshay Saini",
  company: "Founder @namastedev",
  blog: "akshaysaini.in",
  location: "India",
  email: null,
  hireable: true,
  bio: "May the code be with you. Amen.",
  twitter_username: "akshaymarch7",
  public_repos: 8,
  public_gists: 0,
  followers: 2652,
  following: 1,
  created_at: "2015-06-10T04:36:48Z",
  updated_at: "2024-03-08T14:40:06Z",
};
const LikesPage = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg px-4">
      <table className="w-full text-sm text-left rtl:text-right bg-glass overflow-hidden">
        <thead className="text-xs uppercase bg-glass">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">No</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-glass border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span>1</span>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap "
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                }
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">dasdas</div>
              </div>
            </th>
            <td className="px-6 py-4">das</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <FaHeart size={22} className="text-red-500 mx-2" />
                Liked your profile
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LikesPage;
