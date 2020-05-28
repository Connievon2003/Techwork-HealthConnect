//today calendar
dycalendar.draw({
     target: '#dycalendar-today'
});

//month calendar
dycalendar.draw({
     target: '#dycalendar-month',
     type: 'month'
});

//day calendar
dycalendar.draw({
     target: '#dycalendar-day',
     type : "day",
     date : 21,
     month : 9,
     year : 1990,
     highlighttargetdate : true
});

//today calendar - with skin
dycalendar.draw({
     target: '#dycalendar-today-with-skin',
     type: 'day',
     dayformat: "ddd",
     monthformat: "mmm"
});

//today calendar - with skin and shadow
dycalendar.draw({
     target: '#dycalendar-today-with-skin-shadow',
     type: 'day',
     dayformat: "full",
     monthformat: "full"
});

//month calendar - default current month - with skin
dycalendar.draw({
     target: '#dycalendar-month-with-skin',
     type: 'month',
     highlighttoday: true,
     monthformat: "mmm"
});

//month calendar - with skin and shadow
dycalendar.draw({
     target: '#dycalendar-month-with-skin-shadow',
     type: 'month',
     month: 9,
     year: 1990,
     date: 21,
     monthformat: "full",
     highlighttargetdate : true
});

//month calendar - with skin and shadow - target class
dycalendar.draw({
     target: '.dycalendar-month',
     type: 'month',
     monthformat: "full",
     highlighttargetdate : true
});


//month calendar prev-next-button - target class
dycalendar.draw({
     target: '#dycalendar-month-prev-next-button',
     type: 'month',
     prevnextbutton : "show"
});

//month calendar prev-next-button - target class
dycalendar.draw({
     target: '.dycalendar-month-prev-next-button',
     type: 'month',
     monthformat: "full",
     highlighttargetdate : true,
     prevnextbutton : "show"
});
