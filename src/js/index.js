import "../scss/index.scss"
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free-solid";

// 參考語法
// 使用 Sort 排序資料
// data = data.sort(function (a, b) {
//   // 抓出排序資料的值
//   a = a[欄位]
//   b = b[欄位]

//   // 回傳 1, 0, -1 來進行排列
//   // 詳細規則可參考 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//   return (a === b ? 0 : a > b ? 1 : -1) * 正反排序數值
// })

const app = new Vue({
  el: '#app',
  data: {
    data: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    sortItem: 'price',
    sortID: 1
  },
  computed: {
    sortData() {
      let sortItem = this.sortItem
      let sortID = this.sortID
      return this.data.sort((a, b) => a[sortItem] === b[sortItem] ? 0 : a[sortItem] > b[sortItem] ? 1 * sortID : -1 * sortID)
    }
  },
  methods: {
    itemEvent(item) {
      this.sortItem = item
      this.sortID = this.sortID * -1
    }
  },
});