const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    timeElement.textContent = `Current time in ms: ${Date.now()}`;
}

updateTime();
setInterval(updateTime, 1000);