export function startMessage(message, delay) {
	setInterval(function () {console.log(message, new Date().toLocaleTimeString())}, delay)
}

export function getCookie(cname) {
	let name = cname + "="
	let decodedCookie = decodeURIComponent(document.cookie)
	let ca = decodedCookie.split(';')
	
	for(let i = 0; i <ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export function updateCookie(cname, cvalue) {
	document.cookie = cname + '=' + cvalue + ';'
}

export function setCookie(cname) {
	var cvalue = parseInt(getCookie(cname))

	if(cvalue === '') {
		updateCookie(cname, 0)
	} else {
		updateCookie(cname, cvalue + 1)
	}
}

export function resetCookie(cname) {
	updateCookie(cname, 0)
}
