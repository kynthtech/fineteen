function Header() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Notifications
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Here is all notification
        </p>
      </div>
    </div>
  );
}

export default Header;
