//You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, where status can be `"passed"`, `"failed"`, or `"skipped"`. 
// Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

//Input:
//results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
//Output:
//  Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form
function generatePlaywrightSummary(results) {
    const totalSteps = results.length;
    const passedCount = results.filter(result => result.status === "passed").length;
    const failedCount = results.filter(result => result.status === "failed").length;
    const skippedCount = results.filter(result => result.status === "skipped").length;
    const totalDuration = results.reduce((sum, result) => sum + result.durationMs, 0);
    const failedSteps = results.filter(result => result.status === "failed").map(result => result.name).join(", ");

    console.log(`Total Steps: ${totalSteps} Passed: ${passedCount} Failed: ${failedCount} Skipped: ${skippedCount} Total Duration: ${totalDuration}ms Failed Steps: ${failedSteps}`);
}

// Example usage:
const results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }
];

generatePlaywrightSummary(results); 