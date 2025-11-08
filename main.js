const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

// عند الضغط على الزر
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});



//=======Backend Of Contaact======//

(function(){
    emailjs.init({
      publicKey: "BiYM53GRPwsNtDuYj" // 🔹 ضع مفتاحك هنا
    });
  })();

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    Swal.fire({
      title: 'جارٍ إرسال الرسالة...',
      text: 'يرجى الانتظار لحظات.',
      background: '#0d1117',
      color: '#ffffff',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      customClass: { popup: 'rounded-2xl shadow-lg border border-[#00ff88]' }
    });

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_gsifmj9", "template_enoz5ra", params)
      .then(() => {
        Swal.fire({
          title: '✅ تم إرسال الرسالة بنجاح!',
          text: 'شكرًا لتواصلك معي، سأرد عليك قريبًا.',
          icon: 'success',
          background: '#0d1117',
          color: '#ffffff',
          confirmButtonColor: '#00ff88',
          customClass: { popup: 'rounded-2xl shadow-lg border border-[#00ff88]' }
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: '❌ حدث خطأ أثناء الإرسال!',
          text: 'يرجى المحاولة لاحقًا.',
          icon: 'error',
          background: '#0d1117',
          color: '#ffffff',
          confirmButtonColor: '#00ff88',
          customClass: { popup: 'rounded-2xl shadow-lg border border-[#00ff88]' }
        });
      });
  });



