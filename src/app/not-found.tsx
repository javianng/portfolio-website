import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/main-page">
        <p className="mt-6 rounded bg-blue-600 px-4 py-2 text-white">
          Go to Main Page
        </p>
      </Link>
    </div>
  );
};

export default NotFoundPage;