<!-- src/views/products/clamps/CclampHeavyWide.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 전문가 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">C CLAMP 헤비 듀티 와이드 타입</h2>
                <p class="product-code">CC50–200</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="C CLAMP 헤비 듀티 와이드" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img" alt="썸네일" />
                    </div>
                </div>
                <div class="features">
                    <h5>특징</h5>
                    <ul>
                        <li>용접 및 임시 고정 작업에 편리합니다.</li>
                        <li>깊은 아가리(스루스루)를 통해 깊은 위치에서도 단단히 고정할 수 있습니다.</li>
                        <li>빠른 조임이 가능한 핸들이 장착되어 있습니다.</li>
                        <li>육각 머드를 렌치로 마지막에 조이면 더욱 안전하게 고정할 수 있습니다.</li>
                        <li>바디에 구멍이 있어 볼트로 플레이트를 고정하거나 위치를 잡을 때 용이합니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/english/support/catalog_download.php" class="btn-catalogue"
                        target="_blank">
                        카탈로그 보기
                    </a>
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
                        <td>음극 전착 도장</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>50〜200mm</td>
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
import heavyWide from '@/assets/images/products/clamps/cclamp-heavy-wide.png'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'CclampHeavyWide',
    components: { Breadcrumb },
    data() {
        return {
            mainImage: heavyWide,
            thumbnails: [heavyWide]
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
    max-width: 1000px;
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

/* 오버뷰 레이아웃 */
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
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;
}

/* 사양표 */
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
    .product-overview {
        flex-direction: column;
    }
}
</style>
