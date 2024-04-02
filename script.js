// 1ci sual
let arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
function MinMax(arr) {
    function findMax(arr) {
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0 && arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    function findMin(arr) {
        let min = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0 && arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }


    const max = findMax(arr);
    const min = findMin(arr);


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] === max) {
            arr[i] = min;
        } else if (arr[i] % 2 !== 0 && arr[i] === min) {
            arr[i] = max;
        }
    }

    return arr;
}
console.log(MinMax(arr));


// 2-ci sual
let arr2 = [   
     obj1={ urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
     obj2={ urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
     obj3={ urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
     obj4={ urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
     obj5={ urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
     obj6={ urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
     obj7={ urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
     obj8={ urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
     obj9={ urunAdi: "Yoğurt", fiyat:53, stok: 40, kategori: "Süt ve Süt Ürünleri" },
     obj10={ urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
];


const expensiveItems = arr2.filter(item => item.fiyat> 50);

console.log(expensiveItems);

// 3cu sual
function filterItemsByCategory(arr2, category) {
    return arr2.filter(item => item.kategori === category);
}
const meyveVeSebzeler = filterItemsByCategory(arr2, "Meyve ve Sebzeler");

console.log(meyveVeSebzeler);


// 4cu sual
function filterItemsByCategoryStok(arr2, category,stok) {
    return arr2.filter(item => item.kategori === category && item.stok>2);
}
const meyveVeSebzelerStok = filterItemsByCategoryStok(arr2, "Meyve ve Sebzeler");

console.log(meyveVeSebzelerStok);

// 5ci sual
function resultMilk(arr2, ad) {
    return arr2.some(item => item.urunAdi === ad);
}
const hasMilk = resultMilk(arr2, "Süt");
console.log("sut var?", hasMilk);

// 6ci sual
function filterItemsByTonBaligi(arr2, ad) {
    return arr2.filter(item => item.urunAdi === ad );
}
const TonBaligi = filterItemsByTonBaligi(arr2,"Ton Balığı");

console.log(arr2.indexOf(TonBaligi[0]));