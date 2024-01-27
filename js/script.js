const elSiteHeader = document.querySelector('.site-header')
const elSiteHeaderToggle = document.querySelector('.site-header-button-toggle')

// MODIFIERS
const modifier = {
  siteHeaderToggle: 'js-site-header-open'
}

if(elSiteHeaderToggle) {
  elSiteHeaderToggle.addEventListener('click', function () {
    elSiteHeader.classList.toggle(modifier.siteHeaderToggle)
  })
}