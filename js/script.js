const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    const isActive = hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    hamburger.setAttribute('aria-expanded', isActive);
});

// Close menu when clicking outside
window.addEventListener('click', function (e) {
    if (e.target !== hamburger && !navMenu.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});


function showContent(tab) {
    document.getElementById('content-tentang').classList.add('hidden');
    document.getElementById('content-visi').classList.add('hidden');
    document.getElementById('content-misi').classList.add('hidden');

    if (tab === 'tentang') {
        document.getElementById('content-tentang').classList.remove('hidden');
    } else if (tab === 'visi') {
        document.getElementById('content-visi').classList.remove('hidden');
    } else if (tab === 'misi') {
        document.getElementById('content-misi').classList.remove('hidden');
    }
}

showContent('tentang');

function openModal(imageElement) {
    // Ambil src dari gambar yang diklik
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageElement.src;

    // Tampilkan modal
    const modal = document.getElementById('imageModal');
    modal.style.visibility = 'visible';
    modal.classList.remove('hidden');
}

// Menutup modal ketika tombol close di klik
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    modal.style.visibility = 'hidden';
});
