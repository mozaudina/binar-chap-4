function PilihanCom() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'combatu';
    if( comp >= 0.34 && comp < 0.67 ) return 'comkertas';
    return 'comgunting'
}

function playHasil(comp, player) {
    if( player == comp ) return 'DRAW';
    if( player == 'playerbatu' ) return ( comp == 'comkertas') ? 'COM WIN' : 'PLAYER 1 WIN';
    if( player == 'playerkertas' ) return ( comp == 'combatu' ) ? 'PLAYER 1 WIN' : 'COM WIN';
    if( player == 'playergunting') return ( comp == 'comkertas') ? 'PLAYER 1 WIN' : 'COM WIN';
}

const PlayerBatu = document.querySelector('.playerbatu');
PlayerBatu.addEventListener('click', function() {
    const PilihanComputer = PilihanCom();
    const PilihanPlayer = PlayerBatu.className;
    const Hasil = playHasil(PilihanComputer, PilihanPlayer);

    const info = document.querySelector('.info');
    info.innerHTML = Hasil;
});


const PlayerKertas = document.querySelector('.playerkertas');
PlayerKertas.addEventListener('click', function() {
    const PilihanComputer = PilihanCom();
    const PilihanPlayer = PlayerKertas.className;
    const Hasil = playHasil(PilihanComputer, PilihanPlayer);

    const info = document.querySelector('.info');
    info.innerHTML = Hasil;
});


const PlayerGunting = document.querySelector('.playergunting');
PlayerGunting.addEventListener('click', function() {
    const PilihanComputer = PilihanCom();
    const PilihanPlayer = PlayerGunting.className;
    const Hasil = playHasil(PilihanComputer, PilihanPlayer);

    const info = document.querySelector('.info');
    info.innerHTML = Hasil;
});