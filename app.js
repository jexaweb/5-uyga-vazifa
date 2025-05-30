// While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// let n = 18;
// let k = 5;

// let i = n;

// while (i >= k) {
//   i -= k;
// }
// console.log(`qoldiq:${i}`);
// console.log(`butun qismi: ${n - i}`);

// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// let son = 128;
// let darja = 1;
// let counter = 2;

// while (counter < son) {
//   counter += 2 ** darja;
//   darja++;
// }

// if (son == counter) {
//   console.log(darja);
// }

// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// let a = 27;
// let b = 5;
// let natija;

// while (a >= b) {
//   a = a - b;
// }
// natija = a;
// console.log(natija);

// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

// let n = 9;
// let qiymat = 1;
// let daraj = 0;

// while (qiymat < n) {
//   let i = 0;
//   let yangiqimat = 0;
//   while (i < 3) {
//     yangiqimat += qiymat;
//     i++;
//   }
//   qiymat = yangiqimat;
//   daraj++;
// }

// if (n == qiymat) {
//   console.log(`3 - ning darajasi:${daraj}`);
// } else {
//   console.log("3- ning darajasi emas!");
// }

// While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.w

// let n = 18;
// let m = 5;

// let i = n;
// let s = 0;

// while (i >= m) {
//   i -= m;
//   s++;
// }
// console.log(`qoldiq:${i}`);
// console.log(`butun qismi: ${s}`);

// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let son = 3456;
// let sonReverse = 0;

// while (son > 0) {
//   sonReverse = sonReverse * 10 + (son % 10);
//   son = Math.trunc(son / 10);
// }
// console.log(sonReverse);

// While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.

// let n = 29;
// let sonReverse = 0;

// while (n > 0) {
//   sonReverse += n % 10;
//   n = Math.trunc(n / 10);
// }
// console.log(sonReverse);

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.

// let n = 674362;

// while (n > 0) {
//   if (2 == n % 10) {
//     console.log(true);
//     break;
//   } else {
//     console.log(false);
//   }
//   n = Math.trunc(n / 10);
// }

// While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.

// let n = 674362;
// let result;

// while (n > 0) {
//   const i = n % 10;

//   if (i % 2 == 1) {
//     result = true;
//     break;
//   }
//   result = false;
//   n = Math.trunc(n / 10);
// }

// console.log(result);

// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754

// let son = 1345431;
// let copySon = son;
// let sonReverse = 0;

// while (son > 0) {
//   sonReverse = sonReverse * 10 + (son % 10);
//   son = Math.trunc(son / 10);
// }
// console.log(sonReverse == copySon);

// While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin

// let n = 7;
// let boluvchilarSon = 0;
// let i = 1;
// while (i <= n) {
//   if (n % i == 0) {
//     boluvchilarSon++;
//   }
//   i++;
// }
// if (boluvchilarSon == 2) {
//   console.log("tub son");
// } else {
//   console.log("tub emas");
// }

// Case
// Case1. 1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)

// let son = prompt("hafta sonini kiriting:");

// switch (son) {
//   case "1":
//     console.log("Dushanba");
//     break;

//   case "2":
//     console.log("Seshanba");
//     break;
//   case "3":
//     console.log("chorshanba");
//     break;
//   case "4":
//     console.log("payshanba");
//     break;
//   case "5":
//     console.log("juma");
//     break;
//   case "6":
//     console.log("shanba");
//     break;
//   case "7":
//     console.log("yakshanba");
//     break;
// }

// Case2. A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. Amal quyidagi qiymatlarni qabul qiladi: 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.

// let belgi = prompt("belgi");
// const son1 = +prompt("birinchi son");
// const son2 = +prompt("iknchi son son");

// switch (belgi) {
//   case "+":
//     console.log(son1 + son2);
//     break;

//   case "-":
//     console.log(son1 - son2);
//     break;
// }

// Case3. Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)

// let n = 43;
// let natija = "";

