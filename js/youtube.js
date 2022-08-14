(function youtubeVideo () {
    const videoAll = document.querySelectorAll('.company-youtube__video');
    videoAll.forEach(item => {
        item.addEventListener('click', () => {
            let img = item.querySelector('img');
            let url = img.getAttribute('src');
            let codeUrl = url.match(/(?<=vi\/)(.+)(?=\/)/)[0];
            item.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Gxn_U1iA_BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        });
    });

}());