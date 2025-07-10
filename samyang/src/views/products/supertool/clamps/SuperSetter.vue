<!-- src/views/products/clamps/SuperSetter.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">SUPER SETTER</h2>
                <p class="product-code">FCW210 / FCW410 / 415 / 420</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="슈퍼 세터" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img" alt="썸네일" />
                    </div>
                </div>
                <div class="features">
                    <h5>특징</h5>
                    <ul>
                        <li>높은 인장 강도 강재(STKT590)로 제작된 스퀘어 파이프는 강하면서도 가볍습니다.</li>
                        <li>용접된 철골 구조물, 교량 및 토목 공사의 임시 고정 작업에 쉽고 유연하게 사용할 수 있습니다.</li>
                        <li>토목 및 건설 현장에서 임시 구조물 및 프레임을 조립하기에 최적입니다.</li>
                        <li>조임 및 고정 작업, 확장 및 지지 작업에 모두 적합합니다.</li>
                        <li>풀 세트는 FCW4000으로 제공됩니다.</li>
                        <li>FCW210은 경량 작업용입니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00015&fileid=00000002&/Page%20No.19%EF%BD%9EP78%20GENERAL%20HAND%20TOOLS%20%26%20CLAMPS.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 상세 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="imageOne" alt="대형 구조물에서 사용된 슈퍼 세터" />
                    <p class="text-muted mt-2">대형 구조물에서 사용된 슈퍼 세터</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="imageTwo" alt="프레임을 클램핑하는 슈퍼 세터" />
                    <p class="text-muted mt-2">프레임을 클램핑하는 슈퍼 세터</p>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>특수 합금강</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>니켈 도금</td>
                    </tr>
                    <tr>
                        <th>FCW210</th>
                        <td>클램프 범위 0〜700mm, 깊이 100mm</td>
                    </tr>
                    <tr>
                        <th>FCW410/415/420</th>
                        <td>클램프 범위 0〜750mm, 깊이 100/150/200mm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/clamps/supersetter-main.png'
import imageOne from '@/assets/images/products/clamps/supersetter-use1.png'
import imageTwo from '@/assets/images/products/clamps/supersetter-use2.png'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'SuperSetter',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
            imageOne,
            imageTwo
        }
    }
}
</script>

<style scoped>
.product-detail-section {
    background: #f9f9f9;
    padding: 2rem 0;
}

.inner-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 전문가 브레드크럼 */
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

.product-header {
    margin-bottom: 2rem;
}

.product-title {
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
    margin-top: 0.5rem;
}

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
    margin-top: 50px;
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
    padding-left: 0.9rem;
    padding-right: 0.9rem;
}

.features h5 {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.features ul {
    padding-left: 0.5rem;
    margin-bottom: 1rem;
}

.features li {
    margin-bottom: 0.5rem;
}

.btn-catalogue {
    background-color: #2c4ea0;
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;
}

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
    max-width: 100%;
    max-height: 250px;
}

.bottom-image .text-muted {
    margin-top: 0.5rem;
    color: #666;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
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

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
