import Vue from 'vue';

const scroll = Vue.directive('scroll', {
    inserted: (el, binding) => {
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            let clientHeight = document.documentElement.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight;
            if (scrollTop +  clientHeight >= scrollHeight) {
              let loadData = binding.value;
              loadData();
            }
        });
    }
});

const time = Vue.filter('time', function (value) {
    return Math.floor(value/60)+':'+Math.floor(value%60);
});

export { scroll, time };