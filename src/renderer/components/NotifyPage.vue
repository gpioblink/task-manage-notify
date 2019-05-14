<template>
<div id="shinchoku-box">
    <div class="task-box">
      <div id="next-task">タスク管理システムを完成させる</div>
    </div>
    <button class="btn-border">Next</button>
</div>
</template>

<script>
export default {
  name: 'notify-page',
};
</script>

<style>
html {
  -webkit-app-region: drag;
}
body {
  margin: 0;
  overflow:hidden;
  -webkit-user-select: none;
}
#shinchoku-box {
  position: absolute;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  background-color: #fff3db;
  border: solid 0.03em #fcaf16;
  overflow: hidden;
  box-sizing:border-box;
}
.task-box {
  float: left;
  width: 24em;
  height: 2em;
  display: flex;
  align-items: center;
  
}
#next-task {
  float: left;
  position: relative;
  margin: 0;
  font-size: 1em;
  margin-left: 0.2em;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  display: -webkit-box;
  overflow: hidden;
  -webkit-app-region: no-drag;
}
.btn-border {
  float: left;
  margin: 0em;
  text-align: left;
  border: 0.1em solid #9ec34b;
  font-size: 1em;
  color: #9ec34b;
  background-color: #eeeeee;
  text-decoration: none;
  font-weight: bold;
  padding: 0.3em 1em;
  border-radius: 0.4em;
  transition: .4s;
}
.btn-border:hover {
  background-color: #9ec34b;
  border-color: #cbe585;
  color: #FFF;
}
</style>