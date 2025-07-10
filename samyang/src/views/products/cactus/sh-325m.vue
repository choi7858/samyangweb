<!-- samyang/src/views/products/cactus/SH-325M.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">분리식 압착 헤드</h2>
                <p class="product-code">SH-325M</p>
            </div>

            <div class="product-subtitle">
                <span>제품 명칭 : SH-325M</span>
                <span>상품코드 : SH-325M</span>
            </div>

            <div class="product-features">
                <ul>
                    <li>● 압착헤드와 유압펌프의 분리식</li>
                    <li>● 고압호스로 연결하여 좁은 곳 작업도 가능</li>
                    <li>● 옵션으로 전용 부속품 사용 가능!</li>
                    <li> (육각압착 : 최대 325sq / 대각 42㎜까지)</li>
                    <li> (T형 압착 : 최대 T-450까지)</li>
                </ul>
            </div>

            <div class="product-body">
                <!-- 왼쪽: 사양 -->
                <div class="product-details">
                    <h5 class="section-heading">■ 사양</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>압착범위(mm)</th>
                                <td>60~325 ※1</td>
                            </tr>
                            <tr>
                                <th>다이스표준세트<br>(누름다이스)</th>
                                <td>150-325<br>총1개</td>
                            </tr>
                            <tr>
                                <th>다이스표준세트<br>(수다이스)</th>
                                <td>150, 200, 250<br>총3개</td>
                            </tr>
                            <tr>
                                <th>사용 펌프 설정 압력 (Mpa)</th>
                                <td>70</td>
                            </tr>
                            <tr>
                                <th>출력 kN (tonf)</th>
                                <td>185</td>
                            </tr>
                            <tr>
                                <th>전체길이(mm)</th>
                                <td>250</td>
                            </tr>
                            <tr>
                                <th>질량(kg)</th>
                                <td>4.5</td>
                            </tr>
                            <tr>
                                <th>비고</th>
                                <td>
                                    ※ 60-325㎜까지 광범위한 소형 압착 공구.<br>
                                    ※ 각투스 EV-325 부속품 시리즈의 부착품을 사용할 수 있습니다.<br>
                                    ※ 스틸 케이스 포함.<br>
                                    ※적용 유압펌프<br>
                                     전동식: SEP-30DX, SEP-12<br>
                                     수동식: SP-2<br>
                                    ※160·100·180은 별매품(수주)입니다.<br>
                                    • 특주품(압다이스) 60-100<br>
                                    • 특주품(수다이스) 60<br>
                                    • 특주품(수다이스) 100<br>
                                    • 특주품(수다이스) 180
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 오른쪽: 이미지(헤드·세트) + PDF 버튼 -->
                <div class="product-visual">
                    <div class="image-block">
                        <img :src="mainImage" alt="SH-325M 헤드" class="product-main-image" />
                    </div>
                    <div class="image-block">
                        <img :src="setImage" alt="SH-325M 세트" class="product-main-image" />
                        <p class="image-note">※ 이미지를 클릭하면 확대됩니다</p>
                        <a :href="pdfUrl" target="_blank" class="pdf-download-btn">PDF다운로드</a>
                    </div>
                </div>
            </div>

            <!-- 적합 어태치먼트 -->
            <h5 class="section-heading">■ 적합 어태치먼트</h5>
            <div class="product-list-grid">
                <a v-for="att in attachments" :key="att.name" :href="att.link" class="item-link" target="_blank"
                    rel="noopener">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="att.image" :alt="att.name" />
                        </div>
                        <div class="product-info">
                            <p class="item-name">{{ att.name }}</p>
                        </div>
                    </div>
                </a>
            </div>

            <!-- 상세스펙 -->
            <h5 class="section-heading">상세스펙</h5>
            <div class="detail-box">
                <div class="detail-label">분리식압착헤드</div>
                <div class="detail-value">SH-325M</div>
                <a :href="pdfUrl" target="_blank" class="detail-pdf-link">PDF다운로드</a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/cactus/SH-325M.jpg'
import setImage from '@/assets/images/products/cactus/SH-325Mset.jpg'
import EV3H325 from '@/assets/images/products/cactus/EV3-H325.jpg'
import EV3T365 from '@/assets/images/products/cactus/EV3-T365.jpg'
import CCH680A from '@/assets/images/products/cactus/CCH-680A.jpg'

export default {
    name: 'SH325M',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            setImage,
            pdfUrl: 'https://www.ccts.co.jp/wp-content/uploads/25_SH-325M.pdf',
            attachments: [
                { name: 'EV3-H325', image: EV3H325, link: 'https://www.ccts.co.jp/products/multi-tools/ev3-h325/' },
                { name: 'EV3-T365', image: EV3T365, link: 'https://www.ccts.co.jp/products/multi-tools/ev3-t365/' },
                { name: 'CCH-680A', image: CCH680A, link: 'https://www.ccts.co.jp/products/multi-tools/cch-680a/' },
            ],
        }
    },
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
    margin-bottom: 1.5rem;
    display: flex;
    gap: 2rem;
}

.product-features ul {
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

.product-body {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.product-details {
    flex: 1;
    min-width: 280px;
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

/* 적합 어태치먼트 그리드 (product-list-grid 컨벤션) */
.product-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.item-link {
    text-decoration: none;
}

.product-card {
    border: 1px solid #e0e0e0;
    border-radius: 0.25rem;
    overflow: hidden;
    background: #fff;
}

.image-container {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.product-info {
    padding: 0.5rem;
    text-align: center;
}

.item-name {
    font-size: 0.9rem;
    color: #333;
}

/* 상세스펙 */
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
