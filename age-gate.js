// Age Gate script to add to Squarespace sites that sell alcohol
// Author: Patrick Tully (patrick@daiquiridigital.com)
// License: MIT
// -----


// on load, execute ageCheck function
window.onload = function(){
    // put the popup at the start of the body
    const body = document.querySelector('body')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = `
                            <div id="age-gate-wrapper" class="">
                                <div id="age-gate-popup">
                                    <img
                                        src="//static1.squarespace.com/static/5d4cbca03a2efd0001e7f3af/t/5d4cf268e800ba0001f22364/1581144738080/?format=1500w"
                                        alt="The Kurrajong Hotel"
                                        class="Mobile-bar-branding-logo"
                                    >
                                    <h2>Are you over the age of 18?</h2>
                                    <div id="age-gate-buttons">
                                        <a href="#" id="age-gate-yes" class="sqs-block-button-element--large sqs-block-button-element">Yes</a>
                                        <a href="#" id="age-gate-no" class="sqs-block-button-element--large sqs-block-button-element">No</a>
                                    </div>
                                </div>
                            </div>
                        `

    body.insertBefore(wrapper, body.firstChild)

    // if cook has not been set
    if(localStorage.getItem("ageVerified") != "true") {
        console.log("not verified")
        // make popup visible
        document.getElementById('age-gate-wrapper').classList.add('ageUnknown')

        // if yes button is clicked
        document.querySelector('#age-gate-yes').addEventListener('click', function(){
            // add cookie
            localStorage.setItem("ageVerified", "true")
            // hide popup
            document.querySelector('#age-gate-wrapper').classList.remove('ageUnknown')
        })
        
        // if no button is clicked
        document.querySelector('#age-gate-no').addEventListener('click', function(){
            // redirect to a different page
            window.location.href ="https://www.google.com/maps/place/The+Kurrajong+Hotel/@-33.9002663,151.1895132,15z/data=!4m5!3m4!1s0x0:0x517d2e5290802d1b!8m2!3d-33.9002663!4d151.1895132"
        })
    }
}