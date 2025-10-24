// تفاعل الخلفية مع الماوس
document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.background = `linear-gradient(${x * 360}deg, #89cff0, #ff6666)`;
});

// دالة حساب العمر
function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!birthdate) {
        result.innerHTML = "⚠️ من فضلك أدخل تاريخ ميلادك أولاً!";
        return;
    }

    const birth = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `عمرك هو: <br> <strong>${years}</strong> سنة، <strong>${months}</strong> شهر، و<strong>${days}</strong> يوم 🎉`;
}
