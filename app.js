const door = document.querySelector('.door');
const doorBox = document.querySelectorAll('.door .box');
const doorBoxSubBox = document.querySelectorAll('.door .box .sub-box');

const open = () => {
    doorBoxSubBox.forEach(item => {
        item.classList.add('sub-box-open');
        item.classList.remove('sub-box-close');
    })
    doorBox.forEach(item => {
        item.classList.add('box-open');
        item.classList.remove('box-close');
    })
    door.classList.add('door-open');
    door.classList.remove('door-close');
}

const close = () => {
    doorBoxSubBox.forEach(item => {
        item.classList.add('sub-box-close');
        item.classList.remove('sub-box-open');
    })
    doorBox.forEach(item => {
        item.classList.add('box-close');
        item.classList.remove('box-open');
    })
    door.classList.add('door-close');
    door.classList.remove('door-open');
}

document.querySelector('#open').addEventListener('click', open);
document.querySelector('#close').addEventListener('click', close);