let response;
let cur_idx = 0;
    
async function loadSrc() {
    response = await fetch('/slideshow');
    const data = await response.json();
    const items = data.images;
    const container = document.getElementById('snippetContainer');
    console.log('container: ', container);
    items.forEach(item => {
        let element;
        if (/\.(mp4|mov|m4v|mpg|m4v|wmv|webm|ogg)$/i.test(item)) {
            console.log('enter if');
            element = document.createElement('video');
            element.src = `src/${item}`;
            element.className = 'slideIMG';
            element.muted = true;
            element.autoplay = true;
            element.play();
        } else {
            console.log('enter else');
            element = document.createElement('img');
            element.src = `src/${item}`;
            element.className = 'slideIMG';
        }
        container.appendChild(element);
    });
    playCarousel();
}
async function playCarousel() {
    let media = document.getElementsByClassName('slideIMG');
    
    if(cur_idx >= media.length) {
        cur_idx = 0;
        document.getElementById('snippetContainer').innerHTML = '';
    }
    
    media[cur_idx].classList.add('fade-in');
    if(media[cur_idx].element == 'img'){
        setTimeout(() => {
            media[cur_idx].classList.remove('fade-in');
            cur_idx++;
            playCarousel();
        }, 4000);   
    } 
}

window.onload = loadSrc();