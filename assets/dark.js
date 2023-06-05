const icon = document.getElementById('mode-icon');

icon.addEventListener('click', () =>{    
    const form = document.getElementById('login-form');

    if(icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');

        form.classList.add('dark')

        return;
    }

    icon.classList.add('fa-moon');
    icon.classList.remove('fa-sun');

    form.classList.remove('dark')


    
})