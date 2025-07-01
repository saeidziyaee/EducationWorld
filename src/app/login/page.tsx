import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-20rem)]">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">ورود به حساب کاربری</CardTitle>
          <CardDescription>برای دسترسی به امکانات کامل، وارد شوید.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input id="email" type="email" placeholder="example@email.com" dir="ltr" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">گذرواژه</Label>
              <Input id="password" type="password" placeholder="********" dir="ltr" />
            </div>
          </div>
          <Button className="w-full mt-6">ورود</Button>
          <div className="mt-4 text-center text-sm">
            حساب کاربری ندارید؟{' '}
            <Link href="#" className="underline text-primary">
              ثبت نام
            </Link>
          </div>
           <div className="mt-6 text-center">
             <Button variant="link" asChild>
                <Link href="/">بازگشت به صفحه اصلی</Link>
             </Button>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
