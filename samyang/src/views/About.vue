<!-- src/views/About.vue -->
<template>
    <section class="about container">
        <!-- 제목 -->
        <h2 class="section-title">회사소개</h2>

        <!-- 회사소개 본문 -->
        <div class="text-content">
            <p>
                삼양기공사는 1985년에 설립되어, 일본 및 유럽의 다양한 고품질 공구 브랜드를 국내에 소개·유통해 왔습니다.
                SUPER TOOL, SUWA, CACTUS 등 전 세계 전문가들이 인정한 수입 공구와 내수 절단기(유광공업, 엠티엠무역)를
                취급하며, 건설·토목·플랜트·제조업 현장의 생산성과 안전을 동시에 높이고 있습니다.
            </p>
            <p>
                당사는 “정직과 신뢰”를 경영철학으로 삼아, 모든 고객에게 최적의 솔루션을 제공하기 위해
                기술 지원, 신속한 A/S, 체계적인 재고 관리 시스템을 운영하고 있습니다.
                또한, 매년 신제품 데모 데이를 개최하여, 업계 관계자들이 최신 공구 트렌드를 체험할 수 있는 기회를 드리고 있습니다.
            </p>
            <p>
                앞으로도 끊임없는 연구개발과 글로벌 네트워크 강화를 통해, ‘고객과 함께 성장하는 파트너’로서
                최고의 품질과 서비스를 제공하겠습니다.
            </p>
        </div>

        <!-- 찾아오시는 길 -->
        <h3 class="subheading">찾아오시는 길</h3>
        <div class="map-container" id="map"></div>
    </section>
</template>

<script>
export default {
    name: 'About',
    methods: {
        initMap() {
            if (!window.naver || !window.naver.maps) {
                this.handleAuthFailure();
                return;
            }
            const position = new window.naver.maps.LatLng(37.5671152, 126.9916127);
            const map = new window.naver.maps.Map('map', {
                center: position,
                zoom: 15,
            });
            new window.naver.maps.Marker({
                position,
                map,
                title: '삼양기공사',
            });
        },
        handleAuthFailure() {
            const el = document.getElementById('map');
            if (el) {
                el.innerHTML =
                    '<p>지도를 불러올 수 없습니다. 네이버 클라우드 설정을 확인하세요.</p>';
            }
            console.error('Naver Maps API 인증/로드 실패');
        },
    },
    mounted() {
        window.navermap_authFailure = this.handleAuthFailure;
        window.initMap = this.initMap;

        if (!document.getElementById('naver-map-script')) {
            const script = document.createElement('script');
            script.id = 'naver-map-script';
            script.src =
                'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=oia4jmdkow&callback=initMap';
            script.onerror = this.handleAuthFailure;
            document.head.appendChild(script);
        } else if (window.naver && window.naver.maps) {
            this.initMap();
        }
    },
};
</script>

<style scoped>
.about {
    padding: 2rem 1rem;
    max-width: 960px;
    margin: 0 auto;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #2c4ea0;
    text-align: center;
}

.text-content {
    line-height: 1.7;
    color: #333;
    margin-bottom: 2rem;
}

.text-content p {
    margin-bottom: 1rem;
}

/* 작은 소제목 */
.subheading {
    font-size: 1.5rem;
    color: #2c4ea0;
    margin-bottom: 0.75rem;
    border-left: 4px solid #2c4ea0;
    padding-left: 0.75rem;
}

/* 지도 영역은 텍스트 아래로 내려서 스크롤 시 나타남 */
.map-container {
    width: 100%;
    height: 450px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .about {
        padding: 1.5rem 1rem;
    }

    .map-container {
        height: 300px;
    }
}
</style>
