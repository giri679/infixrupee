
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to InfixRupee</h1>
      <div className="space-x-4">
        <a href="/login" className="bg-primary text-white px-6 py-2 rounded shadow">
          Sign In
        </a>
        <a href="/signup" className="bg-white text-primary px-6 py-2 rounded shadow">
          Sign Up
        </a>
      </div>
    </div>
  );
}
