const convertToRupiah = (angka, prefix) => {
    var numbString  = angka.replace(/[^,\d]/g, '').toString(),
    split   		= numbString.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    
    return prefix === undefined ? ('Rp ' + ' ' + rupiah) : (prefix + ' ' + rupiah);
}

export default convertToRupiah