const time = () => {
    try {

        const leaveOnlyTwoSign = (element: HTMLDivElement, value: number): void => {
            if(element && value) {
                element.textContent =  (value + '').padStart(2,'0');
            }
        }

        const elementDay = document.querySelector('#day') as HTMLDivElement;
        const elementHours = document.querySelector('#hours') as HTMLDivElement;
        const elementMinute = document.querySelector('#minute') as HTMLDivElement;
        const elementSeconds = document.querySelector('#seconds') as HTMLDivElement;
        const elementDateDo = document.querySelector('#dateDo') as HTMLDivElement;

        function timeOnDisplay(): void {
            if(elementDay && elementHours && elementMinute && elementSeconds && elementDateDo) {

                const date: Date = new Date();
                const lastWeekDate: Date = new Date();
        
                let dayWeek: number = lastWeekDate.getDay();

                dayWeek = dayWeek === 0 ? 7 : dayWeek;
                // если воскресенье, а оно равно 0, меняем на 7

                const differenceDay: number = 8 - dayWeek;
                lastWeekDate.setDate(lastWeekDate.getDate() + differenceDay);
        
                const year: number = lastWeekDate.getFullYear();
                const month: number = lastWeekDate.getMonth();
                const day: number = lastWeekDate.getDate();
        
                elementDateDo.textContent = `до ${(day + '').padStart(2,'0')}/${((month + 1) + '').padStart(2,'0')}/${year}`;
        
                const msSeconds: number = 1000;
                const msMinute: number = msSeconds * 60;
                const msHours: number = msMinute * 60;
                const msDay: number = msHours * 24;

                const dateSanday = new Date(year, month, day, 0);
                
                let differenceTime: number = dateSanday.getTime() - date.getTime();

                const calculationBalance = (msInItem: number): number => {
                    const balance: number = Math.floor( differenceTime / msInItem );
                    differenceTime = differenceTime - balance * msInItem;
                    return balance;
                }

                const howManyDays: number = calculationBalance(msDay);
                const howManyHours: number = calculationBalance(msHours);
                const howManyMinutes: number = calculationBalance(msMinute); 
                const howManySeconds: number = calculationBalance(msSeconds);

                leaveOnlyTwoSign(elementDay, howManyDays);
                leaveOnlyTwoSign(elementHours, howManyHours);
                leaveOnlyTwoSign(elementMinute, howManyMinutes);
                leaveOnlyTwoSign(elementSeconds, howManySeconds);

                timeStart();
            }
        }
        
        function timeStart(): void {
            setTimeout(timeOnDisplay, 1000);
        }

        if(elementDay) {
            timeStart();
        }
        
    } catch (error) {
        console.error('Error in fnc time >>> ', error);
    }
}

export default time;