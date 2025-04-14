export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">TypeHub 소개</h1>
      
      <div className="mx-auto max-w-3xl">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">TypeHub란?</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            TypeHub는 기계식 키보드 애호가들을 위한 타이핑 웹사이트입니다. 
            아름다운 글귀를 타이핑하며 키보드의 타건감을 즐기고, 타이핑 실력도 향상시킬 수 있습니다.
          </p>
          <p className="text-lg text-muted-foreground">
            시각적 효과와 함께하는 타이핑으로 더 큰 만족감을 선사하며, 
            커뮤니티를 통해 좋은 글귀를 공유하고 추천할 수 있습니다.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">주요 기능</h2>
          <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
            <li>시각적 효과와 함께하는 타이핑 경험</li>
            <li>다양한 글귀를 랜덤하게 제공</li>
            <li>타이핑 속도와 정확도 측정</li>
            <li>커뮤니티를 통한 글귀 공유 및 추천</li>
            <li>로그인 없이 자유롭게 이용 가능</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">기계식 키보드 애호가를 위한 공간</h2>
          <p className="text-lg text-muted-foreground">
            기계식 키보드의 매력은 타건감과 소리에 있습니다.
            TypeHub는 그 매력을 최대한 느낄 수 있는 콘텐츠를 제공하고,
            키보드 애호가들이 모여 정보와 경험을 공유할 수 있는 플랫폼이 되고자 합니다.
          </p>
        </section>
      </div>
    </div>
  );
} 