<template>
  <div class="grid-container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
    <div class="item item7">7</div>
    <div class="item item8">8</div>
    <div class="item item9">9</div>
  </div>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style scoped lang="less">
  .grid-container {
    background-color: #ebece1;
    height: 600px;
    display: grid;
    /*grid-template-rows: 1fr 1fr 1fr;*/
    grid-template-rows: repeat(3, 50px);
    grid-template-columns: repeat(3, 60px);
    /*grid-template-columns: 1fr 2fr minmax(30px, 1fr);*/
    /*grid-template-columns: repeat(auto-fill, 200px);*/
    /*可选值：row和column；默认row的放置顺序是"先行后列"*/
    grid-auto-flow: row dense;
    /*项目直接的行间距和列间距*/
    /*grid-row-gap: 20px;*/
    /*grid-column-gap: 20px;*/
    grid-template-areas: 'a b c'
                         'd e f'
                         'g h i';
    /*justify-items属性设置单元格内容的水平位置（左中右）*/
    justify-items: stretch; // start | end | center | stretch;
    /*align-items属性设置单元格内容的垂直位置（上中下）*/
    align-items: stretch; // start | end | center | stretch
    /*justify-content属性是整个内容区域在容器里面的水平位置（左中右）*/
    justify-content: space-evenly; // start | end | center | stretch | space-around | space-between | space-evenly
    /*align-content属性是整个内容区域的垂直位置（上中下）*/
    align-content: space-evenly; // start | end | center | stretch | space-around | space-between | space-evenly
    /*浏览器自动创建的多余网格的列宽和行高*/
    grid-auto-rows: 50px;
    grid-auto-columns: 50px;
    .item {
      border: 1px solid white;
      text-align: center;
      padding: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .item1 {
      background-color: #63a35c;
      /*grid-area属性指定项目放在哪一个区域*/
      /*配合grid-template-areas使用*/
      grid-area: e;
      /*属性设置单元格内容的水平位置（左中右），可选值start | end | center | stretch，但只作用于单个项目*/
      justify-self: center;
      /*属性设置单元格内容的垂直位置（上中下），可选值start | end | center | stretch，也是只作用于单个项目*/
      align-self: center;
      /*规定单个项目列占据的位置*/
      /*方法一*/
      /*grid-column-start: span 2;*/
      /*方法二*/
      /*grid-column-end: span 2;*/
      /*方法三*/
      /*grid-column-start: 1;*/
      /*grid-column-end: 3;*/
      /*规定单个项目行占据的位置--和列的用法相同*/
      /*grid-row-end: span 2;*/
    }
    .item2 {
      background-color: #a39d3e;
    }
    .item3 {
      background-color: #33a2a3;
    }
    .item4 {
      background-color: #5c63a3;
    }
    .item5 {
      background-color: #926ba3;
    }
    .item6 {
      background-color: #a34f53;
    }
    .item7 {
      background-color: #1b75a3;
    }
    .item8 {
      background-color: #41a315;
    }
    .item9 {
      background-color: #a33f79;
    }
  }
</style>
