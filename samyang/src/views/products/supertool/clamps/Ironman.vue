<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">IRON MAN (임시 구조용 클램프)</h2>
                <p class="product-code">AC36 / 45 / 50 / 50H / 60, ACL</p>
            </div>

            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="IRON MAN" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            alt="IRON MAN 썸네일" />
                    </div>
                </div>
                <div class="features">
                    <h5>특징</h5>
                    <ul>
                        <li>작업 레벨 등 임시 구조물을 조립할 때 최적화된 클램프입니다.</li>
                        <li>볼트 및 용접 구조물보다 빠르고 안전하게 구조물을 조립 및 <br />해체할 수 있습니다.</li>
                        <li>볼트 끝이 강판에 물려 철재를 단단히 고정하도록 설계되었습니다.</li>
                        <li>AC50 / 50H / 60 모델은 일본 임시 구조물 산업 협회에서 인증을<br /> 받았습니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00015&fileid=00000002&/Page%20No.19%EF%BD%9EP78%20GENERAL%20HAND%20TOOLS%20%26%20CLAMPS.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="detailLeft" alt="ACL" />
                    <p class="text-muted mt-2">ACL</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="detailRight" alt="구조 예시" />
                </div>
            </div>

            <h5 class="mt-5 fw-bold">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>특수 합금강</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>컬러 크로메이트</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>9〜36 / 9〜45 / 9〜50 / 21〜60mm, ACL: 9〜22 / 5〜19mm</td>
                    </tr>
                    <tr>
                        <th>사이즈</th>
                        <td>총 6가지 사이즈</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
// 이미지 및 컴포넌트 import
import mainImage from '@/assets/images/products/clamps/ironman.png'
import detailLeft from '@/assets/images/products/clamps/ironman-detail-left.png'
import detailRight from '@/assets/images/products/clamps/ironman-detail-right.png'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Ironman',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            // 썸네일 배열 (현재는 메인 이미지만 포함)
            thumbnails: [mainImage],
            detailLeft,
            detailRight
        }
    }
}
</script>

<style scoped>
/* 기본적인 레이아웃 및 배경 */
.product-detail-section {
    background: #f9f9f9;
    padding: 2rem 0;
}

.inner-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 제품 헤더 스타일 */
.product-header {
    margin-bottom: 2rem;
}

.product-title {
    /* 액센트 컬러를 사용한 왼쪽 테두리 */
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
}

.product-code {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2c4ea0;
    /* 액센트 컬러 */
    margin-top: 0.5rem;
}

/* 오버뷰 (이미지 & 특징) 레이아웃 - Flexbox 사용 */
.product-overview {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
}

.image-block {
    flex: 1 1 300px;
    text-align: center;
}

.product-main-image {
    max-width: 100%;
    max-height: 280px;
}

.thumbnail-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.thumb-img {
    width: 60px;
    border: 1px solid #ccc;
}

.features {
    flex: 1 1 300px;
}

.features h5 {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.features ul {
    padding-left: 1.2rem;
    margin-bottom: 1rem;
}

.features li {
    margin-bottom: 0.5rem;
}

.btn-catalogue {
    background-color: #2c4ea0;
    /* 액센트 컬러 */
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 0;
    text-decoration: none;
    display: inline-block;
    /* 링크 요소의 크기 조정을 위해 추가 */
}

/* 상세 이미지 섹션 - Flexbox 사용 */
.bottom-images {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
}

.bottom-image {
    flex: 1 1 45%;
    text-align: center;
}

.bottom-image img {
    max-height: 250px;
    max-width: 100%;
}

.bottom-image .text-muted {
    margin-top: 0.5rem;
    color: #666;
}

/* 사양표 스타일 */
.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
}

.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
}

.spec-table th {
    background-color: #f4f8fc;
    width: 30%;
    text-align: left;
}

.spec-table td {
    background-color: #f9fbfd;
}

/* 브레드크럼 스타일 (기존 코드에서 추출) */
.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.breadcrumbs-professional ol {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #ccc;
}

.breadcrumbs-professional li a,
.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #333;
    text-decoration: none;
}

.breadcrumbs-professional li[aria-current] {
    font-weight: 600;
    color: #2c4ea0;
}

.home-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    fill: #2c4ea0;
}

/* 미디어 쿼리 (반응형 디자인) */
@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
        /* 세로 정렬로 변경 */
    }
}
</style>