const time = () => {
    try {

        const elementDay = document.querySelector('#day') as HTMLDivElement;
        const elementHours = document.querySelector('#hours') as HTMLDivElement;
        const elementMinute = document.querySelector('#minute') as HTMLDivElement;
        const elementSeconds = document.querySelector('#seconds') as HTMLDivElement;
        const elementDateDo = document.querySelector('#dateDo') as HTMLDivElement;

        function timeOnDisplay() {
            if(elementDay && elementHours && elementMinute && elementSeconds && elementDateDo) {

                const date: Date = new Date();
                const lastWeekDate: Date = new Date();
        
                const dayWeek: number = lastWeekDate.getDay();

                const differenceDay: number = 8 - dayWeek;
                lastWeekDate.setDate(lastWeekDate.getDate() + differenceDay);
        
                const year = lastWeekDate.getFullYear();
                const month = lastWeekDate.getMonth();
                const day = lastWeekDate.getDate();
        
                elementDateDo.textContent = `${(day + '').padStart(2,'0')}/${((month + 1) + '').padStart(2,'0')}/${year}`;
        
                const msSeconds: number = 1000;
                const msMinute: number = msSeconds * 60;
                const msHours: number = msMinute * 60;
                const msDay: number = msHours * 24;

                const dateSanday = new Date(year, month, day, 0);
                
                let differenceTime: number = dateSanday.getTime() - date.getTime();

                const leftDay: number = Math.floor( differenceTime / msDay );
                differenceTime = differenceTime - leftDay * msDay;
                const leftHours: number = Math.floor( differenceTime / msHours );
                differenceTime = differenceTime - leftHours * msHours;
                const leftMinute: number = Math.floor( differenceTime / msMinute ); 
                differenceTime = differenceTime - leftMinute * msMinute;
                const leftSeconds: number = Math.floor( differenceTime / msSeconds );

                elementDay.textContent =  (leftDay + '').padStart(2,'0');
                elementHours.textContent = (leftHours + '').padStart(2,'0');
                elementMinute.textContent = (leftMinute + '').padStart(2,'0');
                elementSeconds.textContent = (leftSeconds + '').padStart(2,'0');
            }
            timeStart();
        }

        function timeStart() {
            setTimeout(timeOnDisplay, 1000);
        }

        timeStart();
    } catch (error) {
        console.log('Error in fnc time >>> ', error);
    }
}

export default time;