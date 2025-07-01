import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} دنیای من. تمامی حقوق محفوظ است.
        </p>
        <nav className="flex items-center gap-x-6 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            سیاست حفظ حریم خصوصی
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            شرایط استفاده
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            تماس با ما
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
