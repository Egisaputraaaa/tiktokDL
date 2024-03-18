form.addEventListener('submit', e => {
    e.preventDefault();

    content.innerHTML = '<img src="./img/spinning-circles.svg" alt="loader" />';

    let url = e.target.url.value; // Mendapatkan nilai dari input
    let domain = url.split('/')[2]; // Mendapatkan domain

    // Memeriksa apakah domain adalah tiktok.com
    if (domain === 'www.tiktok.com' || domain === 'vm.tiktok.com' || domain === 'vt.tiktok.com') {
        getUrl(url); // Mendapatkan data video jika domain adalah tiktok.com
    } else {
        downloadPhoto(url); // Mengunduh foto jika URL bukan tautan TikTok
    }
    
    e.target.reset();
});
