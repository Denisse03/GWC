import * as MODEL from "./model.js";

function initListener() {
  $("nav a").click((e) => {
    let btnid = e.currentTarget.id;
    MODEL.pageContent(btnid);
  });
}

$(document).ready(function () {
  initListener();
  MODEL.pageContent("home");
});
