<!-- src/components/Header.vue -->
<template>
    <nav class="header-nav" role="navigation" aria-label="메인 내비게이션">
        <div class="nav-container">
            <!-- 로고 -->
            <div class="logo">
                <router-link to="/">
                    <img :src="logo" alt="삼양기공사 로고" loading="lazy" />
                </router-link>
            </div>
            <!-- 추가된 브랜드 텍스트 -->
            <router-link to="/" class="brand-text">삼양기공사</router-link>

            <!-- 데스크탑 네비게이션 메뉴 -->
            <ul class="nav-list">
                <li class="nav-item" v-for="item in navItems" :key="item.to">
                    <router-link class="nav-link" :to="item.to" exact>
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>

            <!-- 모바일 햄버거 버튼 -->
            <button class="hamburger" @click="open = !open" :aria-expanded="open.toString()" aria-controls="nav-list"
                aria-label="메뉴 토글">
                <span class="hamburger-line" />
                <span class="hamburger-line" />
                <span class="hamburger-line" />
            </button>
        </div>

        <!-- 모바일 메뉴 (토글) -->
        <div class="mobile-menu" v-if="open" id="nav-list">
            <ul>
                <li v-for="item in navItems" :key="item.to" class="mobile-item">
                    <router-link class="mobile-link" :to="item.to" @click="open = false">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import logo from '../assets/images/SYlogo.png'

export default {
    name: 'Header',
    data() {
        return {
            logo,
            open: false,
            navItems: [
                { to: '/about', label: '회사소개' },
                { to: '/products', label: '제품소개' },
                { to: '/quote', label: '견적문의' },
                { to: '/sitemap', label: '사이트맵' },
                { to: '/search', label: '검색' },
            ]
        }
    }
}
</script>

<style scoped>
/* 헤더 전체 */
.header-nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header-nav router-link .brand-text,
.header-nav router-link .brand-text:hover {
    text-decoration: none;
}

/* 컨테이너: 한 줄로 정렬 */
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.5rem;
    padding: 0 1.5rem;
}

/* 로고 */
.logo img {
    height: 70px;
    transition: transform 0.3s;
}

/* src/components/Header.vue <style scoped> 내부에 추가 */

.brand-text {
    font-size: 4rem;
    font-weight: 900;
    color: #032a85ec;
    font-family: 'Black Han Sans', sans-serif;
    letter-spacing: 0.05em;
    text-decoration: none;
    white-space: nowrap;
    min-width: 0;
    flex-shrink: 1;
    font-size: clamp(2rem, 5vw, 4rem);
}

.brand-text:hover {
    text-decoration: none;
    /* 호버 시에도 밑줄 유지 안 함 */
}


.logo img:hover {
    transform: scale(1.05);
}

/* 데스크탑 네비게이션 리스트 */
.nav-list {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

/* 네비게이션 링크 - 밑줄 제거 */
.nav-link {
    color: #333333;
    font-size: 1.2rem;
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s;
    text-decoration: none;
    /* 밑줄 제거 */
}

/* 호버 밑줄 애니메이션 */
.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #2c4ea0;
    transition: width 0.3s;
}

.nav-link:hover {
    color: #2c4ea0;
}

.nav-link:hover::after {
    width: 100%;
}

/* 활성화된 라우트 */
.router-link-exact-active {
    color: #2c4ea0;
}

.router-link-exact-active::after {
    width: 100%;
}

/* 햄버거 아이콘 (모바일) */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}

.hamburger-line {
    width: 24px;
    height: 2px;
    background-color: #333333;
    transition: background-color 0.3s;
}

.hamburger:hover .hamburger-line {
    background-color: #2c4ea0;
}

/* 모바일 메뉴 */
.mobile-menu {
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-menu ul {
    list-style: none;
    margin: 0;
    padding: 0.5rem 1.5rem;
}

.mobile-item+.mobile-item {
    margin-top: 0.5rem;
}

/* 모바일 링크에서도 밑줄 제거 */
.mobile-link {
    color: #333333;
    font-size: 1rem;
    display: block;
    width: 100%;
    padding: 0.5rem 0;
    transition: color 0.3s;
    text-decoration: none;
}

.mobile-link:hover,
.router-link-exact-active .mobile-link {
    color: #2c4ea0;
}

/* 반응형: 모바일에서 햄버거 보이기, 네비 숨기기 */
@media (max-width: 992px) {
    .nav-list {
        display: none;
    }

    .hamburger {
        display: flex;
    }
}

@media (max-width: 992px) {
    .brand-text {
        font-size: 2rem;
        /* 더 작은 화면에서 폰트 크기 조정 */
    }
}

/* 모바일 화면 (예: 768px 이하) */
@media (max-width: 992px) {
    .nav-list {
        display: none;
    }

    .hamburger {
        display: flex;
    }
}

@media (max-width: 447px) {
    .brand-text {
        display: none;
    }
}
</style>
