"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { useEffect } from "react";
import { ParsedString, columns } from "./columns";
import { DataTable } from "./data-table";
import { getFilteredData } from "@/services/parse";
import DataFilters from "@/components/DataFilters";

function page() {
  const [breaches, setBreaches] = React.useState<ParsedString[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [filterApplied, setFilterApplied] = React.useState(true);
  const [fId, setFId] = React.useState("");
  const [fUsername, setFUsername] = React.useState("");
  const [fPassword, setFPassword] = React.useState("");
  const [fUrl, setFUrl] = React.useState("");
  const [fDomain, setFDomain] = React.useState("");
  const [fApp, setFApp] = React.useState("");
  const [fIpAddress, setFIpAddress] = React.useState("");
  const [fTags, setFTags] = React.useState("");
  const [fStatus, setFStatus] = React.useState("");
  const [fTitle, setFTitle] = React.useState("");
  const [fPort, setFPort] = React.useState("");
  const [fUrlPath, setFUrlPath] = React.useState("");
  const [fProtocol, setFProtocol] = React.useState("");
  const [fRoutableOnly, setFRoutableOnly] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await getFilteredData(
      fId ? parseInt(fId) : undefined,
      fUsername ?? undefined,
      fPassword ?? undefined,
      fUrl ?? undefined,
      fDomain ?? undefined,
      fApp ?? undefined,
      fIpAddress ?? undefined,
      fTags ? fTags.split(",") : undefined,
      fStatus ? parseInt(fStatus) : undefined,
      fTitle ?? undefined,
      fPort ? parseInt(fPort) : undefined,
      fUrlPath ?? undefined,
      fProtocol ?? undefined,
      fRoutableOnly ?? undefined
    );

    response.data.forEach((item: any) => {
      item.tags = item.tags.join(", ");
    });

    setBreaches(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (filterApplied) {
      fetchData();
      setFilterApplied(false);
    }
  }, [
    fId,
    fUsername,
    fPassword,
    fUrl,
    fDomain,
    fApp,
    fIpAddress,
    fTags,
    fStatus,
    fTitle,
    fPort,
    fUrlPath,
    fProtocol,
    filterApplied,
  ]);

  const onFilter = async (data: any) => {
    setFId(data.id);
    setFUsername(data.username);
    setFPassword(data.password);
    setFUrl(data.url);
    setFDomain(data.domain);
    setFApp(data.app);
    setFIpAddress(data.ipAddress);
    setFTags(data.tags);
    setFStatus(data.status);
    setFTitle(data.title);
    setFPort(data.port);
    setFUrlPath(data.urlPath);
    setFProtocol(data.protocol);
    setFRoutableOnly(data.routableOnly);
    setFilterApplied(true);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='p-10 justify-center w-full'>
        <div className='rounded-md border shadow-sm'>
          <DataFilters onFilter={(data) => onFilter(data)} loading={loading} />
          <DataTable columns={columns} data={breaches} />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default page;
