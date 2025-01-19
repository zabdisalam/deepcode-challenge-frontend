import { AppSidebar } from "@/components/app-sidebar"
import FileUpload from "@/components/FileUpload"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <FileUpload/>
    </SidebarProvider>
  )
}
