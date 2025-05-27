// ფუნქცია სექციის ჩვენებისთვის და მენიუს აქტიური ღილაკის მართვა
function showSection(sectionId, btn) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // მენიუდან ყველა ღილაკის active კლასი ამოვშალოთ
    const buttons = document.querySelectorAll('nav button.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // აქტიური ღილაკი აღნიშნულ კლასს დავუმატოთ
    if (btn) {
        btn.classList.add('active');
    }
}

// Dark Mode გადართვა
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // ღილაკის ტექსტის შეცვლა
    if(document.body.classList.contains('dark-mode')){
        darkModeToggle.textContent = 'Light Mode an/aus';
    } else {
        darkModeToggle.textContent = 'Dark Mode an/aus';
    }
});
