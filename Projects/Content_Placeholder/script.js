const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_imgader = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg" alt="laptop" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aperiam!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 8, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}