<template>
    <main class="home-section bg-pattern">
        <section class="about-section">
            <div class="title-wrapper">
                <h2 class="section-title">회사소개</h2>
            </div>

            <div class="text-content">
                <p>
                    안녕하십니까?<br />
                    삼양기공사 홈페이지를 방문해주신 고객 여러분께 감사드립니다.
                </p>
                <p>
                    삼양기공사는 50여년간 리프팅클램프, 에어임팩트렌치, 라쳇 케이블커터등 유수의 브랜드
                    제품 수입 및<br />
                    전설유압공구, 경자동가스절단기등을 공급하고 있습니다.<br /><br />
                    각종 건설, 산업현장에 필요한 제품을 공급하면서 고객만족의 극대화를 추구하고 지속적인 품질개선과<br />
                    신상품 개발 및 발굴을 통하여 고객들이 편리하고 안전하게 사용할 수 있는 제품을 공급하도록<br />
                    최선의 노력을 하고 있습니다.
                </p>
                <p>
                    앞으로도 끊임없이 새로움에 도전하고 고객이 최고의 신뢰를 갖고 찾는 기업이 되도록
                    하겠습니다.<br />
                </p>
                <p>감사합니다.</p>

            </div>

            <div class="map-section">
                <h3 class="subheading">찾아오시는 길</h3>
                <p class="map-address">상호: 삼양기공사</p>
                <p class="map-address">전화: 02-2267-0066, 0681</p>
                <p class="map-address">팩스: 02-2275-5049</p>
                <p class="map-address">이메일: sytool09@naver.com</p>
                <p class="map-address">주소: 서울특별시 중구 충무로9길 14 길영빌딩 2층 201, 203호</p>
                <iframe src="/map.html" class="map-container" title="오시는 길 지도"></iframe>

                <br />
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'About'
};
</script>

<style scoped>
.about-section {
    max-width: 65%;
    margin: 2rem auto;
    padding: 2.5rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.title-wrapper {
    text-align: center;
    margin-bottom: 2rem;
}

.section-title {
    display: inline-block;
    font-size: 2.75rem;
    font-weight: 700;
    color: #2c4ea0;
    border-bottom: 4px solid #2c4ea0;
    padding-bottom: 0.5rem;
}

.text-content {
    max-width: 800px;
    margin: 0 auto 2.5rem;
    font-size: 1.125rem;
    color: #333;
    line-height: 1.8;
    overflow-x: auto;
}

.text-content p {
    margin-bottom: 1.5rem;
    text-align: justify;
    white-space: nowrap;
}

.company-signature {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c4ea0;
    margin-top: 1.5rem;
}

.map-section {
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: left;
}

.subheading {
    font-size: 1.75rem;
    font-weight: 600;
    color: #2c4ea0;
    margin-bottom: 1rem;
    border-left: 6px solid #2c4ea0;
    padding-left: 1rem;
    text-align: left;
}

.map-container {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 0 auto;
    border: none;
}

.map-address {
    margin-top: 1rem;
    font-size: 1rem;
    color: #555;
}

@media (max-width: 768px) {
    .map-container {
        height: 300px;
    }
}
</style>
