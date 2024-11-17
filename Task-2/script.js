function movePosters() {
    const mvPosterCont2 = document.querySelector('.mv-poster-cont-2');
    const main = document.querySelector('main');

    if (window.matchMedia('(max-width: 1024px)').matches) {
        if (mvPosterCont2 && main) {
            // Move mv-poster-cont-2 into <main> on tablet
            main.appendChild(mvPosterCont2);
        }
    } else {
    }
}

// Run the function on load and on window resize
movePosters();
window.addEventListener('resize', movePosters);
