let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let numDash = count + " - "
    saveEl.textContent += numDash
    count = 0
    countEl.textContent = count
} 