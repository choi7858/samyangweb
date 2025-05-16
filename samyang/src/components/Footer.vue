<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <!-- 연락처 정보 -->
                <div class="footer-col contact">
                    <p>삼양기공사</p>
                    <p>주소: 서울 중구 충무로9길 14, 2층 201호</p>
                    <p>전화: 02-1234-5678</p>
                </div>
                <!-- 저작권 -->
                <div class="footer-col copy">
                    <p>&copy; 2025 삼양기공사. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer {
    background-color: #f8f9fa;
    /* 밝은 회색 톤 배경 */
    color: #333333;
    /* 진한 회색 텍스트 */
    padding: 2rem 1rem;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    border-top: 1px solid #e0e0e0;
    /* 상단 분리선 */
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

/* 연락처 칼럼 */
.footer-col.contact {
    text-align: left;
    line-height: 1.6;
}

/* 저작권 칼럼 */
.footer-col.copy {
    text-align: right;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* 반응형: 모바일에서는 세로 정렬 및 중앙 정렬 */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-col.contact,
    .footer-col.copy {
        text-align: center;
    }
}
</style>