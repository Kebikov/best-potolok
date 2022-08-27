//= бегаюшая рулетка на главной странице
export default function rulerMovement () {
    try {
        const rulesBody = document.querySelector('.rules-body');
        const wrapper = document.querySelector('.wrapper');
        const oneStep = document.querySelector('.one-step');
        let timeS;
        function time () {
            if(oneStepWidth > 1100) timeS = 20;
            if(oneStepWidth < 1100 && oneStepWidth > 900) timeS = 17;
            if(oneStepWidth < 900 && oneStepWidth > 600) timeS = 14;
            if(oneStepWidth < 600) timeS = 10;
        }
        let oneStepWidth = oneStep.getBoundingClientRect().width - 80;
        time();
        rulesBody.style.animation = `draive infinite ${timeS}s`;

        const elementStyle = document.createElement('style');
        elementStyle.innerHTML = `
        @keyframes draive {
            0% {
                transform: translate(0, 0);
            }
            15% {
                transform: translate( ${oneStepWidth}px, 0);
            }
            30% {
                transform: translate( ${oneStepWidth}px, 0);
            }
            40% {
                transform: translate(0, 0);
            }
        }`;
        wrapper.append(elementStyle);
        } catch (error) {
            console.log('',error);
        }
}




