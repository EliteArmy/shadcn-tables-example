import React from "react";
import DataTable from "./data-table";
import { columns } from "./columns";
import { users } from "./users";

function UsersPage() {
  return (
    <div className="container py-2">
      <DataTable data={users} columns={columns} />
    </div>
  );
}

export default UsersPage;
