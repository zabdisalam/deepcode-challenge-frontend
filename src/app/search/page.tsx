import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { ParsedString, columns } from "./columns";
import { DataTable } from "./data-table";
function test(): ParsedString[] {
  const test: ParsedString = {
    id: 123,
    username: "*****",
    password: "********",
    url: "urlexample",
    domain: "string",
    ipAddress: "string",
    tags: ["tag1", "tag2"],
    status: 123,
    title: "string",
  };

  return [test];
}
function page() {
  const data = test();
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='p-10 justify-center w-full'>
        <div className='rounded-md border shadow-sm'>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default page;
