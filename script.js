function calculateAge() {
  const dob = document.getElementById("dob").value;
  const month = document.getElementById("month").value - 1; // JavaScript months are zero-based
  const year = document.getElementById("year").value;

  const today = new Date();
  const birthDate = new Date(year, month, dob);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  let ageMonths = m;
  let ageDays = today.getDate() - birthDate.getDate();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    ageYears--;
    ageMonths = 12 - Math.abs(m);
  }

  if (ageDays < 0) {
    const prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays = prevMonthLastDay - birthDate.getDate() + today.getDate();
    ageMonths--;
  }

  document.getElementById(
    "result"
  ).textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
