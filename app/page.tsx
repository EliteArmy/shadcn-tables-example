import { columns } from "@/app/users/columns";
import DataTable from "@/app/users/data-table";
import { users } from "@/app/users/users";

export default function Home() {
  return (
    <div className="container py-2">
      <DataTable data={users} columns={columns} />
    </div>
  );
}
