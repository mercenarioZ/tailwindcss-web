const topMenu = document.getElementById('top-menu')
const toggleMenuIcon = document.getElementById('toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleMenuIcon.contains(e.target)) {
        // Click menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('top-menu-expand')
    } else {
        // Click outside
        if (topMenu.classList.contains('top-menu-expand')) {
            topMenu.classList.remove('top-menu-expand')
            topMenu.classList.add('hidden')
        }
    }
})
