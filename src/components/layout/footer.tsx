export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TypeHub. 기계식 키보드 애호가를 위한 타이핑 웹.
        </p>
      </div>
    </footer>
  );
} 