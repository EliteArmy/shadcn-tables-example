import { columns } from "@/app/users/columns";
import DataTable from "@/app/users/data-table";
import { users } from "@/app/users/users";

export default async function Home() {
  // This is where you would fetch external data:
  // const exampleExternalData = await fetchExternalDataFunction();

  // In Our example we use local data
  return (
    <div className="container p-2">
      <DataTable data={users} columns={columns} />
    </div>
  );
}
