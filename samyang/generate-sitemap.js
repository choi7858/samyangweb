// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";
// JSON 모듈을 ESM 환경에서 임포트할 때 assert 를 추가합니다.
import routes from "./src/router/routes.json" assert { type: "json" };

const hostname = "https://symt.co.kr";

async function buildSitemap() {
  // SitemapStream 생성
  const sitemapStream = new SitemapStream({ hostname });

  // routes.json의 각 path를 순회하며 URL 항목 작성
  for (const r of routes) {
    sitemapStream.write({
      url: r.path,
      changefreq: "weekly",
      priority: r.path === "/" ? 1.0 : 0.8,
    });
  }
  sitemapStream.end();

  // 스트림을 프로미스로 변환하여 버퍼로 획득
  const buffer = await streamToPromise(sitemapStream);

  // public 폴더에 sitemap.xml로 저장
  createWriteStream("./public/sitemap.xml").write(buffer);
  console.log("✅ public/sitemap.xml 생성 완료");
}

// 실행
buildSitemap().catch(console.error);
