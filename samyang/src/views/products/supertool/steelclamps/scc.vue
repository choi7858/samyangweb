<!-- samyang/src/views/products/supertool/steelclamps/SCC.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">스크류 캠 클램프 (다용도형)</h2>
                <p class="product-code">SCC0.3W～6</p>
            </div>

            <!-- 개요: 이미지 전환 + 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="currentImage" :alt="captions[selectedIndex]" class="product-main-image" />
                    <p class="image-caption">{{ captions[selectedIndex] }}</p>
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" :alt="captions[idx]"
                            class="thumb-img" :class="{ 'thumb-active': idx === selectedIndex }"
                            @click="selectedIndex = idx" />
                    </div>
                </div>

                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>평판, 형강, 곡면, 구면 등 다양한 형상 강재의 리프팅을 지원하는 <br />범용 클램프</li>
                        <li>360° 어느 방향으로도 올리고, 걸고, 뒤집고, 당길 수 있는 전방위<br /> 리프팅 기능</li>
                        <li>스프링 작동 스크류 캠(구면 설계)으로 무부하시에도 강력한 초기 <br />클램핑력 유지</li>
                        <li>하중이 가해지면 캠이 기울어지며 클램핑력이 자동으로 강화되고, <br />캠 · 패드가 재료에 단단히 물림</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00001&fileid=00000002&/Page%20No.113%EF%BD%9EP138%20LIFTING%20CLAMPS%20FOR%20STEEL_0126.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 예시 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageImage1" alt="하중 작용 시 캠 예시" />
                    <p class="usage-caption">하중 작용 시 캠 예시</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="사용 예시" />
                    <p class="usage-caption">사용 예시</p>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>특수 합금강</td>
                    </tr>
                    <tr>
                        <th>열처리</th>
                        <td>다이포징</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>베이크드-온 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>0.3～6톤</td>
                    </tr>
                    <tr>
                        <th>클램핑 범위</th>
                        <td>
                            0～28mm ～ 0～75mm<br />
                            (SCC0.3W·1W: 50～100mm 대응)
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00292&fileid=00000009&/SCC_SCC-W_241029.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼 다운로드
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00292&fileid=00000011&/SCC_Parts_241029.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 리스트
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import img1 from '@/assets/images/products/steelclamps/english_products.00292.00000001.jpg'
import img2 from '@/assets/images/products/steelclamps/english_products.00292.00000005.jpg'
import img3 from '@/assets/images/products/steelclamps/english_products.00292.00000006.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00292.00000002.jpg'
import usageImage2 from '@/assets/images/products/steelclamps/english_products.00292.00000003.jpg'

export default {
    name: 'SCC',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [img1, img2, img3],
            captions: ['SCC6', 'SCC0.3W', 'SCC1W'],
            selectedIndex: 0,
            usageImage1,
            usageImage2
        }
    },
    computed: {
        currentImage() {
            return this.thumbnails[this.selectedIndex]
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
    max-width: 980px;
    margin: 0 auto;
    padding: 0 1rem;
}

.product-header {
    margin-bottom: 2rem;
}

.product-title {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.product-code {
    font-size: 1.25rem;
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
    max-height: 380px;
    object-fit: contain;
}

.image-caption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.thumbnail-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.thumb-img {
    width: 60px;
    border: 2px solid transparent;
    cursor: pointer;
}

.thumb-active {
    border-color: #2c4ea0;
}

.features {
    flex: 1 1 300px;
}

.section-heading {
    font-size: 1.25rem;
    color: #2c4ea0;
    margin: 1.5rem 0 1rem;
    font-weight: bold;
}

.features ul {
    padding-left: 1.2rem;
    margin-bottom: 1rem;
}

.features li {
    margin-bottom: 0.5rem;
}

.btn-catalogue {
    display: inline-block;
    background: #2c4ea0;
    color: #fff;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-weight: 500;
    margin-top: 1rem;
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

.usage-caption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

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
    background: #f4f8fc;
    text-align: left;
    width: 30%;
}

.spec-table td {
    background: #f9fbfd;
}

.related-buttons {
    margin-top: 1rem;
}

.related-buttons .btn-catalogue {
    margin-right: 1rem;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
