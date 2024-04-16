import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const customersStatus = [
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

export const customerRole = [
  {
    value: "client",
    label: "Client",
  },
  {
    value: "provider",
    label: "Provider",
  },
];
