sidebar = document.querySelector('.sidebar')


sidebarButton = document.querySelector('.sidebar-button i');
sidebarButton.addEventListener('click', () => {
    sidebar.style.position = 'fixed';
    sidebar.style.height = '100%';
    sidebar.style.display = 'block';
});

backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
    sidebar.style.display = 'none'
});

window.addEventListener('resize', () => {
    if(window.innerWidth >= 976){
        sidebar.style.position = 'initial';
        sidebar.style.height = 'initial';
        sidebar.style.display = 'initial';
    }
});

window.addEventListener('resize', () => {
    if(window.innerWidth < 976){
        sidebar.style.position = 'fixed';
        sidebar.style.height = '100%';
        sidebar.style.display = 'none';
    }
});