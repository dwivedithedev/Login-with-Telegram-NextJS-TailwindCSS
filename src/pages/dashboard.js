import { useRouter, Link } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const [userInsights, setUserInsights] = useState(null);

  const router = useRouter();
  const { userId } = router.query;
  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch(`/api/user?userId=${userId}`);
      const data = await res.json();
      setUserInfo(data);
    }
    fetchUserData();

    async function fetchUserInsights() {
      const res = await fetch(`/api/insights?userId=${userId}`);
      const data = await res.json();
      console.log(
        "🚀 ~ file: dashboard.js:22 ~ fetchUserInsights ~ data:",
        data
      );
      setUserInsights(data);
    }
    fetchUserInsights();
  }, [userId]);

  async function handleLogout() {
    // Implement the logout functionality here
    router.push("/");
  }

  return (
    <div>
      {userInfo && (
        <div>
          <header className="flex justify-between items-center py-4 border-b border-white">
            {userInfo && (
              <div className="flex items-center">
                {userInfo.profilePicture && (
                  <div className="mr-4">
                    <Image
                      priority
                      src={userInfo.profilePicture}
                      width={50}
                      height={50}
                      alt="Profile picture"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-lg font-bold">{`Welcome, ${userInfo.username}!`}</h1>
                  <a
                    className="text-gray-300 hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </header>

          <table className="border-2 border-white mx-auto text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">Key</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {userInsights &&
                Object.entries(userInsights).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border-2 border-white px-4 py-2">{key}</td>
                    <td className="border-2 border-white px-4 py-2">
                      {value?.toString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
