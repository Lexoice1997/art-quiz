import * as pages from './pagesVariebles';

export default function settings() {
  const checkVolume = document.querySelector('#check-volume'),
        checkTime = document.querySelector('#check-time'),
        progressVolume = document.querySelector('.progress-volume'),
        progressTime = document.querySelector('.progress-time'),
        timeValue = document.querySelector('.time-value'),
        btnSave = document.querySelector('.btn-save'),
        btnDefault = document.querySelector('.btn-default');


  let myStorage = window.localStorage;

  checkVolume.addEventListener('click', (event) => {
    if (event.target.checked) {
      progressVolume.disabled = false;
      myStorage.setItem('volumeOn', 'checked')
    } else {
      progressVolume.disabled = true;
      myStorage.setItem('volumeOn', 'unchecked')
    }
  });

  checkTime.addEventListener('click', (event) => {
    if (event.target.checked) {
      progressTime.disabled = false;
      myStorage.setItem('timeOn', 'checked');
    } else {
      progressTime.disabled = true;
      myStorage.setItem('timeOn', 'unchecked');
    }
  })

  progressTime.addEventListener('change', () => {
    timeValue.textContent = progressTime.value;
  })

  function setLocalStorage() {
    localStorage.setItem('volume', progressVolume.value);
    localStorage.setItem('time', progressTime.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('time')) {
      timeValue.textContent = localStorage.getItem('time');
      progressTime.value = localStorage.getItem('time');
    }

    if(localStorage.getItem('volume')) {
      progressVolume.value = localStorage.getItem('volume')
    }

    if(localStorage.getItem('volumeOn') === 'checked') {
      progressVolume.disabled = false;
      checkVolume.checked = true;
    } else {
      progressVolume.disabled = true;
      checkVolume.checked = false;
    }

    if(localStorage.getItem('timeOn') === 'checked') {
      progressTime.disabled = false;
      checkTime.checked = true;
    } else {
      progressTime.disabled = true;
      checkTime.checked = false;
    }
  }

  window.addEventListener('load', getLocalStorage);

  btnSave.addEventListener('click', () => {
    pages.settingsPage.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  })

  btnDefault.addEventListener('click', () => {
    progressVolume.value = 0.3;
    progressTime.value = 10;
    progressVolume.disabled = true;
    progressTime.disabled = true;
    checkVolume.checked = false;
    checkTime.checked = false;
    timeValue.textContent = '10';

    pages.settingsPage.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  })
}




