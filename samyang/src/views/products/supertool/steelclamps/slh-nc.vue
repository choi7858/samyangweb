<!-- samyang/src/views/products/steelclamps/SLH-NC.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">체인 슬링 장착형 슈퍼 락 후크</h2>
                <p class="product-code">
                    SLH2NC / 3NC, SLH2SC / 3SC, SLH2AC / 3AC, 3ASBC
                </p>
            </div>

            <!-- 개요: 이미지 + 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="currentImage" :alt="captions[selectedIndex]" class="product-main-image" />
                    <p class="image-caption">{{ captions[selectedIndex] }}</p>
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            :class="{ 'thumb-active': idx === selectedIndex }" @click="selectedIndex = idx"
                            :alt="captions[idx]" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>체인 슬링은 와이어 로프보다 더 오래 안전하게 사용 가능</li>
                        <li>제어를 위한 시리얼 번호 및 정격 용량 표기 태그 포함</li>
                        <li>JIS V 등급 기반 체인 슬링으로 가볍고 강력함</li>
                        <li>후크 제거 시 레버로 개방 잠금을 설정 가능 (SLH-AC / SLH3ASBC)</li>
                        <li>스위블 아이 볼트 장착으로 체인 복귀가 원활하며 도로판 회전을 방지 (SLH-SC / SLH3ASBC)</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00001&fileid=00000002&/Page%20No.113%EF%BD%9EP138%20LIFTING%20CLAMPS%20FOR%20STEEL_0126.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 예시 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageImage1" alt="체인 슬링 (품번: CSC31)" />
                    <p class="howToUse_caption">체인 슬링 (품번: CSC31)</p>
                </div>
            </div>

            <!-- 사양 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>제품 사양</th>
                        <td>
                            체인 슬링 장착형 슈퍼 락 후크<br />
                            품번 SLH2NC (SLH2N + CSC31)<br />
                            품번 SLH3NC (SLH3N + CSC31)
                        </td>
                    </tr>
                    <tr>
                        <th>제품 사양</th>
                        <td>
                            스위블 장착형 체인 슬링 장착형 슈퍼 락 후크<br />
                            품번 SLH2SC (SLH2S + CSC31)<br />
                            품번 SLH3SC (SLH3S + CSC31)
                        </td>
                    </tr>
                    <tr>
                        <th>제품 사양</th>
                        <td>
                            개폐식 잠금형 체인 슬링 장착형 슈퍼 락 후크<br />
                            품번 SLH2AC (SLH2A + CSC31)<br />
                            품번 SLH3AC (SLH3A + CSC31)
                        </td>
                    </tr>
                    <tr>
                        <th>제품 사양</th>
                        <td>
                            개폐식 잠금형 스위블 장착 체인 슬링 장착형 슈퍼 락 후크<br />
                            품번 SLH3ASBC (SLH3ASB + CSC31)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import img1 from '@/assets/images/products/steelclamps/english_products.00665.00000001.jpg'
import img2 from '@/assets/images/products/steelclamps/english_products.00665.00000002.jpg'
import img3 from '@/assets/images/products/steelclamps/english_products.00665.00000003.jpg'
import img4 from '@/assets/images/products/steelclamps/english_products.00665.00000004.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00665.00000005.jpg'

export default {
    name: 'SLH-NC',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [img1, img2, img3, img4],
            captions: [
                'SLH2NC / 3NC',
                'SLH2SC / 3SC',
                'SLH2AC / 3AC',
                '3ASBC'
            ],
            selectedIndex: 0,
            usageImage1
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
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 브레드크럼은 별도 컴포넌트로 처리 */
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
    position: relative;
    flex: 1 1 300px;
    text-align: center;
    padding-bottom: 100px;
    /* 썸네일 공간 확보 */
}

.product-main-image {
    max-width: 100%;
    max-height: 380px;
}

.image-caption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.thumbnail-list {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.thumbnail-list .thumb-img {
    width: 60px;
    border: 2px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
}

.thumbnail-list .thumb-img.thumb-active {
    border-color: #2c4ea0 !important;
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
    border-radius: 0;
    text-decoration: none;
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
    max-height: 250px;
    max-width: 100%;
}

.howToUse_caption {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.section-heading {
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
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
