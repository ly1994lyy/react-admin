import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Form,FormField,FormItem,FormLabel,FormControl } from '@/components/ui/form'
import { BorderBeam } from '@/registry/magicui/border-beam'
import { ILoginData, loginApi } from '@/apis/auth'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function LoginForm() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const handleSubmit = async (data:ILoginData) => {
    try {
      await loginApi(data)
      toast({
        title: 'Login Success',
        description: 'Welcome back!',
        variant: 'default'
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Card className="relative w-[350px] overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField control={form.control} name='username' render={({ field })=>(
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    id="username"
                    type="username"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name='password' render={({ field })=>(
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )} />
            <div className="flex flex-col gap-6 mt-4">
              <Button type="submit" className="w-full">
              Login
              </Button>
              <Button variant="outline" className="w-full">
              Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
              <a href="#" className="underline underline-offset-4">
              Sign up
              </a>
            </div>
          </form>
        </Form>
      </CardContent>
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className="from-transparent via-green-500 to-transparent"
      />
    </Card>
  )
}
