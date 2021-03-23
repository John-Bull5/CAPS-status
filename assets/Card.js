export default class CardGenerator {
    constructor(selector = '.card', school, course, status = 'Not Admitted'){
        this.cardElem = document.querySelector(selector);
        this.school = school;
        this.course = course;
        this.status = status;
        this.createCardElements();
    }

    createCardElements() {
        const headerElem = document.querySelector('.header');
        this.descrElem = document.createElement('div');
        this.Elem = document.createElement('div');
        this.schoolElem = document.createElement('div');
        const courseElem = document.createElement('p');
        
        this.cardElem.appendChild(this.schoolElem);
        this.cardElem.appendChild(courseElem);
        this.createInfoElements();
    }


    createInfoElements() {
        this.schoolElem.innerHTML = 'Choose your School';
        this.schoolElem.innerHTML = 'Choose your Course';
        const submitBtn = document.createElement('button');

        this.setUpEventListener(submitBtn);
    }

    setUpEventListener(button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (!this.currentAudio) {
                this.createVisulizer();
            }
            const isCurrentAudio = audioItem.getAttribute('href') === (this.currentAudio && this.currentAudio.getAttribute('href'));

            if (isCurrentAudio && !this.audioElem.paused) {
                this.setPlayIcon(this.currentAudio);
                this.audioElem.pause();
                this.songImage.classList.remove('rotate');
            } else if (isCurrentAudio && this.audioElem.paused) {
                this.setPauseIcon(this.currentAudio);
                this.audioElem.play();
                this.songImage.classList.add('rotate');
            } else {
                if (this.currentAudio) {
                    this.setPlayIcon(this.currentAudio);
                }
                this.currentAudio = audioItem;
                this.setPauseIcon(this.currentAudio)
                this.audioElem.src = this.currentAudio.getAttribute('href');
                this.audioElem.play();
                this.songImage.classList.add('rotate');
            }
        });
    }

    setPlayIcon(elem) {
        const icon = elem.querySelector('i');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }

    setPauseIcon(elem) {
        const icon = elem.querySelector('i');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }

}