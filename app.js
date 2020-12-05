//Day 1
let data = [1438,
  781,
  1917,
  1371,
  1336,
  1802,
  1566,
  1878,
  737,
  1998,
  1488,
  1372,
  1715,
  1585,
  1676,
  1810,
  1692,
  1329,
  1916,
  1854,
  1307,
  1347,
  1445,
  1475,
  1435,
  1270,
  1949,
  1957,
  1602,
  1931,
  1505,
  1636,
  1539,
  1803,
  1011,
  1821,
  1021,
  1461,
  1755,
  1332,
  1576,
  1923,
  1899,
  1574,
  1641,
  1357,
  1509,
  1877,
  1875,
  1228,
  1725,
  1808,
  1678,
  1789,
  1719,
  1691,
  1434,
  1538,
  2002,
  1569,
  1403,
  1146,
  1623,
  1328,
  1876,
  520,
  1930,
  1633,
  1990,
  1330,
  1402,
  1880,
  1984,
  1938,
  1898,
  1908,
  1661,
  1335,
  1424,
  1833,
  1731,
  1568,
  1659,
  1554,
  1323,
  1344,
  1999,
  1716,
  1851,
  1313,
  1531,
  190,
  1834,
  1592,
  1890,
  1649,
  1430,
  1599,
  869,
  1460,
  1009,
  1771,
  1818,
  1853,
  1544,
  1279,
  1997,
  1896,
  1272,
  1772,
  1375,
  1373,
  1689,
  1249,
  1840,
  1528,
  1749,
  1364,
  1670,
  1361,
  1408,
  1828,
  1864,
  1826,
  1499,
  1507,
  336,
  1532,
  1349,
  1519,
  1437,
  1720,
  1817,
  1920,
  1388,
  1288,
  1290,
  1823,
  1690,
  1331,
  1564,
  1660,
  1598,
  1479,
  1673,
  1553,
  1991,
  66,
  1571,
  1453,
  1398,
  1814,
  1679,
  1652,
  1687,
  1951,
  1334,
  1319,
  1605,
  1757,
  1517,
  1724,
  2008,
  1601,
  1909,
  1286,
  1780,
  1901,
  1961,
  1798,
  1628,
  1831,
  1277,
  1297,
  1744,
  1946,
  1407,
  1856,
  1922,
  1476,
  1836,
  1240,
  1591,
  1572,
  2000,
  1813,
  1695,
  1723,
  1238,
  1588,
  1881,
  1850,
  1298,
  1411,
  1496,
  744,
  1477,
  1459,
  1333,
  1902]
//find 2 numbers that equal 2020 then multiply and return
function findTwo(nums){
  let dict = {}
  let out;
  nums.forEach(n => {
    dict[2020-n] = n
    // console.log(n)
    if(dict[n]){
     out = n * (2020-n)
    }
  });
  return out
}

// console.log(findTwo(data))

//find 3 numbers that equal 2020 then multiply and return
function findThree( nums){
  let out;
  let dict = {}
  nums.forEach(n => {
    for(var key in dict){
      dict[key] = dict[key] - n
    }
    // console.log(n)
    if(dict[n]){
     out = n * (2020-n)
    }
  });
  return dict
}



//Day 2

