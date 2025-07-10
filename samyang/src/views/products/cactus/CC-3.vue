<!-- samyang/src/views/products/cactus/CC-3.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">유압식 케이블 커터</h2>
                <p class="product-code">CC-3</p>
            </div>

            <div class="product-subtitle">
                <span>제품 명칭 : CC-3</span>
                <span>상품코드 : CC-3</span>
            </div>

            <div class="product-body">
                <!-- 왼쪽: 사양 -->
                <div class="product-details">
                    <ul class="product-features">
                        <li>● 분리식 케이블 커터의 스테디셀러!</li>
                    </ul>

                    <h5 class="section-heading">■ 사양</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>절단 능력<br>구리선</th>
                                <td>φ 41.6 (1000mm²)</td>
                            </tr>
                            <tr>
                                <th>절단 능력<br>경알루미늄선 HAI</th>
                                <td>φ 46.2 (1260mm²)</td>
                            </tr>
                            <tr>
                                <th>절단 능력<br>C.C.P (mm)</th>
                                <td>φ 100</td>
                            </tr>
                            <tr>
                                <th>절단 능력<br>지중케이블 (mm)</th>
                                <td>φ 100</td>
                            </tr>
                            <tr>
                                <th>사용 펌프 설정 압력 Mpa</th>
                                <td>70</td>
                            </tr>
                            <tr>
                                <th>출력 kN</th>
                                <td>98</td>
                            </tr>
                            <tr>
                                <th>폭 × 전체 길이 (램 포함) (mm)</th>
                                <td>174 × 610</td>
                            </tr>
                            <tr>
                                <th>질량 (램 포함) (kg)</th>
                                <td>13.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 오른쪽: 이미지 + PDF 버튼 -->
                <div class="product-visual">
                    <div class="image-block">
                        <img :src="mainImage" alt="CC-3" class="product-main-image" />
                        <p class="image-note">※ 이미지를 클릭하면 확대됩니다</p>
                        <a :href="pdfUrl" target="_blank" class="pdf-download-btn">PDF다운로드</a>
                    </div>
                </div>
            </div>

            <h5 class="section-heading">상세스펙</h5>
            <div class="detail-box">
                <div class="detail-label">유압식케이블커터</div>
                <div class="detail-value">CC-3</div>
                <a :href="pdfUrl" target="_blank" class="detail-pdf-link">PDF다운로드</a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/cactus/CC-3.jpg'

export default {
    name: 'CC3',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            pdfUrl: 'https://www.ccts.co.jp/wp-content/uploads/29_CC-325_CC-520_CC-3.pdf'
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
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
}

.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.product-header {
    margin-bottom: 1rem;
}

.product-title {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.75rem;
    font-weight: bold;
    color: #000;
}

.product-code {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c4ea0;
    margin-top: 0.25rem;
}

.product-subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;
}

/* CC-325.vue 와 동일한 구조 */
.product-body {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.product-details {
    flex: 1;
    min-width: 280px;
}

.product-features {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
}

.product-features li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.section-heading {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.25rem;
    margin: 2rem 0 1rem;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    /* cc325.vue 동일 */
}

.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
}

.spec-table th {
    background: #f4f8fc;
    width: 30%;
    text-align: left;
}

.spec-table td {
    background: #f9fbfd;
    text-align: center;
}

.product-visual {
    flex: 1;
    min-width: 280px;
    text-align: center;
}

.image-block {
    margin-top: 0.5rem;
}

.product-main-image {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
}

.image-note {
    font-size: 0.85rem;
    color: #666;
    margin: 0.5rem 0;
}

.pdf-download-btn {
    display: block;
    background: #2c4ea0;
    color: #fff;
    text-decoration: none;
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-weight: 600;
}

.pdf-download-btn:hover {
    background: #233f80;
}

.detail-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    margin-top: 1rem;
}

.detail-label {
    font-size: 1rem;
    font-weight: bold;
}

.detail-value {
    background: #000;
    color: #fff;
    padding: 0.25rem 0.75rem;
    font-weight: bold;
}

.detail-pdf-link {
    color: #2c4ea0;
    text-decoration: none;
    font-weight: 600;
}

.detail-pdf-link:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .product-body {
        flex-direction: column;
    }

    .product-subtitle {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
