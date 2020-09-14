var modal = function (e) {
    var body = document.body;
    var dataModal = e.target.getAttribute('data-modal');

    if (dataModal) {
        var modal = document.getElementById(dataModal);

        var toggleModal = function() {
            var modalState = modal.getAttribute('data-modal-state');
            console.log(modalState);

            if (modalState === 'closed') {
                body.style.overflow = 'hidden';
                modal.setAttribute('data-modal-state', 'opened');
            }
            if (modalState === 'opened') {
                body.style.overflow = 'auto';
                modal.setAttribute('data-modal-state', 'closed');
            }
        }

        var closeModal = function(e) {
            if (e.target.getAttribute('data-modal-close') && e.target.closest('.modal')) {
                toggleModal();

                document.removeEventListener('click', closeModal);
            }
            if (e.target === modal && !e.target.closest('.modal-content')) {
                toggleModal();

                document.removeEventListener('click', closeModal);
            }
        }

        document.addEventListener('click', closeModal);
        
        toggleModal();
    }
};

document.addEventListener('click', modal);
