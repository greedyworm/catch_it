const bet = document.getElementById('taruhan'),
    pasang = document.getElementById('pasang-id'),
    besar = document.getElementById('besar'),
    kecil = document.getElementById('kecil'),
    main = document.getElementById('play'),
    topUp = document.getElementById('topup'),
    dice1 = document.getElementById('dadu1'),
    dice2 = document.getElementById('dadu2'),
    hasil = document.getElementById('hasil'),
    layar = document.getElementById('layar')

let uang = document.getElementById('coins').innerHTML

    let jumlah = 0
    let coinsNow = 500
let tombok = pasang.addEventListener('click', () => {
    jumlah = parseInt(bet.value)
    if (jumlah <= coinsNow) {
        main.disabled = false
    } else{
        alert("Uangmu tidak cukup!, kurangi taruhanmu")
        main.disabled = true
    }
    return
})

let milih = ''
let pilihBesar = besar.addEventListener('click', () => {
    milih = "BESAR!"
    jumlah > coinsNow? alert("Uangmu tidak cukup!, kurangi taruhanmu") : main.disabled = false
})

let pilihKecil = kecil.addEventListener('click', () => {
    milih = "KECIL!"
    jumlah > coinsNow?  alert("Uangmu tidak cukup, kurangi taruhanmu") : main.disabled = false  
})

let mulai = main.addEventListener('click', kocok)

function kocok() {
    let number = [1, 2, 3, 4, 5, 6]
    let randomNumber1 = number[Math.floor(Math.random()*number.length)];
    let randomNumber2 = number[Math.floor(Math.random()*number.length)];

    dice1.innerHTML = randomNumber1
    dice2.innerHTML = randomNumber2

    let hasilRandom = randomNumber1 + randomNumber2;
    hasilRandom > 6 ? hasil.innerHTML = "BESAR!" : hasil.innerHTML = "KECIL!"
    
    result()
    main.disabled = true
    return
}

function result() {
    if (milih === hasil.innerHTML) {
        
        layar.innerHTML = `Selamat !! anda mendapatkan 2X lipat taruhanmu, sebesar $${jumlah*2}`
        let duit = coinsNow + jumlah*2
        coinsNow = duit    
        document.getElementById('coins').innerHTML = duit
        console.log(coinsNow);

    }else{
        layar.innerHTML = `Yahhh, dikit lagi yok!`
        let duit = coinsNow - jumlah
        coinsNow = duit 
        document.getElementById('coins').innerHTML = duit
        console.log(coinsNow);
    }
}




