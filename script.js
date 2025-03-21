// پیدا کردن فرم در صفحه و اضافه کردن یک رویداد به دکمه ارسال
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به سرور
    alert("Your message has been sent!"); // نمایش پیام تایید
});
