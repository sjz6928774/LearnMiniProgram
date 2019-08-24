Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      { id: 110, name: 'kobe', age: 30 },
      { id: 111, name: 'james', age: 13 },
      { id: 112, name: 'curry', age: 20 }
    ],
    counter: 0
  },
  handleBtnClick(){
    // 1.错误做法: 界面是不会刷新的 
    // this.data.counter ++
    // console.log(this.data.counter)

    //2.this.setData
    this.setData({
      counter: this.data.counter +1
    })
  },
  handleSubTraction() {
    this.setData({
      counter: this.data.counter>0?this.data.counter -1:0
    })
  }
})