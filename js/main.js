
// 页脚年份自动更新
document.addEventListener('DOMContentLoaded', function () {
    var year = new Date().getFullYear();
    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = year;

    // 产品列表每行文字描述区域高度一致
    function setProductBodyHeights() {
        var cards = document.querySelectorAll('.product-list-row > .col-md-4');
        var perRow = 3;
        for (var i = 0; i < cards.length; i += perRow) {
            var maxH = 0;
            var bodies = [];
            for (var j = 0; j < perRow && (i + j) < cards.length; j++) {
                var body = cards[i + j].querySelector('.product-body');
                if (body) {
                    body.style.height = '';
                    bodies.push(body);
                    maxH = Math.max(maxH, body.offsetHeight);
                }
            }
            bodies.forEach(function (body) {
                body.style.height = maxH + 'px';
            });
        }
    }
    setProductBodyHeights();
    window.addEventListener('resize', setProductBodyHeights);
});

const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('图片禁止直接保存，如需使用请联系管理员');
  });
});

