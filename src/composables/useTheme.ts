export const useTheme = () => {
  const colorMode = useColorMode()

  const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  const isDark = computed(() => colorMode.value === 'dark')

  return {
    colorMode: readonly(colorMode),
    toggleTheme,
    isDark
  }
}