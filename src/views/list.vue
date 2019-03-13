<template>
  <div>
    <p v-show="pageList.length==0" style="margin:30px 0;">这里空空如也！</p>
    <ul>
      <li
        class="item"
        v-for="(item,index) in pageList"
        :key="index"
        @click="choose(index)"
        :class="{actives:index==current && current !==''}"
      >
        <div class="title">{{item.title}}</div>
        <div class="con">{{item.content}}</div>
        <div class="date clearfix">
          <span class="time">{{item.date}}</span>
          <span class="infomation" v-if="index==current && current !==''" @click="info()">查看详情》》</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import store from "@/store";
export default {
  store,
  name: "list",
  data() {
    return {
      listLength: "",
      current: ""
    };
  },
  mounted() {
    this.listLength = store.state.list.length;
    // console.log(this.listLength);
  },
  computed: {
    pageList() {
      return store.state.list;
    }
  },
  methods: {
    choose(index) {
      this.current = index;
      // console.log(this.current);
    },
    info(index) {
      this.$router.push({ path: "/info", query: { index: this.current } });
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  margin-top: 10px;
  display: flex;
  flex-flow: column;
  margin-bottom: 100px;
  .item {
    flex: 1;
    padding: 10px;
    height: 80px;
    border: 1px solid #999;
    margin: 10px;
    border-radius: 5px;
    text-align: left;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
    .title {
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .con {
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .date {
      margin-top: 5px;
      .time {
        float: left;
      }
      .infomation {
        float: right;
        font-size: 13px;
      }
    }
    &.actives {
      background: #42b983;
      color: #fff;
      .title {
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>