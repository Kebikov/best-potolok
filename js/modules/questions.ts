import { type } from "os";

export default function questions () {
    try {
        const boxQuestions = document.querySelector('.box-questions') as HTMLDivElement;
        if(boxQuestions) {
            type Questions = {
                [key: string]: string
            }

            const arrQuestions: Array<Questions> = [
                {question:'Как заказать натяжной потолок?',answer:'Оставить заявку на сайте или позвонить по номеру +375 (29) 522-22-82.'},
                {question:'Что необходимо для расчета стоимости монтажа натяжного потолка?',answer:'Необходимо знать площадь помещения,  его длину и ширину (хотя бы примерно), а так же количество светильников.'},
                {question:'Как осуществляется расчет за выполненную работу по монтажу натяжного потолка?',answer:'Расчет осуществляется после монтажа натяжного потолка и полной приемки заказчиком.'},
                {question:'На какую высоту опустится натяжной потолок?',answer:'Минимальный отпуск натяжного потолка относительно чернового составляет 5 см. Также следует учитывать высоту конструкций для монтажа люстры и светильников, а также тип и состояние стен. Окончательный вердикт сможет дать мастер, выполняющий замер.'},
                {question:'Как ухаживать за натяжным потолком?',answer:'Для ухода за натяжным потолком подходят жидкие моющие средства без красителей на спиртовой основе, например средства для мытья окон. Протирать рекомендуется мягкой салфеткой из микрофибры.'},
                {question:'Что устанавливать раньше: шкаф-купе или натяжной потолок?',answer:'Технологически желательно сразу установить шкаф-купе, предусмотрев в нем сверху фальш-панель, к которой впоследствии будет прикреплен профиль натяжного потолка.<br>Однако возможна установка шкафа-купе и после монтажа натяжного потолка. В данном случае необходимо сообщить мастеру о планируемом месте будущего шкафа-купе и тогда над натяжным потолком будет установлена закладная к которой и будет произведен монтаж шкафа.'},
                {question:'На каком этапе ремонта установить натяжной потолок?',answer:'В идеале натяжной потолок следует устанавливать, когда закончены все работы, связанные с пылью, и стены подготовлены под покраску или оклейку обоями.'},
                {question:'Имеет ли потолок запах и как долго он выветривается?',answer:'Как любой новый предмет, находящийся в помещении, натяжной потолок непосредственно после монтажа может иметь запах, который, как правило, выветривается в течение нескольких дней.'},
                {question:'Будут ли на натяжном потолке швы?',answer:'На сегодняшний день без швов возможно установить натяжной потолок шириной до шести метров. Отличным выходом в случае ширины помещения более 6 метров станет двухуровневый потолок.'},
                {question:'Что делать, если затопили сверху?',answer:'В критических случаях основной объем воды можно удалить самостоятельно. Но лучше сразу обратиться к специалистам, в любом случае после удаления воды потолок рекомендуется просушить тепловой пушкой.'},
                {question:'Какие светильники подойдут для натяжного потолка?',answer:'Для установки с натяжным потолком не существует каких-либо ограничений для встраиваемых светильников - подойдет большинство.'},
                {question:'В какие сроки может быть установлен натяжной потолок и сколько времени займет его монтаж?',answer:'По желанию заказчика потолок может быть установлен на следующий после замера день. Время монтажа зависит от специфических особенностей заказа: количества светильников, труб, углов, материала стен, наличия в помещении мебели. Как правило, монтаж натяжного потолка в комнате 10 м.кв. с одной люстрой (светильником) занимает порядка четырех часов.'},
                {question:'Чего боятся натяжные потолки?',answer:'Не следует касаться полотна натяжного потолка острыми предметами, существует опасность его проколоть. В случае воздействия высоких температур(от +70 <sup>о</sup>С) потолок может расплавиться (даже от неправильно подобранной лампочки накаливания). В случае отрицательных температур(ниже -10 <sup>о</sup>С) полотно натяжного потолка становится хрупким и подверженным растрескиванию при механическом воздействии.'},
                {question:'Какой срок эксплуатации натяжного потолка?',answer:'Гарантия на монтажные работы составляет один год, на применяемые полотна производитель дает гарантию 25 лет. На практике большую роль играет именно профессионализм монтажа и качество комплектующих, что соответственно влияет и на цену работ.'},
                {question:'Может ли осесть пыль на потолке?',answer:'Натяжной потолок обладает антистатичным покрытием, поэтому пыль на нем не оседает.'},
                {question:'Можно ли установить на потолок какие-либо навесные спортивные снаряды?',answer:'В натяжной потолок можно монтировать любые тяжёлые конструкции, путем предварительного монтажа соответствующих закладных.'},
                {question:'Может ли появляться конденсат между натяжным и обычным потолком?',answer:'Все это исключено, так как температура полотна точно такая же, как и в комнате. Нет резких перепадов, поэтому конденсат отсутствует.'},
                {question:'Как необходимо подготовить помещение перед приездом монтажников?',answer:'Комнату, где будет производиться монтаж натяжного потолка, рекомендуется максимально освободить от мебели, полы желательно закрыть картоном. Если такой возможности нет, то как минимум изолировать (накрыть) предметы, у которых существует вероятность повреждения высокой температурой, и создать доступ к стенам помещения.'}
            ];

            //* fn вставки кода с вопросами
            function insertQuestionHtml () {
                arrQuestions.forEach(item => {
                    boxQuestions.insertAdjacentHTML('beforeend',`
                    <div class="questions">
                        <div class="questions__body">
                            <div class="questions__title"><span>${item.question}</span></div>
                            <div class="questions__info">
                                <div class="questions__text">${item.answer}</div>
                            </div>
                        </div>
                    </div>
                    `);
                });
                const last = boxQuestions.lastElementChild as HTMLDivElement;
                const lostTitle = last.querySelector('.questions__title') as HTMLDivElement;
                lostTitle.classList.add('_after-not');
            }

            insertQuestionHtml();
            const questionsTitleAll = boxQuestions.querySelectorAll('.questions__title');

            function allClose () {
                const bodyAll = document.querySelectorAll('.questions__body');
                bodyAll.forEach(item => {
                    const info = item.querySelector('.questions__info') as HTMLDivElement;
                    const text = item.querySelector('.questions__text') as HTMLDivElement;
                    const title = item.querySelector('.questions__title') as HTMLDivElement;

                    info.style.height = '0px';
                    text.style.opacity = '0%';
                    item.classList.remove('_questions-white');
                    title.classList.remove('_questions-text');
                });
            }

            questionsTitleAll.forEach(item => {
                item.addEventListener('click', (event) => {
                    console.log(event.target);
                    if(event.target instanceof  HTMLDivElement || event.target instanceof  HTMLSpanElement) {
                        allClose();
                        const parent = event.target.closest('.questions__body') as HTMLDivElement;
                        const title = parent.querySelector('.questions__title') as HTMLDivElement;
                        const info = parent.querySelector('.questions__info') as HTMLDivElement;
                        const text = parent.querySelector('.questions__text')as HTMLDivElement;

                        function close() {
                            info.style.height = '0px';
                            text.style.opacity = '0%'; 
                        }

                        if(getComputedStyle(info).height === '0px') {
                            let hi = text.offsetHeight;
                            info.style.height = hi + 'px';
                            setTimeout(() => {
                                text.style.opacity = '100%';
                            }, 100);
                            parent.classList.add('_questions-white');
                            title.classList.add('_questions-text');
                            
                        }else {
                            close();
                            parent.classList.remove('_questions-white');
                            title.classList.remove('_questions-text');
                        }
                    }
                });
            });
        }
    } catch (error) {
        console.log('',error);
    }
}