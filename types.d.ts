type User = {
  id: string;
  userName: string;
  phone: string;
  email: string;
  location: string;
  role: "client" | "provider";
  status: "active" | "inactive";
  image: string;
  rtn?: string;
  otherInformation?: string;

  createdAt?: date;
  updatedAt?: date;
};
