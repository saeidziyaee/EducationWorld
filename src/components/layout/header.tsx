import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Apple, Laptop, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
    <path d="M12 18h.01" />
  </svg>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-headline text-primary">دنیای آموزش</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
                <AndroidIcon className="ml-2 h-4 w-4" />
                دانلود اندروید
            </Button>
            <Button variant="ghost" size="sm">
                <Apple className="ml-2 h-4 w-4" />
                دانلود iOS
            </Button>
            <Button variant="ghost" size="sm">
                <Laptop className="ml-2 h-4 w-4" />
                دانلود دسکتاپ
            </Button>
            <div className="h-6 w-px bg-border mx-2"></div>
            <Button asChild>
                <Link href="/login">ورود</Link>
            </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">باز کردن منو</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-4 py-8 h-full">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold font-headline text-primary">دنیای آموزش</span>
                        </Link>
                        <nav className="flex flex-col gap-3">
                            <Button variant="ghost" size="sm" className="justify-start">
                                <AndroidIcon className="ml-2 h-4 w-4" />
                                دانلود اندروید
                            </Button>
                            <Button variant="ghost" size="sm" className="justify-start">
                                <Apple className="ml-2 h-4 w-4" />
                                دانلود iOS
                            </Button>
                            <Button variant="ghost" size="sm" className="justify-start">
                                <Laptop className="ml-2 h-4 w-4" />
                                دانلود دسکتاپ
                            </Button>
                        </nav>
                        <div className="border-t pt-4 mt-auto">
                            <Button asChild className="w-full">
                                <Link href="/login">ورود</Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