// switch (n) {
//   case 20:
//     natija = "yigirma yosh";
//     break;
//   case 21:
//     natija = "yigirma bir yosh";
//     break;
//   case 22:
//     natija = "yigirma ikki yosh";
//     break;
//   case 23:
//     natija = "yigirma uch yosh";
//     break;
//   case 24:
//     natija = "yigirma to‘rt yosh";
//     break;
//   case 25:
//     natija = "yigirma besh yosh";
//     break;
//   case 26:
//     natija = "yigirma olti yosh";
//     break;
//   case 27:
//     natija = "yigirma yetti yosh";
//     break;
//   case 28:
//     natija = "yigirma sakkiz yosh";
//     break;
//   case 29:
//     natija = "yigirma to‘qqiz yosh";
//     break;

//   case 30:
//     natija = "o‘ttiz yosh";
//     break;
//   case 31:
//     natija = "o‘ttiz bir yosh";
//     break;
//   case 32:
//     natija = "o‘ttiz ikki yosh";
//     break;
//   case 33:
//     natija = "o‘ttiz uch yosh";
//     break;
//   case 34:
//     natija = "o‘ttiz to‘rt yosh";
//     break;
//   case 35:
//     natija = "o‘ttiz besh yosh";
//     break;
//   case 36:
//     natija = "o‘ttiz olti yosh";
//     break;
//   case 37:
//     natija = "o‘ttiz yetti yosh";
//     break;
//   case 38:
//     natija = "o‘ttiz sakkiz yosh";
//     break;
//   case 39:
//     natija = "o‘ttiz to‘qqiz yosh";
//     break;

//   case 40:
//     natija = "qirq yosh";
//     break;
//   case 41:
//     natija = "qirq bir yosh";
//     break;
//   case 42:
//     natija = "qirq ikki yosh";
//     break;
//   case 43:
//     natija = "qirq uch yosh";
//     break;
//   case 44:
//     natija = "qirq to‘rt yosh";
//     break;
//   case 45:
//     natija = "qirq besh yosh";
//     break;
//   case 46:
//     natija = "qirq olti yosh";
//     break;
//   case 47:
//     natija = "qirq yetti yosh";
//     break;
//   case 48:
//     natija = "qirq sakkiz yosh";
//     break;
//   case 49:
//     natija = "qirq to‘qqiz yosh";
//     break;

//   case 50:
//     natija = "ellik yosh";
//     break;
//   case 51:
//     natija = "ellik bir yosh";
//     break;
//   case 52:
//     natija = "ellik ikki yosh";
//     break;
//   case 53:
//     natija = "ellik uch yosh";
//     break;
//   case 54:
//     natija = "ellik to‘rt yosh";
//     break;
//   case 55:
//     natija = "ellik besh yosh";
//     break;
//   case 56:
//     natija = "ellik olti yosh";
//     break;
//   case 57:
//     natija = "ellik yetti yosh";
//     break;
//   case 58:
//     natija = "ellik sakkiz yosh";
//     break;
//   case 59:
//     natija = "ellik to‘qqiz yosh";
//     break;

//   case 60:
//     natija = "oltmish yosh";
//     break;
//   case 61:
//     natija = "oltmish bir yosh";
//     break;
//   case 62:
//     natija = "oltmish ikki yosh";
//     break;
//   case 63:
//     natija = "oltmish uch yosh";
//     break;
//   case 64:
//     natija = "oltmish to‘rt yosh";
//     break;
//   case 65:
//     natija = "oltmish besh yosh";
//     break;
//   case 66:
//     natija = "oltmish olti yosh";
//     break;
//   case 67:
//     natija = "oltmish yetti yosh";
//     break;
//   case 68:
//     natija = "oltmish sakkiz yosh";
//     break;
//   case 69:
//     natija = "oltmish to‘qqiz yosh";
//     break;

//   default:
//     natija = "Noto‘g‘ri yosh";
// }

// console.log(natija);

// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// let k = 3;
// let baho = "";

// switch (k) {
//   case 1:
//     baho = "yomon";
//     break;
//   case 2:
//     baho = "qoniqarsiz";
//     break;
//   case 3:
//     baho = "qoniqarli";
//     break;
//   case 4:
//     baho = "yahshi";
//     break;
//   case 5:
//     baho = "a'lo";
//     break;
//   default:
//     baho = "xato";
// }

// console.log(baho);
