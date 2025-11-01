import { Button } from "@radix-ui/themes";
import { MdAdd } from "react-icons/md";
import SendNotification from "./SendNotification";
import { useState } from "react";

function Header() {
  const [isVisibleSendNotification, setIsVisibleSendNotification] =
    useState(false);

  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Notifications Management
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Send announcements and manage communication with students
        </p>
      </div>
      <Button
        onClick={() => setIsVisibleSendNotification(true)}
        variant="soft"
        size="3"
        radius="medium"
      >
        <MdAdd /> Send Notification
      </Button>
      {isVisibleSendNotification && (
        <SendNotification setOpen={setIsVisibleSendNotification} />
      )}
    </div>
  );
}

export default Header;
