// 检查本地存储中是否存在黑暗模式设置
const isDarkMode = localStorage.getItem('honlou-theme-appearance') === 'dark'

// 根据黑暗模式设置添加或移除类名
function toggleDarkMode() {
  const html = document.querySelector('html')
  html.classList.toggle('dark')

  // 保存黑暗模式设置到本地存储
  const isDarkModeValue = html.classList.contains('dark') ? 'dark' : 'auto'
  localStorage.setItem('honlou-theme-appearance', isDarkModeValue)

  // 切换文字
  let text = document.getElementById('dark-mode-toggle').innerHTML
  console.log(text)
  if (isDarkModeValue === 'dark') {
    text = 'Dark'
  }
  if (isDarkModeValue === 'auto') {
    text = 'Auto'
  }
}

// 根据系统主题设置初始加载应用正确的模式，如果用户没有手动切换
if (!isDarkMode) {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
  if (prefersDarkMode.matches) {
    document.querySelector('html').classList.add('dark')
  }
}

// 监听切换按钮点击事件
const toggleButton = document.getElementById('dark-mode-toggle')
toggleButton.addEventListener('click', toggleDarkMode)