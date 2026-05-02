const alertEle = document.getElementById('alert')
const alertMessageEle = document.getElementById('alertmessage')
let alertCheck = true
const alertCheckEle = document.getElementById('alertCheck')
alertEle.style.opacity = 0;
alertEle.style.display = 'none';

alertCheckEle.addEventListener('click', function() {
    console.log('test')
    if(alertCheckEle.textContent === 'Disable Alerts') {
        alertCheckEle.textContent = 'Enable Alerts'
    } else if (alertCheckEle.textContent === 'Enable Alerts') {
        alertCheckEle.textContent = 'Disable Alerts'
    }

    alertCheck = !alertCheck;
})

export function alertAnim(speed, alertMessage) {
    if(!alertCheck) {return;}
    alertMessageEle.textContent = alertMessage;
    alertEle.style.display = 'block';
    alertEle.animate(
        [

            { opacity: (1) }
        ],
        {
            duration: (1000 * speed),
            iterations: 1,
            easing: 'linear',
            fill: "forwards"

        }
    )
    setTimeout(() => {
        alertEle.animate(
            [
                { opacity: 1 },
                { opacity: 1 }

            ],
            {
                duration: (3000 * speed),

            }

        )
        setTimeout(() => {
            alertEle.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: (1000 * speed),
                    fill: "forwards"
                }

            )



            setTimeout(() => {
                alertEle.style.display = 'none';
            }, 1000);
        }, 2000 * speed);
    }, 2000 * speed);
}