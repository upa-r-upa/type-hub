import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            TypeHub
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          {/* 타이핑 페이지가 메인 페이지가 되었으므로 제거
          <Link href="/typing" passHref>
            <Button variant="ghost">타이핑</Button>
          </Link>
          */}
          
          {/* 나중에 커뮤니티 기능 추가 시 활성화할 예정
          <Link href="/community" passHref>
            <Button variant="ghost">커뮤니티</Button>
          </Link>
          */}
          
          {/* 소개 페이지 제거
          <Link href="/about" passHref>
            <Button variant="ghost">소개</Button>
          </Link>
          */}
        </nav>
      </div>
    </header>
  );
} 