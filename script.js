const wakeup_time = document.getElementById("wakeup-time");
const study_time = document.getElementById("study-time");
const skill_time = document.getElementById("skill-time");
const screen_time = document.getElementById("screen-time");
const exercise = document.getElementById("exercise");
const sleep_time = document.getElementById("sleep-time");
const sub_btn = document.getElementById("submit-btn");
const inputfield_div = document.getElementById("inputfield-div");
const score_text = document.getElementById("score-text");
let total_score = 0;
sub_btn.addEventListener("click", () => {
  let wakeupTime = wakeup_time.value;
  if (wakeupTime < 8) {
    total_score += 10;
  }
  let studyTime = study_time.value;
  if (studyTime > 4) {
    total_score += 20;
  }
  let skilTime = skill_time.value;
  if (skilTime > 2) {
    total_score += 15;
  }
  let screenTime = screen_time.value;
  if (screenTime < 3) {
    total_score += 20;
  }
  let exerciseTime = exercise.value;
  if (exerciseTime === "yes") {
    total_score += 10;
  }
  let sleepTime = sleep_time.value;
  if (sleepTime > 5) {
    total_score += 15;
  }
  console.log(total_score);
  closeModal();
});
let closeModal = () => {
  inputfield_div.style.display = "none";
  score_text.innerText = total_score;
};
