navbarScroll()
initThemeMode()

// 监听导航滚动
function navbarScroll() {
  window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar')

    navbar.classList.toggle("change", window.scrollY > 0)

    // if (window.scrollY > 0) {
    //   navbar.classList.add("change")
    // } else {
    //   navbar.classList.remove("change")
    // }
  })
}

// 初始化主题模式
function initThemeMode() {
  // 监听切换按钮点击事件
  const toggleBtn = document.getElementById('dark-mode-toggle')
  toggleBtn.addEventListener('click', toggleDarkMode)

  // 获取html元素
  const html = document.querySelector('html')

  // 获取本地存储的主题模式
  const themeMode = localStorage.getItem('honlou-theme-appearance')

  if (themeMode) {
    // 检查本地存储的主题模式
    if (themeMode === 'auto') {
      html.classList.remove('dark')
      toggleBtn.innerHTML = 'Auto'
    }
    if (themeMode === 'dark') {
      html.classList.add('dark')
      toggleBtn.innerHTML = 'Dark'
    }
  } else {
    // 检查系统主题模式设置
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    if (prefersDarkMode.matches) {
      html.classList.add('dark')
      toggleBtn.innerHTML = 'Dark'
    } else {
      html.classList.remove('dark')
      toggleBtn.innerHTML = 'Auto'
    }
  }
}

// 切换主题模式
function toggleDarkMode() {
  const html = document.querySelector('html')
  html.classList.toggle('dark')
  
  // 保存主题模式设置到本地存储
  const themeValue = html.classList.contains('dark') ? 'dark' : 'auto'
  localStorage.setItem('honlou-theme-appearance', themeValue)
  
  // 切换按钮文字
  if (themeValue === 'dark') {
    document.getElementById('dark-mode-toggle').innerHTML = 'Dark'
  }
  if (themeValue === 'auto') {
    document.getElementById('dark-mode-toggle').innerHTML = 'Auto'
  }
}