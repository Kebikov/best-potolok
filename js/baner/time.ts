const time = () => {
    try {

        const elementDay = document.querySelector('#day');
        const elementHours = document.querySelector('#hours');
        const elementMinute = document.querySelector('#minute');
        const elementSeconds = document.querySelector('#seconds');

        function timeOnDisplay() {
            if(elementDay && elementHours && elementMinute && elementSeconds) {
                
                const date: Date = new Date();
                const lastWeekDate: Date = new Date();

                const dayWeek: number = lastWeekDate.getDay();
                const differenceDay: number = 7 - dayWeek;
                lastWeekDate.setDate(lastWeekDate.getDate() + differenceDay);

                const year = lastWeekDate.getFullYear();
                const month = lastWeekDate.getMonth();
                const day = lastWeekDate.getDate();

                const dateSanday = new Date(year, month, day, 0);

                let differenceTime: number = dateSanday.getTime() - date.getTime();

                const msSeconds: number = 1000;
                const msMinute: number = msSeconds * 60;
                const msHours: number = msMinute * 60;
                const msDay: number = msHours * 24;
                
                const leftDay: number = Math.floor( differenceTime / msDay );
                differenceTime = differenceTime - leftDay * msDay;
                const leftHours: number = Math.floor( differenceTime / msHours );
                differenceTime = differenceTime - leftHours * msHours;
                const leftMinute: number = Math.floor( differenceTime / msMinute ); 
                differenceTime = differenceTime - leftMinute * msMinute;
                const leftSeconds: number = Math.floor( differenceTime / msSeconds );

                console.log('Hello',  leftDay, leftHours, leftMinute, leftSeconds);

                elementDay.textContent =  (leftDay + '').padStart(2,'0');
                elementHours.textContent = leftHours + '';
                elementMinute.textContent = leftMinute + '';
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