import { router } from "next/router";

function Dashboard() {
  async function handleLogout() {
    router.push("/");
  }

  return (
    <div>
      <header className="flex flex-col items-center justify-center py-4 border-b border-white">
        <h1 className="text-lg font-bold text-center">{`Welcome user!`}</h1>
        <a
          className="text-gray-300 hover:text-white mt-2"
          onClick={handleLogout}
        >
          Logout
        </a>
      </header>
    </div>
  );
}

export default Dashboard;
