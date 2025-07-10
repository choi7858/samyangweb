<template>
    <section class="product-list-section">
        <div class="inner-container">

            <!-- 검색 입력 -->
            <div class="search-box">
                <input v-model="query" @keyup.enter="onSearch" placeholder="제품명 또는 코드로 검색" />
                <button @click="onSearch">검색</button>
            </div>

            <!-- 그룹별 검색 결과 -->
            <div v-if="Object.keys(groupedItems).length">
                <div v-for="(items, category) in groupedItems" :key="category" class="category-group">
                    <h2 class="category-heading">{{ category }}</h2>
                    <ul class="search-results-list">
                        <li v-for="item in items" :key="item.path" class="search-item">
                            <router-link :to="item.path" class="item-link">
                                {{ item.displayName }} ({{ item.code }})
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <p v-else class="no-results">검색 결과가 없습니다.</p>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import routeConfig from '@/router/routes.json'

const query = ref('')

// 1) products 배열 생성 (JSON에서 직접 로드)
const products = routeConfig
    .filter(r => r.path.startsWith('/products') && r.meta?.breadcrumb)
    .map(r => {
        const crumbs = r.meta.breadcrumb.map(c => c.text)
        const idx = crumbs.findIndex(t => t === '제품 소개')
        let category = idx >= 0 && crumbs.length > idx + 1
            ? crumbs[idx + 1]
            : '기타'

        // 매핑 규칙
        if (category === '기타') {
            category = 'SuperTools'
        }
        if (category === 'Tanaka' || category === '유광공업') {
            category = 'Tanaka & 유광공업'
        }
        if (category === 'ACE') {
            category = 'A.C.E - Air Impact Wrench'
        }

        const displayName = crumbs[crumbs.length - 1]
        return {
            path: r.path,
            code: r.name,
            displayName,
            category
        }
    })

// 2) 필터링 + 정렬
const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    const list = q
        ? products.filter(
            p =>
                p.displayName.toLowerCase().includes(q) ||
                p.code.toLowerCase().includes(q)
        )
        : [...products]
    return list.sort((a, b) =>
        a.displayName.localeCompare(b.displayName, 'ko', { numeric: true })
    )
})

// 3) 카테고리별 그룹화
const groupedItems = computed(() => {
    return filtered.value.reduce((groups, item) => {
        if (!groups[item.category]) groups[item.category] = []
        groups[item.category].push(item)
        return groups
    }, {})
})

function onSearch() {
    // 엔터나 버튼 클릭 시 특별 로직 없음
}
</script>

<style scoped>
/* 검색 페이지 좌우 마진 */
.product-list-section {
    padding: 0 6rem;
}

/* 검색 박스 스타일 */
.search-box {
    display: flex;
    max-width: 600px;
    margin: 2rem auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    overflow: hidden;
}

.search-box input {
    flex: 1;
    height: 50px;
    padding: 0 1rem;
    border: none;
    font-size: 16px;
    outline: none;
}

.search-box button {
    padding: 0 1.5rem;
    border: none;
    background: linear-gradient(90deg, #0055a5 0%, #0066cc 100%);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
}

.search-box button:hover {
    background: linear-gradient(90deg, #0066cc 0%, #0055a5 100%);
}

/* 카테고리 그룹 헤딩 */
.category-heading {
    margin-top: 2.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-left: 4px solid #0055a5;
    padding-left: 0.75rem;
    color: #333;
}

/* 검색 결과 리스트 (그리드 레이아웃) */
.search-results-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
    padding: 0;
    list-style: none;
}

/* 개별 결과 아이템 */
.search-item {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.search-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* 링크 텍스트 */
.item-link {
    display: block;
    padding: 1rem;
    color: #0055a5;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
}

.item-link:hover {
    color: #003f7f;
    text-decoration: underline;
}

/* 검색 결과 없을 때 */
.no-results {
    margin-top: 3rem;
    text-align: center;
    color: #888;
    font-style: italic;
    font-size: 18px;
}
</style>
