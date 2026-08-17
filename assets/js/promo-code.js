document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("generateBtn");
    const promoCard = document.getElementById("promoCard");
    const promoCode = document.getElementById("promoCode");
    const loading = document.getElementById("loading");

    const oneHour = 60 * 60 * 1000;


    const savedCode = localStorage.getItem("promo_code");
    const savedTime = localStorage.getItem("promo_time");


    // cek promo sebelumnya
    if(savedCode && savedTime){

        const now = Date.now();
        const age = now - Number(savedTime);


        if(age < oneHour){

            // masih cooldown
            promoCode.textContent = savedCode;

            promoCard.classList.remove("hidden");


            btn.disabled = true;
            btn.textContent = "Code Generated";


        } else {

            // sudah lewat 1 jam
            localStorage.removeItem("promo_code");
            localStorage.removeItem("promo_time");


            btn.disabled = false;
            btn.textContent = "Generate Promo Code";

        }

    }



    btn.addEventListener("click", function(){


        // cegah klik saat cooldown
        if(btn.disabled){
            return;
        }


        loading.classList.remove("hidden");

        btn.disabled = true;



        setTimeout(function(){


            const code = "SC-" +
                Math.random()
                .toString(36)
                .substring(2,6)
                .toUpperCase()
                + "-" +
                Math.random()
                .toString(36)
                .substring(2,6)
                .toUpperCase();



            promoCode.textContent = code;


            promoCard.classList.remove("hidden");


            loading.classList.add("hidden");



            // simpan kode
            localStorage.setItem(
                "promo_code",
                code
            );


            // simpan waktu generate
            localStorage.setItem(
                "promo_time",
                Date.now()
            );



            btn.textContent = "Code Generated";


        },1000);


    });


});