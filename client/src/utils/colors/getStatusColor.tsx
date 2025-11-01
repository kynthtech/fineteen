export const getStatusColor = (status: string) => {
  switch (status) {
    case "public":
      return "green";
    case "private":
      return "red";
    default:
      return "gray";
  }
};
