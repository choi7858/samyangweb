<!-- samyang/src/views/products/concreteclamps/AMC250N500N.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">
                    유니버설 리프팅 클램프 (폴리우레탄 패드 타입, 클램프 범위 조절가능)
                </h2>
                <p class="product-code">AMC250N / 500N</p>
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
                        <li>
                            경계석등 다양한 철근 콘크리트 구조물을 균형있게 들어올리고 취급하기 위한
                            범용 클램프이며 특히 연석블록 및 소형 L자형 콘크리트 <br />패널 작업 시 효과적입니다. </li>
                        <li>
                            패드의 고정 지점을 변경하여 작업물의 폭에 맞게 클램프 범위를 쉽게 조절할 수 있습니다.
                        </li>
                        <li>
                            샤클 위치를 변경하여 작업물과 클램프의 균형을 세밀하게 조정할 수 있습니다.
                        </li>
                        <li>
                            본체 내부 스프링이 패드를 작업물에 단단히 밀착시켜 리프팅 작업을 안정화합니다.
                        </li>
                        <li>
                            클램프는 손으로 잠금 해제가 가능하여 호이스트 어태치먼트에서 <br />부드럽게 분리할 수 있습니다.
                        </li>
                        <li>
                            특수 내구성 폴리우레탄 패드는 작업물을 손상시키지 않습니다.
                        </li>
                        <li>※ U자형 홈통은 리프팅할 수 없습니다.</li>
                        <li>※ 연결 후 용량은 2개 단위 총 용량과 동일합니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/english/support/catalog_download.php" class="btn-catalogue"
                        target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 예시 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageImage1" alt="옵션 연결 부품: AMB 250Ｎ / 500Ｎ" />
                    <p class="howToUse_caption">
                        옵션 연결 부품: AMB 250Ｎ / 500Ｎ
                    </p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="2개 단위 연결 예시" />
                    <p class="howToUse_caption">2개 단위 연결 예시</p>
                </div>
            </div>

            <!-- 사양 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>고장력강 / 폴리우레탄</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>보라색 베이크드-온 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>250 / 500kg</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>10～240mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00017&fileid=00000002&/Page%20No.139%EF%BD%9EP148%20LIFTING%20CLAMPS%20FOR%20CONCRETE%20MATERIAL.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/concreteclamps/AMC250N.jpg'
import usageImage1 from '@/assets/images/products/concreteclamps/AMB250N.jpg'
import usageImage2 from '@/assets/images/products/concreteclamps/AMC250N_example2.jpg'

export default {
    name: 'AMC250N500N',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [mainImage],
            captions: ['AMC250N / 500N'],
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
    max-width: 960px;
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
    margin-right: 1rem;
}

.section-heading {
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
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
    object-fit: contain;
}

.howToUse_caption {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
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

.related-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
