'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useUserActions } from '@/hooks/useUserActions'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'Write a valid email.',
  }),
  github: z.string().min(2, {
    message: 'Write a valid github username.',
  }),
})

export function CreateNewUser() {
  const { handleAddUser } = useUserActions()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      github: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(data: { name: string; email: string; github: string }) {
    const name = data.name
    const email = data.email
    const github = data.github

    handleAddUser({ name, email, github })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 border-slate-800 bg-slate-900 shadow-xl border rounded-2xl p-6 m-6 '
      >
        <h2>Create new user</h2>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='name ...' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='email ...' {...field} />
              </FormControl>
              <FormDescription>This is your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='github'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Username</FormLabel>
              <FormControl>
                <Input placeholder='github username ...' {...field} />
              </FormControl>
              <FormDescription>This is your github username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={'secondary'} type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