let data2 =  `13-15 c: cqbhncccjsncqcc
2-3 v: zvdvfd
9-14 b: rbrbnbbbqdfrht
11-12 k: kkkkkkkkkkxqk
4-5 b: bqbbdm
10-12 w: kwwkwwwrwzzwwwwzwswx
1-11 g: grrmgmqgghw
4-5 m: mbmhmvmwdvxmvpw
1-13 n: ndnnnnnnnnnns
11-18 l: lllllllllllllllllll
4-5 c: cccscc
2-4 k: bkfr
9-13 k: lcmsvkknrxtkkksgvkjg
1-2 b: bhwgb
1-4 j: zjjcjj
7-11 g: nnffggdmggr
3-4 z: zzhzz
4-10 g: mggkgvgggmggkggmqg
4-5 n: dcmnl
11-15 s: gzpdvsmnzsshswzs
10-14 x: xmvpxjtlxxhxtpdhsnx
5-15 v: zzhjdpgxlsvphzv
4-8 k: dsfktqchpkk
6-7 j: jzjgjqld
12-16 r: rrrrrrrrrrrhrrrrhrr
1-2 l: lllllll
2-3 q: jqxwtggmgqmzpljdvkt
8-11 p: xpmcppppwvzp
7-8 c: vwcvkcct
4-10 d: lsmdffzdsrk
2-3 p: sxpg
4-11 p: rzlgxshhpbp
1-4 b: qbbbbbbbbbbb
6-11 m: zwmzmmlbmxgphkks
1-4 n: lnnnn
15-16 h: hhbdmbhchhhkhhrw
10-11 k: kkkqtwkkkkkkkkn
2-13 m: mggmmxmrzmwglbmmm
12-14 g: ggggrggggxgwhggggd
7-11 l: llbqsqlkvll
1-3 f: ffff
4-9 h: qvnhvcmpmfdbqhkdsg
3-8 d: ddsdddddd
14-15 j: qjjjzjjjjjbxmjs
3-5 j: jjjjtctjjjs
12-13 q: qqqqqqqqqqqqgqqq
1-8 p: xpppzdpp
13-15 f: lnlnlkcwgnfqgmfhlwm
12-17 g: gfgtgrvcxggggtggjg
6-8 r: rrrrtwrqrrr
9-12 r: ctldssjlrzhvpmqrtxd
1-6 k: qkkkdkkkkkk
17-18 x: bxrxxbxxzpbxnqxcsmn
2-4 c: ccmr
1-7 m: mmmmfrdmmmhl
9-12 d: ddddddddxddhd
13-14 f: ffffffffjffbbff
4-6 c: ccchcc
6-7 r: rrsrrrrcrrjbrrrr
9-15 w: wzfbtqrwwgtmbxn
6-7 q: qqqqqqrq
1-7 l: lgpqzhlkb
6-8 d: dhddkndp
2-5 m: bjxmmmmm
5-16 t: nbgjntfhpwtbrcftxt
5-7 k: kkkkkhbkkkkk
8-19 t: dsdstttfjhnttttvgttt
3-4 t: ttltttt
1-5 l: flfllllllllbhldll
7-10 x: xxxxxxcxxxx
2-7 t: ttttttctttt
3-12 x: vlxfwpdncxzkmkxt
1-5 b: mbbbbbdbbbtbwbhpbt
3-16 q: fpqkkkqfkqdbrxlq
5-6 p: lpcbtppjpt
6-7 w: wcwwhwv
9-13 v: vvvvvvvvvvvvvvv
1-4 g: vgggtggghgggggggg
2-9 p: mppsrrzwxdt
4-5 f: ffffdfffffdf
2-5 x: xkjss
13-14 z: zzzzzzzzzzzzbhzz
2-10 p: xmtkzpbrrj
17-18 t: ttttttttttttttttttt
2-8 j: cjjqbzpd
4-12 z: zzzkzzhzzpzzdzz
1-2 d: rdcdt
2-3 j: wnltj
7-9 r: rlrfbrdrqrbdr
3-4 s: bcsss
12-14 h: hhhhhhhhhhhbhhh
3-5 h: rfhlc
8-15 f: ffffffflffffffff
3-15 s: ssxsssssssssssss
2-4 h: hlbhshhmhhhg
12-13 r: rrrrrrrrmrvrnrr
3-5 p: ppppjp
1-2 z: zqhdkgqqzfsxkjjzg
6-8 k: kkkkkkzd
1-12 h: qhhhhhhhhxhhhhh
9-14 p: ppppppppqppppfp
2-4 t: tsttt
18-19 t: cttttllttttwxtttttt
10-11 t: rkdbpntntttfw
4-14 m: mdmmgtlmmwmbmmmk
4-6 n: xxhnpmnfnn
15-16 g: ggggggsggggggggng
14-15 k: kpjxmkrksskpbwk
15-18 f: fffffsffffffffnfffff
18-19 p: gwpplnpndvpxgzjvhbpp
8-12 l: ldclrkllbgpwllllcxms
14-19 w: pxsjbtwwhdkptwcxwvr
2-17 m: mtmmmmmmmmmmmmmmmm
12-15 b: nbcsplrmvbjbqlc
1-4 z: bzzszzzzz
1-13 t: tttttttttttttttttt
6-7 j: jjjjjmvjjjjjjjjjjj
10-13 l: llclllllljllllll
11-12 c: mzckxzsbbxcq
2-14 k: kkckkkkbkkkkkrkkkkkk
3-5 s: msssvqszssprssss
7-10 f: fffffffffrf
2-4 l: dlwrl
3-7 v: slqgljmrqrwv
4-6 d: pdddddnddddddd
6-9 f: cnfffpfzfffffff
4-17 v: vvvnvvvvvvvvvvvvvv
7-9 q: qqqqqqqqkqqqqqnqq
15-16 q: qqqqqqqqqqqqqqqqqq
10-11 g: cgtrgggggggggg
10-12 x: xxsxxsjxfxxlx
3-12 j: jjljjjjjjjjjjjj
8-9 c: ccbccczccthcc
4-17 h: hhhfhhshhhhhhhhhhhh
1-2 p: prppr
4-12 q: qqqdqqqqqqqqqqq
7-11 b: bbmbqbrtlwb
4-7 l: lllhlllllz
3-4 r: rrqc
5-14 r: rrrrcrrrrrrqrrrrrrr
10-11 d: pxdcxxjsddd
9-11 s: sssssssspssssssss
1-2 j: jfjljjjjjjjjjjjjjj
3-4 v: vqnvvv
2-3 c: wlcntvmsshxcgzc
9-14 t: rbbljpttwwjtbj
10-11 s: gnrdtfzttks
1-4 x: xpxjxhdxx
9-12 c: chccccccmpfccc
14-16 j: jjjjjjjjjjjjjxjjj
5-6 d: rpdndsbddwdd
9-13 x: thpdhlcwxcxxvxbv
4-6 g: nfsgqnvbntgwvlzlmmxg
3-4 d: dttdcdtq
2-4 n: wnntzbr
2-10 j: jtpszbpjfjcgdjg
6-7 b: bdspbvb
10-14 z: vzznzzzwzlzzqzj
7-8 c: cccccccc
7-11 h: hklhdhssfbz
7-8 h: hhhhhhqzhhhhhs
3-5 b: bcgbwbbbbbdb
5-6 q: qqlxqbgtqpkqt
8-9 q: qqqqqhqkq
2-4 q: qshp
8-13 g: gggggggrgggbgghg
1-5 k: ktcpgpk
2-13 v: mvvwnvfkjrhvvdvvtsvk
12-13 k: kxpkkkckjtkkj
12-18 h: xhqngjkxqqzqhnhhhh
11-12 k: kkkkkkkkkkkjk
2-4 r: rdgrrr
3-4 x: xwjx
2-6 c: lcqzflc
13-14 t: smlkctgbsqpftx
4-5 b: fxtdbzbqbd
4-7 s: wmsssznjzsdkgvdsxhd
2-6 z: wpptkhk
14-16 p: pppppzpppppbprppppp
6-7 c: cccccbw
1-6 h: mhhhhhh
2-3 k: cwkgk
3-4 l: llcl
3-4 m: kmmx
14-20 h: hhhhhhhhhhhrhhhhhhhh
8-12 b: bcmbpbffwghcvjb
10-15 f: fffdfqwmzfdfrfdbpf
1-2 l: hlllljl
1-3 g: vgbgg
2-4 n: zgfn
18-20 w: gmbwtzgzpmdwstsffqzw
9-19 j: jjjjjjjjkjjjjjjjjjjj
16-19 f: fffffffffffffrffffzf
8-20 l: htdlzwsllllccwlflstf
3-4 w: wwww
2-4 b: sbbz
4-6 n: nnrzbbnlcrnsbk
7-8 c: wmzjtbvw
5-7 l: cldlljlzzz
5-6 h: hhzhbhhg
4-5 f: scmrfftkc
11-12 m: flfrbmdpdkpm
6-7 v: xvvvcvkbnvvq
4-11 h: qkjphjpfllhpqnbm
2-5 b: bqbwbbwsb
1-8 c: cqcscccbccrccq
1-13 c: cccccccccccckccc
7-8 h: hhhhhhhs
1-3 l: llxl
6-8 h: hhhhsnkv
6-13 m: mmmmmmmmmmhmpmmm
6-9 n: nrnmmnbnmn
7-14 k: whkpphhkxlnnmkbhtnt
4-10 n: nnnnnnnnnhkn
3-4 c: mcnw
8-13 b: bbbbbbbgbbbbbbbbb
8-9 c: lcccdkjcjrqwck
3-13 w: szmnhsmzwpdbkhtbf
4-5 r: prrrz
9-14 m: mmmmmmmmgmmmmmm
7-8 q: kqpgrqqp
16-17 p: fzxxpcpdhmvmrnvjp
7-9 v: vvvvvvqzxs
3-4 w: qwxw
1-2 x: xqkx
9-10 v: vccmlrlhvdtttfvcxwm
11-14 h: mhvthqhvhhgmfhhhkhch
3-4 n: nqzw
2-5 j: jbjjjjjjjjjjjjjj
11-15 g: bcxggqfmgzgfrdg
3-5 v: gvwvvvrzf
6-7 t: ttzdttr
4-9 j: cgqjqdjvjbfjwdlvdgj
5-6 s: hfflrzksshjqsbvsps
1-4 p: pppn
4-5 g: dprggmpfggbkpg
2-3 k: kbhkkkk
13-15 r: srrrtstrwwxzrrzr
2-4 b: lbbnbzbb
1-4 g: fvgz
5-11 q: hxdhqrqqprpq
2-4 z: zzgm
1-13 w: wwwwhwwwwwwwwwwwww
2-3 k: kkkkk
4-8 g: nlgmhplgcv
1-2 j: zncllmvgjnj
11-13 f: fffffffffffflff
2-8 p: bphqpxkr
2-9 b: bbbbbbfbdbhjpbbbjbbb
9-10 s: zpxnstzwsw
7-16 c: ccccccccccccncsvccc
6-8 r: rrwbrqgr
6-12 v: vvvvvvvqvpvvvvzdd
8-9 z: zzzzbzzmzzz
15-16 t: tfttttntxttqtttc
9-16 b: btbrbfplbbbmbbbbkbb
7-8 q: qrqxrlqg
8-12 q: qqqqqqqpqqqw
5-8 v: jrrlpvvcvkjzjvvvv
11-14 d: dddddddddddddq
5-6 f: rfxmfzf
3-4 t: tttqt
10-14 c: bcccccccccrccfc
3-7 n: snnqplvl
5-6 z: kshzfzhlcsbqwqb
6-11 s: sssssssssmsjsgssss
3-7 v: qgcxvxvg
12-17 v: vkvbsvxkvvnjvvrvvvx
2-4 d: ddrrxbd
8-10 x: tvxxtmgbsxpxbl
7-9 r: rzrbgbrrrrrrmhm
2-4 t: ttttt
5-9 x: xxtwxxnssxlxx
3-4 p: ppdp
3-7 g: ggtgggtg
1-2 k: kbbhjdkfvjqffcss
1-2 l: lrlvlll
10-12 x: xjkbqxkxzxxq
7-9 d: dddhdkpdfdf
5-8 m: mmmmmmmwm
3-9 l: sfrjlzhcll
7-18 m: mmmmmmcmmmmmmmmmmmm
1-3 w: mwplxwwww
7-8 t: tgtctbtrtdtttt
3-6 p: lfpbbgfbpdhnqz
5-6 d: ddddrd
1-3 b: llbbbbb
4-7 r: ktbrncrrnnsrr
8-10 r: rrrrrrrfrrbrr
1-8 l: wlklvlllnljlgtzll
2-4 m: mmhmmxsm
10-12 c: cmwkcnczsxmcrmjtc
2-8 q: qmqqqqqzqq
7-9 v: xvvvvwdnzzv
3-7 j: lsjvmbrjjmpcwqnvvdgc
3-9 l: bgmllldjrzhllsclc
1-6 p: ptppfjpqpp
7-8 r: mctrrstrrxrqtmrr
7-8 d: qddddddxddddddddd
4-11 r: rrrrrrrrrrbr
4-8 s: lsfvtfss
4-9 c: zcccccccj
11-12 v: vvvvvvvvvvvm
4-8 g: rggzlfgtm
3-8 j: jjjjjjfhjsgj
3-4 m: fmhmm
15-16 l: ltllhlljtllllbtlllgl
12-13 c: cccccvcccccqccccc
6-7 q: qqnlqqhqqq
1-8 z: znjqzxpz
10-13 k: kxzmkbxnkbkktmkk
8-15 k: bskzvggzsnlnxzz
9-10 v: vbvvgvcwvs
5-8 h: qhsnhhlhwpvzfb
15-16 g: gdcgggggggtgcgtg
8-9 z: fbgdnrzfb
6-7 d: ddkdddh
4-6 w: xzgfwwlbxft
1-3 h: hkjhh
1-3 p: pwprlp
8-12 j: jdjjjjjdjjcjvjjjjjj
11-14 m: bdsfwddfkgxsmrmm
3-10 m: tmmcmfmmjmm
3-4 b: dwhbzfjxl
2-5 n: nnnnjcnnn
16-17 v: vvvfnvvvltsxhrvvm
1-7 v: qvvvvvwvvvdvv
2-14 k: nxqblwwqmhqzkm
3-4 t: ttts
5-6 c: clnnfk
12-13 s: sssssssssssts
7-14 d: ddqdnwdkdmhddg
3-4 t: tmsttm
9-11 x: xxxtxxxxxxqxwntxj
8-14 l: lllqklwlvlllmbslzlln
9-12 n: sdsnnfncxnwnrn
1-5 f: qfffff
6-9 r: rzmphlrgrr
1-4 m: grdm
4-5 s: ssxsg
1-4 n: xhnznnxnnn
2-6 r: mcwldgbqlqsckgzlrd
1-3 l: llmllll
3-4 p: pjtgdnfjfcjtcnpgxpzq
6-7 m: mmvmmmtn
17-19 h: qgmhhhwwwhqhmhhthhch
3-14 s: lhmnsfdrvnngrsfhxd
1-6 p: pppppwp
4-6 l: lzllltrl
3-4 c: rpxccsc
13-16 h: qsdznfqmsftqqthh
2-4 k: wsvkm
1-18 h: chhhhhhhlhhhhhhhhhhh
17-18 d: xddddddddddddddddddd
2-3 t: jtbrhpzjfpzhcmjql
10-11 n: gjngnnncncnn
7-13 r: rrrrrsrrrrrrlwrrr
10-12 l: llldllslbldllwl
17-19 m: mmmmmmmmmmmmmmmmfmm
10-14 n: nnnnnnnnnbnnnnn
17-18 x: xrxcxxxxxxxxxxxxxxwx
3-4 b: lvxb
5-6 r: rrrrrrr
13-18 l: lllllllllllllllllpl
8-12 m: mmmmmmmqmmmmmmmm
7-8 l: llhqlllh
3-8 p: nmrppdvpxcphxgmkpbsl
9-10 v: hvsbttgsdvvj
5-9 k: kgmvzzzckkgldk
15-20 x: xqxxxjxxxxxxxxxxxxxl
5-6 t: bbwpwtwbhwgqttzjv
6-13 n: klzcfnnjqxrhjwpjfxnk
5-8 d: pcnndzddddnsdqh
5-14 k: kblbtvkwltfklk
4-11 q: zxwdkqqkvqq
10-12 s: tsssssssssssss
3-5 r: rddsrrdksfqfrgr
7-16 h: vdvhlsjxgvrbrxnhns
3-4 z: zxtz
4-8 x: xmnxdwmh
11-12 r: gwsnfrnckrrxrx
3-9 q: qqqqqqqqwqb
9-14 f: bfnfffffvfpfffff
6-9 p: pvpppkppcpp
3-4 m: mmmz
3-5 j: jjjjmjsjjrlkjjjjj
4-6 p: jpbpjs
6-9 r: bswdsrksdrzrgrfmjr
8-10 l: lllllllxll
3-7 v: vvhvvvvv
4-11 n: mnjpbldngrrkbthhmdp
2-4 r: frlrfblsrfzrhtpk
16-17 h: nbghhnzshclxhhmkr
2-5 z: zfzvzzzzzzzq
1-5 l: lllzlfl
9-10 d: dddddddddzd
11-12 p: pspppppppbzp
5-9 t: thzttpxrdhttdwqjsg
7-10 w: tfdfwlwwzdvpnww
4-6 z: fvcljzllwhbzscx
14-15 m: mmmmmmmmmmmmmcd
8-11 d: hgdmwgsdkdbghb
13-15 v: vmvdvvqvvvkvqvvv
13-14 f: fffffffclffffffmf
2-5 s: ssscn
11-13 w: wwwwwwwwwwwwww
7-9 l: xnwrlkskll
8-14 g: vggglvcrgscpgggt
4-5 w: wwwww
5-11 w: wwwwswwwwwwwwwww
6-7 g: gggbvjg
14-18 q: wqfqqqqqqnqsqrqqqq
6-7 z: zzzztzqczzzzz
6-12 n: wnnnnnnxftnkznpvvl
10-16 j: jjjjjdjjjrhjjjjj
1-10 l: lllllllllrll
9-13 g: gdgggggggggkggn
6-8 r: rrrrrrrs
16-17 k: kkkkkxkkkkkkkkkck
11-14 b: bbbjbxbfmqscqbdmgg
3-8 d: sjdkmjppbdddhdxd
6-7 g: xhkhwgqpbg
11-12 x: xxxxnxxwgxxbdl
6-8 c: cccscccwcccccccccc
9-16 h: vhhhhhchwnghmkzhr
5-9 v: vvvdnvvvvv
4-16 n: nmqncgnbfhqnnpnbxwrl
3-5 f: fljrf
13-14 m: mmmmmmmmmmmmgfmmmmmm
5-6 g: ggnggd
2-6 w: wlvhvw
13-18 h: hhhhhhhhhhhhhhhhhvh
7-19 m: mmmmmmmmmmmmmmmmmmwm
4-12 k: mcvtrtsdkvkkfjrmkn
1-8 t: qvmrtttn
6-7 f: fffffsf
10-11 m: mmmmmmmmmjl
15-17 v: mvrhvvvvnvrvzrvvfv
10-14 m: mmtmmmnmmmmmmxm
4-16 b: vcscdqcbcxswjfdbrqbx
8-9 z: zzzzzzznzvz
4-6 g: ggnggdpgggg
2-4 d: hddxxnzzw
9-10 g: gggggggggj
4-7 k: kkkvkkkkkk
1-3 r: rrrrj
14-15 w: wwwwwwwwwwwwwwwww
2-4 n: brfmln
18-19 b: bxbbbbbghbbbbbbbbwb
10-12 q: dqqqrqwcqgqqf
2-5 g: sxfzgtrxkrmstdzfmw
3-4 d: pcddq
11-16 w: sbqwlwzwwwwwtwww
2-12 c: wrccqxtccccchcccjcj
16-17 b: bbbtbbbbbbbbbbbqb
3-13 t: tttttttmgktdthtp
1-3 t: ttcg
13-14 z: zczzzzzzdwkzqz
5-6 n: bnjhnjhnnq
2-9 b: bjbgbzmlbbklbwt
4-5 b: dtlbbwtjbkzzbghbghzk
10-16 p: ppppppqpppwnpppppppp
5-6 b: cbbwtbjkm
15-16 p: ppppppppppppppqd
4-8 m: lgmmhgktslzhbvw
2-4 h: hhdlhhhhhhhhhhh
14-18 k: ktmkkkkkwkklkjrkklfk
5-7 x: sfxxsxx
8-9 v: lkvxdpvjv
7-8 r: rrrrrrsr
4-6 b: btcbbv
7-13 n: zhnhjhnmkzdbt
7-9 j: jvjjjjjjjjjjjjxjj
1-4 v: hdvfv
2-5 f: rznpnxqwncmtkwfxcxqh
16-17 x: zxgbhltrdhxkvvxsxf
1-2 h: hkhhh
3-4 h: zhxc
4-9 z: vsmzhzwgjxfg
11-13 x: xxxxxxxtzxxxc
11-12 d: dddddddgddqj
4-11 f: zkdhqnpgbff
2-3 q: qqlqgqqqv
4-9 b: bvnblwhbbkswmrhtf
7-13 t: cztskdtqdtrkt
4-5 f: fffcsf
4-9 f: ctblqrflf
1-2 l: lmllqhlnll
3-6 v: vvqvvvvr
7-9 b: bbrhbkjbb
1-8 p: xpppppppp
7-10 k: ckkpmktkqksgkkk
1-7 m: lmmmmmmmmmmmmmm
11-15 v: vvfvvmvvvvdvkvv
10-11 b: kbbbbbbzbhbb
11-12 l: jltgggtlcggllt
10-13 q: kqnqqqqqqqqqq
6-7 c: cjcccczc
5-11 t: kdtstshrhfkcx
3-12 v: vlvfzvwvxvvhvvsvvcvm
9-10 t: xttttttttttt
8-10 z: hctlkgjzvzh
3-5 g: gtkwgk
16-17 w: wwswwwwwwwwwwwwwwqww
4-11 j: lbmwjzjxjpjhzjjpbj
4-5 c: klbxc
3-5 w: wlhvb
4-8 x: xgxxxxxxxxxxxxdxnxx
2-5 n: nnnkhn
1-2 d: dxfd
11-12 w: wjcqszwqwkcb
6-11 v: sqpgzhnvndtmvvwl
3-4 m: mmmqmmm
1-3 d: mddb
6-7 w: wwwwwnwwwwwwww
12-14 z: zzzzzxzczzzrzzz
5-10 f: mtcmmhfftft
10-14 x: hhgvmxbwgxdcnz
10-16 z: wzfzzmlmxxfhzqcbsnl
3-4 p: ppvkppp
8-11 h: hhhkhhhjhpbhhhh
6-12 f: ffffdwffrsfffrffnfpk
5-11 z: xqwzzzzbzpwk
7-9 c: crccccccscccccc
4-5 b: qpcnz
2-13 m: lmnrrzfhmbwtmqbsg
12-13 k: kkkkkkdkkkkkmk
10-14 q: sdqfbqszdjhqfq
8-13 h: hhhhhjhhhhhhbhh
2-4 g: gfdb
12-19 n: wtrhndnnnbwnnnnjnnn
5-6 n: zdwnpn
3-5 f: ffsffffff
11-16 r: rrrvrrrrrrwrrrrrlrrr
6-8 n: nnnnnfnnn
10-13 b: brnlbblbkbbbjbbhx
7-8 q: ftrfnqgqc
11-12 c: ncccccccccgcccn
3-4 z: tzzctzwzzvz
3-5 t: tzrqg
7-10 m: mmmmmmrmmqmmm
1-2 c: cdccfcccc
10-11 k: kkkkkkkkkwkk
6-18 x: qndxdgmjvpppddwkbt
8-17 c: pxhszsccndlbzkwgvx
3-4 p: qlrvwdxpqtgwjrtqcc
2-4 q: lkjq
17-19 f: pffgflzxrxfdxffffnz
3-11 x: kzsvmhcxnwj
6-7 x: lxxxxxxcm
1-8 n: nnnnnnnrn
2-5 r: rtrrnr
2-4 n: csvhrvhlp
7-8 b: lbbpdbkb
2-8 t: ztcrbvmst
3-4 r: rwrr
7-15 b: tbtrrbbpwsrvklqb
9-13 d: dcfsgddmdsjgg
2-7 d: mvdzscd
6-8 d: jrjjdndq
1-3 m: mhmvhtmmlbztvmsvmtmb
10-12 c: ctwjbpkchccmbqw
2-3 z: jvzwcrbgqbhvzbf
2-7 g: qbwsdbg
4-7 s: jsxpbmsmkhktfdq
11-13 r: rrrrrrrrrrhrqr
9-14 d: zddcdgddddxddntddm
1-15 x: jgrxxxxfxkgbmsxzx
2-17 p: kcppppkppppppppwm
12-19 k: kkkkkkkkkkkmkkkkkkkk
1-4 x: nzpxg
5-12 p: xcbppqnppqgtrm
11-14 h: dlhzhhhsbllcwhh
13-14 q: qqqqqqqqqqqqqcq
11-16 t: ttgnswrltltttjtj
14-15 t: ttttvtttftttttjtc
3-5 s: xssns
9-11 q: mlqqtqnjqfl
3-4 z: nzzhz
2-5 k: skwbwkwgzj
1-3 p: pppppcppppbpp
5-10 r: rrrrlrrrrrr
2-3 l: jlffrztcckl
3-5 t: ttftttttr
3-6 q: qtqtmnlqck
1-4 v: vxfvmvxwvvjbxp
1-5 z: tzzzzszvzzrmzmz
10-11 l: lllllblllcx
1-4 p: vppppp
6-12 v: zvrwvvvrvhzb
2-4 x: xxnv
1-7 w: hwwwwwgwgwwbwqw
3-7 w: wwwwwlfw
5-6 l: kkpltd
4-5 d: ddnrdk
3-6 c: cncvkt
8-9 j: vblczlfjjkj
7-15 d: ddddxdgdddddddjddd
4-7 z: vvmzdspzwptz
5-7 t: cdrtfqt
6-9 j: jjjjjdjjjjjjjj
2-5 j: ljptkvvfl
6-7 l: vhhnllgx
5-6 g: gpcxwvgpvvgg
5-12 q: plzqqnqzrhqgljj
8-13 k: zkckdknkxkgkvmmkd
4-10 s: jkvstssfcsrckjnzzbsl
9-11 n: nlknnnnggnvnnnnn
8-9 s: ssssrsgstk
16-18 r: rrrrrrrrrrtrrrrbrrrr
4-5 f: qxrzfcgfqfp
2-10 p: pphtppppppplwpsp
2-5 q: qqqqsq
6-15 j: xjkxkjxxkjznjjj
9-13 f: fvfvjlfmltfgf
3-6 j: jnsrcj
1-7 h: vhhhhhhh
4-5 q: qrqqqf
2-3 v: mvxb
4-11 l: lllllllllldl
7-17 k: mkcxhcmbcpjckkqznh
7-9 v: vvpgvvvvs
7-11 j: jjjjjjjjjjjs
2-12 v: mlxjljvffxgv
3-4 t: hhfn
14-16 w: kwfwwqwcfcwwfmww
5-6 j: jjjjjg
11-12 n: nnnnnnrdnnmnn
8-9 b: dsbbbfbbbb
3-4 j: jjcjjj
1-3 r: wrnr
10-11 p: pppppppppqppp
12-13 v: vvvvvvvvvwvvvv
7-9 v: vvvqvvxvdvxv
9-14 r: mmrrrrnrrxrrrwrrrrrr
5-6 k: kkkkbkkr
13-17 v: dbvgrchdpnzvxrdfv
4-9 c: ccjbccqcpcclcc
6-8 m: mbjmmxnb
2-6 h: hhdhnvcc
9-16 t: tttttttttttttttgt
12-16 n: nnnnnnnnnnnnnnnwn
3-14 z: zzdzzzzzzzzzzzz
3-8 k: pmktwckzn
9-13 q: gqqqqqqqrqqqqq
3-6 l: lllllddll
7-8 x: slxxzplxsxkcxlxxx
2-5 v: vwvvd
6-7 n: xxnnnmnnn
2-4 z: zczz
2-12 p: pppppppppppvp
2-4 h: bqwhv
5-7 t: btzttjg
4-9 c: sxcskxxbcv
1-6 c: cccccpc
9-13 l: bcsllbvbjhrflt
5-9 c: zprfctdnt
1-5 z: zzzzz
4-8 h: bpshnhxhrbk
4-7 l: bqclvxf
5-6 m: mmmmmgwcmgjj
13-18 m: mmmnmmmmmmmmpmtmmgm
1-5 w: cwwgwwwwwww
14-16 h: hhhhhhhhhhhhhqhhh
6-7 v: bvvjvvbvvv
5-13 b: pbcbbqmbcsfblc
17-18 j: jjjwjsrjjmkjjqjjjj
4-6 t: ntttpt
6-7 v: mvvnvvc
11-12 v: vclgnzbvtvvjvs
8-13 r: rlrzkjkrrxmdvzgt
5-7 n: nnnnnnsnnnnn
3-6 q: qpkjpq
2-7 v: hvgnjfrkvx
6-10 g: xgmrggggpbggfqgdpm
9-10 s: ssssssswfszsdssszss
5-6 p: pppjppwpp
2-5 d: ddddddd
9-13 p: ppjhpbppxpxxt
10-15 t: cgtcnlltzdkbcjtvxs
8-11 m: dkmmvtdmkbhmk
3-4 z: rzzqzw
4-8 z: zcxzswbzzqzxwkzz
3-4 s: jsts
2-7 b: bsbbbbbbbbbbb
11-15 l: jjkslsltvfbqshl
3-14 c: cqtxcgmcgvgfcccmg
1-8 f: fbfwffhfbxffhlx
4-11 r: drrmrrrzcfrj
5-6 p: pwpvjp
11-14 d: pnrddqwdlpdbddwg
9-10 r: rrrwrrrznrrgqsr
3-12 v: vsvvbvvkvvpdrvvv
2-5 t: mtfqjrjlthk
13-17 r: rrrrrrrrrrrrrrrrtr
7-8 n: nnnnnnhnn
3-4 r: wrpr
1-14 p: ppppppppppppppppp
8-9 m: vzkbzwnmwfqmmmmcmmnd
11-14 p: pppnpvpwppvpppppppp
17-19 h: lzhxlhhchxhbxhwvhsx
10-11 n: nnnnznnnnlp
3-12 f: kwflsfqflxpzbgxzdhzv
8-10 x: xxvxxxxvxsxxlxxxx
1-2 c: dclflczlj
4-9 w: wwwtwwwwwww
2-8 t: pfvtlbtxt
4-9 f: pnfkffkfnh
8-10 v: vjvvvvvvvvvvvv
3-13 s: mfshscgmmrvzw
6-10 g: gzggggpggkggzggggg
13-14 n: fnnnnnnnnnwnrnnn
4-14 k: lbvkwrkjkxjskg
9-11 q: qqqqqqqqsqgq
17-18 q: qqqqqqqqqqqqqqqqqd
6-9 s: spsssgsrrssss
8-14 m: qmmqjmmmmtpmnzgmm
1-7 m: bmsrmmmmmmm
14-17 k: kskdbkkkkdkkkktkqkkk
4-5 c: ccccgfc
2-5 k: kkkkzk
2-11 q: qqwqlnqqqhtdvxqrc
4-6 m: fdxkmmd
7-10 j: mjgftcmjmjj
17-18 m: mmmmmmmmmmmmmmmmnm
2-4 v: svvv
6-8 x: jxxhrxlp
4-10 s: dsvdbsssmscs
18-19 k: zwdgknqvqkgdhdhktkmr
2-7 h: jdflgfh
6-8 z: zmpzzzzzzzzgz
3-6 m: mmrmmm
4-8 w: wwtwktws
4-10 k: dkjkqkkzvk
3-7 b: bbbbbbfbbb
4-12 z: zzzzzzzzzzzzz
5-9 z: nmqdzzkzzzbj
4-11 z: fzzgzzzzzztzz
1-7 w: whwwwzrw
5-6 t: tjtttv
9-11 v: vzvhvxvvnvwvvv
2-4 t: pkjtpp
14-15 n: njpwjnsbnnnnngnnvnnn
5-15 k: qtmvkkdjkslkqvk
2-4 s: skszs
2-3 g: zggjhgxzn
16-17 p: ppppmppppppppppnppp
4-10 z: zzzzzzzzzzz
17-18 s: sssgsssskssssssssbs
5-8 m: mmmmmmmbm
1-5 l: llllmlql
3-13 z: bmdwpgvzfdlgzgl
1-4 p: pjplgjr
1-9 v: vvvzvrvvk
6-18 w: whwpwwflbcwwvwwwwst
19-20 n: nnsnnjnnnnnnnnnnnnkx
9-10 m: rlmxrnqrmkmmwmmmmm
15-17 s: lvssssslssfsssksfb
3-4 q: qqqpq
7-13 h: hhhhhhhhhhhhdhhhhhhh
2-6 h: dvkfhhmk
4-6 s: nczssv
10-12 p: pppppppppppdpprp
16-18 s: sssssssssssssssgsg
7-12 h: hhhhhhvhhhhhh
4-12 f: ffftfffffffwff
4-7 s: csqcpssbgvvmwdb
6-10 p: ppppvppppdppd
6-8 h: hxjhthhgzh
3-10 f: fffffffffsf
4-11 g: trggxlrnqrgh
2-15 w: wjxwtvkwwpgwwww
1-4 v: zjxv
7-10 f: fffffflqff
4-6 g: mgwgpbg
1-10 z: vvzzzzzvzz
6-7 f: ffffffnf
11-15 w: wxzwwqdnnwwxjlwplcl
10-11 s: hsslzjgsssvxsshnsc
4-12 n: tlxdnpznjbknt
7-8 k: mkhcvjxk
10-12 j: jjjjjjjjjjnm
2-7 c: fckckdpcksjckwcc
3-8 s: sssdxssw
12-14 t: ttttttttqttxttttpttt
6-7 g: gggggggg
5-10 f: fqffzffffffffgf
6-7 t: ztqhpbt
5-12 w: swwfwwwwwpwbwj
2-4 w: qmww
5-8 v: vvjnvvpv
7-8 p: bcbtnppbxnnwpr
4-12 z: zzkzdxntzlfbkkzzzw
8-9 s: sssssssss
15-18 h: jhvhhhcxwhhhhmhhhj
6-10 w: bwwwwwwwwwwwww
5-9 l: mtqlhlwlh
5-7 l: ljllnllblpl
15-17 h: hpgdkhsjwfnsjmhqxf
3-4 g: gggxgggg
1-2 q: qdqm
6-10 n: hnnnqknnnnnlnnnnp
13-17 q: djstfsmmqlshqqbqnf
6-7 z: qzlzxzw
7-12 g: qhghvbwdcvkgjl
7-15 z: zzzzzznzzzzzzzzzzzzh
3-6 w: zchpwvw
3-4 c: wmbjp
6-9 k: tckbvkkxkkqk
11-13 p: pcppppppppppppbp
5-7 r: rrrrsrxrr
6-10 c: ccccczcccccccccc
7-8 j: jjpjjplj
5-7 m: mjmmmjrmfmmmmmmmm
1-7 t: ttttttnttvpt
6-12 t: tttfwtttttttttttttt
7-17 x: hxwgrqqlxmrxrcwsx
3-8 g: vjcgqrjhlq
13-18 n: nnnfnnngnnnnjnnnhln
13-15 f: ffffffffffffrbff
13-15 x: xmswzjhtthggslslgx
12-13 g: ggggggggggggggg
3-9 f: cxfskjcbmhmmcpwn
5-7 h: jxzbhbh
2-3 m: mhmlmq
1-3 m: rmmmgmzvcghdtgmsmnm
14-15 s: wzssphxtsskpssr
8-14 p: kppjppgfpprftj
2-7 r: prnmlrrbm
2-5 v: vvvvtvv
1-5 n: nnnnzn
2-5 t: xtlnfwhgvltx
3-4 v: gvtv
2-8 k: kvkstkfz
2-6 j: jdjjjnjjjjzjjjj
3-4 s: sshwsssss
2-10 w: mnhkdtwdzwvsq
6-8 b: bbbbkxbbtbbkbt
14-19 h: hhhhhhhhhhhhhhhhhhhh
6-10 d: ddddddddddddddd
10-13 t: ttttttttthttjttt
4-5 c: ctscw
8-9 b: bbbvbbgmb
10-12 s: sxssshsssswsscsx
3-7 r: rdhrrkrkrrrrcrhrrr
8-10 j: wjsslzjjntjjwjs
1-4 q: gqqw
4-6 t: tjlhvrt
2-10 s: ssssssnssssssssx
7-8 x: xxxxxxfw
6-13 r: sxtcgrffrpdprnklbxbw
1-3 p: ppbppppppp
2-3 b: jbfr
1-7 m: cmmmmqm
4-5 t: tttzt
7-9 s: zwbbbssvl
10-13 w: wwwwwwwwwwwwdw
13-14 n: nnnnnnnnnnnnnmkn
5-11 q: jpbzqwqbwttgzn
4-5 k: kkkwkkk
10-17 w: sgtklkflsrfqxfwhjm
6-12 w: wwjqwwlmphwkwwwwwjw
2-13 p: ppppppppppppzp
2-16 h: tslcwztxxtchgqlxsbx
2-9 p: slptvtljpxdkf
10-12 z: tnzzghzzgzfn
3-18 f: ffxfffffffffffffff
1-2 p: prdpdghkckdgpl
6-8 x: fxxnbwrx
7-9 z: zmzkzdpgjzzz
7-14 p: pppppppppppppppb
7-10 l: xltlzllllljzxlll
18-20 n: nnnnnnnqnnnnnnnnnmnb
15-18 p: pxmqxpmqwfntrpppmf
1-15 v: kgmvwvrvmcvtrvvwv
2-8 g: gxggggggg
4-5 f: clfjfqmpffjfff
3-5 r: rpjkf
2-9 h: hhhhhshhrhh
2-5 z: zxzzz
5-11 k: kkkkkkkkkkkk
8-9 n: nnddcfntnrgnnrnnc
1-11 f: dfffffffffff
2-4 x: dzphvg
4-5 w: mnzlr
2-6 f: jhrkfmg
2-17 z: czzvvzzczznzhwzbzz
2-5 r: xrjrg
2-3 g: gggg
7-9 s: ssssssbsssss
17-19 k: kcwktkxkkbkqnwkkkkdz
1-16 f: zmxdffmfgffxrffffqf
7-8 q: qtmrkbqjq
8-9 q: qqqqqqqqx
10-18 n: nnnnnnnnnznnnnnnnnnn
16-18 x: xwxxxxxxxxxxxxxxxrxx
15-18 t: tttttftptttttttcttt
10-11 h: hfxnlbsqxphtmstbhdn
7-13 z: vdzdzmzxvfzzz
2-5 n: nnpqgnnqnb
12-16 v: pvjvvnbqzjnvvvvpjv
4-5 d: ddddk
4-8 l: lxvhlbclhgd
3-12 v: vvkvvvvvvvvvvvvvvvvv
17-18 j: jjjjjjjjjjjjjjjjdj
6-7 b: ckbdbcsbb
9-11 q: qrhxpcjjqbqt
8-14 h: hhhhhhhhhhhhklhhhhn
2-3 b: bzbjb
2-15 w: nnmdgzhsvhpvswltvt
1-5 l: lbclz
15-17 d: wlddgdxsdcdfdcgdd
18-20 q: dqsldgqqfqwsstqlmqtz
1-6 q: qqqqqdq
2-6 j: jpjjjjjj
13-15 p: ztjlhtnsgphgxccpfsp
6-13 m: ghvvmrglmmmcm
3-6 b: nbbrmrfdlbs
1-3 j: fwhjsr
7-10 p: gcppcppzpppp
4-12 r: rrrrrrrrrrrrrr
16-20 d: djdddvdsddddlmddddpm
14-19 x: xzxjxxxxxxxxxxxxxxj
11-16 w: kwclzxjjwxlwkcnwkwv
3-11 b: zhhxsgqxqbbg
10-11 q: trbhqqzhdqw
9-13 l: vcvlvqlwrlfvll
7-9 x: xxxxxxxxgx
5-6 n: nnnngnn
2-5 p: pqpppppppqpxp
4-17 z: zxrmzwwxwhqxxmqrv
5-9 v: vvvvvvvvrvvvj
6-7 x: qkhbxxkxs
3-4 d: fcmd
5-9 f: nsnlxstff
6-9 x: hrtzmhrxxbmcc
3-7 w: wwwwwwsww
5-8 g: ngkdxggg
8-13 r: rrrrphrrrrrrrrrrdrt
2-6 f: rckzvzfrnp
4-6 k: bfrpttcfbwmvhgn
7-9 w: wwwwwwswww
13-15 n: nnnnnnnnnnnnnnn
4-8 j: jjjjjjjwjjj
9-11 h: hhhhhhrhhhhhh
4-7 h: thmhwrhss
1-3 d: ddddddddddddd
10-11 c: ckrcxwcdpqc
2-4 g: kgghg
3-12 s: ssssvwssssgqs
2-7 s: sssssszs
2-10 v: wvpbjqxvzsdpgmq
12-15 n: nnnnnnbnqvrkfnn
3-5 w: wlvdw
11-14 t: pfrbxgcrwndttj
6-7 w: qnnwwpfwwhw
7-10 n: nnnvnnhnnx
3-12 c: mmfcwvxqwpcclwlxfx
2-3 p: lgpxpppp
17-19 k: rfxvmnmfzrnktfpckpr
2-9 k: kkkknkkkkkkk
15-16 t: ttjmtttmttttttwt
9-10 r: rrrrrrrrmrrrr
3-4 p: jppppxf
7-8 k: nkqbvkkt
6-8 d: dddddrdddd
6-7 q: czbqdgnc
3-5 p: rxpppsx
4-6 t: thvtwv
2-13 d: dmdddddddddddd
16-18 n: nnnnnnnnnnnnnnnnnnn
11-12 s: ssfsdsmssswssh
3-5 v: kxnvvvmvrvdvvssvvv
5-8 x: nxxxxbxxxzx
3-5 t: ctttftt
5-7 s: hssvsgj
5-8 r: rrrrrrrcrx
1-13 v: vvvvvvvvvvvvpvvvvvv
5-9 h: gxlrhsgswhchfxbwjd
2-4 w: wgwb
6-12 v: pmxnjtfsvvxvv
1-4 n: vnntn
2-3 w: wwww
3-7 f: xmfbmnvnfkkmsd
10-12 x: xxxxxxjgxxxxx
2-3 l: cllvpbtmgzmrfmq
2-4 l: llrlllnlxll
5-10 h: hdhhhzhvtchhh
8-10 q: lhqmdwcfhqngq
1-5 t: twtfvcmktthtjltqvpwc
6-8 s: sxsghtbs
3-4 m: mmmmmmmmmmmmmmmm
16-17 l: rjdpxhtblvllgvwhl
5-13 s: brhsssnfcndsh
7-13 v: swkfswvmkvjbnsgvwp
1-3 k: wlfpzk
2-4 t: tpttt
2-9 t: cntttttcgtttt
5-6 r: rrrrbh
10-12 j: jjjjjjjjjzjjdj`



