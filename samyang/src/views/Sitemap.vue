<template>
    <section class="sitemap-section">
        <div class="inner-container">
            <h1 class="page-heading">사이트맵</h1>
            <nav aria-label="사이트맵">
                <div class="sitemap-columns">
                    <!-- 메인 메뉴 -->
                    <div class="column">
                        <h2 class="column-heading">메인 메뉴</h2>
                        <ul class="link-list">
                            <li><router-link to="/">홈</router-link></li>
                            <li><router-link to="/about">회사소개</router-link></li>
                            <li><router-link to="/products">제품소개</router-link></li>
                            <li><router-link to="/quote">견적문의</router-link></li>
                            <li><router-link to="/sitemap">사이트맵</router-link></li>
                            <li><router-link to="/search">검색</router-link></li>
                        </ul>
                    </div>
                    <!-- 제품 카테고리 -->
                    <div class="column">
                        <h2 class="column-heading">제품 소개</h2>
                        <ul class="link-list">
                            <li><router-link to="/products/supertool">SUPERTOOL - 리프팅클램프</router-link></li>
                            <li><router-link to="/products/ace">SUWA - A.C.E 에어 임팩트 렌치</router-link></li>
                            <li><router-link to="/products/cactus">CACTUS - 라쳇 케이블 커터</router-link></li>
                            <li><router-link to="/products/tanaka">Tanaka - 자동절단기용 화구</router-link></li>
                            <li><router-link to="/products/tanaka/yk">유광공업 - 포터블가스절단기</router-link></li>
                            <li><router-link to="/products/tanaka">태원정공 - 자동절단기용 화구</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Sitemap'
}
</script>

<style scoped>
.sitemap-section {
    background: #ffffff;
    padding: 4rem 0;
}

.inner-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.page-heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c4ea0;
    text-align: center;
    margin-bottom: 3rem;
}

.sitemap-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
}

.column-heading {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #2c4ea0;
    padding-bottom: 0.5rem;
}

.link-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.link-list li {
    margin-bottom: 0.75rem;
}

.link-list li a {
    color: #555555;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s;
}

.link-list li a:hover {
    color: #2c4ea0;
}

@media (max-width: 768px) {
    .sitemap-columns {
        grid-template-columns: 1fr;
    }
}
</style>
