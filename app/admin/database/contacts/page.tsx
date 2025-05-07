"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for demonstration
const mockContacts = [
  {
    id: "1",
    name: "Emma Wilson",
    email: "emma@example.com",
    phone: "+1 (555) 123-7890",
    subject: "Volunteer Inquiry",
    message: "I'm interested in volunteering for your upcoming events.",
    date: "May 1, 2025",
    status: "New",
  },
  {
    id: "2",
    name: "Daniel Johnson",
    email: "daniel@example.com",
    phone: "+1 (555) 234-5678",
    subject: "Donation Question",
    message: "I have a question about making monthly donations.",
    date: "Apr 30, 2025",
    status: "Responded",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    phone: "+1 (555) 345-6789",
    subject: "Partnership Opportunity",
    message: "Our organization would like to discuss a potential partnership.",
    date: "Apr 28, 2025",
    status: "In Progress",
  },
  {
    id: "4",
    name: "Noah Brown",
    email: "noah@example.com",
    phone: "+1 (555) 456-7890",
    subject: "Media Inquiry",
    message: "I'm a journalist looking to cover your recent initiatives.",
    date: "Apr 25, 2025",
    status: "New",
  },
  {
    id: "5",
    name: "Olivia Davis",
    email: "olivia@example.com",
    phone: "+1 (555) 567-8901",
    subject: "Program Information",
    message: "Can you provide more details about your education programs?",
    date: "Apr 23, 2025",
    status: "Responded",
  },
  {
    id: "6",
    name: "William Taylor",
    email: "william@example.com",
    phone: "+1 (555) 678-9012",
    subject: "Visit Request",
    message: "I'd like to schedule a visit to learn more about your work.",
    date: "Apr 20, 2025",
    status: "In Progress",
  },
  {
    id: "7",
    name: "Ava Anderson",
    email: "ava@example.com",
    phone: "+1 (555) 789-0123",
    subject: "Feedback",
    message: "I attended your recent event and wanted to share my feedback.",
    date: "Apr 18, 2025",
    status: "Responded",
  },
  {
    id: "8",
    name: "James Thomas",
    email: "james@example.com",
    phone: "+1 (555) 890-1234",
    subject: "Technical Issue",
    message: "I'm having trouble making a donation on your website.",
    date: "Apr 15, 2025",
    status: "New",
  },
]

export default function ContactsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [contacts, setContacts] = useState(mockContacts)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("adminAuthenticated")
    if (auth !== "true") {
      router.push("/admin")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router])

  useEffect(() => {
    if (searchTerm) {
      const filtered = mockContacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.subject.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setContacts(filtered)
    } else {
      setContacts(mockContacts)
    }
  }, [searchTerm])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Button variant="ghost" size="sm" onClick={() => router.push("/admin/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Contact Form Submissions</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search contacts..."
                className="w-[200px] sm:w-[300px] pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.subject}</TableCell>
                  <TableCell>{contact.date}</TableCell>
                  <TableCell>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        contact.status === "New"
                          ? "bg-blue-100 text-blue-800"
                          : contact.status === "Responded"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