function day2(testData){
let newData = testData.split('\n')
let total = 0
newData.forEach(e => {
  let vals = e.split(':')
  let charCount = 0
  let key = vals[0]
  let pass = vals[1]
  let cipher = key[key.length-1]
  let range1 = key.split('-')[0]
  let range2 = key.split('-')[1].split(" ")[0]
  for (let i = 0; i < pass.length; i++) {
    const l = pass[i];
    if(l == cipher){
      charCount++
    }
  }
  charCount <= parseInt(range2) && charCount >= parseInt(range1) ? "" : total++
})
return 1000 - total
}


// console.time()
// console.log(day2(data2))
// console.timeEnd()


function day2pt2(testData){
  let newData = testData.split('\n')
  let total = 0
  newData.forEach(e => {
    let vals = e.split(':')
    let key = vals[0]
    let pass = vals[1]
    let cipher = key[key.length-1]
    let range1 = key.split('-')[0]
    let range2 = key.split('-')[1].split(" ")[0]
      if(cipher == pass[range1] && cipher == pass[range2]){
      }else if (cipher == pass[range1] || cipher == pass[range2]){
        total++
      }
  })
  return  total
  }
  // console.time()
  // console.log(day2pt2(data2))
  // console.timeEnd()

  let day3Data = `........#..#.##.#..............
...#...............#.#.........
...#..#...#..##....#...........
...#.............#....#.....#..
..#......#..#...#.......#......
..............##...............
#.......#.........#......#....#
.#.....###.....#...#.#.#...#...
#.....................#....#.#.
.......#...................#...
...#.#...................#....#
....#....#.......#...#.........
..##.#............#..#.........
.....##.#..............##..###.
...........#....#....#.........
#.....#...#...#.#.#.#.##.#...#.
.#...............#....##.......
.....#..#......#....#.......##.
.....#........#.......#........
...#...##...#..##...#.....##...
.....#.........#.###...##...#..
.#.##...#........#.#.#.#....#..
....#......##.#...#.....#....#.
.......###..........#..#..#....
......#...#.##.................
....#...#...#.........#......#.
.....#...........#...###....#..
.....#...#.#.#....##.#......#.#
......#...#.....#..#..#........
#......#..#...##........###....
##.....#....##..#.#.###.#...#..
........#....#.......#.....#..#
#.#.#.##.#.#...................
..#...##....#......#.....##....
.......#.##..#........##..#....
.#.#....##......#.#..........#.
#..............#............#..
.#.#.#.#.#.####.#.#...##.......
.#..#.....##.#.......#.##...#..
..#.#........#.............#.#.
..#.#..........#..#........#...
..#..#...#.......##...#.#....##
...#.....#.#.#.....#....#....#.
.#...#......#.....#..##........
...#.......##.#.#.....#......#.
...........#.....#.#.......#...
#...........#...#..#.#........#
....#......#..##........#..###.
.#..#........................#.
#.......#......#...#...#..#....
....#.#...#..#.#....#....##.#..
.....#......#..#..........##.#.
.#.....#...........#.........#.
...###.#...#.......#.#.........
.......#....#..........#..#...#
......##..#.......#...##.......
..#..........#.......#.........
..........#..#..#..#..#........
.#.................####...#.#.#
..##.....#............#........
....#.....###...#......#....#.#
...##.#...........#.##......#..
#..##..#..#....#...#..#........
......#....#........#.......#..
......#.....#......###.........
.#.....#.#......#.......#......
..#.........#..#..#........##.#
..#.#....#.....#....##....#.#..
...#.............##............
........#..#..#......#...#.....
.....#.#...#...##.....#.....#..
.#..#.#..........##...##.....#.
......##.#..........#...#.....#
#.#.##......#....#..........#..
................#.......#.##...
#.......#.....#.......#....#...
#..#.....#.##..##...........#..
.....#....#.#.##..........#..##
#.......#.....#.##...........#.
........#.##........###..#.#...
........#..................#...
#.........................#...#
....#.........#...#.#..#.....#.
.#............#....#...........
..#.#...#..##...#.#.......#....
.#.#....#...........#.........#
...#.#..........#.....#...#....
......#....#.#...............##
....##......###...##.##.....##.
............#.#....#.#.....#..#
.....#..#.....#.#...###....#...
.......##....##..#...##..#...##
.....#.......##..#...#...#....#
#.........##....#........###.#.
...#..##...#...#.........#.#.#.
....#.#.....#.....#............
#........#....#..#........#....
.......#....#...#..............
#...#.........##.....###.#.....
.#....##..#...#..##.........#..
....#.....#......##..#..#....#.
#.#..#.........#........#......
..#.......#.........#.....###..
..#..........#...........#....#
..#...............#......#..#..
....#..#...#....###.....#..#..#
#...#...#..#...........#....#..
.#....#.#..#....#.#...........#
.....#.....#..#....#..#....#...
#.#..#...........#.#...........
..................#.#.......#..
...#.........#.....#..##....#..
.........#.#...#.........##....
...#..#....#.....#...#..#......
.#.##.....#....#....#......##..
##..#.........#.#....#...#.....
#......#.#...#....#.#..#.......
.......#.....#.....###....#.#..
.#....##.#.....#...#.......#...
.#.......#..#...#......#..#..##
...............#...#...........
#..............#....#.#.#....#.
...........#..#.......#.##..#..
..#......#.#....#...#.#.....#..
#..............................
#..#....#..........#...#.......
......#.............#####......
.#...###......#.#.#.##..#......
............#.##.....#.........
.........#....##....#..........
###....#......#.......#........
.#.......##..........#..#....#.
#..#.....................#....#
........#...........#..........
..#..........#...#..#.........#
..#..#......##................#
.....##..#...#..#..............
.......#...##..#...............
.......##..#.####....#....#.#..
#.#..#..........#........##....
....##....#.#..#....#.#...#....
......#.......#...#.....#...#..
..#..#...#.....#.......###.....
...#.......#.#.#.......#.##....
...............#..#.#........#.
.#....###.#......#.............
.#..#...#....#.#..#.....#......
.......#.##....#.#.##.##...#.#.
..#...#....#.#..##.#.....#...##
..#...#......#...#......#...#..
....#..#...#.#..#......#.......
#..#...............#......#.##.
.#....#...#..........#.#.....#.
.#..#.#.#................#..#..
.#....#.#...#..##.###..#...###.
#.............#.....#.........#
...#.........#...#.......#..#..
......#..#.........#..........#
........##................#..#.
......#...#.#.....#......##....
...............#...#....#......
...#.#..#..#.....##.###..##..#.
.#....##......#...#..##..#.....
.....#.........##.##....#...#..
.....#.#..................####.
#.....#...#.............##....#
#.#..........#...#..#..#.......
#..#.#.........#...............
....#...#.........#...##.......
...........#.....#..##..#......
#.....#.......#.#........#.....
..##..#.....#...##......#......
....#....#.....................
............#......#.........##
.....##.............#.....##..#
.......#.............#..#.#.##.
.###...#......#..#........##.#.
..#.#...#.#....#.....#..#......
..#.#..#.##........#...#.......
........#.#...............#..#.
........##.......#...#.......#.
...#........##.#..........#.#.#
..#..###.#.#.......#.#......#..
....#..........#...#..#........
...#..#...#...#.#....#...#..#..
...#...#........#......##...#.#
#...........#..........#..#.##.
...#..##..................#.#..
...##.#...#....#.#...#.####....
.....#...#.#.#..#..............
.....#..#.#.#..#...............
..#..#..##...#.#..#.....##....#
.......#.#..#.....#....#.......
...#..#....#.........#...#.....
..............#.#...#...##.....
...................#...........
.#......#.#...................#
.##.....#........#.........#..#
.##..##...#...................#
...#....#.#..#.#.#..#.....##...
.......#..#....#......####.#...
.##..#..##....#.......#........
.#...#...........##............
.....#.....#........#..........
....##..#....#.....#...........
.#...#....................#....
....#.........#.......##.....#.
.#....#..#.....#.##....#.......
....#..#.........#.#....#.#....
.......#.........##....#.......
..#......#....#....#...#.......
........#..#.......#.##......#.
..#.....#......#...#..#.......#
#..#.....##...#...#............
.......##.......#........#...#.
..#......................#...#.
....##.#.............#......#..
#.#............................
...##.#.....#.#............#.##
......#...#..#.........##......
.#.......#.....##.......#.#....
...........#.#.........#..##...
...#..........#.##....#........
........#..#..#...#....#....#..
........##....#.#....#........#
..#........##....###....#......
#................###...#...#...
................#.#..###......#
..#.....##.#................#..
.....#...............#..#......
..#.......####.....#..#.#....##
..#.....#..#....#..............
#.#...........#.#.....#..##....
#.#..........#.......#...#.###.
........#....#...#..#.#........
.#.....#......#..#..#..###..#..
.#.........#.##.#.#......##....
..#.........#...##..#........#.
.#...................#.........
...#.#........#................
............#.....#..##........
..#.....#.#......#.......#...#.
........#....##..##...#.....##.
.#........#.#....#.#....#.#..#.
#.#.......#....................
.#..#...##.........#..#........
.........#...............#.....
...#...#.....#......#.......#..
###......................#.#..#
...#.....####........#..#.....#
#.#...#.#...................##.
.........#.....................
#..........##..#.....#....#....
.......#...#.#.##.#..##........
..........#..#.#..#.#.......#.#
.....................#.#...#...
...........#.#........#.#.#....
.......#......#........#...#.#.
.........#....................#
.##.##....#...#.#.#.#..........
#....##..#.##....#....#.......#
.##.#...#...............#....#.
.......#...#.###....#..........
.....#....#...#..#.............
#.........#.##....#.#.#........
..#...#.............##..#..#...
#..##.......#..........#...#.#.
.#..#.....#...........#......#.
......#......#..............##.
.#...#..#...#..####.....#.....#
....##.......#..........##.....
.#.....#.......#.....#.#...#...
..#..#..#.#...#......#.........
......#.#....#........#.......#
........#.......#..............
..#...#.#....#........#.......#
............#....#...##.#......
.........#.............#..#....
#.............#.#..##.......#..
#....#...........###....#......
...#.....................#.....
....#.#..........#...#.......#.
......#..#.......#...#...#....#
.#.#..#.....##.#........#......
...........#...#.#.............
...###............#...#..#.....
..#.#.......#...#.#..#.........
.#......##...........#.....#.##
.....##.....#....##...##.#.#...
..........#.#.#......#........#
..#.#........#....##....#.#....
.#....#...##...........#....#..
##......#...#.......#..........
.##...###..#...#......#..##.#.#
...........##.#..##...#.......#
..#..............##............
........#..#........#...#..#.#.
..#.............#......#...##..
#...##....#...#....#....#.#....
.#.#......#..##............#.#.
.....###.#....##....#....#.....
#.#.#..........#...#...#.#.#...
.....#.#...........####........
.....#....##...#.##..#......#..
#....#.......#.##.......#..#...
.....#.....#........#..........
.......#.......#...#.##......#.
...#.........##...#.#.#......##
#........#........#...#..#.....
.#......#.#......#.#...#....#..
#..#....##.....##..............
...#.##............#..........#
.....#.#....#..#.#............#
..#......#...###.##.......###..
........#....#.#.#.#...........
............#..#........#.....#
....#...............#..........
......#....#....###..#.......##
#...#...##....#.........#...#..
...........#.#.............#...
...#..#.....#..##.#....#......#
..#...#..#...#......#..........
....#..#....#.......#........#.`

  function day3(data, rise, run){
   data=data.split('\n')
   let pos = 0;
   let tCount =0
   for (let i = rise; i < data.length; i+= rise) {
     const str = data[i];
     if(pos >= str.length-run){
      pos = pos - str.length
    }
      if(str[pos += run] == '#' ){
        tCount++
      }
  }    
    console.log(tCount, "3")
    return tCount
    }


  let test2 = `........#..#.##.#..............
  ...#...............#.#.........
  ...#..#...#..##....#...........
  ...#.............#....#.....#..
  ..#......#..#...#.......#......
  ..............##...............
  #.......#.........#......#....#
  .#.....###.....#...#.#.#...#...
  #.....................#....#.#.
  .......#...................#...
  ...#.#...................#....#
  ....#....#.......#...#.........
  ..##.#............#..#.........
  .....##.#..............##..###.
  ...........#....#....#.........
  #.....#...#...#.#.#.#.##.#...#.
  .#...............#....##.......
  .....#..#......#....#.......##.
  .....#........#.......#........
  ...#...##...#..##...#.....##...
  .....#.........#.###...##...#..
  .#.##...#........#.#.#.#....#..
  ....#......##.#...#.....#....#.
  .......###..........#..#..#....
  ......#...#.##.................
  ....#...#...#.........#......#.
  .....#...........#...###....#..
  .....#...#.#.#....##.#......#.#
  ......#...#.....#..#..#........
  #......#..#...##........###....
  ##.....#....##..#.#.###.#...#..
  ........#....#.......#.....#..#
  #.#.#.##.#.#...................
  ..#...##....#......#.....##....
  .......#.##..#........##..#....
  .#.#....##......#.#..........#.
  #..............#............#..
  .#.#.#.#.#.####.#.#...##.......
  .#..#.....##.#.......#.##...#..
  ..#.#........#.............#.#.
  ..#.#..........#..#........#...
  ..#..#...#.......##...#.#....##
  ...#.....#.#.#.....#....#....#.
  .#...#......#.....#..##........
  ...#.......##.#.#.....#......#.
  ...........#.....#.#.......#...
  #...........#...#..#.#........#
  ....#......#..##........#..###.
  .#..#........................#.
  #.......#......#...#...#..#....
  ....#.#...#..#.#....#....##.#..
  .....#......#..#..........##.#.
  .#.....#...........#.........#.
  ...###.#...#.......#.#.........
  .......#....#..........#..#...#
  ......##..#.......#...##.......
  ..#..........#.......#.........
  ..........#..#..#..#..#........
  .#.................####...#.#.#
  ..##.....#............#........
  ....#.....###...#......#....#.#
  ...##.#...........#.##......#..
  #..##..#..#....#...#..#........
  ......#....#........#.......#..
  ......#.....#......###.........
  .#.....#.#......#.......#......
  ..#.........#..#..#........##.#
  ..#.#....#.....#....##....#.#..
  ...#.............##............
  ........#..#..#......#...#.....
  .....#.#...#...##.....#.....#..
  .#..#.#..........##...##.....#.
  ......##.#..........#...#.....#
  #.#.##......#....#..........#..
  ................#.......#.##...
  #.......#.....#.......#....#...
  #..#.....#.##..##...........#..
  .....#....#.#.##..........#..##
  #.......#.....#.##...........#.
  ........#.##........###..#.#...
  ........#..................#...
  #.........................#...#
  ....#.........#...#.#..#.....#.
  .#............#....#...........
  ..#.#...#..##...#.#.......#....
  .#.#....#...........#.........#
  ...#.#..........#.....#...#....
  ......#....#.#...............##
  ....##......###...##.##.....##.
  ............#.#....#.#.....#..#
  .....#..#.....#.#...###....#...
  .......##....##..#...##..#...##
  .....#.......##..#...#...#....#
  #.........##....#........###.#.
  ...#..##...#...#.........#.#.#.
  ....#.#.....#.....#............
  #........#....#..#........#....
  .......#....#...#..............
  #...#.........##.....###.#.....
  .#....##..#...#..##.........#..
  ....#.....#......##..#..#....#.
  #.#..#.........#........#......
  ..#.......#.........#.....###..
  ..#..........#...........#....#
  ..#...............#......#..#..
  ....#..#...#....###.....#..#..#
  #...#...#..#...........#....#..
  .#....#.#..#....#.#...........#
  .....#.....#..#....#..#....#...
  #.#..#...........#.#...........
  ..................#.#.......#..
  ...#.........#.....#..##....#..
  .........#.#...#.........##....
  ...#..#....#.....#...#..#......
  .#.##.....#....#....#......##..
  ##..#.........#.#....#...#.....
  #......#.#...#....#.#..#.......
  .......#.....#.....###....#.#..
  .#....##.#.....#...#.......#...
  .#.......#..#...#......#..#..##
  ...............#...#...........
  #..............#....#.#.#....#.
  ...........#..#.......#.##..#..
  ..#......#.#....#...#.#.....#..
  #..............................
  #..#....#..........#...#.......
  ......#.............#####......
  .#...###......#.#.#.##..#......
  ............#.##.....#.........
  .........#....##....#..........
  ###....#......#.......#........
  .#.......##..........#..#....#.
  #..#.....................#....#
  ........#...........#..........
  ..#..........#...#..#.........#
  ..#..#......##................#
  .....##..#...#..#..............
  .......#...##..#...............
  .......##..#.####....#....#.#..
  #.#..#..........#........##....
  ....##....#.#..#....#.#...#....
  ......#.......#...#.....#...#..
  ..#..#...#.....#.......###.....
  ...#.......#.#.#.......#.##....
  ...............#..#.#........#.
  .#....###.#......#.............
  .#..#...#....#.#..#.....#......
  .......#.##....#.#.##.##...#.#.
  ..#...#....#.#..##.#.....#...##
  ..#...#......#...#......#...#..
  ....#..#...#.#..#......#.......
  #..#...............#......#.##.
  .#....#...#..........#.#.....#.
  .#..#.#.#................#..#..
  .#....#.#...#..##.###..#...###.
  #.............#.....#.........#
  ...#.........#...#.......#..#..
  ......#..#.........#..........#
  ........##................#..#.
  ......#...#.#.....#......##....
  ...............#...#....#......
  ...#.#..#..#.....##.###..##..#.
  .#....##......#...#..##..#.....
  .....#.........##.##....#...#..
  .....#.#..................####.
  #.....#...#.............##....#
  #.#..........#...#..#..#.......
  #..#.#.........#...............
  ....#...#.........#...##.......
  ...........#.....#..##..#......
  #.....#.......#.#........#.....
  ..##..#.....#...##......#......
  ....#....#.....................
  ............#......#.........##
  .....##.............#.....##..#
  .......#.............#..#.#.##.
  .###...#......#..#........##.#.
  ..#.#...#.#....#.....#..#......
  ..#.#..#.##........#...#.......
  ........#.#...............#..#.
  ........##.......#...#.......#.
  ...#........##.#..........#.#.#
  ..#..###.#.#.......#.#......#..
  ....#..........#...#..#........
  ...#..#...#...#.#....#...#..#..
  ...#...#........#......##...#.#
  #...........#..........#..#.##.
  ...#..##..................#.#..
  ...##.#...#....#.#...#.####....
  .....#...#.#.#..#..............
  .....#..#.#.#..#...............
  ..#..#..##...#.#..#.....##....#
  .......#.#..#.....#....#.......
  ...#..#....#.........#...#.....
  ..............#.#...#...##.....
  ...................#...........
  .#......#.#...................#
  .##.....#........#.........#..#
  .##..##...#...................#
  ...#....#.#..#.#.#..#.....##...
  .......#..#....#......####.#...
  .##..#..##....#.......#........
  .#...#...........##............
  .....#.....#........#..........
  ....##..#....#.....#...........
  .#...#....................#....
  ....#.........#.......##.....#.
  .#....#..#.....#.##....#.......
  ....#..#.........#.#....#.#....
  .......#.........##....#.......
  ..#......#....#....#...#.......
  ........#..#.......#.##......#.
  ..#.....#......#...#..#.......#
  #..#.....##...#...#............
  .......##.......#........#...#.
  ..#......................#...#.
  ....##.#.............#......#..
  #.#............................
  ...##.#.....#.#............#.##
  ......#...#..#.........##......
  .#.......#.....##.......#.#....
  ...........#.#.........#..##...
  ...#..........#.##....#........
  ........#..#..#...#....#....#..
  ........##....#.#....#........#
  ..#........##....###....#......
  #................###...#...#...
  ................#.#..###......#
  ..#.....##.#................#..
  .....#...............#..#......
  ..#.......####.....#..#.#....##
  ..#.....#..#....#..............
  #.#...........#.#.....#..##....
  #.#..........#.......#...#.###.
  ........#....#...#..#.#........
  .#.....#......#..#..#..###..#..
  .#.........#.##.#.#......##....
  ..#.........#...##..#........#.
  .#...................#.........
  ...#.#........#................
  ............#.....#..##........
  ..#.....#.#......#.......#...#.
  ........#....##..##...#.....##.
  .#........#.#....#.#....#.#..#.
  #.#.......#....................
  .#..#...##.........#..#........
  .........#...............#.....
  ...#...#.....#......#.......#..
  ###......................#.#..#
  ...#.....####........#..#.....#
  #.#...#.#...................##.
  .........#.....................
  #..........##..#.....#....#....
  .......#...#.#.##.#..##........
  ..........#..#.#..#.#.......#.#
  .....................#.#...#...
  ...........#.#........#.#.#....
  .......#......#........#...#.#.
  .........#....................#
  .##.##....#...#.#.#.#..........
  #....##..#.##....#....#.......#
  .##.#...#...............#....#.
  .......#...#.###....#..........
  .....#....#...#..#.............
  #.........#.##....#.#.#........
  ..#...#.............##..#..#...
  #..##.......#..........#...#.#.
  .#..#.....#...........#......#.
  ......#......#..............##.
  .#...#..#...#..####.....#.....#
  ....##.......#..........##.....
  .#.....#.......#.....#.#...#...
  ..#..#..#.#...#......#.........
  ......#.#....#........#.......#
  ........#.......#..............
  ..#...#.#....#........#.......#
  ............#....#...##.#......
  .........#.............#..#....
  #.............#.#..##.......#..
  #....#...........###....#......
  ...#.....................#.....
  ....#.#..........#...#.......#.
  ......#..#.......#...#...#....#
  .#.#..#.....##.#........#......
  ...........#...#.#.............
  ...###............#...#..#.....
  ..#.#.......#...#.#..#.........
  .#......##...........#.....#.##
  .....##.....#....##...##.#.#...
  ..........#.#.#......#........#
  ..#.#........#....##....#.#....
  .#....#...##...........#....#..
  ##......#...#.......#..........
  .##...###..#...#......#..##.#.#
  ...........##.#..##...#.......#
  ..#..............##............
  ........#..#........#...#..#.#.
  ..#.............#......#...##..
  #...##....#...#....#....#.#....
  .#.#......#..##............#.#.
  .....###.#....##....#....#.....
  #.#.#..........#...#...#.#.#...
  .....#.#...........####........
  .....#....##...#.##..#......#..
  #....#.......#.##.......#..#...
  .....#.....#........#..........
  .......#.......#...#.##......#.
  ...#.........##...#.#.#......##
  #........#........#...#..#.....
  .#......#.#......#.#...#....#..
  #..#....##.....##..............
  ...#.##............#..........#
  .....#.#....#..#.#............#
  ..#......#...###.##.......###..
  ........#....#.#.#.#...........
  ............#..#........#.....#
  ....#...............#..........
  ......#....#....###..#.......##
  #...#...##....#.........#...#..
  ...........#.#.............#...
  ...#..#.....#..##.#....#......#
  ..#...#..#...#......#..........
  ....#..#....#.......#........#.`



 let one = day3(day3Data, 1, 1)
  let two = day3(day3Data, 1, 3)
  let three = day3(day3Data, 1, 5)
 let four =  day3(day3Data, 1, 7)
  let five= day3(day3Data, 2, 1) 
  console.log(one*two*three*four*five)


  let day4Data = `byr:2010 pid:#1bb4d8 eyr:2021 hgt:186cm iyr:2020 ecl:grt
  
  pid:937877382 eyr:2029
  ecl:amb hgt:187cm iyr:2019
  byr:1933 hcl:#888785
  
  ecl:hzl
  eyr:2020
  hcl:#18171d
  iyr:2019 hgt:183cm
  byr:1935
  
  hcl:#7d3b0c hgt:183cm cid:135
  byr:1992 eyr:2024 iyr:2013 pid:138000309
  ecl:oth
  
  ecl:hzl
  hgt:176cm pid:346059944 byr:1929 cid:150 eyr:1924 hcl:#fffffd iyr:2016
  
  iyr:2011
  cid:99 ecl:amb
  eyr:2030 hcl:#18171d
  hgt:165cm pid:897123249 byr:1948
  
  hcl:#cfa07d pid:827609097 ecl:gry iyr:2017 byr:1963
  eyr:2029 hgt:72in
  
  hcl:#6b5442 eyr:2028 iyr:2016 ecl:hzl
  hgt:152cm
  pid:432183209 byr:1984
  
  hgt:169cm hcl:#888785 ecl:hzl pid:626107466 byr:1929 iyr:2013 cid:217
  eyr:2026
  
  hcl:#bdb95d byr:1935 eyr:2023 ecl:blu iyr:2011 cid:90 hgt:64cm
  pid:155167914
  
  iyr:2017
  byr:1943 cid:56
  hcl:#888785 hgt:193cm pid:621305634
  ecl:amb
  eyr:2024
  
  ecl:gry
  hcl:#a97842 pid:936999610 cid:169 byr:1991 eyr:2029 hgt:175cm iyr:2017
  
  hcl:#866857 ecl:gry
  byr:1975 hgt:71in
  pid:180628540 eyr:2020
  iyr:2017
  
  hcl:#cfa07d hgt:153cm byr:1962 cid:325
  iyr:2018 eyr:2020
  ecl:amb pid:579364506
  
  hcl:#6b5442 iyr:2010 ecl:amb byr:2001
  eyr:2020 pid:406219444
  hgt:173cm
  
  pid:#430c70
  ecl:gry iyr:2018 hcl:#866857 eyr:2021 cid:97 byr:1997
  hgt:75cm
  
  iyr:2023 pid:#518780
  eyr:2034
  ecl:zzz
  hgt:72cm
  hcl:z byr:2010
  
  pid:1961614335 hcl:#c0946f hgt:157 ecl:grn eyr:2031 byr:1972 iyr:1992
  
  cid:142
  eyr:2022 ecl:amb
  hgt:68in
  hcl:#6b5442 byr:1927 pid:112372155 iyr:2012
  
  byr:1972
  hgt:169cm
  hcl:#888785
  cid:75 iyr:2015 eyr:2021 ecl:oth
  pid:7889059161
  
  ecl:brn
  iyr:2020
  eyr:2026 hgt:151cm byr:1961 pid:468038868 hcl:#18171d
  
  ecl:blu
  hcl:#b6652a
  byr:1959
  hgt:151cm cid:109 pid:708689901
  eyr:2026 iyr:2012
  
  ecl:grt byr:2024 iyr:1995 pid:225263933 hcl:z
  eyr:2040 hgt:127 cid:162
  
  pid:683129831 cid:144
  hcl:#a97842 hgt:155cm eyr:2030 byr:1962
  iyr:2015
  ecl:oth
  
  byr:2009 hcl:#866857 cid:329 iyr:1955
  eyr:1994 pid:085929595
  
  byr:1940
  pid:936748944 hgt:160cm eyr:2024 iyr:2013 cid:205
  ecl:grn hcl:#c0946f
  
  hgt:193in cid:161 iyr:1984
  pid:#f82e35
  byr:2018
  hcl:b1a551 eyr:2014 ecl:#4d2d5b
  
  byr:1978
  iyr:2011 hgt:172cm hcl:#efcc98 ecl:brn pid:759624394 eyr:2020
  
  eyr:2020 pid:622444743
  hcl:#a97842
  ecl:gry iyr:2014 hgt:157cm byr:1980
  
  hgt:181cm eyr:2020
  iyr:2014
  hcl:#602927 ecl:brn byr:1934
  
  hgt:188cm
  ecl:blu eyr:2029 pid:757878469 hcl:#b6652a iyr:2017
  
  byr:1995 ecl:blu hcl:#341e13 eyr:2027 iyr:2020 pid:283341241
  hgt:174cm
  
  byr:1960 iyr:2012 hcl:dc007d eyr:2011 hgt:166cm
  pid:9889788504
  ecl:#a9b3a1
  
  ecl:hzl hgt:70in pid:620966688 iyr:1998 hcl:z
  eyr:2022
  
  hgt:187cm cid:190 pid:818634983 byr:1925 ecl:gry hcl:#ceb3a1
  eyr:2021 iyr:2015
  
  hcl:#c0946f iyr:2017
  byr:1953 eyr:2030 hgt:67in pid:085876735 ecl:hzl
  
  pid:205284134
  hcl:#cfa07d byr:1987 hgt:167cm
  eyr:2022 ecl:oth iyr:2020
  
  iyr:2018
  hgt:180cm pid:232535961 eyr:2027 byr:1999
  hcl:#18171d ecl:oth
  
  cid:342 hgt:171cm ecl:blu byr:1920 hcl:#18171d eyr:2023 iyr:2012
  pid:353601791
  
  byr:1956
  ecl:brn pid:141896408 iyr:2012 cid:116 eyr:2028 hgt:164cm
  hcl:#866857
  
  hcl:#fffffd ecl:oth eyr:2030 hgt:67in pid:855777018 byr:1975
  iyr:2012
  
  ecl:blu pid:45257034 hcl:#c5447e iyr:1928 cid:212 byr:1974
  
  pid:080116868 cid:97 eyr:2021 iyr:2020 ecl:grn byr:1987 hgt:62in hcl:#efcc98
  
  eyr:2027 hcl:#efcc98 iyr:2020 ecl:amb cid:111
  pid:143966954
  hgt:165cm
  
  iyr:2015 byr:1941 pid:798564127
  hgt:183cm ecl:oth eyr:2020
  
  byr:1999
  iyr:2017 hcl:#ceb3a1
  pid:640883740 hgt:164cm
  cid:105 ecl:hzl
  eyr:2022
  
  iyr:2014 eyr:2023
  ecl:grn hcl:#ceb3a1
  hgt:188cm byr:1981 pid:185076942 cid:342
  
  hgt:150cm
  iyr:2013 eyr:2035 cid:184 hcl:#341e13 pid:#e2dd63 byr:2014 ecl:brn
  
  eyr:2024 iyr:2015 ecl:brn hgt:76in
  hcl:#866857 byr:1958
  pid:886486245
  
  ecl:amb cid:113 byr:1931 pid:087380735
  iyr:2010
  eyr:2028
  hgt:161cm
  
  byr:1926 eyr:2024 iyr:2012 pid:036335738 hcl:#c0946f hgt:153cm ecl:brn
  
  hcl:bf952a
  hgt:169in
  eyr:1925 pid:166cm iyr:2028 ecl:lzr byr:1938
  
  hgt:154cm hcl:#733820 ecl:oth iyr:2016
  byr:1925
  eyr:2020 pid:590365390
  
  eyr:2029 hgt:166cm pid:670283165
  hcl:#ceb3a1 iyr:2018
  byr:1955
  ecl:gry
  
  hgt:181cm
  iyr:2016 hcl:#866857 byr:1933
  eyr:2028 ecl:blu
  
  hgt:184cm
  cid:138 hcl:#623a2f
  pid:081880232
  byr:1929 ecl:hzl eyr:2030
  iyr:2015
  
  pid:825698872
  eyr:2026 hgt:181cm iyr:2015 hcl:#866857 byr:1950 ecl:gry
  
  eyr:2022 byr:2002 iyr:2013 hcl:#fffffd ecl:hzl pid:687380398
  hgt:173cm
  
  byr:2016 ecl:zzz pid:0514910377 hcl:ebe8b2 eyr:2025
  iyr:2011 hgt:183cm
  
  ecl:amb hgt:67in
  pid:602547016 byr:1985
  eyr:2021
  iyr:2014
  
  iyr:2014 eyr:2020 ecl:grn pid:642261584
  byr:1970 hgt:190cm cid:278 hcl:#7d3b0c
  
  eyr:2035 cid:226 hcl:64ac73
  byr:2007
  pid:176cm ecl:#927fbf iyr:2006
  
  iyr:2019 eyr:2026 ecl:brn hgt:162cm
  cid:108
  hcl:#ceb3a1 pid:774441166 byr:1951
  
  hgt:166cm eyr:2024 hcl:#b6652a byr:1934 pid:260873380 iyr:2016
  
  hcl:z
  iyr:2015 ecl:blu
  eyr:2040 byr:1927 pid:431855667
  hgt:173cm
  cid:209
  
  eyr:2034 cid:139
  ecl:#cb7564
  byr:2023 hgt:172in iyr:2027 pid:2877047600
  
  ecl:brn
  cid:125 hcl:#888785
  iyr:2011 pid:739399822 hgt:184cm byr:1989
  
  hcl:#c0946f
  pid:891125961
  hgt:175cm
  iyr:2010 eyr:2027 ecl:gry
  byr:1930
  
  hgt:164cm byr:1935 eyr:2023 pid:684366743
  ecl:oth
  hcl:#18171d iyr:2013
  
  hcl:#341e13 hgt:64in byr:1959 ecl:#c53bbb iyr:2014 eyr:2029 pid:174cm
  
  eyr:1943 ecl:#e52638
  hcl:06a964 byr:1959 cid:342 iyr:2029 hgt:178in pid:150cm
  
  byr:1966 hcl:#733820 iyr:2020
  ecl:gry eyr:2021 pid:229789071
  
  pid:363947487
  ecl:blu
  hcl:#623a2f
  byr:1972
  iyr:2017 hgt:184cm
  eyr:2023
  
  ecl:oth pid:460855562
  iyr:2010 cid:148 hcl:z hgt:74cm byr:2005
  
  eyr:2027 iyr:2017 hgt:172cm
  byr:1975
  ecl:amb cid:97 hcl:#c0946f pid:591950054
  
  eyr:2022 ecl:oth hgt:185cm
  hcl:#6b5442
  byr:1978
  iyr:2018 pid:849124937 cid:78
  
  iyr:1927 hgt:121
  eyr:2020 ecl:#c73b1a hcl:#cfa07d pid:4505701953 byr:2020
  cid:235
  
  hgt:183cm hcl:#341e13 iyr:2019 byr:1932 ecl:#144539
  pid:184cm eyr:1954
  
  iyr:2020 cid:332 byr:1930 hcl:#6b5442 hgt:168cm ecl:amb
  eyr:2023 pid:332084752
  
  ecl:blu
  byr:1922 cid:135 iyr:2019 eyr:2028 pid:481801918
  hcl:#efcc98 hgt:76in
  
  ecl:grn pid:188906975 cid:153 hgt:173cm eyr:2029 iyr:2012 hcl:#733820 byr:2001
  
  eyr:2029
  byr:1948 iyr:2020
  hgt:167cm ecl:brn hcl:#623a2f pid:577624152
  
  hcl:#18171d
  pid:262528276 byr:1949
  iyr:2020
  eyr:2023
  
  hcl:#c0946f iyr:2016 byr:1967 ecl:brn
  hgt:162cm
  pid:139002508 eyr:2030
  
  eyr:2030
  hgt:72in iyr:2013 pid:542944485 cid:112
  byr:1950 hcl:#a97842 ecl:amb
  
  pid:772544664 eyr:2023 ecl:gry hgt:159cm iyr:2012
  byr:1956 hcl:#602927
  
  hgt:172in ecl:grt pid:668387651 byr:2019
  iyr:1995 hcl:bc51ff eyr:1921
  
  pid:322272953 ecl:brn hcl:#a97842 byr:1990
  eyr:2021
  iyr:2017
  hgt:181cm
  
  eyr:2029
  iyr:2011
  pid:503169142 byr:1980
  hcl:#a97842 ecl:oth
  
  pid:514042929
  ecl:amb eyr:2030 hgt:154cm
  iyr:2010 hcl:#623a2f
  byr:1989
  
  byr:1988 pid:156381939 iyr:2016 hgt:161cm eyr:2030 ecl:brn hcl:#7d3b0c
  
  pid:545819361 hgt:191cm iyr:2012 byr:1982 eyr:2025 ecl:zzz
  hcl:z
  
  pid:872911892
  byr:1924 iyr:1974
  hcl:#602927
  ecl:brn hgt:154cm
  eyr:2028
  
  hcl:#602927 hgt:188cm
  byr:2007 pid:503933918 ecl:utc
  eyr:2030 iyr:2020 cid:132
  
  ecl:hzl
  eyr:2020 hcl:#888785 hgt:181cm
  pid:721383537
  iyr:2018
  byr:1983 cid:50
  
  pid:8590606 hcl:#18171d
  eyr:2039 iyr:2024
  cid:161 byr:2027
  
  hgt:160in byr:1956
  cid:214 pid:187cm iyr:2027
  hcl:z
  eyr:2033 ecl:grn
  
  byr:2029 pid:90562860 hcl:4fa0d1 iyr:2024
  eyr:2040 cid:62 ecl:#07ae33 hgt:186in
  
  pid:557319679 byr:1945 hgt:182cm eyr:2026 iyr:2012 hcl:#866857 ecl:hzl cid:219
  
  eyr:2028 iyr:2022 ecl:zzz cid:273
  hgt:133 pid:4084335529 byr:2011 hcl:z
  
  pid:69196974 hcl:z iyr:2014 ecl:amb byr:1928
  
  hgt:183in
  eyr:2028 pid:771762218 byr:2003 ecl:dne hcl:70eb58 iyr:2027 cid:330
  
  ecl:hzl pid:195721774 hcl:#602927 byr:1945 hgt:186cm
  eyr:2037
  iyr:2011
  
  ecl:brn eyr:2028 hgt:171cm
  byr:1980 hcl:#fffffd pid:563089389 iyr:2016
  
  eyr:2027 iyr:2011 ecl:gry byr:1932 hcl:#18171d
  pid:398526372
  
  pid:97363921 hgt:178cm
  ecl:oth eyr:2028
  byr:1930 cid:345 iyr:2018 hcl:#1fb2f0
  
  ecl:amb iyr:2012
  byr:1961 pid:679312513 eyr:2026 hcl:#cfa07d
  hgt:174cm
  
  byr:1980
  hcl:#80055d
  cid:235
  ecl:oth pid:159696517 eyr:2030
  hgt:191cm
  iyr:2012
  
  iyr:2013 eyr:2027 hcl:#866857
  pid:621184472 cid:137 hgt:175cm byr:2000
  ecl:hzl
  
  byr:1998 hgt:166cm
  ecl:oth eyr:2025
  iyr:2018
  hcl:#a97842 pid:358495679
  
  byr:1928 ecl:oth cid:122 hcl:#6b5442
  hgt:189cm eyr:2020 iyr:2018
  
  hgt:186cm
  byr:2020 hcl:79d685 ecl:grt iyr:1944 pid:3659998623 eyr:2000
  
  hgt:63in ecl:oth eyr:2029
  iyr:2013 pid:942282912 hcl:#c0946f byr:1989
  
  byr:1997 hcl:#623a2f eyr:2026 cid:149
  pid:702981538
  ecl:amb hgt:178cm iyr:2017
  
  ecl:brn iyr:2015 byr:1932 pid:191192548 cid:318
  hcl:#7d3b0c eyr:2020
  
  hcl:#866857 eyr:2028 pid:341036511 cid:343 iyr:2020 hgt:173cm
  byr:1973 ecl:blu
  
  iyr:2016 pid:165707654 hgt:181cm ecl:hzl
  cid:119 byr:1973 hcl:#b6652a
  
  iyr:2014 pid:833337583 byr:1936 cid:91 hcl:#602927 ecl:amb hgt:165cm
  eyr:2021
  
  byr:1938 ecl:grn hcl:#a55daf eyr:2021 cid:199 pid:701515796
  iyr:2015 hgt:71in
  
  hcl:#a97842
  ecl:blu
  eyr:2030 iyr:2020
  hgt:155cm byr:1927
  pid:524488639
  
  pid:385084163 eyr:2025
  hcl:#866857 ecl:oth iyr:2020 hgt:177cm byr:2002
  
  eyr:2029 hgt:177cm
  cid:142 ecl:hzl hcl:#866857
  iyr:2015 byr:1946 pid:459543573
  
  pid:826977286 eyr:2030 iyr:2016 byr:1996
  hcl:#efcc98
  ecl:gry hgt:180cm
  
  eyr:2029
  iyr:1976 pid:872821863 ecl:gry byr:2030
  
  hgt:191cm byr:1924 pid:918753019 ecl:blu
  iyr:2019 hcl:#5d69e0 eyr:2024
  
  ecl:lzr iyr:2020 pid:991375034 byr:1947
  eyr:1923 hcl:8224f6 hgt:157
  
  eyr:2021 byr:1946
  hgt:189cm ecl:grn iyr:2010 hcl:#cfa07d pid:246923037
  
  iyr:2016
  ecl:oth hgt:155cm byr:1962 pid:924702739 eyr:2028 hcl:#7d3b0c
  
  pid:7358100461 hgt:183cm byr:2011 hcl:#a97842
  iyr:2020 eyr:1963 cid:71
  
  ecl:hzl hcl:#c0946f
  byr:1934
  hgt:183cm
  iyr:2018 pid:433993423 eyr:2028
  
  hgt:183cm hcl:#cfa07d iyr:2018
  byr:1975 eyr:2024
  
  eyr:2021 ecl:amb byr:1992 hgt:164cm iyr:2020
  cid:302
  
  pid:271720491 hgt:161cm
  iyr:2012 byr:1947 hcl:#6b5442 ecl:grn eyr:2024
  
  pid:860852799 eyr:2021 byr:1980 hcl:#6b5442 iyr:2010 hgt:174cm
  ecl:hzl
  
  hcl:#623a2f eyr:2028 iyr:2016 pid:813453232 hgt:173cm cid:131
  byr:1962
  
  byr:1975
  hgt:177cm
  pid:290098810 cid:241
  ecl:oth hcl:#a5fc9f eyr:2021 iyr:2013
  
  byr:1947 pid:762351259 hgt:178cm ecl:amb hcl:#d07b27 iyr:2017 eyr:2028 cid:271
  
  iyr:2012 pid:053790533 eyr:2023 ecl:grn hcl:#623a2f byr:1939 cid:70 hgt:189cm
  
  hcl:#c0946f pid:891312170 byr:1986 iyr:2012
  hgt:163cm eyr:2023 cid:150
  
  iyr:2015
  byr:1963
  pid:695024197 hcl:#efcc98 ecl:brn hgt:166cm eyr:2022
  cid:276
  
  eyr:1945 hgt:150in byr:2007
  ecl:utc hcl:z cid:272
  pid:186cm iyr:1927
  
  pid:956296646 iyr:2015 hgt:168cm
  byr:1979 eyr:2029 ecl:gry hcl:#866857
  
  pid:745452488 byr:1998 eyr:2025 hcl:#602927
  hgt:158cm iyr:2015
  
  eyr:2027
  iyr:2017
  pid:6173634679 byr:2001 ecl:hzl
  hcl:babc41
  hgt:76cm
  
  ecl:grn
  iyr:2019
  hcl:#3881ca byr:1975 eyr:2023 hgt:162cm
  
  hcl:#ceb3a1 hgt:169in pid:398759957
  eyr:2020 byr:2016
  iyr:2011 ecl:#be3622
  
  hgt:156cm
  hcl:#b6652a pid:166cm iyr:2027 byr:2003
  eyr:2036 ecl:#6d4df1
  cid:109
  
  eyr:2026 pid:295161300 ecl:gry
  hgt:160cm byr:1950 hcl:#746f08
  iyr:2017
  
  iyr:2010 cid:335
  eyr:2024
  hcl:#866857
  byr:1948 hgt:166cm pid:178927953
  ecl:blu
  
  hgt:161cm cid:210 eyr:2025
  byr:1920
  ecl:gry iyr:2020
  hcl:#7d3b0c pid:443548961
  
  iyr:2019
  pid:320015839 eyr:2029
  hcl:#fffffd ecl:oth byr:1953 hgt:182cm
  
  eyr:2038 hcl:abb3ad iyr:2015 pid:174cm hgt:167cm
  ecl:hzl
  
  byr:1982 pid:798153758
  ecl:brn
  hgt:161cm hcl:#341e13 eyr:2023
  iyr:2014
  
  byr:1938
  pid:193cm hgt:190cm ecl:amb iyr:2019
  eyr:2028 cid:270
  hcl:#18171d
  
  pid:711886098 byr:1962
  eyr:2028 ecl:grn
  hgt:151cm
  hcl:#cfa07d
  iyr:2019
  
  eyr:2028 iyr:2011
  ecl:gry
  pid:550207629 hgt:183cm
  hcl:#888785 byr:1920 cid:96
  
  ecl:utc
  eyr:2021
  byr:1962 hgt:175cm
  pid:872298092
  hcl:z iyr:2017 cid:197
  
  iyr:2010
  hcl:5b88b0 byr:2021 ecl:gmt
  eyr:2040 hgt:179cm pid:161cm
  
  pid:56869473 eyr:2036 ecl:lzr
  iyr:2027 hcl:z
  
  hcl:#602927
  hgt:151cm pid:780342729 ecl:oth iyr:2015
  
  byr:2027 hcl:#fffffd
  pid:5609758115 eyr:2037
  iyr:2017
  ecl:#6f0329 hgt:97
  
  iyr:2025 hcl:z byr:2007 ecl:gmt
  pid:#eda9ab
  hgt:154in eyr:2028 cid:247
  
  ecl:utc pid:216181141
  hgt:161cm eyr:2026
  hcl:#d38f20 byr:2028
  
  ecl:grn byr:1955 hcl:#c0946f
  iyr:2017 eyr:2027 pid:746303487
  hgt:72in
  
  pid:489225602
  iyr:2018 ecl:gry hgt:65in byr:1982
  cid:248
  eyr:2025
  
  hcl:#ceb3a1 pid:663798116 byr:1937 iyr:2010
  hgt:167cm ecl:hzl
  
  pid:329032527
  hcl:#ceb3a1
  iyr:2014 ecl:gry
  hgt:169cm
  byr:1932
  
  hcl:#545d0c
  ecl:brn iyr:2023 hgt:186cm cid:209
  pid:886392748
  eyr:2030 byr:1984
  
  hgt:80 iyr:1943 hcl:#733820 byr:1937 eyr:2029 pid:625851706 cid:309
  
  pid:73586582 hgt:156
  cid:162 ecl:zzz eyr:2025
  iyr:1990 byr:1940 hcl:z
  
  iyr:2010
  eyr:2023 pid:162901454
  hcl:#733820 byr:1958 ecl:gry
  hgt:159cm
  
  byr:2007
  hcl:#cfa07d
  cid:261 pid:148538600 ecl:hzl
  hgt:64cm iyr:2021
  eyr:2040
  
  iyr:1997 byr:2007 ecl:#24adc8
  pid:55794137 cid:219 eyr:2037
  hgt:75cm hcl:z
  
  hcl:#efcc98 byr:1940 ecl:amb iyr:2012
  pid:594237790 eyr:2029 cid:112
  hgt:173cm
  
  byr:1941 cid:70 eyr:2026 hgt:178cm hcl:#733820
  ecl:brn iyr:2013 pid:425263722
  
  eyr:2025 byr:1998 iyr:2014 ecl:amb pid:188113611 hcl:#341e13
  
  byr:1950
  iyr:2017 hgt:74in cid:238
  pid:897969952
  ecl:hzl eyr:2022 hcl:#0a18bb
  
  eyr:2022
  iyr:2015 ecl:grn
  hgt:179cm byr:1956 hcl:#7fd789 pid:201629099
  
  eyr:2024
  pid:483257417 ecl:hzl iyr:2010 hgt:159cm
  hcl:z
  byr:1968
  
  pid:916586207 ecl:amb iyr:2011 eyr:2022 hgt:191cm hcl:#602927 byr:1923
  
  pid:175608183
  hgt:190cm hcl:#fffffd iyr:2017 byr:1993
  ecl:blu
  
  eyr:2029 hgt:173cm
  pid:669662258 byr:1997 iyr:2015 ecl:brn cid:153 hcl:#888785
  
  hcl:d899cf
  ecl:#876029 hgt:76cm iyr:1997 pid:40406158
  eyr:2032 byr:2010
  
  eyr:2023 ecl:hzl cid:162 hcl:#602927 iyr:2015
  pid:82885029
  hgt:75cm byr:1946
  
  byr:1962 hgt:167in
  ecl:brn
  hcl:#c0946f iyr:2014 pid:488520708 eyr:2027 cid:271
  
  hgt:180cm pid:358771245 eyr:2020
  ecl:grn iyr:2018 hcl:#efcc98
  byr:1979
  
  cid:273 ecl:gry pid:424388351 iyr:2010 hcl:#c0946f byr:1988
  hgt:166cm
  eyr:2027
  
  ecl:gry hcl:#a97842 hgt:189cm
  pid:743213778 iyr:2015 byr:1959
  
  iyr:2021 byr:2021
  ecl:#a79d2e cid:89
  hcl:#5fb8d7 eyr:2001 pid:#5575b3 hgt:60cm
  
  eyr:2021
  iyr:2017
  cid:87 hgt:164cm pid:560394910 ecl:hzl hcl:#ceb3a1
  byr:1955
  
  iyr:2018
  hcl:#27f7e6 hgt:160cm
  eyr:2029 pid:033692111
  ecl:amb byr:1920
  
  hgt:160cm eyr:2028 iyr:2010 ecl:blu byr:1974 pid:858060501 hcl:#733820
  
  byr:1961 pid:818700605 cid:93 eyr:2024
  hgt:188cm hcl:#866857
  ecl:gry
  
  eyr:2029
  hgt:180cm iyr:2017
  ecl:hzl byr:1951 cid:158
  hcl:#888785
  
  cid:290
  eyr:2027 byr:1986
  ecl:blu
  pid:076339632 iyr:2010
  hcl:#341e13
  hgt:167cm
  
  eyr:2023 iyr:1990
  hcl:#623a2f byr:2005 hgt:116
  
  hgt:167in iyr:1944 ecl:dne eyr:2031 hcl:465775 pid:2505694463
  
  cid:93 eyr:2024 iyr:2010
  hgt:143 pid:154cm
  ecl:#c6f352
  hcl:#a97842 byr:1925
  
  pid:600685520 byr:1967 hcl:#ceb3a1 iyr:2014 ecl:oth cid:226 hgt:179cm eyr:2026
  
  hcl:#ceb3a1
  pid:789956738
  byr:1938 hgt:171cm cid:183 eyr:2021 iyr:2011 ecl:amb
  
  hcl:#613f4b hgt:151cm eyr:2025
  ecl:amb byr:1985 pid:493339889
  iyr:2013
  
  hcl:78cda6 pid:36823553
  iyr:2021 cid:235 byr:2028 eyr:2011 hgt:113
  ecl:#02ce86
  
  pid:529274811
  iyr:2012 hgt:103 ecl:blu hcl:#341e13 eyr:2023
  byr:1959
  
  hgt:166cm iyr:2014 ecl:xry cid:276 byr:2014 hcl:#7d3b0c pid:146851133
  
  pid:359823289 hgt:181cm byr:1978 hcl:#c0946f
  eyr:2022
  iyr:2011 ecl:hzl
  
  pid:029400877
  eyr:2026
  byr:1983 iyr:2015 hcl:#cfa07d cid:70 ecl:gry
  
  hcl:#ceb3a1 eyr:2021 hgt:190cm
  ecl:amb iyr:2017
  pid:411804678 byr:1950
  
  byr:1926 iyr:2017 ecl:blu pid:103821113 eyr:2026 hcl:#c0946f cid:71 hgt:152cm
  
  cid:108 byr:1955
  iyr:2010 eyr:2022 hgt:169cm hcl:#733820
  pid:208715596 ecl:gry
  
  pid:352807405 ecl:blu
  hcl:#b1214c iyr:2012 hgt:165cm byr:1929
  cid:139
  eyr:2020
  
  hcl:#cfa07d hgt:151cm byr:1987
  eyr:2024
  cid:140 pid:884441477
  
  pid:#dade9c eyr:1979 hgt:191cm
  byr:2026 iyr:2018 hcl:z ecl:lzr
  
  cid:259
  pid:644561358
  ecl:blu hgt:164cm iyr:2013 byr:1997
  eyr:2023 hcl:#108f16
  
  ecl:oth
  cid:141 hgt:66in pid:877258886 iyr:2019 byr:1949 hcl:#18171d
  eyr:2027
  
  byr:1932 cid:103 hgt:175cm pid:464473181 ecl:xry iyr:2013 hcl:51fd65
  
  cid:175 iyr:2014 eyr:1959
  ecl:#d83076 hgt:182cm pid:863972537 hcl:#efcc98 byr:1986
  
  hgt:181cm pid:869641194 hcl:#efcc98 cid:141 ecl:gmt iyr:2017 byr:1981 eyr:2027
  
  eyr:1938
  iyr:2026 cid:278 ecl:brn byr:1936 hgt:150 pid:6902040050
  
  eyr:2027 iyr:2014 pid:110887179
  hcl:#a97842 ecl:brn cid:262 hgt:66in
  byr:1954
  
  ecl:grn
  pid:498972747
  eyr:2024 hcl:#341e13 iyr:2011 byr:1932 hgt:186cm
  
  cid:59
  hcl:#6b5442 iyr:2018 eyr:2028 pid:866696485
  hgt:178cm ecl:gry
  
  pid:598961001
  eyr:2024 iyr:2019
  byr:1963 ecl:grn
  hcl:#c0946f
  
  eyr:2024 hgt:172cm pid:295056305 ecl:blu byr:1926
  iyr:2017 hcl:#341e13
  
  byr:2001 hcl:#6b5442 hgt:164cm
  pid:862982189 ecl:grn iyr:2019 eyr:2030
  
  hgt:69cm eyr:2014 ecl:hzl iyr:2025
  hcl:2812c9
  cid:74 byr:1980
  
  hcl:#888785
  pid:409489862
  iyr:2011 hgt:186cm ecl:gry byr:1985
  eyr:2028
  
  cid:221 pid:6849250876 hgt:169cm hcl:z
  iyr:2013
  byr:1950 eyr:2022
  
  pid:189083891 byr:1983 hcl:#623a2f ecl:hzl iyr:2013 eyr:2026 hgt:66in
  
  pid:581546673 cid:269 eyr:2030 hgt:191cm byr:1945 hcl:#18171d
  iyr:2015
  ecl:amb
  
  hgt:158cm ecl:hzl
  cid:234 eyr:2023
  byr:1996 hcl:#7ac7ad
  iyr:2020 pid:666748924
  
  iyr:2013 ecl:grn cid:53 hgt:172cm eyr:2028 pid:406602771 hcl:#fffffd byr:1959
  
  hgt:63cm hcl:eaaf60 byr:2026 iyr:1981
  pid:#baf2cf cid:117 ecl:hzl
  
  eyr:2035 byr:2014
  iyr:2028 hcl:z ecl:#acd426
  cid:261 pid:174cm hgt:182in
  
  ecl:amb pid:#4bb0a8 eyr:2027 hgt:155cm hcl:#623a2f
  byr:1956
  iyr:2011
  
  eyr:2012 cid:53 byr:2005 ecl:oth
  hgt:183in iyr:1974 pid:150cm
  
  iyr:2020 pid:833821322 ecl:blu byr:1944 hgt:169cm hcl:#623a2f eyr:2020
  
  hgt:60in ecl:oth byr:1962 eyr:2022 cid:99
  iyr:2019
  pid:281039464 hcl:#733820
  
  ecl:hzl hcl:#7d3b0c hgt:191cm pid:771871096
  iyr:2012 eyr:2027
  byr:2025
  
  hgt:188in hcl:z eyr:2032 iyr:1955
  byr:2027 ecl:#517bfe pid:#206bab
  
  hcl:#733820 iyr:2010 pid:784128823
  hgt:169cm cid:305
  ecl:grn byr:1962
  
  cid:50 eyr:2022
  hcl:a916cf pid:407148034 iyr:1926 ecl:#fa1ba7 hgt:69
  byr:2028
  
  hgt:193cm pid:507697987 cid:275 byr:1958 eyr:2023 ecl:brn iyr:2013 hcl:#326596
  
  eyr:2025 hgt:192cm cid:95 iyr:2011 ecl:grn byr:2002 pid:399623583 hcl:#b6652a
  
  ecl:brn hcl:#602927 eyr:2023 pid:089068603 hgt:189cm
  byr:1953 iyr:2018
  cid:160
  
  hcl:f1bf94 byr:2030
  ecl:gry hgt:60in iyr:2016
  pid:4816152
  
  hgt:154cm iyr:2015 ecl:gry
  eyr:2024 pid:718845487 byr:1999
  hcl:#866857
  
  cid:294
  hgt:186cm eyr:2026 byr:1984
  ecl:grn
  hcl:#ceb3a1 pid:325370778 iyr:2010
  
  pid:156980004 hcl:#c0946f iyr:2013 ecl:brn
  hgt:181cm byr:1933 eyr:2023
  
  hcl:#efcc98 byr:2002 hgt:158cm ecl:gmt iyr:1964 pid:195262032
  eyr:2021
  
  hcl:#602927 eyr:2027 hgt:192cm byr:1945 iyr:2018 pid:366509171 ecl:oth
  
  pid:163cm iyr:2016 ecl:lzr hcl:#341e13 hgt:79
  cid:130
  eyr:2038 byr:2030
  
  hcl:#efcc98
  byr:1979
  ecl:oth eyr:2020 pid:095314628
  hgt:162cm iyr:2015
  
  byr:1998 cid:157
  pid:346442779 hcl:#b6652a hgt:162cm
  ecl:amb
  eyr:2023 iyr:2018
  
  hcl:#d6a701 byr:1971 hgt:160cm ecl:#98c896 pid:627704105 eyr:2024 iyr:2010
  
  byr:2021
  iyr:2023
  eyr:1981 hgt:68cm ecl:dne
  hcl:z pid:20981493
  
  pid:159037919 hgt:162cm
  ecl:amb cid:244
  byr:1971 eyr:2027
  iyr:2017 hcl:#18171d
  
  iyr:2011 pid:086826874
  cid:162
  hgt:189cm ecl:gry
  byr:1926 hcl:#888785
  
  eyr:2022 hgt:152cm pid:919970712 byr:1955 hcl:#733820 iyr:2018 ecl:brn
  
  cid:111 ecl:#a1843f
  byr:2015 hcl:z iyr:1956
  pid:186cm eyr:2030
  
  byr:1991
  eyr:2024 pid:050818633
  hcl:#888785 cid:124 hgt:176cm ecl:gry iyr:2018
  
  byr:1963 hgt:188cm
  eyr:2021 cid:255
  ecl:oth
  hcl:#a97842
  iyr:2010 pid:030540064
  
  byr:1921 hgt:164cm pid:748078322 hcl:#c0946f ecl:blu
  eyr:2027
  iyr:2020
  
  eyr:2020 cid:214 hcl:7a942e hgt:191cm byr:1998 iyr:2012 ecl:grn pid:054135231
  
  eyr:1927 pid:242147946 iyr:2010
  hcl:ea3cb1 byr:2028
  hgt:186cm ecl:dne
  
  ecl:brn hcl:#efcc98 eyr:2021
  hgt:160cm pid:333644730 byr:1999
  iyr:2019
  
  iyr:2013 byr:1921
  hcl:#a97842 eyr:2027
  ecl:gry hgt:157cm pid:682013109
  
  ecl:gry hcl:#733820 byr:1945 hgt:174cm
  eyr:2020 pid:505827627 iyr:2019
  
  eyr:2021 iyr:2015 ecl:oth hgt:162cm pid:137342936 byr:1922 hcl:#888785
  
  hcl:#efcc98
  ecl:oth
  hgt:151cm cid:312 byr:1983
  eyr:2030 pid:289512908 iyr:2020
  
  byr:1989 iyr:2015 pid:057335770 ecl:grn eyr:2022 hgt:167cm hcl:#602927
  
  hgt:184cm iyr:2013 hcl:#c0946f byr:1969 eyr:2028
  pid:802041641
  ecl:brn
  
  pid:155cm hcl:#b6652a cid:288 byr:2028 iyr:2028 hgt:150cm
  ecl:#996e72 eyr:1960
  
  eyr:2020
  iyr:2011
  pid:934576102 byr:1994
  ecl:amb
  hcl:#18171d
  
  eyr:1993 byr:1995
  hgt:64cm iyr:2020 pid:15714997 hcl:#b6652a ecl:blu
  
  iyr:2014
  eyr:2030 pid:866047540 cid:59 hcl:#733820 byr:1951
  hgt:64in ecl:amb
  
  iyr:2015
  byr:1962
  hgt:69in ecl:brn
  hcl:#623a2f eyr:2023
  pid:671492881
  
  iyr:2020 ecl:oth hgt:154cm byr:1950 pid:924256973
  eyr:2028
  hcl:#b6652a
  
  byr:2021
  hgt:116 cid:348 iyr:1930 pid:76948864 hcl:z
  eyr:2036
  
  hgt:156cm iyr:2014
  byr:1960
  pid:720786216
  cid:99
  ecl:gry
  hcl:#a97842
  eyr:2028`


