function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = ["Alvarez, Ariana ", "Cai, Vickie ", "Caplan-Volkwein, Benjamin ", "Chen, Linda ", "Eblahan, John ",
            "Emmendorfer, Eric ", "Gong, Juanya ", "Guo, Chelsea ", "Hawkins, Chloe ", "He, Emma ",
            "He, Xinyi ", "Hunt, Hannah ", "Kameswaran, Divya ", "Kang, Ashley ", "Krupa, Sean ",
            "Lazouski, Irina ", "Li, Jeffrey ", "Ma, Yuanzhe ", "Murray, Jackie ", "Naralasetty, Rohith ",
            "Park, Andrew ", "Phan, Long ", "Roy, Krishna ", "Sang, Christine ", "Shao, Kathleen ",
            "Shcherbinina, Sasha ", "Shukla, Krishi ", "Sun, Jingyi ", "Tan, jiayi ", "Wang, John ",
            "Xu, Karen ", "Young, Noah ", "Zeng, Darren ", "Zhang, Dana ", "Zhao, Yuntian "];

            // Used like so
var cats = ["tabby ", "house cat ",];

shuffle(arr);
console.log(arr);

//order of presentations
/*
Dec 6
0: "Cai, Vickie "
​
1: "Phan, Long "
​
2: "Murray, Jackie "
​
3: "Guo, Chelsea "
​
4: "Hunt, Hannah "
​
5: "Eblahan, John "
​
6: "Emmendorfer, Eric "
​
7: "Zeng, Darren "
​
8: "Kang, Ashley "
​
9: "Tan, jiayi "
​
10: "Park, Andrew "
​
11: "Zhang, Dana "
Dec 8
​
12: "Naralasetty, Rohith "
​
13: "Alvarez, Ariana "
​
14: "Lazouski, Irina "
​
15: "Ma, Yuanzhe "
​
16: "Shukla, Krishi "
​
17: "Kameswaran, Divya "
​
18: "Roy, Krishna "
​
19: "Sun, Jingyi "
​
20: "Caplan-Volkwein, Benjamin "
​
21: "Krupa, Sean "
​
22: "Zhao, Yuntian "
​
23: "Wang, John "
​
24: "He, Xinyi "
Dec 13
​
25: "He, Emma "
26: "Xu, Karen "
27: "Shao, Kathleen "
28: "Chen, Linda "
29: "Gong, Juanya "
30: "Young, Noah "
31: "Hawkins, Chloe "
32: "Shcherbinina, Sasha "
33: "Li, Jeffrey "
34: "Sang, Christine "
length: 35
*/
