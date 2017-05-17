const date = {
    "2014": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
    ],
    "2015": [
        1,
        2,
        3,
        9,
        10,
        11,
        12
    ],
    "2016": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
    ]
}

class DateTimeChoiceComponent {
    constructor(container) {
        this.container = $(`#${container}`);
    }

    render(date) {
        let years = Object
                .keys(date)
                .map(y => + y),
            yearIndex = years.length - 1,
            month = date[years[yearIndex]],
            monthIndex = month.length - 1;

        const $html = this
                .container
                .html(`
            <a href="javascript:;" class="arrow year-prov ${years.length > 1
                    ? ""
                    : " arrow-disable"}"><</a>
            <span class="current-year">${years[yearIndex]}年</span>
            <a href="javascript:;" class="arrow year-next arrow-disable">></a>

            <a href="javascript:;" class="arrow month-prov ${month.length > 1
                        ? ""
                        : " arrow-disable"}"><</a>
            <span class="current-month">${month[monthIndex]}月</span>
            <a href="javascript:;" class="arrow month-next arrow-disable">></a>
        `),
            setValue = (className) => {
                let $ele = $html.find(className);
                return (value) => {
                    $ele.text(value);
                }
            },
            getYear = (provOrNext) => {
                return () => {
                    if (provOrNext === true) {
                        if (yearIndex > 0) {
                            yearIndex--;
                        }
                    } else {
                        if (yearIndex < years.length - 1) {
                            yearIndex++;
                        }
                    }
                    month = date[years[yearIndex]];
                    return years[yearIndex];
                }
            },
            getMonth = (provOrNext) => {
                return () => {
                    if (provOrNext === true) {
                        if (monthIndex > 0) {
                            monthIndex--;
                        }
                    } else {
                        if (monthIndex < month.length - 1) {
                            monthIndex++;
                        }
                    }
                    return month[monthIndex];
                }
            },
            setYear = setValue('span.current-year'),
            setMonth = setValue('span.current-month'),
            getProvYear = getYear(true),
            getNextYear = getYear(false),
            getProvMonth = getMonth(true),
            getNextMonth = getMonth(false),
            yearProv = $html
                .find('a.year-prov')
                .on('click', () => {
                    if (yearProv.hasClass('arrow-disable')) 
                        return;
                    const _year = getProvYear();
                    setYear(`${_year}年`);
                    if (_year === years[0]) {
                        yearProv.addClass('arrow-disable');
                    } else {
                        yearNext.removeClass('arrow-disable');
                    }

                }),
            yearNext = $html
                .find('a.year-next')
                .on('click', () => {
                    if (yearNext.hasClass('arrow-disable')) 
                        return;
                    const _year = getNextYear();
                    setYear(`${_year}年`);
                    if (_year === years[years.length - 1]) {
                        yearNext.addClass('arrow-disable');
                    } else {
                        yearProv.removeClass('arrow-disable');
                    }

                }),
            monthProv = $html
                .find('a.month-prov')
                .on('click', () => {
                    if (monthProv.hasClass('arrow-disable')) 
                        return;
                    const _month = getProvMonth();
                    setMonth(`${_month}月`);
                    if (_month === month[0]) {
                        monthProv.addClass('arrow-disable');
                    } else {
                        monthNext.removeClass('arrow-disable');
                    }
                }),
            monthNext = $html
                .find('a.month-next')
                .on('click', () => {
                    if (monthNext.hasClass('arrow-disable')) 
                        return;
                    const _month = getNextMonth();
                    setMonth(`${_month}月`);
                    if (_month === month[month.length - 1]) {
                        monthNext.addClass('arrow-disable');
                    } else {
                        monthProv.removeClass('arrow-disable');
                    }
                });

    }
}

const datetime = new DateTimeChoiceComponent('container');

datetime.render(date);