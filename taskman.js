let count = 0;  // To keep track of the number of tasks
const submitBtn = document.getElementById("submitBtn");
const timeBtn = document.getElementById("timeBtn");

timeBtn.addEventListener('click', () => {
    const taskInput = document.getElementById("taskInput").value.trim();
    const timeInput = document.getElementById("timeInput").value.trim();  // Get time in seconds

    // Ensure both task and time inputs are filled and valid
    if (taskInput !== "" && timeInput !== "" && !isNaN(timeInput) && timeInput > 0) {
        count += 1;
        const taskText = count + ".) " + taskInput;

        // Reference to the task list div
        const taskList = document.getElementById('taskList');

        // Create a new div element to hold the task
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;

        // Create a countdown span element
        const countdownSpan = document.createElement('span');
        countdownSpan.classList.add('task-countdown');
        countdownSpan.textContent = `(${timeInput}s)`;

        // Append the countdown to the task
        taskItem.appendChild(countdownSpan);
        taskList.appendChild(taskItem);

        // Clear the input fields
        document.getElementById("taskInput").value = "";
        document.getElementById("timeInput").value = "";

        // Countdown logic
        let timeLeft = timeInput;
        const countdownInterval = setInterval(() => {
            timeLeft--;
            countdownSpan.textContent = `(${timeLeft}s)`;

            // If time is up, strike through the task and stop the interval
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                taskItem.classList.add('strikethrough');
                countdownSpan.textContent = "(Time's up)";
            }
        }, 1000);  // Update every 1 second
    }
});
