// 頁面切換邏輯
function goToPage(pageId) {
    // 隱藏所有頁面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // 顯示目標頁面
    document.getElementById(pageId).classList.add('active');
    // 讓頁面滾動到最上面
    window.scrollTo(0, 0);
}

// 好友勾選切換
function toggleFriend(element) {
    // 如果該卡片有 disabled 屬性，則不執行切換
    if (element.classList.contains('disabled')) return;

    element.classList.toggle('selected');
    const checkbox = element.querySelector('.friend-checkbox');
    
    if (element.classList.contains('selected')) {
        checkbox.innerHTML = '✓';
    } else {
        checkbox.innerHTML = '';
    }
}

// 口味標籤切換
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// 料理分類切換
document.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('click', function() {
        // 先移除所有 active
        document.querySelectorAll('.food-item').forEach(i => i.classList.remove('active'));
        // 給當前點擊的加上 active
        this.classList.add('active');
    });
});

// 打開 Google 地圖
function openMap() {
    // 這裡設定一個真實的台北地點（例如大安區）
    window.open('https://www.google.com/maps/search/?api=1&query=台北市大安區溫州街', '_blank');
}
