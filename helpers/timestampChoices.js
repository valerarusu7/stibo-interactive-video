export const company_choice = function () {
  // 1: 50
  if (this.currentTime >= 108.5) {
    this.pause();
    console.log("intro");
    this.removeEventListener("timeupdate", company_choice);
    setQuestion("companies");
    setShowQuestion(true);
  }
};

export const accelerator_q1_choice = function () {
  // 3:10
  if (this.currentTime >= 188) {
    this.pause();
    console.log("q1");
    this.removeEventListener("timeupdate", accelerator_q1_choice);
    setQuestion("q1");
    setShowQuestion(true);
  }
};
export const q2_choice = function () {
  // 3:25
  if (this.currentTime >= 203) {
    this.pause();
    console.log("q2");
    this.removeEventListener("timeupdate", q2_choice);
    setQuestion("q2");
    setShowQuestion(true);
  }
};

export const q3_choice = function () {
  // 3:41
  if (this.currentTime >= 219) {
    this.pause();
    console.log("q3");
    this.removeEventListener("timeupdate", q3_choice);
    setQuestion("q3");
    setShowQuestion(true);
  }
};

export const q4_choice = function () {
  // 3:56
  if (this.currentTime >= 236) {
    this.pause();
    console.log("q4");
    this.removeEventListener("timeupdate", q4_choice);
    setQuestion("q4");
    setShowQuestion(true);
  }
};
