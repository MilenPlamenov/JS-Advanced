function lockedProfile() {
    let profiles = [...document.getElementsByClassName('profile')];
    profiles.forEach(profile => {
        let btn = document.querySelectorAll('button')[0];

        btn.addEventListener('click', () => {
            let unlocked = profile.querySelectorAll('input')[1].checked;
            let hiddenDiv = profile.querySelectorAll('div')[0];
            if (unlocked) {
                hiddenDiv.style.display = 'block';
                btn.innerHTML = 'Hide it';
            } else {
                hiddenDiv.style.display = 'none';
                btn.innerHTML = 'Show more'
            }
        })
    })
}