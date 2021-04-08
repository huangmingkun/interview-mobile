<template>
  <div class="main">
    <!--<div class="header"></div>-->
    <div class="bottom-container">
      <div class="sidebar">
        <div class="btn-top">
          <div class="btn-item">
            <p class="btn-icon">X</p>
            <p class="btn-content">消息</p>
          </div>
          <div class="btn-item">
            <p class="btn-icon">X</p>
            <p class="btn-content">文档</p>
          </div>
          <div class="btn-item">
            <p class="btn-icon">X</p>
            <p class="btn-content">工作台</p>
          </div>
          <div class="btn-item">
            <p class="btn-icon">X</p>
            <p class="btn-content">通讯录</p>
          </div>
        </div>
        <div class="btn-bottom">
          <div class="btn-item">
            <p class="btn-icon">X</p>
            <p class="btn-content">日历</p>
          </div>
        </div>
      </div>
      <div class="user-list">
        <div class="list-item" v-for="(item, index) in 10" :key="index">
          <img class="list-item-left-img" src="@/assets/img/test/avatar.png">
          <div class="list-item-right-content">
            <p class="list-item-right-content-top text-ellipsis">{{index}}-尚阳软件开发前端群尚阳软件开发前端群</p>
            <p class="list-item-right-content-bottom text-ellipsis">xxx：分享干货</p>
          </div>
        </div>
      </div>
      <div class="msg-container">
        <div class="msg-content">
          <p v-for="(item, index) in msgArr"
             :key="index"
             @contextmenu="msgClick(index)">
            {{index}}--{{item}}
          </p>
          <div class="right-click-menus"
               v-if="isRightClickMsgShow">
            <p class="right-click-menus-item"
               @click.stop="deleteMsg(currentRightClickIndex)">删除</p>
            <p class="right-click-menus-item">复制</p>
            <p class="right-click-menus-item">撤回</p>
          </div>
        </div>
        <div class="msg-input">
          <textarea v-model="inputValue" @keyup.enter="submit"></textarea>
        </div>
        <div class="msg-submit">
          <button class="submit-btn" @click="submit">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystecElectronDemo',
  data () {
    return {
      msgArr: [],
      inputValue: '',
      currentRightClickIndex: '',
      isRightClickMsgShow: false
    }
  },
  methods: {
    submit () {
      const that = this;
      that.inputValue && that.msgArr.push(that.inputValue);
      that.inputValue = ''
    },
    // 内容右键事件
    msgClick (idx) {
      const that = this;
      that.currentRightClickIndex = idx;
      that.isRightClickMsgShow = !that.isRightClickMsgShow;
    },
    // 删除内容事件
    deleteMsg (idx) {
      const that = this;
      that.msgArr.splice(idx, 1);
      that.isRightClickMsgShow = false;
      console.log('that.msgArr', that.msgArr);
    }
  }
}
</script>

<style scoped lang="less">
  .text-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .main {
    width: 800px;
    height: 600px;
    .header {
      position: fixed;
      top: 0;
      height: 45px;
      width: 800px;
      background-color: #26a2ff;
      margin-bottom: 45px;
    }
    .bottom-container {
      display: flex;
      height: 100%;
      width: 100%;
      .sidebar {
        width: 70px;
        height: 100%;
        background-color: #edeff1;
        display: flex;
        flex-direction: column;
        .btn-top, .btn-bottom {
          padding: 6px 3px;
          flex: 1;
        }
        .btn-item {
          margin: 6px 4px;
          padding: 2px;
          border: 1px solid #d4d1d1;
          border-radius: 7px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          .btn-icon {
            width: 30px;
            height: 30px;
            line-height: 30px;
            margin: auto;
          }
          .btn-content {
            font-size: 12px;
            padding: 3px;
            color: #a9a9a9;
          }
        }
        .btn-item:hover {
          background-color: #dedede;
        }
      }
      .user-list {
        width: 200px;
        height: 100%;
        overflow: auto;
        background-color: white;
        margin-bottom: 50px;
        .list-item {
          width: 95%;
          height: 60px;
          margin: 6px auto;
          padding: 6px;
          /*background-color: #0c1830;*/
          display: flex;
          cursor: pointer;
          .list-item-left-img {
            width: 44px;
            height: 44px;
            margin: 3px 4px;
          }
          .list-item-right-content {
            width: calc(100% - 44px);
            padding: 3px;
            text-align: left;
            font-size: 14px;
            .list-item-right-content-top {
              padding-top: 3px;
              padding-bottom: 3px;
            }
            .list-item-right-content-bottom {
              padding-top: 3px;
              padding-bottom: 3px;
            }
          }
        }
        .list-item:hover {
          background-color: #d1d3d6;
        }
      }
      .msg-container {
        flex-grow: 1;
        background-color: #edeff1;
        .msg-content {
          position: relative;
          height: 60%;
          padding: 8px 6px;
          overflow: auto;
          width: calc(100% - 8px);
          margin-right: 8px;
          /*background-color: #2ad043;*/
          .right-click-menus {
            position: absolute;
            top: 30px;
            left: 45%;
            height: auto;
            width: 50px;
            background-color: white;
            padding: 8px 3px;
            border-radius: 6px;
            .right-click-menus-item {
              padding: 6px;
              cursor: pointer;
            }
          }
        }
        .msg-input {
          height: calc(40% - 50px);
          width: 100%;
          border-top: 1px solid #dddddd;
          /*background-color: #046a38;*/
          textarea {
            /*border-style: none;*/
            resize: none;
            width: calc(100% - 8px);
            height: 100%;
            border: none;
            outline: none;
            padding: 10px;
            overflow: auto;
            margin-right: 8px;
            background-color: #edeff1;
            /*height: 100%;*/
          }
        }
        .msg-submit {
          /*border-top: 1px solid #dddddd;*/
          text-align: right;
          height: 50px;
          line-height: 50px;
          padding-right: 25px;
          .submit-btn {
            border: 1px solid #dddd;
            border-radius: 6px;
            background-color: #26a2ff;
            padding: 4px 12px;
            color: white;
            outline: none;
            cursor: pointer;
          }
          .submit-btn:hover {
            background-color: #1285ff;
          }
        }
      }
    }
  }
</style>
