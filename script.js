/*

const ModalWindow = {
    init() {
        document.body.addEventListener("click", e => {
            if (e.target.classList.contains("modal__close")) {
                this.closeModal(e.target);
            }
        });
      
      this.openModal();
    },

    getHtmlTemplate(modalOptions) {
        return `
            <div class="modal__overlay">
                <div class="modal__window">
                    <div class="modal__titlebar">
                        <span class="modal__title">${modalOptions.title}</span>
                        <button class="modal__close material-icons">close</button>
                    </div>
                    <div class="modal__content">
                        ${modalOptions.content}
                    </div>
                </div>
            </div>
        `;
    },

    openModal(modalOptions = {}) {
        modalOptions = Object.assign({
            title: 'Modal Title',
            content: 'Modal Content'
        }, modalOptions);

        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },

    closeModal(closeButton) {
        const modalOverlay = closeButton.parentElement.parentElement.parentElement;
        document.body.removeChild(modalOverlay);
    }
};
*/
const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signned up");
    }
    localStorage.setItem('formData'.JSON.stringify(formData));
    dispData();
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}
