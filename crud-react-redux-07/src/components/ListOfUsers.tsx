'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Pencil, Trash2 } from 'lucide-react'
import { useAppSelector } from '@/hooks/store'
import { useUserActions } from '@/hooks/useUserActions'

export default function UsersTable() {
  const users = useAppSelector(state => state.users)
  const { handleDeleteUser } = useUserActions()

  return (
    <div className='w-full p-6 text-slate-50'>
      <Card className='border-slate-800 bg-slate-900 shadow-xl'>
        <CardHeader className='border-b border-slate-800 pb-4'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-slate-50 text-xl'>
              Users
              <Badge className='ml-2 bg-slate-800 text-slate-200 hover:bg-slate-700'>
                {users.length}
              </Badge>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className='p-0'>
          <Table>
            <TableHeader className='bg-slate-800/50'>
              <TableRow className='hover:bg-slate-800/70 border-slate-800'>
                <TableHead className='text-slate-300 font-medium w-[80px] pl-5'>
                  Id
                </TableHead>
                <TableHead className='text-slate-300 font-medium'>
                  Name
                </TableHead>
                <TableHead className='text-slate-300 font-medium'>
                  Email
                </TableHead>
                <TableHead className='text-slate-300 font-medium text-right pr-5'>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow
                  key={user.id}
                  className='hover:bg-slate-800/50 border-slate-800'
                >
                  <TableCell className='font-medium text-slate-400 pl-5'>
                    {user.id}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <Avatar className='h-8 w-8 bg-slate-700 text-slate-200'>
                        <AvatarImage
                          src={` https://unavatar.io/github/${user.github}`}
                          alt={user.name}
                        />
                        <AvatarFallback className='bg-slate-700 text-slate-200'>
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className='font-medium text-slate-200'>
                        {user.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className='text-slate-400'>{user.email}</TableCell>
                  <TableCell className='text-right pr-5'>
                    <div className='flex justify-end gap-2'>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                      >
                        <Pencil className='h-4 w-4' />
                        <span className='sr-only'>Edit</span>
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 text-slate-400 hover:text-red-400 hover:bg-slate-800'
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash2 className='h-4 w-4' />
                        <span className='sr-only'>Delete</span>
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
