// DARK MODE
const btn = document.getElementById("darkMode");
btn.onclick = () => {
    document.body.classList.toggle("dark");
};

// VALIDASI FORM
document.getElementById("formKontak").addEventListener("submit", function(e){
    const email = document.getElementById("email").value;

    if(!email.includes("@")){
        alert("Email tidak valid!");
        e.preventDefault();
    } else {
        alert("Form berhasil dikirim!");
    }
});