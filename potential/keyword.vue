<template lang="">
    <div>
        

<div class='panel-wrap'  v-if="isShow" data-value="exit"  @click='colse_da'>
  <div class="vehicle-panel" :style="{background:backgroundColor}">
      <!-- height:'500rpx'; -->
  <div class='topItem'>
    <span class='check'  @click='check'>中/英</span>
    <span class='contentShow'>{{oinp}}</span>
    <span class='exit' @click='vehicleTap("exit")'>取消</span>
    
  </div>
  <!--省份简写键盘-->
  <div v-if="keyBoardType === 1">
    <div class="vehicle-panel-row">
      <div    class='vehicle-panel-row-button' :style="{border:buttonBorder}" v-for="(item,idx) in keyVehicle1" @click='vehicleTap(item)' :key="idx+item">{{item}}</div>
    </div>
    <div class="vehicle-panel-row">
      <div    class='vehicle-panel-row-button' :style="{border:buttonBorder}" v-for="(item,idx) in keyVehicle2" @click='vehicleTap(item)'  :key="idx+item">{{item}}</div>
    </div>
    <div class="vehicle-panel-row">
      <div    class='vehicle-panel-row-button' :style="{border:buttonBorder}" v-for="(item,idx) in keyVehicle3" @click='vehicleTap(item)'  :key="idx+item">
        {{item}}
      </div>
       <div  :style="{border:buttonBorder}"   class='vehicle-panel-row-button vehicle-panel-row-button-img'>
      <img src='../assets/delete.svg' class='vehicle-en-button-delete' @click='vehicleTap("delete")' mode='aspectFit'>
    </div>
    </div>
   
    <div class="vehicle-panel-row-last">
      <div    class='vehicle-panel-row-button vehicle-panel-row-button-last' @click='vehicleTap(item)'  v-for="(item,idx) in keyVehicle4" :style="{border:buttonBorder}"
        :key="idx+item">{{item}}</div>
    </div>
  </div>
  <!--英文键盘  -->
  <div v-else>
    <div class="vehicle-panel-row">
      <div    class='vehicle-panel-row-button vehicle-panel-row-button-number' @click='vehicleTap(item)'  v-for="(item,idx) in keyNumber" :style="{border:buttonBorder}"
        :key="item+idx">{{item}}</div>
    </div>
    <div class="vehicle-panel-row">
      <div    class='vehicle-panel-row-button' :style="{border:buttonBorder}" v-for="(item,idx) in keyEnInput1" @click='vehicleTap(item)'   :key="idx+item">{{item}}</div>
    </div>
    <div class="vehicle-panel-row">
      <div    class='vehicle-panel-row-button' :style="{border:buttonBorder}"  v-for="(item,idx) in keyEnInput2" @click='vehicleTap(item)'   :key="idx+item">{{item}}</div>
      <div  :style="{border:buttonBorder}"   class='vehicle-panel-row-button vehicle-panel-row-button-img'>
        <img src='../assets/delete.svg' class='vehicle-en-button-delete' @click='vehicleTap("delete")' mode='aspectFit'>
      </div>
    </div>
    <div class="vehicle-panel-row-last">
      <div    class='vehicle-panel-row-button vehicle-panel-row-button-last' @click='vehicleTap(item)' :style="{border:buttonBorder}"  v-for="(item,idx) in keyEnInput3"
        :key="idx+item">{{item}}</div>
      <div  :style="{border:buttonBorder}"   class='vehicle-panel-row-button vehicle-panel-ok' @click='vehicleTap("ok")' >确定</div>
    </div>
  </div>
</div>
</div>
    </div>
</template>
<script>
export default {
  props:{
    isShow: false,
    oinp: ""
  },
  data() {
    return {
      keyVehicle1: ["陕", "京", "津", "沪", "冀", "豫", "云", "辽"],
      keyVehicle2: ["黑", "湘", "皖", "鲁", "新", "苏", "浙", "赣"],
      keyVehicle3: ["鄂", "桂", "甘", "晋", "蒙", "吉", "闽"],
      keyVehicle4: ["粤", "川", "青", "藏", "琼", "宁", "贵", "渝"],
      keyNumber: "1234567890",
      keyEnInput1: "QWERTYUIOP",
      keyEnInput2: "ASDFGHJKL",
      keyEnInput3: "ZXCVBNM",
      backgroundColor: "#fff",
      keyBoardType: 1,
      buttonBorder: "1px solid #ccc"
    };
  },
  methods: {
    vehicleTap: function(event) {
      console.log(event);
      switch (event) {
        case "delete":
          this.$emit("delete");
          this.$emit("inputchange",event);
          break;
        case "ok":
          this.$emit("ok");
          break;
        case "exit":
          this.$emit("exit");
          break;
        default:
          this.$emit("inputchange", event);
      }
    },
    colse_da() {
      this.$emit("exit2");
    },
    check() {
      if (this.keyBoardType == 1) {
        this.keyBoardType = 2;
      } else if (this.keyBoardType == 2) {
        this.keyBoardType = 1;
      }
    }
  }
};
</script>
<style>
:host {
  width: 100%;
}
.panel-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.vehicle-panel {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
  background: #fff;
  padding-bottom: 0.68rem;
}
.jik {
  width: 0.6rem;
  height: 0.8rem;
}

.vehicle-panel-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vehicle-panel-row-last {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vehicle-panel-row-button {
  background-color: #fff;
  margin: 0.05rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 0.1rem;
}
.vehicle-panel-row-button-number {
  background-color: #eee;
}
.vehicle-panel-row-button-last {
  width: 0.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
}
.vehicle-hover {
  background-color: #ccc;
}
.vehicle-panel-row-button-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vehicle-en-button-delete {
  width: 0.55rem;
  height: 0.85rem;
}
.vehicle-panel-ok {
  background-color: #6a7cff;
  color: #fff;
  width: 1.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.topItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  /* background: #f0f0f0; */
}
.exit {
  margin-right: 0.3rem;
  color: #6a7cff;
  font-size: 0.28rem;
  display: block;
  line-height: 0.5rem;
}
.check {
  margin-left: 0.3rem;
  color: #6a7cff;
  font-size: 0.28rem;
  display: block;
  line-height: 0.5rem;
}
</style>