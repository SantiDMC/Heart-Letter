$(document).ready(() => {
  const envelope = $("#envelope");
  const btn_open = $("#open");
  const btn_reset = $("#reset");

  envelope.click(() => {
    open();
  });
  btn_open.click(() => {
    open();
  });
  btn_reset.click(() => {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});