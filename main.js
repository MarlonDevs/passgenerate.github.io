function getPassword(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++){
        let ramdonNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(ramdonNumber,ramdonNumber + 1);
    }

    document.getElementById('password'). value = password;
}


const button = document.querySelector('i.fa-copy');
const input = document.querySelector('.clipboard');

button.addEventListener('click',function(){
    input.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    swal.fire({
        icon: 'success',
        title: 'Copied',
        width: '25%',
        timer: '1500',
        position: 'top',
        toast: 'true',
        customClass:{
            popup: 'popup-class',
        },
        showConfirmButton: false,
        
    });
})