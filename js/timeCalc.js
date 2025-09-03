 document.addEventListener("DOMContentLoaded", function () {
        updateTime();
        setInterval(updateTime, 1000);
    });

    function updateTime() {
        const timeData = getTimeWithGMTOffset();
    }

    function getTimeWithGMTOffset() {
        const now = new Date();

        // 시:분
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");

        // 타임존 오프셋 (분 단위 → 시간 단위)
        const offsetMinutes = now.getTimezoneOffset();
        const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
        const offsetMins = Math.abs(offsetMinutes) % 60;
        const sign = offsetMinutes <= 0 ? "+" : "-";

        // GMT+9 또는 GMT+5:30 같은 포맷 지원
        if(timeBox){
            timeBox.textContent = `${hours}:${minutes} GMT${sign}${offsetHours}${offsetMins ? ":" + offsetMins.toString().padStart(2, "0") : ""}`;
        }
    }