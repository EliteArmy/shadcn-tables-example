import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const usersStatus = [
  {
    value: "active",
    label: "Active",
    icon: CheckCircledIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: CrossCircledIcon,
  },
];

export const usersRole = [
  {
    value: "client",
    label: "Client",
  },
  {
    value: "provider",
    label: "Provider",
  },
];
