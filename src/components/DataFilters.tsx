import React from "react";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Switch } from "./ui/switch";

const DataFilterFormSchema = z.object({
  id: z.string().optional().or(z.literal("")),
  username: z.string().optional().or(z.literal("")),
  password: z.string().optional().or(z.literal("")),
  url: z.string().optional().or(z.literal("")),
  domain: z.string().optional().or(z.literal("")),
  app: z.string().optional().or(z.literal("")),
  ipAddress: z.string().optional().or(z.literal("")),
  tags: z.string().optional().or(z.literal("")),
  status: z.string().optional().or(z.literal("")),
  title: z.string().optional().or(z.literal("")),
  port: z.string().optional().or(z.literal("")),
  urlPath: z.string().optional().or(z.literal("")),
  protocol: z.string().optional().or(z.literal("")),
  routableOnly: z.boolean().optional(),
});

type DataFilterFormValues = z.infer<typeof DataFilterFormSchema>;

const DataFilters = ({
  onFilter,
  loading,
}: {
  onFilter: (data: DataFilterFormValues) => void;
  loading: boolean;
}) => {
  const form = useForm<DataFilterFormValues>({
    resolver: zodResolver(DataFilterFormSchema),
    defaultValues: {
      id: "",
      username: "",
      password: "",
      url: "",
      domain: "",
      app: "",
      ipAddress: "",
      tags: "",
      status: "",
      title: "",
      port: "",
      urlPath: "",
      protocol: "",
      routableOnly: false,
    },
  });

  const onSubmit = (data: any) => {
    onFilter(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
      >
        <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='ID' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Username' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='URL' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='domain'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Domain' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='app'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='App' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='ipAddress'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='IP Address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tags'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Tags' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Status' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='port'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Port' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='urlPath'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='URL Path' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='protocol'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Protocol' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Toggle switch button whether to show routable IP ranges only, so if toggled on it would display only routable IPs, else it would show all (non-routable ranges consist of examples such as:  127.0.0.1, localhost, 192.168.x.x) */}
        <FormField
          control={form.control}
          name='routableOnly'
          render={({ field }) => (
            <FormItem className='flex items-center justify-between space-x-2'>
              <label className='text-sm font-medium leading-none'>
                Routable IPs Only
              </label>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={loading}
          className=' w-full bg-[#3949fe] dark:text-white hover:bg-[#3949fe]'
        >
          Filter
          <span className='ml-2'>
            {loading && <Loader2 className='w-4 h-4 animate-spin' />}
          </span>
        </Button>
      </form>
    </Form>
  );
};

export default DataFilters;
