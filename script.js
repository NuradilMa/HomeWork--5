const table = document.getElementById('age-table')

/* task-2 */
const label = document.querySelectorAll('#age-table label')

/* task-3 */
table.getElementsByTagName('td')[0]

/* task-4 */
let form = document.getElementsByName('search')[0]

/* task-5 */
const input = document.getElementsByTagName('input')[0]

/* task-6 */
let lastInput = form.querySelectorAll('input')
lastInput[lastInput.length-1]

/* LAST */
let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); // что выведет? => BODY
