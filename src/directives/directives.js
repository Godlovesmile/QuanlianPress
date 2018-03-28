import Vue from 'vue';

const scroll = Vue.directive('scroll', {
    inserted: (el, binding) => {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop + document.documentElement.clientHeight  >= document.documentElement.scrollHeight) {
              let loadData = binding.value;
              loadData();
            }
        });
    }
});

export {scroll};