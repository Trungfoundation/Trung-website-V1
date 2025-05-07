import type { ReactNode } from "react"
import { CollapsibleSidebar } from "@/components/collapsible-sidebar"

export const metadata = {
  title: "Admin Portal - Trung Foundation",
  description: "Administrative dashboard for Trung Foundation",
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Collapsible Sidebar */}
      <CollapsibleSidebar />

      {/* Main content */}
      <div className="flex min-h-screen flex-col">
        <header className="bg-white border-b h-16 flex items-center justify-end px-6">
          <div className="flex items-center">
            <span className="text-sm mr-2">Trungmusana@gmail.com</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium">TM</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
