"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for demonstration
const mockDonors = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    amount: "$250.00",
    program: "Education",
    date: "May 1, 2025",
    status: "Completed",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 987-6543",
    amount: "$500.00",
    program: "Healthcare",
    date: "Apr 29, 2025",
    status: "Completed",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+1 (555) 456-7890",
    amount: "$1,000.00",
    program: "Orphan Support",
    date: "Apr 27, 2025",
    status: "Completed",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 (555) 789-0123",
    amount: "$150.00",
    program: "Women Empowerment",
    date: "Apr 25, 2025",
    status: "Completed",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@example.com",
    phone: "+1 (555) 234-5678",
    amount: "$75.00",
    program: "General Fund",
    date: "Apr 23, 2025",
    status: "Completed",
  },
  {
    id: "6",
    name: "Jennifer Taylor",
    email: "jennifer@example.com",
    phone: "+1 (555) 345-6789",
    amount: "$2,500.00",
    program: "Education",
    date: "Apr 20, 2025",
    status: "Completed",
  },
  {
    id: "7",
    name: "Robert Martinez",
    email: "robert@example.com",
    phone: "+1 (555) 567-8901",
    amount: "$350.00",
    program: "Healthcare",
    date: "Apr 18, 2025",
    status: "Completed",
  },
  {
    id: "8",
    name: "Lisa Anderson",
    email: "lisa@example.com",
    phone: "+1 (555) 678-9012",
    amount: "$100.00",
    program: "Samaritan Packages",
    date: "Apr 15, 2025",
    status: "Completed",
  },
  {
    id: "9",
    name: "James Thomas",
    email: "james@example.com",
    phone: "+1 (555) 890-1234",
    amount: "$50.00",
    program: "General Fund",
    date: "Apr 12, 2025",
    status: "Completed",
  },
  {
    id: "10",
    name: "Patricia White",
    email: "patricia@example.com",
    phone: "+1 (555) 901-2345",
    amount: "$1,200.00",
    program: "Girl Empowerment",
    date: "Apr 10, 2025",
    status: "Completed",
  },
]

export default function DonorsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [donors, setDonors] = useState(mockDonors)
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
      const filtered = mockDonors.filter(
        (donor) =>
          donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          donor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          donor.program.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setDonors(filtered)
    } else {
      setDonors(mockDonors)
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
          <h2 className="text-3xl font-bold tracking-tight">Donors</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search donors..."
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
                <TableHead>Phone</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donors.map((donor) => (
                <TableRow key={donor.id}>
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>{donor.email}</TableCell>
                  <TableCell>{donor.phone}</TableCell>
                  <TableCell>{donor.amount}</TableCell>
                  <TableCell>{donor.program}</TableCell>
                  <TableCell>{donor.date}</TableCell>
                  <TableCell>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{donor.status}</span>
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
