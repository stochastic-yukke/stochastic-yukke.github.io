// テーマ切り替え

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const icon = document.querySelector('.theme-toggle-icon');
  const footerLogo = document.getElementById('footer-logo');
  let rotated = false;

  // テーマ切り替え共通関数
  function toggleTheme(doLogoAnim = false) {
    body.classList.toggle('ud-mode');
    rotated = !rotated;
    if (icon) {
      icon.style.transition = 'transform 0.3s cubic-bezier(.4,2,.6,1)';
      icon.style.transform = rotated ? 'rotate(90deg)' : 'rotate(0deg)';
    }
    // Homeのロゴのアニメーション
    if (footerLogo && doLogoAnim) {
      footerLogo.classList.remove('ud-toggle-anim');
      void footerLogo.offsetWidth;
      footerLogo.classList.add('ud-toggle-anim');
    }
    // 保存
    if (body.classList.contains('ud-mode')) {
      localStorage.setItem('themeMode', 'ud');
    } else {
      localStorage.setItem('themeMode', 'decorative');
    }
  }

  // localStorageから状態取得
  const saved = localStorage.getItem('themeMode');
  if (saved === 'ud') {
    body.classList.add('ud-mode');
    rotated = true;
    if (icon) icon.style.transform = 'rotate(90deg)';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleTheme();
    });
  }
  if (footerLogo) {
    footerLogo.addEventListener('click', function (e) {
      e.preventDefault();
      toggleTheme(true);
    });
  }
});
