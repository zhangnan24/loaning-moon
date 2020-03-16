<template>
  <div :class="['theme', checked ? 'dark': 'light']">
    <p>{{checked ? '暗夜模式🌙' : '日间模式🌞'}}</p>
    <van-switch v-model="checked" />
    <h1 class="title">孔乙己</h1>
    <p class="author">鲁迅</p>
    <p
      class="content"
    >孔乙己一到店，所有喝酒的人便都看着他笑，有的叫道，“孔乙己，你脸上又添上新伤疤了！”他不回答，对柜里说，“温两碗酒，要一碟茴香豆。”便排出九文大钱。他们又故意的高声嚷道，“你一定又偷了人家的东西了！”孔乙己睁大眼睛说，“你怎么这样凭空污人清白……”“什么清白？我前天亲眼见你偷了何家的书，吊着打。”孔乙己便涨红了脸，额上的青筋条条绽出，争辩道，“窃书不能算偷……窃书！……读书人的事，能算偷么？</p>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="less" scoped>
.light {
  --bg: #fff;
  --text: #333;
}

.dark {
  --bg: #072033;
  --text: #fff;
}
.theme {
  box-sizing: border-box;
  height: 100%;
  padding: 15px;
  background: var(--bg);
  color: var(--text);
}

.title {
  text-align: center;
}

.author {
  text-align: right;
}

.content {
  line-height: 30px;
}
</style>
