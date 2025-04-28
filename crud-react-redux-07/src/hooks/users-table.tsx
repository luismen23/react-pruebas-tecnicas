import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2 } from "lucide-react"

interface User {
  id: number
  name: string
  email: string
  avatarUrl?: string
  initials: string
}

export default function UsersTable() {
  const [users] = useState<User[]>([
    {
      id: 1,
      name: "Yazman Rodríguez",
      email: "yazman@gmail.com",
      initials: "YR",
    },
    {
      id: 2,
      name: "John Doe",
      email: "jd@gmail.com",
      avatarUrl: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    {
      id: 3,
      name: "Haakon Dahlberg",
      email: "haakon@gmail.com",
      initials: "HD",
    },
  ])

  return (
    <div className="w-full p-6 bg-slate-950 text-slate-50 min-h-screen">
      <Card className="border-slate-800 bg-slate-900 shadow-xl">
        <CardHeader className="border-b border-slate-800 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-slate-50 text-xl">
              Usuarios
              <Badge className="ml-2 bg-slate-800 text-slate-200 hover:bg-slate-700">{users.length}</Badge>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-800/50">
              <TableRow className="hover:bg-slate-800/70 border-slate-800">
                <TableHead className="text-slate-300 font-medium w-[80px]">Id</TableHead>
                <TableHead className="text-slate-300 font-medium">Nombre</TableHead>
                <TableHead className="text-slate-300 font-medium">Email</TableHead>
                <TableHead className="text-slate-300 font-medium text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-slate-800/50 border-slate-800">
                  <TableCell className="font-medium text-slate-400">{user.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 bg-slate-700 text-slate-200">
                        <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-slate-700 text-slate-200">{user.initials}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-slate-200">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-400">{user.email}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-red-400 hover:bg-slate-800"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
