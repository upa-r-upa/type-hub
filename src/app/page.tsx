import React from "react";
import { Settings, ChevronRight, SkipForward, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-start items-center mb-5">
        <div className="flex items-center space-x-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <Settings size={16} />
            <span>설정</span>
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <ChevronRight size={16} />
            <span>글 목록 보기</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2 flex flex-col">
          <CardContent className="flex-grow h-[350px] overflow-hidden">
            <p className="text-2xl leading-relaxed text-foreground mb-6">
              죽는 날까지 하늘을 우러러<br/>
              한 점 부끄럼이 없기를,<br/>
              잎새에 이는 바람에도<br/>
              나는 괴로워했다.<br/>
              별을 노래하는 마음으로<br/>
              모든 죽어가는 것을 사랑해야지<br/>
              그리고 나한테 주어진 길을<br/>
              걸어가야겠다.<br/><br/>
              오늘 밤에도 별이 바람에 스치운다.
            </p>
          </CardContent>
          
          <CardFooter className="flex justify-end items-center border-t">
            <div className="flex items-center space-x-4">
              <Button  size="sm" className="flex items-center">
                <RefreshCcw size={16} />
                <span>재시작</span>
              </Button>
              <Button size="sm" className="flex items-center">
                <SkipForward size={16} />
                <span>다음 글</span>
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="h-max">
          <CardHeader>
            <CardTitle>타이핑 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">제목</span>
              <span className="font-medium">서시</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">작성자</span>
              <span>윤동주</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">타수 (분)</span>
              <span>0</span>
            </div>
            
            <div className="mt-4">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '0%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}