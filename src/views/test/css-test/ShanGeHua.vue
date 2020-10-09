<template>
  <div>
    <div class="card-container display_flex_start_wrap">
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-12@2x.png" alt="图片">
        <p class="card-width card-font">财税</p>
        <div class="card-content">
          <p class="font_size20 color_white">财税业务场景</p>
          <p class="margintop-24">资金对账</p>
          <p>自动建账</p>
          <p>日记账与银行流水核对</p>
          <p>全税种自动报税</p>
          <p>账龄分析等</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-13@2x.png" alt="图片">
        <p class="card-width card-font">银行业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">银行业务场景</p>
          <p class="margintop-24">信用数据收集报送</p>
          <p>反洗钱信息收集</p>
          <p>批量报表下载</p>
          <p>征信查询、白名单</p>
          <p>业务系统运行监控</p>
          <p>市场数据维护</p>
          <p>资金自动对账</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-14@2x.png" alt="图片">
        <p class="card-width card-font">证券业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">证券业务场景</p>
          <p class="margintop-24">中登电子合同上传</p>
          <p>上海清算所数据查询</p>
          <p>资金控制数据报送</p>
          <p>日终清算</p>
          <p>清算/TA数据核对</p>
          <p>资金清算报表打印</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-15@2x.png" alt="图片">
        <p class="card-width card-font">电商业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">电商业务场景</p>
          <p class="margintop-24">门店回款核对</p>
          <p>自动发货/退货</p>
          <p>电商数据下载与录入</p>
          <p>广告投入分析</p>
          <p>客户行为分析等</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-16@2x.png" alt="图片">
        <p class="card-width card-font">供应链业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">供应链业务场景</p>
          <p class="margintop-24">库存管理与库存预警</p>
          <p>物流数据监控</p>
          <p>订单监控及发送货</p>
          <p>出库入库管理等</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-17@2x.png" alt="图片">
        <p class="card-width card-font">人力资源业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">人力资源业务场景</p>
          <p class="margintop-24">新员工账号自动创建</p>
          <p>入职/离职管理</p>
          <p>薪酬福利核算</p>
          <p>应聘者筛选</p>
          <p>出勤及绩效管理等</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-18@2x.png" alt="图片">
        <p class="card-width card-font">IT业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">IT业务场景</p>
          <p class="margintop-24">IT资产管理</p>
          <p>自动数据管理和维护</p>
          <p>自动巡检等</p>
        </div>
      </div>
      <div class="card-item">
        <img class="card-width" src="../../../../static/img/image-rpa-new/rpa-auto-19@2x.png" alt="图片">
        <p class="card-width card-font">运营业务场景</p>
        <div class="card-content">
          <p class="font_size20 color_white">运营业务场景</p>
          <p class="margintop-24">客户信息采集与分析</p>
          <p>舆情分析</p>
          <p>敏感词监控</p>
          <p>客服绩效监控</p>
          <p>电子邮件实时监控等</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShanGeHua'
}
</script>

<style scoped lang="less">
  .margintop-24 {
    margin-top: 24px;
  }
  .card-container {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    .card-item {
      position: relative;
      width: 250px;
      height: 265px;
      margin: 20px;
      box-shadow: 2px 2px 4px 2px rgba(183, 177, 177, 0.43);
      .card-width {
        width: 100%;
      }
      .card-font {
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 19px;
        margin: 0;
      }
      .card-content {
        position: absolute;
        height: 265px;
        width: 250px;
        bottom: -262px;
        padding: 8px 20px;
        color: rgba(255, 255, 255, 0.55);
        background-color: #59a8e6;
        opacity: 0;
        visibility: hidden;
      }
    }
    .card-item:hover .card-content {
      transition: 1.5s .5s;
      bottom: 0;
      opacity: 1;
      visibility: visible;
    }
  }
</style>