//   ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
// byr:1937 iyr:2017 cid:147 hgt:183cm
//need all but cid
  function day4(data){
    // console.log(data);
    // data = data.split(`\n  \n`)
    // console.log(data);
    let count = 0
    // data.split(" " || '\n')
    data.forEach(str => {
      str = str.split(`\n`).join(" ")
      let arr= str.split(" ").filter(e=>e.length > 1)
      // console.log(arr);
      let dict= {}
      let valid = true
      arr.map(e=> {
        e = e.split(":")
        // console.log(e);
        dict[e[0]] = e[1]
      })
      let run = true
    if(!('byr' in dict) || !('iyr' in dict) || !('eyr' in dict)|| !('hgt' in dict)|| !('hcl' in dict)|| !('ecl' in dict)|| !('pid' in dict)  ){
      valid = false
      run = false
    }
    // console.log(dict);
    if(run){
      // console.log(dict);
      if(dict['byr'] <1920 || dict['byr'] > 2002){
        valid = false
      }
      if(dict['iyr'] <2010 || dict['iyr'] > 2020){
        valid = false
      }
      if(dict['eyr'] <2020 || dict['eyr'] > 2030){
        valid = false
      }
      if(dict['hgt'].substring(dict['hgt'].length-2) == 'cm'){
       if( dict['hgt'].substring(0,3) <= 150 || dict['hgt'].substring(0,3) >= 193){
        valid = false
      }
      }else if(dict['hgt'].substring(dict['hgt'].length-2) == 'in'){
       if( dict['hgt'].substring(0,2) <= 59 || dict['hgt'].substring(0,2) >= 76){
        valid = false
        console.log(dict['hgt'] ,'hgt');
      }else {
        console.log(dict['hgt'] ,'good hgt');
      }}else {
        valid = false  
      }

// had to force my way through
      if(dict['hcl'][0] != '#' || dict['hcl'].length > 7 || dict['hcl'].length < 7 || dict['hcl'].includes('g') || dict['hcl'].includes('h') || dict['hcl'].includes('i')|| dict['hcl'].includes('j')|| dict['hcl'].includes('k')|| dict['hcl'].includes('l')|| dict['hcl'].includes('m')|| dict['hcl'].includes('n')|| dict['hcl'].includes('o')|| dict['hcl'].includes('p')|| dict['hcl'].includes('q')|| dict['hcl'].includes('r')|| dict['hcl'].includes('s')|| dict['hcl'].includes('t')|| dict['hcl'].includes('u')|| dict['hcl'].includes('v')|| dict['hcl'].includes('w')|| dict['hcl'].includes('x')|| dict['hcl'].includes('y')|| dict['hcl'].includes('z') ){
        valid = false
      }
      if(dict['ecl'] != "amb" && dict["ecl"] != "blu" && dict["ecl"] != "brn" && dict["ecl"] != "gry" && dict["ecl"] != "grn" && dict["ecl"] != "hzl" && dict["ecl"] != "oth"){
        valid = false
      }
    //  dict['pid'] = parseInt(dict['pid'])
      if( dict['pid'].toString().length > 9 || dict['pid'].toString().length < 9){
        valid = false
      }
      if(valid){
        count++
      }

      // let valid = true
      // arr.forEach(rule => {
      //   rule = rule.split(":")
      //   if(rule[0] == 'byr' && rule[1] > 1920 && rule[2] < 2002){
          
      //   }
      // });


      //NOTE pt1
      // if(str.includes("ecl") && str.includes("pid") && str.includes("hcl") && str.includes("byr") && str.includes("iyr") && str.includes("hgt") && str.includes("eyr")){
      //   count++
      // }
    }
     

    });
    // console.log(data);
    console.log(count)
  }
  let dummyData = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
  hcl:#623a2f
  
  eyr:2029 ecl:blu cid:129 byr:1989
  iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm
  
  hcl:#888785
  hgt:164cm byr:2001 iyr:2015 cid:88
  pid:545766238 ecl:hzl
  eyr:2022
  
  iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`
  let badData= `eyr:1972 cid:100
  hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926
  
  iyr:2019
  hcl:#602927 eyr:1967 hgt:170cm
  ecl:grn pid:012533040 byr:1946
  
  hcl:dab227 iyr:2012
  ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277
  
  hgt:59cm ecl:zzz
  eyr:2038 hcl:74454a iyr:2023
  pid:3556412378 byr:2007`
 

  let input4 = ['iyr:2010 ecl:gry hgt:181cm pid:591597745 byr:1920 hcl:#6b5442 eyr:2029 cid:123', 'cid:223 byr:1927 hgt:177cm hcl:#602927 iyr:2016 pid:404183620 ecl:amb eyr:2020', 'byr:1998 ecl:hzl cid:178 hcl:#a97842 iyr:2014 hgt:166cm pid:594143498 eyr:2030', 'ecl:hzl pid:795349208 iyr:2018 eyr:2024 hcl:#de745c hgt:157cm', 'hgt:159cm pid:364060467 eyr:2025 byr:1978 iyr:2018 cid:117 ecl:hzl hcl:#18171d', 'hcl:#cfa07d ecl:amb iyr:2012 hgt:182cm cid:338 eyr:2020 pid:374679609 byr:1925', 'eyr:2021 byr:1981 hcl:#623a2f cid:195 iyr:2010 pid:579769934 ecl:grn hgt:192cm', 'byr:1970 ecl:oth eyr:2025 pid:409994798 iyr:2018 hgt:189cm', 'hgt:153cm pid:817651329 iyr:2019 eyr:2029 hcl:#623a2f byr:1920 ecl:gry', 'iyr:2011 ecl:amb hcl:#a97842 byr:1965 pid:648375525 eyr:2028 hgt:177cm cid:287', 'iyr:2012 pid:369979235 hcl:#c0946f ecl:amb hgt:178cm', 'byr:1927 ecl:brn hgt:178cm eyr:2026 hcl:#efcc98 iyr:2011 pid:770851101', 'eyr:2028 ecl:oth cid:298 byr:1943 hgt:168cm iyr:2018 hcl:#ceb3a1 pid:116783406', 'eyr:2027 hgt:175cm hcl:#733820 ecl:gry cid:349 iyr:2017 byr:1960 pid:257797292', 'cid:66 ecl:amb eyr:2030 iyr:2026 byr:2024 hcl:a22966 hgt:179cm pid:155cm', 'eyr:2023 hcl:#c0946f pid:081232570 ecl:hzl iyr:2010 hgt:158cm byr:1969', 'byr:1958 ecl:grn hcl:#ceb3a1 hgt:173cm pid:600039004 cid:107 iyr:2012 eyr:2027', 'ecl:amb pid:021066381 hcl:#ceb3a1 byr:1982 iyr:2017 hgt:167cm eyr:2025 cid:61', 'hcl:#341e13 cid:268 pid:358390884 hgt:188cm byr:1961 iyr:2014 eyr:2027 ecl:blu', 'ecl:brn eyr:2020 pid:607203641 hcl:#fffffd iyr:2011 byr:1962 hgt:156cm', 'iyr:2018 hcl:#b6652a byr:1942 ecl:blu eyr:2029 hgt:154cm pid:649263319', 'ecl:oth hgt:73in iyr:2012 hcl:#888785 eyr:2020 pid:147939289 byr:1961', 'ecl:oth iyr:2015 hgt:189cm hcl:#341e13 pid:686943691 eyr:2023 byr:1987', 'pid:568844323 eyr:2023 byr:1921 hgt:167cm cid:154 hcl:#b6652a ecl:gry iyr:2020', 'eyr:2023 byr:1994 iyr:1937 hgt:177cm hcl:#c0946f pid:686240814 cid:231 ecl:#a8ba32', 'hcl:#b6652a byr:1946 pid:543383899 iyr:2013 hgt:153cm ecl:hzl cid:238 eyr:2023', 'eyr:2028 ecl:blu hgt:154cm cid:252 pid:196374590 byr:1987 iyr:2011 hcl:#7d3b0c', 'iyr:2013 ecl:amb cid:187 hgt:187cm pid:593027548 byr:1963 eyr:2024 hcl:#fffffd', 'pid:588211492 hgt:156cm iyr:2021 eyr:2021 ecl:gry hcl:z byr:1928', 'ecl:amb hcl:#888785 hgt:180cm eyr:2022 byr:1923 pid:490291639 cid:173 iyr:2015', 'iyr:2014 cid:211 pid:404157420 hcl:#602927 ecl:oth byr:1946 eyr:2030 hgt:175cm', 'hcl:z byr:2026 pid:61805448 hgt:125 iyr:2025', 'eyr:2028 hgt:156cm hcl:#341e13 cid:103 ecl:amb iyr:2017 byr:1937 pid:320691739', 'hgt:185cm pid:440489464 byr:1929 ecl:amb iyr:2011 eyr:2021 cid:327 hcl:#341e13', 'byr:1988 ecl:grn pid:062728732 iyr:2013 hgt:181cm hcl:#18171d eyr:2026', 'pid:000647617 eyr:2029 byr:1937 ecl:gry hcl:#e8eff3 hgt:164cm cid:151 iyr:2016', 'hgt:179cm byr:1949 eyr:2029 pid:459190453 ecl:grn iyr:2020 hcl:#c0946f', 'hgt:160cm pid:476613532 cid:190 iyr:2016 hcl:#4657e5 byr:1929 eyr:2028', 'ecl:grn eyr:2027 byr:1982 hcl:#18171d pid:630408328 cid:65 iyr:2020 hgt:161cm', 'pid:752776254 hcl:#888785 hgt:189cm eyr:2027 iyr:2020 ecl:hzl cid:194 byr:1934', 'iyr:2015 hgt:167cm byr:1977 eyr:2021 hcl:#14564f pid:504471386 ecl:oth', 'hgt:84 pid:168cm hcl:8532fb eyr:2023 iyr:2012 ecl:xry byr:2008 cid:288', 'cid:323 eyr:2024 iyr:2019 pid:495737304 byr:1966 hcl:#7d3b0c ecl:hzl hgt:73in', 'iyr:2020 byr:1953 ecl:hzl hcl:#efcc98 hgt:174cm eyr:2026 pid:546906638', 'pid:839249028 hcl:z byr:2024 hgt:145 eyr:2034 iyr:2021 ecl:#891c47', 'eyr:2036 ecl:#89d2ae cid:183 byr:2014 hcl:b3af0f pid:12086913 iyr:1981 hgt:61cm', 'ecl:brn eyr:2030 pid:083487445 byr:1929 hcl:z iyr:2021 hgt:182 cid:318', 'eyr:2020 pid:188609216 hcl:#341e13 iyr:2012 hgt:179cm', 'eyr:2029 hcl:#888785 pid:704026565 hgt:173cm iyr:2020 ecl:blu byr:1950 cid:237', 'ecl:grn eyr:2030 byr:1961 pid:695808266 iyr:2012 cid:56 hgt:155cm', 'iyr:2011 ecl:amb byr:1986 pid:243061330 hgt:163cm eyr:2021', 'eyr:2030 hcl:#623a2f hgt:170cm ecl:hzl pid:694575319 iyr:2011 byr:1939', 'iyr:2014 pid:184152121 hcl:#c0946f hgt:163cm eyr:2028 byr:1992 cid:114', 'ecl:hzl hgt:75in cid:233 hcl:#866857 pid:269157261 iyr:2020 byr:1973 eyr:2029', 'hgt:174cm hcl:#f86751 iyr:2016 pid:904779190 ecl:brn eyr:2024 byr:1950', 'cid:123 iyr:2019 eyr:2030 pid:402585706 ecl:brn byr:1995 hcl:#4ff7fa hgt:65in', 'ecl:grn eyr:2029 pid:083364259 iyr:2013 cid:50 byr:1938 hgt:187cm hcl:#a97842', 'hcl:#6b5442 cid:101 iyr:2011 ecl:amb eyr:2029 byr:1963 pid:664573740', 'eyr:2025 hcl:#602927 hgt:188cm iyr:2019 pid:521514539 byr:1940 ecl:gry', 'hcl:dc0449 eyr:1981 pid:188cm cid:151 iyr:1979 hgt:61cm ecl:dne byr:2028', 'iyr:2017 byr:1924 hgt:163cm eyr:2024 hcl:#ceb3a1 pid:424127124 ecl:amb', 'eyr:2039 pid:7837217107 hcl:z byr:2005 iyr:1989 ecl:#d95f4d hgt:190in', 'ecl:#329eb1 cid:178 hgt:192 eyr:2020 iyr:2012 hcl:#602927 byr:2028 pid:7175349420', 'ecl:gry byr:1931 hgt:162cm iyr:2014 eyr:2030 cid:50 hcl:#cfa07d pid:653585396', 'eyr:2025 hgt:177cm ecl:gry hcl:#efcc98 iyr:2015 byr:1942 pid:388475446', 'hcl:#efcc98 ecl:grn hgt:185cm byr:1921 pid:253592171 eyr:2031 cid:220 iyr:2024', 'byr:1950 hgt:158cm ecl:gry iyr:2015 hcl:#18171d eyr:2023 pid:151cm', 'byr:1957 hcl:z eyr:2026 ecl:grn iyr:1971 hgt:192in pid:5479810865', 'hgt:161cm pid:473851111 iyr:2018 ecl:brn byr:1982 eyr:2029', 'pid:136216608 byr:1958 cid:226 eyr:2023 hcl:#866857 iyr:2017 ecl:hzl hgt:159cm', 'byr:1993 hcl:#866857 hgt:169cm pid:488392920 cid:109 iyr:2017 ecl:oth eyr:2029', 'cid:248 ecl:amb eyr:2025 iyr:2017 byr:1951 hcl:#ceb3a1 pid:731763175 hgt:162cm', 'hcl:#835e79 eyr:2021 ecl:oth pid:617055193 byr:1997 iyr:2010 hgt:173cm', 'eyr:2024 pid:257895944 hcl:#ceb3a1 hgt:165cm ecl:oth iyr:2020 byr:1958', 'pid:438580092 ecl:grt byr:2025 hcl:z iyr:2000 eyr:1952 cid:271 hgt:170in', 'iyr:2010 hcl:#6b5442 hgt:156cm eyr:2026 ecl:grn pid:409793041 byr:1941', 'pid:076486440 hgt:177cm hcl:#888785 ecl:blu iyr:2017 eyr:2029', 'eyr:2028 ecl:amb hgt:186cm hcl:#1d5836 pid:563307670 iyr:2019 byr:1950', 'byr:1939 ecl:hzl hgt:193cm pid:329759796 hcl:#cfa07d eyr:2025 iyr:2011 cid:73', 'byr:1995 hgt:188cm eyr:2028 ecl:blu iyr:2016 hcl:#888785 pid:459613739 cid:115', 'hcl:#623a2f eyr:2021 cid:197 hgt:187cm ecl:oth byr:1969 iyr:2010 pid:385660251', 'hgt:192cm cid:143 byr:1995 hcl:#fffffd iyr:2017 ecl:oth eyr:2020 pid:087661720', 'ecl:oth byr:1994 hgt:183cm eyr:2020 iyr:2020 pid:448389966 cid:92 hcl:#866857', 'pid:088166852 hgt:155cm cid:307 byr:1940 hcl:#7d3b0c ecl:#af542f eyr:2023 iyr:2014', 'byr:2026 eyr:2039 hcl:5449b3 ecl:hzl hgt:176in iyr:1962 pid:177cm', 'iyr:2020 ecl:amb hgt:164cm hcl:#c0946f pid:931543453 eyr:2024 byr:2001', 'iyr:2010 eyr:2023 hgt:188cm hcl:#866857 ecl:hzl pid:866631112 byr:1997', 'byr:1958 hgt:184cm cid:117 hcl:#7d3b0c iyr:2019 pid:615734013 eyr:2028 ecl:gry', 'hgt:86 iyr:1935 ecl:grt pid:#af8e67 eyr:2031 byr:2018 hcl:6a2940', 'hgt:73in eyr:2022 pid:580461358 byr:1962 cid:129 iyr:2015 hcl:#7d3b0c', 'iyr:2019 hcl:#b6652a hgt:172cm ecl:blu pid:077121198 eyr:2021 byr:1995', 'hcl:#ceb3a1 cid:253 iyr:2015 hgt:177cm byr:1973 ecl:hzl pid:311289324 eyr:2025', 'iyr:2017 hcl:#efcc98 cid:57 byr:1940 ecl:blu eyr:2025 hgt:157cm pid:827480048', 'eyr:2028 hgt:189cm iyr:2016 byr:1978 ecl:hzl pid:127497651 cid:87 hcl:#623a2f', 'hcl:#341e13 byr:2015 ecl:brn hgt:187in pid:82075551 eyr:1936 cid:200 iyr:1939', 'ecl:grn byr:1962 iyr:2011 hgt:169cm pid:661559147 hcl:#623a2f eyr:2023', 'ecl:gry hcl:#efcc98 eyr:2009 byr:2028 hgt:170in cid:129 pid:161cm iyr:2018', 'pid:098090405 hcl:#623a2f byr:1943 ecl:hzl hgt:152cm iyr:2013 eyr:2029', 'pid:495271053 iyr:2011 ecl:gry hcl:#623a2f cid:285 byr:1925 eyr:2024 hgt:187cm', 'cid:306 hgt:73in iyr:2010 hcl:#448fd7 byr:1946 ecl:grn pid:137146932 eyr:2021', 'eyr:2020 hgt:159cm cid:90 iyr:2010 ecl:brn hcl:#341e13 byr:1955', 'hcl:#18171d iyr:2017 ecl:amb pid:168517472 eyr:2021 hgt:181cm byr:1942', 'cid:325 eyr:2022 pid:947158470 byr:1994 iyr:2019 ecl:grn hgt:172cm hcl:#ec63ce', 'iyr:2011 pid:243339529 ecl:amb hgt:169cm byr:1967 eyr:2025 hcl:#b6652a', 'pid:664966826 eyr:2036 iyr:2015 byr:1972 hgt:68in hcl:z ecl:#038105', 'eyr:2021 pid:236054221 hgt:179cm hcl:#b6652a iyr:2020 ecl:blu', 'ecl:grn iyr:2010 pid:870519416 byr:1945 hcl:#a97842 hgt:176cm eyr:2030', 'hcl:#3318db eyr:2022 byr:1966 ecl:grn iyr:2013 cid:349 hgt:168cm pid:827688488', 'pid:124116963 hcl:#866857 eyr:2026 iyr:2013 ecl:grn byr:1983 hgt:183cm', 'iyr:2017 byr:1993 hcl:#18171d ecl:utc hgt:68in cid:168 eyr:2030 pid:#2fd9f2', 'ecl:blu cid:134 eyr:2025 pid:588957573 iyr:2017 hgt:151cm byr:1942 hcl:#4280c1', 'hcl:#51b593 iyr:2013 ecl:amb pid:668244584 cid:282 byr:1936 eyr:1985 hgt:161cm', 'pid:494051052 hgt:185cm byr:1996 eyr:2028 iyr:2018 ecl:amb hcl:#efcc98', 'ecl:brn eyr:2025 iyr:2011 hgt:163cm hcl:#a97842 byr:1989 pid:557549000', 'pid:828235468 cid:55 iyr:2010 byr:1926 eyr:2029 hgt:153cm hcl:#cfa07d ecl:blu', 'hgt:158cm iyr:2015 pid:957913612 ecl:grn eyr:2020 byr:1984 cid:76 hcl:#6b5442', 'ecl:amb eyr:2020 pid:596116320 byr:1936 hcl:#cfa07d hgt:165cm cid:86 iyr:2014', 'iyr:2012 cid:278 hcl:#602927 eyr:2020 ecl:hzl hgt:176cm byr:1987 pid:594817909', 'iyr:2011 byr:1929 pid:073211525 eyr:2022 hgt:188cm ecl:blu hcl:#733820', 'hcl:#602927 hgt:187cm pid:706155322 cid:203 ecl:brn byr:1952 iyr:2017 eyr:2020', 'hcl:bcb5f7 byr:2002 eyr:2029 pid:850069752 iyr:2019 ecl:hzl hgt:167cm', 'hcl:#b6652a hgt:72in iyr:2013 ecl:grn eyr:2024 byr:1920 cid:114 pid:983486664', 'byr:1931 iyr:2020 pid:182737852 hgt:162cm ecl:grn hcl:#888785 eyr:2028', 'eyr:2035 byr:1962 iyr:2012 cid:120 ecl:xry hgt:61cm hcl:ce89a8 pid:335540582', 'pid:#05153d iyr:1990 eyr:1927 hgt:71cm byr:2019 cid:346 ecl:#e38688 hcl:c6abd9', 'ecl:#cd58d8 pid:166cm iyr:2012 hcl:0d1b02 hgt:68 eyr:1958', 'pid:976419172 byr:1922 cid:345 hcl:#6b5442 iyr:2010 eyr:2026 ecl:grn hgt:155cm', 'ecl:gry hcl:#1bbadc hgt:168cm eyr:2028 byr:1984 cid:179 iyr:2013 pid:706186218', 'ecl:blu hgt:188cm pid:764775319 byr:1936 hcl:#7d3b0c iyr:2020', 'hcl:#623a2f iyr:2012 pid:382832140 ecl:gry eyr:2026 cid:350 hgt:165cm byr:1968', 'hcl:0b87a1 byr:2020 pid:4365879329 cid:110 ecl:grn eyr:2032 hgt:155cm iyr:2018', 'hgt:193cm eyr:2029 hcl:#733820 pid:081071142 byr:1929 ecl:oth', 'ecl:brn eyr:2023 pid:876924536 cid:165 hcl:#efcc98 hgt:151cm byr:1972 iyr:2020', 'hgt:186cm eyr:2022 ecl:grn byr:1972 pid:997639611 hcl:#ceb3a1 iyr:2013', 'byr:1926 pid:808460262 iyr:2012 eyr:2031 hcl:#a97842 ecl:amb hgt:190cm', 'hgt:163cm hcl:#ceb3a1 eyr:2028 ecl:grn byr:1944 pid:381144425 iyr:2012', 'hcl:#95a232 pid:015229624 byr:1947 iyr:2013 hgt:66cm ecl:gry eyr:2027', 'hcl:z byr:1965 iyr:2013 hgt:157cm ecl:#8b12fb cid:246 pid:283039791 eyr:2023', 'ecl:gry byr:1950 hcl:#623a2f cid:276 iyr:2013 eyr:2030 pid:798610943 hgt:189in', 'eyr:2030 cid:52 hcl:#fffffd pid:041625574 ecl:amb iyr:2016 byr:1944 hgt:191cm', 'byr:1995 iyr:2015 cid:221 pid:279080024 eyr:2022 hgt:181cm ecl:brn hcl:#888785', 'hcl:z ecl:blu iyr:1970 eyr:2022 hgt:193cm pid:#540e31 cid:95 byr:1952', 'hcl:z eyr:2024 ecl:hzl byr:2028 cid:323 pid:1949331457 hgt:69', 'eyr:2030 hcl:#866857 cid:173 iyr:2017 hgt:190cm byr:1941 ecl:blu pid:269015932', 'hcl:#b6652a iyr:2018 eyr:2022 ecl:brn hgt:185cm pid:456195468', 'hcl:#6b5442 hgt:188cm iyr:2019 byr:1966 cid:298 pid:050653473 ecl:gry eyr:2028', 'cid:208 ecl:amb eyr:2023 hgt:176cm byr:1971 hcl:#7d3b0c pid:650190272 iyr:2018', 'hgt:68in pid:615309584 iyr:2011 byr:1950 hcl:#efcc98 ecl:oth eyr:2024', 'eyr:2022 iyr:2011 hcl:#623a2f ecl:amb byr:1955 hgt:190cm pid:244918527', 'iyr:2013 hcl:#ceb3a1 eyr:2029 hgt:164cm ecl:oth byr:1928 pid:337615663', 'hcl:#ceb3a1 pid:#ae7eea byr:2027 cid:254 hgt:125 iyr:1940 ecl:zzz', 'pid:033663619 iyr:2012 byr:1989 eyr:2030 ecl:hzl hcl:#b6652a hgt:154cm', 'hgt:175cm byr:1929 pid:100788192 ecl:#92b14c iyr:1940 hcl:#ceb3a1 eyr:2033', 'eyr:2029 pid:357835141 ecl:oth iyr:2019 hcl:#866857 hgt:154cm byr:1954', 'pid:895992818 byr:1965 iyr:2017 hcl:#efcc98 ecl:amb hgt:153cm eyr:2025', 'byr:1928 ecl:amb hgt:168cm pid:346938111 eyr:2025 iyr:2014 hcl:#cfa07d', 'hcl:#b6652a pid:825661608 eyr:2020 iyr:2019 byr:1974 hgt:180cm ecl:amb', 'byr:1970 hgt:159cm hcl:#733820 pid:101838832 iyr:2015 eyr:2027 ecl:blu', 'byr:1941 ecl:amb eyr:2024 pid:015890498 hgt:175cm iyr:2018 hcl:#cfa07d', 'hgt:67in pid:404983369 eyr:2023 iyr:2018 byr:1974 hcl:#602927 ecl:blu', 'byr:1957 hcl:#fcc940 pid:615831236 iyr:2018 eyr:2020 ecl:brn hgt:181cm cid:218', 'hcl:#fffffd ecl:grn pid:271614109 eyr:2028 hgt:184cm byr:1974 iyr:2015', 'ecl:#e45ee0 pid:151cm cid:127 iyr:2014 byr:2022 hcl:973bc1 eyr:2033 hgt:181in', 'hcl:#6b5442 pid:502739402 eyr:2020 byr:1926 ecl:brn iyr:2010', 'ecl:xry hgt:169cm byr:2023 iyr:1973 pid:4137668 eyr:2037 hcl:z', 'ecl:#3a8c46 hcl:43730a pid:57210146 eyr:2031 cid:117 iyr:2013 byr:2010', 'hcl:#341e13 cid:237 hgt:150cm iyr:2016 byr:1967 ecl:blu pid:674080319 eyr:2024', 'iyr:2011 hcl:#866857 pid:111247018 byr:1920 hgt:192in ecl:#8bf268 eyr:2021', 'iyr:2022 hcl:z ecl:gry hgt:159cm pid:#88e8df byr:2026 eyr:2032 cid:221', 'hgt:156cm eyr:2026 ecl:blu hcl:#192dea cid:280 pid:788808021 byr:1980 iyr:2013', 'hgt:156in byr:2024 hcl:4e4dd6 eyr:2030 iyr:2028 pid:35683378 ecl:#3a9fba', 'pid:081236370 cid:150 hcl:d15b43 byr:2029 hgt:118 iyr:2026 eyr:2038 ecl:grt', 'eyr:2034 pid:186cm ecl:utc cid:300 iyr:2009 byr:2018 hcl:163913 hgt:74cm', 'ecl:hzl pid:249858519 byr:1936 hgt:182cm cid:343 iyr:2013 eyr:2030 hcl:#7d3b0c', 'cid:168 ecl:hzl hgt:174cm iyr:2020 pid:446135799 hcl:#888785 eyr:2024 byr:1998', 'pid:545342162 hcl:#5cd3bd cid:126 eyr:2024 iyr:2012 ecl:grn', 'pid:104835585 byr:1989 hcl:#733820 ecl:oth eyr:2024 iyr:2017 hgt:180cm', 'hgt:184cm byr:2001 pid:199216567 ecl:gry eyr:2022 cid:185 hcl:#7d3b0c iyr:2019', 'byr:1996 eyr:2022 pid:503963080 ecl:grn iyr:2010 hcl:#fffffd', 'eyr:2030 iyr:2017 pid:472300557 hcl:#a97842 ecl:grn hgt:190cm byr:1994', 'ecl:#2a8a59 eyr:2027 iyr:2015 byr:2021 hgt:158cm pid:365979521 hcl:z cid:242', 'ecl:gry iyr:2020 hcl:#866857 pid:363851353 cid:319 hgt:154cm eyr:2027 byr:1953', 'ecl:grn hgt:165cm eyr:2026 pid:443722683 hcl:#341e13 iyr:2018 byr:1923', 'byr:1920 ecl:blu cid:193 hgt:153cm hcl:#341e13 iyr:2010 pid:934896568 eyr:2021', 'eyr:2025 pid:524699651 cid:92 hcl:#602927 byr:1999 iyr:2011 ecl:brn hgt:164cm', 'eyr:2030 pid:739947771 iyr:2018 byr:1990 hgt:185cm hcl:#602927 ecl:gry', 'byr:1967 ecl:amb iyr:2020 hcl:#341e13 hgt:165cm pid:681478012 eyr:2028', 'pid:807715479 ecl:blu byr:1955 eyr:1972 iyr:2018 hcl:#a97842 hgt:151', 'pid:635008585 cid:97 hgt:186cm hcl:#b6652a iyr:2015 eyr:2020 ecl:gry byr:1959', 'iyr:2017 cid:155 byr:1999 pid:550276277 hcl:#18171d eyr:2020 hgt:164cm ecl:amb', 'byr:1977 hcl:#6b5442 ecl:grn iyr:2012 hgt:156cm eyr:2028 pid:125635376', 'hgt:65in pid:042700658 byr:1962 iyr:2020 hcl:#888785 eyr:2021 ecl:gry', 'ecl:blu iyr:2017 hcl:#efcc98 pid:447451869 hgt:176cm byr:1958 eyr:2024', 'ecl:amb hgt:155cm eyr:2022 hcl:#efcc98 pid:614496034 byr:1957 iyr:2016', 'cid:99 eyr:2020 ecl:amb iyr:2017 hgt:163cm pid:128207503 byr:1977 hcl:#866857', 'ecl:amb cid:342 eyr:2026 hgt:172cm pid:317675262 byr:1942 hcl:#a97842 iyr:2010', 'ecl:grn pid:077163993 hgt:187cm hcl:#341e13 iyr:2012 byr:1934 eyr:2024', 'pid:423538706 hgt:156cm ecl:oth hcl:#341e13 iyr:2016 eyr:2028', 'iyr:2030 ecl:#faff64 byr:2012 pid:734434105 hgt:164in hcl:z eyr:2023', 'hgt:150in iyr:2016 pid:173cm hcl:db675a cid:219 eyr:2032 byr:1958 ecl:xry', 'pid:087437383 eyr:2025 hgt:178cm ecl:gry byr:1954 cid:227 hcl:#fffffd iyr:2018', 'pid:152cm iyr:2030 eyr:2030 byr:2010 hcl:z hgt:155cm ecl:amb', 'byr:1934 hcl:#341e13 hgt:167cm pid:#7356dd ecl:amb iyr:2011 eyr:2030 cid:123', 'eyr:2027 byr:2005 hgt:173cm cid:174 hcl:#ceb3a1 iyr:2018 ecl:amb pid:179cm', 'iyr:2019 ecl:grn eyr:2023 hgt:162cm pid:649681621 hcl:#4ee6d2 byr:1955', 'hgt:165cm byr:1929 ecl:blu pid:839016251 iyr:2017 hcl:#c0946f eyr:2020', 'eyr:2020 iyr:2017 hcl:#c7ed42 ecl:blu byr:1928 hgt:74in pid:112604496', 'eyr:2026 hgt:184 cid:113 byr:1933 pid:952646285 iyr:2019 hcl:#fffffd ecl:gry', 'pid:455008820 byr:1982 eyr:2030 ecl:gry iyr:2020 cid:103 hcl:#733820 hgt:184cm', 'hcl:#733820 iyr:2020 hgt:182cm ecl:grn cid:226 pid:081011361 eyr:2022 byr:1995', 'iyr:1999 hcl:#18171d pid:9252198900 ecl:amb byr:1999 hgt:175cm eyr:2021', 'iyr:2020 hgt:165cm ecl:blu eyr:2023 pid:760213482 byr:1968 hcl:#c0946f', 'pid:242381670 ecl:amb hgt:172cm byr:1980 eyr:2020 iyr:2014 hcl:#866857', 'byr:2021 pid:#a94a22 hcl:#cfa07d iyr:1969 eyr:2030 ecl:zzz hgt:76cm', 'ecl:oth cid:168 byr:1954 pid:079481919 eyr:2025 hcl:#c0946f hgt:172cm', 'hgt:171cm eyr:2030 byr:1969 cid:170 pid:164128658 ecl:amb hcl:#c2265e iyr:2019', 'byr:1983 cid:163 eyr:2020 pid:232659795 iyr:2013 hcl:#888785 hgt:162cm ecl:blu', 'ecl:gry hcl:#7d3b0c pid:001171231 eyr:2020 byr:1935 hgt:160cm iyr:2011', 'iyr:2012 hcl:#a97842 eyr:2029 pid:809880438 hgt:164cm cid:83 byr:1961 ecl:hzl', 'cid:288 eyr:2027 hgt:181cm byr:1955 iyr:2020 ecl:oth pid:754135833 hcl:#c0946f', 'iyr:2012 pid:053980893 cid:54 byr:1961 ecl:gry hcl:#602927 eyr:2020 hgt:167cm', 'iyr:2013 eyr:2025 hgt:176cm pid:169006156 cid:270 ecl:oth byr:2001', 'cid:244 pid:914067457 iyr:2017 byr:1926 hcl:#733820 ecl:brn hgt:187cm eyr:2030', 'ecl:oth byr:1942 hgt:176cm iyr:2020 eyr:2027 hcl:#efcc98 pid:688816242', 'hgt:177cm hcl:#efcc98 eyr:2030 pid:888703414 iyr:2010 byr:1973 ecl:gry', 'cid:257 eyr:2030 ecl:brn pid:359774824 byr:1988 hcl:#6b5442 iyr:2013 hgt:187cm', 'iyr:2011 hgt:173cm cid:290 byr:2000 ecl:gry hcl:#7d3b0c pid:743371399 eyr:2029', 'cid:162 eyr:1920 byr:2010 pid:#69d6ba hgt:74 hcl:z ecl:#d256f3 iyr:1933', 'pid:435518624 byr:1938 eyr:2027 iyr:2016 hcl:#18171d hgt:161cm ecl:gry', 'ecl:gry eyr:2027 hcl:#7d3b0c hgt:170cm pid:928345976 iyr:2020', 'hcl:#5f4023 ecl:blu pid:024527693 eyr:1932 iyr:2023 hgt:154cm byr:1948', 'cid:284 iyr:2011 byr:1920 eyr:2024 ecl:blu hgt:153cm hcl:#602927 pid:005741906', 'iyr:2029 hgt:108 byr:2029 hcl:c8b25d pid:522512400 eyr:2038 ecl:zzz cid:163', 'pid:371295649 eyr:2022 ecl:hzl iyr:2019 hgt:153cm byr:1961 hcl:z', 'eyr:2027 iyr:2020 pid:619653661 byr:1968 hcl:#b6652a cid:62 ecl:hzl hgt:186cm', 'iyr:1931 pid:565552342 ecl:#af97bb hcl:c92cd6 eyr:1931 byr:2025 hgt:184in', 'hgt:187cm ecl:grn byr:1954 cid:145 iyr:2016 hcl:#efcc98 eyr:2030 pid:202254357', 'cid:177 iyr:2013 byr:1926 hcl:#efcc98 pid:298693475 hgt:181cm eyr:2023 ecl:dne', 'byr:2014 cid:255 iyr:1951 hgt:72in hcl:#efcc98 eyr:2039 pid:135688013 ecl:grn', 'byr:2019 eyr:1971 pid:#a95cb4 hcl:#ceb3a1 ecl:#6f919c hgt:193cm iyr:2012', 'pid:497726268 ecl:grn eyr:2025 hcl:#efcc98 iyr:2019 hgt:170cm byr:1970', 'byr:1939 hcl:#18171d cid:250 iyr:2011 ecl:blu pid:216607711 hgt:158cm eyr:2029', 'byr:1937 eyr:1931 hcl:#5ee898 pid:#876b1a hgt:190cm cid:277 ecl:#5f0f80 iyr:2013', 'ecl:oth hgt:191cm eyr:2025 byr:1978 pid:271136754 hcl:#888785 iyr:2012', 'hcl:#6b5442 iyr:2015 byr:1958 pid:510020331 hgt:158cm eyr:2024 ecl:blu', 'byr:1998 cid:142 eyr:2026 iyr:2015 hcl:#733820 pid:671943334 hgt:186cm ecl:oth', 'eyr:2025 ecl:brn hcl:#7d3b0c pid:000803215 byr:1947 iyr:2017 hgt:168cm cid:230', 'pid:612432109 hgt:186cm byr:1963 ecl:hzl iyr:2019 eyr:2027 hcl:#efcc98 cid:148', 'hcl:#c0946f pid:846986027 eyr:2025 byr:1941 cid:154 hgt:158cm iyr:2012 ecl:brn', 'ecl:gry hgt:186cm iyr:2015 hcl:#602927 byr:1923 eyr:2023 pid:48544569', 'pid:857428120 hgt:158cm hcl:#e4a267 iyr:2014 eyr:2020 byr:1975 ecl:blu', 'ecl:blu pid:559783197 byr:1935 cid:119 iyr:2017 hgt:157cm hcl:#6b5442 eyr:2020', 'ecl:oth pid:724332293 hcl:#602927 cid:77 iyr:2019 byr:2001 hgt:192cm eyr:2024', 'ecl:hzl eyr:2031 hcl:#efcc98 byr:2011 cid:280 iyr:2017 pid:377875085 hgt:172cm', 'byr:1947 hgt:174cm ecl:amb iyr:2018 cid:94 hcl:#a97842 eyr:2026 pid:286225332', 'hgt:85 ecl:xry eyr:2033 iyr:1952 pid:92902290 hcl:a6f86d byr:2013', 'byr:1935 hcl:#c0946f pid:368741489 ecl:blu eyr:2020 hgt:164cm iyr:2018 cid:196', 'pid:718568707 ecl:oth byr:2003 hcl:#a97842 iyr:2010 hgt:168cm eyr:2025 cid:261', 'hcl:#6b5442 pid:675429853 hgt:62in ecl:grn iyr:2016 eyr:2027 byr:1932', 'byr:1978 pid:080846464 hcl:#ceb3a1 ecl:gry iyr:2015 hgt:190cm eyr:2029', 'pid:1756319674 iyr:2010 byr:1998 hcl:#866857 cid:259 eyr:2025 hgt:73in ecl:hzl', 'eyr:2035 hcl:z hgt:61cm pid:3267812127 cid:230 byr:2029 iyr:2028 ecl:lzr', 'hgt:161cm ecl:hzl byr:1934 iyr:2011 eyr:2025 hcl:#cfa07d pid:354474868', 'pid:727482965 hcl:#623a2f iyr:2010 hgt:156cm eyr:2020 cid:68 ecl:grn byr:1950', 'pid:040800697 hgt:186cm hcl:#341e13 iyr:2030 ecl:hzl byr:1937 eyr:2020', 'iyr:2013 byr:1928 pid:752644096 eyr:2030 hgt:191cm ecl:hzl cid:93 hcl:#a97842', 'pid:022267155 hcl:#cfa07d eyr:2026 ecl:hzl hgt:187cm iyr:2014 cid:347', 'hgt:73in eyr:2021 pid:054367702 ecl:amb hcl:#18171d byr:1965 iyr:2020 cid:267', 'eyr:2022 cid:140 pid:189859171 byr:1984 iyr:2020 ecl:brn hgt:166cm hcl:#623a2f', 'byr:1971 iyr:2015 hgt:168cm eyr:2020 pid:650970816 hcl:#341e13 ecl:grn cid:168', 'hcl:#c0946f byr:1948 hgt:189cm pid:868785851 cid:194 ecl:amb eyr:2024 iyr:2011', 'eyr:2040 byr:2030 hcl:afde59 hgt:172cm pid:72468598 iyr:1990 cid:165 ecl:#896a8e', 'iyr:2009 hcl:#6b5442 eyr:2028 cid:53 ecl:hzl hgt:165cm byr:1999 pid:844037301', 'cid:281 eyr:2022 iyr:2020 byr:1976 hgt:176cm hcl:#6b5442 ecl:amb pid:755280305', 'hgt:154cm iyr:2013 pid:059284139 byr:1992 cid:215 ecl:blu eyr:2025 hcl:#b6652a', 'ecl:grn cid:308 hgt:187cm pid:009080324 eyr:2027 iyr:2012 byr:1955', 'pid:083241291 hcl:#7c1810 eyr:2030 iyr:2019 byr:1950 ecl:brn hgt:72in', 'cid:148 byr:1953 hcl:#623a2f pid:076848285 hgt:175cm iyr:2017 eyr:2022 ecl:oth', 'iyr:2020 hgt:160cm eyr:2028 cid:312 ecl:brn hcl:#888785 pid:681067688 byr:1986', 'iyr:1972 cid:170 eyr:2023 pid:21811501 ecl:#17c6e8 hgt:158in byr:2015 hcl:5b7956', 'pid:720571739 cid:304 byr:1951 hgt:191cm eyr:2025 hcl:#341e13 iyr:2011', 'eyr:2020 ecl:blu hcl:#cfa07d pid:097863725 hgt:150cm byr:1951 cid:143 iyr:2013', 'eyr:2027 iyr:2019 ecl:#a0eeca hcl:#c0946f pid:724783488 byr:1943 cid:282 hgt:124', 'byr:2012 iyr:2013 eyr:2036 hcl:z hgt:97 pid:#677847 ecl:dne', 'pid:341708492 hgt:190cm byr:1988 hcl:#888785 ecl:hzl iyr:2015 eyr:2029', 'iyr:2020 byr:1968 ecl:gry eyr:2030 hcl:#1976b0 cid:127 pid:701862616 hgt:161cm']

  
  //149 too high
  //144 too low
  //225

  function day4part2(input) {
    let valid = 0
    let passports = []
    let bads = []
    let fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    for (let i = 0; i < input.length; i++) {
      let dataArr = input[i].split(' ')
      let pass = {}
      let passKeys = []
      let v = true
      dataArr.forEach(element => {
        let key = element.split(':')[0]
        let value = element.split(':')[1]
        pass[key] = value
        passKeys.push(key)
      });
      fields.forEach(
        f => {
          if (!passKeys.includes(f)) {
            v = false
          }
        }
      )
      v ? passports.push(pass) : "bads.push(pass)"
    }
    console.log(passports.length)
    for (let k = 0; k < passports.length; k++) {
      let pass = passports[k]
      // debugger
      if (+pass['byr'] >= 1920 && +pass['byr'] <= 2002) {
        if (+pass['iyr'] >= 2010 && +pass['iyr'] <= 2020) {
          if (+pass['eyr'] >= 2020 && +pass['eyr'] <= 2030) {
            if (pass['hgt'].includes('c') || pass['hgt'].includes('i')) {
              if ((+pass['hgt'].split('c')[0] >= 150 && +pass['hgt'].split('c')[0] <= 193) || (+pass['hgt'].split('i')[0] >= 59 && +pass['hgt'].split('i')[0] <= 76)) {
                if (pass['ecl'] == 'amb' || pass['ecl'] == 'brn' || pass['ecl'] == 'blu' || pass['ecl'] == 'gry' || pass['ecl'] == 'grn' || pass['ecl'] == 'hzl' || pass['ecl'] == 'oth') {
                  if (pass['pid'].match(/[0-9]/g).length == 9) {
                    if (pass['hcl'][0] == '#') {
                      if (pass['hcl'].match(/[#,a-f, 0-9]/g).length == 7) {
                        valid++;
                      } else { bads.push(pass) }
                    } else { bads.push(pass) }
                  } else { bads.push(pass) }
                } else { bads.push(pass) }
              } else { bads.push(pass) }
            } else { bads.push(pass) }
          } else { bads.push(pass) }
        } else { bads.push(pass) }
      } else { bads.push(pass) }
  
      // switch (false) {
      //   case (+pass['byr'] >= 1920 && +pass['byr'] <= 2002):
      //   case (+pass['iyr'] >= 2010 && +pass['iyr'] <= 2020):
      //   case (+pass['eyr'] >= 2020 && +pass['eyr'] <= 2030):
      //   case (pass['hgt'].includes('c') || pass['hgt'].includes('i')):
      //   case ((+pass['hgt'].split('c')[0] >= 150 && +pass['hgt'].split('c')[0] <= 193) || (+pass['hgt'].split('i')[0] >= 59 && +pass['hgt'].split('i')[0] <= 76)):
      //   case (pass['ecl'] == 'amb' || pass['ecl'] == 'brn' || pass['ecl'] == 'blu' || pass['ecl'] == 'gry' || pass['ecl'] == 'grn' || pass['ecl'] == 'hzl' || pass['ecl'] == 'oth'):
      //   case (pass['pid'].match(/[0-9]/g).length == 9):
      //   case (pass['hcl'][0] == '#'):
      //   case (pass['hcl'].match(/[#,a-f, 0-9]/g).length == 7):
      //     break;
      //   default:
      //     valid++
      //     break;
      // }
    }
    return valid
  }

//   console.time()
//   console.log(day4part2(input4))
// console.timeEnd()

// console.time()
  // day4(input4)
  // console.timeEnd()



  function day5(data){
data= data.split('\n')
// console.log(data);

let highest = 1
let dict = {}
let count = 0
data.forEach((str,index) => {
  let max = 127
  let min = 0
  let row;
  data[index] = str.trim()
  str = str.trim()
  for(let i = 0; i < 7; i++){
  let range = ((max - min)%2==0) ? max-min : (max%2==0 && min%2 ==1) ? (max-min +1) :(min%2==0 && max%2 ==1) ? (max - min + 1) : null
    if(str[i] == 'F'){
      max = max -(range  / 2)
    }
    if(str[i] == 'B'){
        min = (max-(range  / 2)+1)
    }
  }
  str[6] == 'F' ? row = min : str[6] == 'B'? row = max : ""

  row > highest ? highest = row : ""
  let seatmax = 7
  let seatmin = 0
  let seat;
  for(let i = 7; i<= str.length-1; i++){

    if(str[i] == 'L'){
      seatmax = seatmax -Math.floor((seatmax-seatmin) / 2)
    }
    if(str[i] == 'R'){
      seatmin =seatmax-Math.floor((seatmax-seatmin) / 2)
    }
  }
  str[str.length-1] == 'L' ? seat = seatmin : str[str.length-1] == 'R'? seat = seatmax : ""

  let id = (row * 8) + seat
  id > highest ? highest = id : ""
console.log(id);
if(dict[id]){
  dict[id]++
}else dict[id] = 1

count++
});
console.log(highest)
console.log(dict);
console.log(count);
debugger
  for(let i = 100; i < 850; i++){
    if(!dict[i] && dict[i+1] != 2){
      console.log(i, 'pt2');
    }
  }
  }


  //467

  let day5Data = `BFFBFBFLRL
  BFBFBBBLRR
  BFBFBFBLRR
  BFBFFFFRLR
  BBFFBBFRRR
  FBBBFFFRLL
  FFBFBFFLLL
  BBFBFFFRLL
  FBBBFFBLRR
  FFFFBFFRRL
  BFBFBFBRLL
  FFBFFBBLLL
  BFFBBFFRLR
  FBBFFFFLRR
  FBFBFFBRRR
  FFBFFBBRRR
  FBBBFFFRRL
  FFBBBBFRRL
  BFFBBBBLLL
  BFBBFBBLLR
  FBBFBFFLLR
  FBBFBFFLRR
  BFFFFBFLLL
  FBBBBBBRRR
  FBFFBBFLLR
  BBFBFFBRLR
  FFFFFBBLLR
  FBBFBBBRLL
  FFFFBBFRRR
  FFFFBFBLRL
  FFFBFBFLLR
  FFBFBBBLRR
  BFFBBBFRLR
  FFFBFBBLLL
  FBFBBBFLRR
  BBFFFBFLLL
  FFFFFBBLRR
  FFBFBFFRLL
  BFFFBBFRLR
  BFBBBFBLLR
  FFFBBFFLRL
  BFBBBFBLLL
  FBFBBFBRLR
  BBFFBFFRRR
  BFFFFBBLRR
  FBBBBBFLRL
  FBFBBBBRRR
  FBFBBFFLLL
  BFBBBFBRLL
  FFBBFBBLRR
  FFBFBBBRRR
  FFFFFBFLRL
  BFFBBBFLRR
  BFBBFBFLLR
  FFBFBBBLRL
  FBBBBFBLLL
  BFBBBFFLRR
  FBBFFBBLRR
  BFFBBFBLRR
  FBBBBBFLLL
  FFFFBBBRLR
  FBFBBBFLLR
  BFBFFBFRLR
  BFFBFFBRRR
  FBBFFFFLRL
  BFBFBBFLRL
  BBFBFFFRLR
  FBFFFFBLRR
  BFFFBFFRLL
  FBFFBFBLLR
  FFFBFFFRLR
  FFFBFFFRLL
  BFFBFBBLLL
  FFBBFBBLRL
  BFBBBBFLRL
  BFBBBBFLRR
  BFBFFFFRRL
  BFBBBFBRLR
  BBFFBBBLLR
  FBBFBBFRLR
  FBFBFBFLLR
  BFBFFBBRRR
  FFFFBBFLLR
  FBFFBFFLLL
  BFFFFFBRLR
  FBFBBBFLRL
  BFFFBBFLLR
  FBFBFBBRRR
  FBFFBFBLRL
  BBFFFBBLLL
  FBFFFBFRRL
  BBFFFFBRLR
  BBFFBFBRRL
  BFFBBBBRLR
  FBFFFBBLRL
  FBBFBBFLLR
  FFBBBBBLLL
  FBBBBBFLLR
  FFBFFBFRLR
  BFFBBFBLRL
  FFBBBBFRLR
  BFFBFBBRRL
  FBFBBBFLLL
  BBFBFFBRRR
  FBFBBFFLLR
  BFFFFFBRLL
  FBBBBFBLLR
  FFBBBFBLRR
  FBBBBFBRLR
  FBBBBBBRRL
  FBBFFFBRRL
  FBFBFFFLRR
  FBBFFFBRLR
  BFFBFBFRRL
  FFBFBBFRLL
  FBFBFFFRRR
  BFFFFBFRRR
  FFFFFBFRRL
  BBFFBFFLRL
  FBBBBBBLLR
  BFFFBFFRRR
  FFFFFBFRLL
  FBBFBFBLLL
  FFFFBBFLRR
  BFBBFFFRLR
  FFBFFBBLRR
  FBFFBFBLRR
  FFBBBFBLRL
  FFFBBFBRLR
  BFBFFBBLLR
  FFFBBFBLLL
  BBFFFBBLRL
  FBFBFFFRLR
  BBFFBFFRLR
  FFFBFBFRLR
  FFBBBBFLLR
  BBFFBFFLRR
  FFFFFBFRLR
  BFBFBBFRRR
  BBFFFBFRRL
  BFFBFBFLLR
  FFFBBBBLLL
  BFFFBBFLLL
  BBFFFBBRRL
  BFFFFBFRLL
  BFBFBBBLLR
  BBFBFFBRRL
  FBFFBBFLLL
  FBFBFFFRRL
  FBBFBBBLRR
  BFBBFFBRLL
  FBFBBBBRLR
  FFFBBFFLRR
  FBBFFBFRRL
  BFFBBBBLRR
  FFFFBBFRLR
  FBFBBBFRRR
  BFFBFFFRLL
  BFFFFFFRRL
  FBFFFFBRLR
  BFFFFBBRRL
  FBBBBBFRLR
  FBBBBFBLRR
  FFFBBFBRLL
  FBBFBBFRRL
  FFFBBBBRRL
  FBBFFBBRRL
  BFFBBFFLLR
  FFFBFFBRRL
  FBFFBFFLLR
  FFFFFFBRLL
  FFBBFBBRLR
  FFBBFBFLRR
  FFFBFFBRRR
  FFBFFBBLLR
  BFBFBFBLLR
  FFBBBBFRRR
  BFBBBFBLRL
  BFFFBBFRRL
  FBFBBBFRLL
  BBFFFFBRRR
  FBBFBFBRLR
  BFBBBFFRRL
  FBBBBFBRRL
  FBBBFFBLRL
  FBFFFBBRRL
  BFBBFFBRRL
  FBFBBFFLRL
  FBFBBBBLRL
  FFBBBFBRRL
  FBBBBBBLRL
  FFFFBBFRLL
  FBFBBFBRLL
  BFBFBBFLLR
  FBFFFBBRLR
  BFBFBBBRRR
  FBBBBBBLRR
  BFFBFFBRRL
  FFBBBBBRLR
  BFFFBBFLRL
  FBFBBBBRLL
  FFFFFBFRRR
  BFBBBBFRLR
  FFBFFBFRRL
  FBBBBBBRLR
  FBFFFBBLRR
  FFFBFFBRLR
  BFBFFBFLLR
  FFFFFBBRRL
  FBBBBBFRRL
  FFFFBBBRRR
  BFBBFFFRLL
  BBFFBFBLLR
  FFFFBFFLRR
  FBFFFBFLLL
  FBBFFBFRLR
  BBFBFFBLLR
  BBFBFFFLRL
  BFFFBBBRLR
  BFFBFFBLRL
  BFBFBFFLRL
  FBBFFBBRLR
  FBFBFBBRLL
  FFBFFFFLLL
  FFFFBFBLLL
  FBBFFBBLLR
  FFFFBBBLRR
  FFFFFBBRRR
  BBFFFFFRLL
  FBFBBFBRRR
  FBBFFFFRRR
  FFFFBFBRLR
  BFFFFBBLLR
  FFFBBBFRLL
  BFFBBBBRRR
  FBFFBBFRLL
  BFBBFBFLRL
  FBFBFBBLLL
  FFBFFFFRRL
  FBFBBBFRRL
  FBBBBBBRLL
  BFFFBFBRRR
  BFBFBFBRRR
  FBFFFBBRLL
  BFFFFBBLLL
  FFFBFFFRRL
  FBBBBFFRRL
  BFFFFFFLRR
  BFBFBFFLRR
  BFFFFBBRLL
  FBBFFFFRRL
  BFBBFBBRRR
  FFFBFFBLLR
  BFFBFFFRLR
  FFBFFFBLLR
  BFBFBFBLLL
  BFFBFFFLRR
  FFBBFFBLRR
  FBBFFBFRLL
  FFBFBFBRRL
  FBFFFFFLLR
  FBFFBBFRLR
  FBFBBBFRLR
  FFBBFFFLRR
  FBBFFFFLLL
  FFFBFFFLRL
  BFFBBFBLLR
  BFFFFFBLLL
  BBFBFFBLLL
  BFFBFBBLRR
  BBFFFFBRLL
  FBFFBFFLRL
  FBBFFFFLLR
  FFFBBFFRLR
  FFFBBFBLRL
  BFFBBBBLLR
  BFBBBFBRRL
  FFBBBFFLRR
  FBBFFBBRLL
  FFFBFBBRRR
  BFFBFFFLRL
  BFFFBFFLLR
  FFFBFBFLLL
  FFBFBFFRRL
  FFFBFFFRRR
  BFBFFFFLRL
  BFFFFFBRRL
  FFFBFBBLRL
  FBFFBFFRRL
  FFFFBFFLLR
  FFBBBBFRLL
  FBBBBFFLRR
  FFFFBFFLLL
  BFBBBBFRRL
  FBFBBFFLRR
  FFBBFBFRLL
  FFFBFBBRLL
  BFFFFFFLRL
  BBFFFFBLRL
  BFFFFFFRLR
  FBFFFBFRLR
  FBFFFFFLRL
  BFBFBFFRLL
  FFBBFBFLRL
  FFFBBBFLLR
  FBBFFFBRRR
  FFFFFBFLRR
  FBFFFBBLLR
  FFFFBFBLRR
  FBBFBBBLLR
  FBBBFFBLLL
  BBFFBFFRRL
  BFBBFBBLLL
  FBFFBFFRRR
  FBFFFFBRLL
  FFBBBFBRRR
  FBBFFBBLLL
  BBFFBBBRLL
  FBFFFBFLRR
  FBBBFFBRLR
  FFBBBBBLLR
  FBFFFFBLRL
  BFFFBFBRLL
  FFFFFBBLRL
  BFBBFFBLLL
  BBFFBBFLRR
  BBFFBFFLLL
  FBFBFFBRRL
  BFFBBFFRRL
  BFFBBFBRRR
  FFBBBFBRLL
  FBBFBFBRRL
  FBFBBFBLLL
  BFFFBBBLLL
  FFFBBBFLRL
  BFBBFFFLRL
  FFFBFFBLLL
  FFBBFBBRRR
  FBBBBFFLLL
  BBFBFFFRRR
  FFBFFBFLRR
  BFFBBFBLLL
  BFFFBFBLLR
  FFBBFBFRRR
  BBFFFBBLRR
  FFFFBFFRLL
  BFBBBFFRLL
  BFBFBFFRRL
  BFBFFBBLRR
  FBBFFFFRLL
  FFFBFBBLLR
  BBFFBBBLRR
  FFBFBFBRLR
  BBFFBBFLRL
  BBFFFBBLLR
  BFFFBBFLRR
  FBBBBFFRLL
  FBBFFFBLRR
  BFBFBFBRLR
  FBFBBFFRLR
  FFFFBFFLRL
  FBBBFBBLLR
  FBFFFFFRLR
  FBBFBBFLRR
  BFBFBFFRLR
  FFBFFBFLLR
  FFFFBBBRLL
  FBBBFBBRLL
  FFFBFBFLRL
  BFBBFFFLLR
  BFFBFFBLRR
  BFFFBFFRLR
  FBBFFBFLLL
  FBFBBBBRRL
  FBBBBBFRLL
  FBFFBBBRLR
  FFBFFFBRRL
  FFBFFBFLLL
  BFBFBBFRLR
  BFFFBFFLRL
  FFBBBBBRRL
  FBBFFBBLRL
  FBFFFBBRRR
  FBBFBFFLRL
  BFFBFBFLRR
  FFBBBFFRRR
  BFBFFBBRLR
  FBFBFBFRRL
  FFBFBBBLLL
  FBBFFFBLLL
  FFFBBFBRRL
  FFFFBBBRRL
  FBBBFBFLLR
  FBBBBBFRRR
  FBFBBBBLLL
  FFFBFBBLRR
  FFBBFBBLLL
  FBBFBBFLLL
  FBFFFFBRRR
  FBBBFFFLRR
  FFFBFBBRLR
  FBFFFFFRRR
  BFBBFBFLLL
  BFFFBBFRRR
  BFFFBFBLRR
  FBFFBFBRLR
  BFBFFFBRLR
  BFBBBBBLRL
  BBFFBFBRRR
  FFBFFFFRLL
  FFFFFBFLLR
  FBBBFBFRRR
  BFBFFFBRRR
  FBFBFFBLRL
  FBFFBFBLLL
  FBBFFFBLRL
  BFFBFBBRLL
  FFFBFFBLRR
  BFBBFBFLRR
  FBBFBBFRLL
  FFBFBFFLLR
  FFBBFBFRLR
  FBFBFBBLRR
  FFFBFBBRRL
  FBFBFFFLLR
  BFFBBFFLRR
  FFBFFBBLRL
  FFFFBFBRLL
  BFBBBFFRRR
  BFBFFFFRRR
  FBFBBFBRRL
  BFBBFFFLRR
  BFBBFFBLRR
  BFBFFFFLRR
  FBFBFFFLLL
  FFFBBBBRRR
  FBBBBFFLRL
  FBFBFFBLLL
  BBFBFFBLRL
  FFBFFBBRRL
  BBFFFFBRRL
  FBFFBBBLRR
  FBFBFFFRLL
  BFBBBFFLLL
  FBBBFFBRRL
  BBFFBFFLLR
  FBFFFFFRRL
  BFFBFFBRLR
  BFBFBBFLRR
  FFBFFFBLRL
  FFBFBBBLLR
  FFFBBBBLLR
  FFBBFBFRRL
  FFBFFFFRLR
  FFBFFFBRRR
  FBBFFBFLRR
  BBFBFFFLRR
  FFBFBFBLLL
  BFBBFFFRRR
  FBBBFFFLLR
  FBFFBFFLRR
  BBFFFFBLLR
  FBFFFBFLRL
  FFFBBFBLRR
  FBBBBFBLRL
  FFFFFFBRRR
  BFBBFBFRLR
  FFFBFBFRRL
  FFBBFFFLRL
  FFFFBBBLLL
  FBBFBFFRRR
  BFFBFBFLLL
  BFFFFFFRLL
  BFBBBBBRLR
  FBBBFBFLRR
  BFBBBFFLLR
  BFBBBBBRRL
  FFBBBFFLLL
  BFBFBFFLLR
  FBFBFBFRLR
  FBBFBBFRRR
  BFFBBFFRRR
  FFFFFFBRLR
  FBBFBFBLRL
  FFBFFBFRRR
  FFBFFFBLLL
  FBBFBBBRLR
  BFBFBBBRLR
  BBFBFFBLRR
  FBFFBFBRRL
  FBFBFBBLRL
  FFBBBFBRLR
  BFBFFBBRRL
  FFBBFFBRRL
  FBFFFFFRLL
  BFBBBBFRLL
  BBFFFFBLRR
  FBBBFBFRRL
  FBFBFFBRLR
  FFFFBFBRRR
  FBFFBBFLRR
  BFFFBFBRLR
  BFBBFBFRLL
  FBBBFFFRRR
  FFBFBBFRRL
  FBBBFFFLLL
  FBBFBFBLLR
  FFFFBFFRRR
  FFFFBBFLLL
  BFFBFBFRLL
  FFBFBFBLLR
  BFFBFFFRRR
  BBFBFFFLLL
  FBFFFFFLLL
  FFFBBBBRLL
  FFBBFBBLLR
  FBFFFFBLLL
  BFBBBBFLLR
  FFFBBFBRRR
  BBFBFBFLLL
  BFBBFFFRRL
  BFBFFBBLRL
  FBFBBFFRRL
  FFFBBBBRLR
  FBFFFFBLLR
  FFFBBBFLLL
  BFBBFFBRLR
  FFBFBBFLLR
  BBFBFFBRLL
  FBFBBFBLLR
  BFBFFFBLRL
  FFFFBBFLRL
  BBFFFBFRLL
  FBBBFFBRLL
  BFFFBFFRRL
  BFBFBBFRRL
  FBFBFBBRLR
  FFFFFBBRLL
  BFBFFFBRRL
  BFFFFBBRLR
  FBFFBBBRLL
  FFBFFBBRLR
  BFFBFBBRRR
  BBFFFBFLRL
  FBFFFBFLLR
  FBBFFFFRLR
  BFFFBFBLRL
  FFBFBBFLLL
  BFFFFFBLLR
  FFBBFBBRRL
  FBFBBBBLLR
  BFFBBFBRLL
  BBFFBBFLLL
  FFBFFBBRLL
  FFBBBFBLLR
  BBFBFBFLRL
  BFFFBBBLRL
  FBBFBBBLRL
  FBBFBFFRRL
  BFBFFBBRLL
  FFBBBBBLRL
  FFBBBBFLLL
  BFBBBFBLRR
  FFFBFBFRRR
  BFBBBBBLLR
  FFBBFFBLLL
  BFBBBBFLLL
  FBBBFBFRLR
  FFBFFFFLLR
  BBFFBBBRRL
  BFFBBFFRLL
  BFFBBBBLRL
  BFBFBFFRRR
  FFBFBBFRLR
  BBFFBBFRLR
  BFFFBBBLLR
  BFBFFBFRRL
  FFFFFBFLLL
  FBFFBBBRRL
  BFBFBBFLLL
  BFFFFFBLRL
  FBBBFBBLLL
  FFBBFFBRRR
  FFFBBFFLLR
  BFBFFBFLRL
  FFBFFFBRLR
  FBFFFBFRLL
  BFFFFFFLLR
  BFFBBBFRRR
  FFBFBFFRLR
  BBFFBFBRLL
  FFFBFBFRLL
  BBFFFBFRLR
  BFFBFFBLLL
  FFBFBBFRRR
  BFBFFBFRLL
  FBBBBFFRLR
  FFBFBFBRLL
  BFFBFBBLLR
  FBFFBFFRLL
  FFBFBBBRRL
  FBFBBFBLRR
  FBBFFBFRRR
  FFBFBFFRRR
  BBFFFFFLRL
  FBBBFFBLLR
  FBFBFBFRLL
  BBFFFFFRLR
  FBBBBFBRRR
  BBFFFFFRRR
  FFFBFFFLLR
  BFBFBBBLRL
  FBFBBBBLRR
  BBFFFBFLLR
  BFBBFBBLRL
  BFFBFBFRLR
  BFFBBFBRRL
  BFFBFFBRLL
  FFBFFFBRLL
  FFBBFFFRLL
  FBFBFFFLRL
  FBBFBBBLLL
  BFFBFFFLLL
  FBFFFFFLRR
  BFBFBBBRLL
  FBFFBBBLLL
  FFFBBFFRLL
  FFBFFFFRRR
  FFBBBBFLRL
  FFBFFBFRLL
  FFBBFFFRRR
  BFBBBBBLLL
  FFFBBFFLLL
  BFBBBFFRLR
  FBFFBBBLRL
  BFBBFFBLRL
  FBBFBFFLLL
  FFFBFFFLLL
  FBBBFBBRRL
  FFFBFBFLRR
  BFBBFFBLLR
  FFBFBFBRRR
  BFBFBBBLLL
  FBFBFBBRRL
  BFFFBBBRLL
  FBFBFFBRLL
  FBFFBBFRRL
  BFFFBBBRRR
  FFFFBFFRLR
  BFBBFBFRRR
  BFBBBBBRLL
  FBBBFBBRLR
  FFBFFFBLRR
  BBFFFFFLLL
  FFBFBFFLRL
  BFBFFBFRRR
  BBFFBBFRLL
  FFBBBFBLLL
  BFFFFFBLRR
  FBBBBBBLLL
  BFFBFFFLLR
  FFBFBFFLRR
  BFBBBBBLRR
  FBBFBFBRLL
  BFBBBBFRRR
  BBFFFFBLLL
  BFFBFFBLLR
  FBFBFBBLLR
  BFFFFFBRRR
  FBBFBFFRLR
  FBFFBBFLRL
  FBFFBBBLLR
  FFBBFFBRLR
  FFBFFFFLRL
  FBBBFBBRRR
  FFBFBBBRLL
  BFBFFFBLLR
  BFBFFBFLLL
  FFFBBFFRRL
  FBBFFBBRRR
  FFFFBBBLLR
  BFBFFFBRLL
  BFBFFFFLLL
  BFFBFFFRRL
  FBBFFBFLLR
  FBFFBBBRRR
  FFFFBFBRRL
  BFFFFBFLLR
  FFFBFFFLRR
  BFBBFBFRRL
  FFFFBFBLLR
  FBBFBFBLRR
  FFFBBBFRRR
  FFFBBBBLRL
  FBFFFFBRRL
  BFBBFFBRRR
  FFBFFFFLRR
  FFBBFFFRLR
  BFBFFFBLRR
  FFBBFBFLLR
  FFBBFFFLLL
  BFFFBFBRRL
  FFBBBFFRLR
  FBFBFBFRRR
  FFFFFBBLLL
  BBFFBBFLLR
  FBFBFBFLRR
  BBFFFFFRRL
  BFBBFBBLRR
  FBBBBBFLRR
  BFFBBFFLRL
  BBFBFFFRRL
  FBFFBFFRLR
  FBFBFFBLRR
  FBBBFBFLRL
  FFFBBBBLRR
  BBFFFBBRRR
  FFBBBBFLRR
  BBFFBBBRRR
  FBFBFBFLRL
  BBFFBBBLRL
  BFBBFBBRLR
  FBBBFBFLLL
  BFFBFBBLRL
  BFFFFFFRRR
  BFFBBBFLLL
  FFBFBBFLRR
  FFFBFFBRLL
  FBBFFFBLLR
  FFBBBFFLRL
  BFBFBFBLRL
  BFBFFFBLLL
  FFBBBFFRRL
  BBFFBBBRLR
  BFBFFFFLLR
  BFFFBBBRRL
  BBFFBFBRLR
  BFFFBFBLLL
  BFFFBFFLLL
  BFBFFBFLRR
  BFFBBFBRLR
  BBFFBBFRRL
  BFBBFBBRLL
  FFBBBBBRRR
  BFBBBFBRRR
  FBFFBBFRRR
  BBFFBFBLLL
  BFFFFBBRRR
  FBBFBBBRRL
  BFFBBBFLLR
  BFBFBFBRRL
  FFBBFFFRRL
  BFFBBFFLLL
  FBBBBFFRRR
  BBFFFBFLRR
  BBFFFFFLRR
  FBFFFBBLLL
  FBBBFFFRLR
  FBBBFFFLRL
  BFFBBBFLRL
  FFBFBBBRLR
  FFBFFBFLRL
  FBFBFBFLLL
  FBBBBFFLLR
  BFFFFFFLLL
  FFFBBBFLRR
  FBBBFBBLRL
  FBBBBFBRLL
  BFBBBFFLRL
  BBFFBFFRLL
  BBFFFFFLLR
  FBBFBFBRRR
  FBFBBFFRRR
  BFFBBBFRLL
  BFFFFBFRLR
  FFBFBFBLRL
  FFFFBBFRRL
  FFFFFFBRRL
  FFFBFFBLRL
  BFFBBBBRLL
  FBFBBFBLRL
  BBFFFBBRLL
  FBFFBFBRLL
  FFBBBBBRLL
  FFBFBBFLRL
  FFFFFBBRLR
  FFBBFBFLLL
  FFFFFFBLRR
  BBFFFBFRRR
  FBBFFFBRLL
  FFFFBBBLRL
  BFFFFBFLRR
  BBFBFBFLLR
  BFFFFBFRRL
  BFBBFFFLLL
  FBFFBFBRRR
  BFFFBBFRLL
  BFFFFBBLRL
  FFFBBBFRRL
  FBFFFBFRRR
  FFBBBFFRLL
  BFBFFBBLLL
  BFBFBBBRRL
  BFFFFBFLRL
  FBBFBBBRRR
  FBBFBBFLRL
  FBBBFBBLRR
  FBBBFFBRRR
  BBFFBFBLRR
  FFBBBFFLLR
  BFBFBFFLLL
  FFBBFFBLLR
  FBFBBFFRLL
  FBBFFBFLRL
  FFBFBFBLRR
  FFFBBFBLLR
  FFBBFFBLRL
  BFBBBBBRRR
  BFBFBBFRLL
  FFBBFFFLLR
  FFBBFFBRLL
  FFFBBBFRLR
  BFFFBFFLRR
  BFFBFBBRLR
  BBFFBBBLLL
  FBFBFFBLLR
  FFFBBFFRRR
  BBFBFFFLLR
  FBBFBFFRLL
  FFBBFBBRLL
  FBBBFBFRLL
  BFBBFBBRRL
  BFBFFFFRLL
  BFFFBBBLRR
  FFBBBBBLRR
  BBFFFBBRLR
  BFFBBBFRRL
  BBFFBFBLRL
  BFFBBBBRRL`


  let testData= `BFFFBBFRRR
  FFFBBBFRRR
  BBFFBBFRLL`
  day5(day5Data)

  //859
  //855
  //847
  //819

  //r ==1 l == 0
  //b == 0 f == 1



