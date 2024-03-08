function onClickMe() {
    listInput = []

    MND = document.querySelector('#text_MND')
    PW = document.querySelector('#text_PW')
    if (MND.value === '' || PW.value === '') {
        document.querySelector('#dieu_khien_nhan').innerHTML = '<span class="error">Vui lòng nhập thông tin</span>'
    }
    else {
        listInput.push(MND.value, PW.value)
        console.log(listInput)
        document.querySelector('#dieu_khien_nhan').innerHTML = `<p class="success">${MND.value}</p>` + `<p class="success">${PW.value}</p>`
    }
}