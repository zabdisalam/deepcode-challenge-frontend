"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ParsedString = {
  id: number;
  username: string;
  password: string;
  url: string;
  domain: string;
  ipAddress: string;
  tags: string[];
  status: number;
  title: string;
};

export const columns: ColumnDef<ParsedString>[] = [
  {
    accessorKey: "url",
    header: () => <div className='text-left'>URL</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("url")}</div>
    ),
  },
  {
    accessorKey: "username",
    header: () => <div className='text-left'>Username</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "password",
    header: () => <div className='text-left'>Password</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("password")}</div>
    ),
  },
  {
    accessorKey: "domain",
    header: () => <div className='text-left'>Domain</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("domain")}</div>
    ),
  },
  {
    accessorKey: "ipAddress",
    header: () => <div className='text-left'>IP Address</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("ipAddress")}</div>
    ),
  },
  {
    accessorKey: "tags",
    header: () => <div className='text-left'>Tags</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>
        {(row.getValue("tags") as string[]).join(", ")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className='text-left'>Status</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: () => <div className='text-left'>Title</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue("title")}</div>
    ),
  },
];
