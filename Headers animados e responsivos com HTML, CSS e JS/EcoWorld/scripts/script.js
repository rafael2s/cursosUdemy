const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];

window.addEventListener('scroll', toggleNavBar, false);

function toggleNavBar() {
    if (window.pageYOffset >= $logo.offsetHeight  && $navBar.classList.contains('abs-pos')) {
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    } else if (window.pageYOffset < $logo.offsetHeight  && $navBar.classList.contains('fix-pos')) {
        $navBar.classList.add('abs-pos');
        $navBar.classList.remove('fix-pos');
    }
}

const $extLink = document.querySelectorAll('.ext-link')[0];
$extLink.addEventListener('click', openLink, false);
function openLink(){
    window.open('https://www.blogger.com/', '_blank');
}

const $intLinks = document.querySelectorAll('.int-link');
const $sectArr = document.querySelectorAll('main section');

$intLinks.forEach(function(cur, idx){
    cur.addEventListener('click', function () {
        window.scrollTo({
            top: $sectArr[idx].offsetTop - $navBar.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }, false);

})