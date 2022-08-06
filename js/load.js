const loadObserver = new IntersectionObserver((entryAll, observer) => {
    entryAll.forEach((item) => {
        if(item.isIntersecting && !item.target.hasAttribute('src')){
            let itemTarget = item.target;
            let parent = itemTarget.parentElement;
            let sourceAll = parent.querySelectorAll('source');
            sourceAll.forEach((item) => item.srcset = item.dataset.srcset);
            itemTarget.src = itemTarget.dataset.src;
            observer.unobserve(itemTarget);
        }
    });
},{});

const imgAll = document.querySelectorAll('img');
imgAll.forEach((item) => loadObserver.observe(item));

