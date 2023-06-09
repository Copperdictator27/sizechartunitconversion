var xxsWidth = document.getElementById("xxs-width-cm");
var xxsLength = document.getElementById("xxs-length");
var xxsStretchWidth = document.getElementById("xxs-stretch-cm");
var xsWidth = document.getElementById("xs-width-cm");
var xsStretchWidth = document.getElementById("xs-stretch-cm");
var xsLength = document.getElementById("xs-length-cm");
var sWidth = document.getElementById("s-width-cm");
var sStretchWidth = document.getElementById("s-stretch-cm");
var sLength = document.getElementById("s-length-cm");
var mWidth = document.getElementById("m-width-cm");
var mStretchWidth = document.getElementById("m-stretch-cm");
var mLength = document.getElementById("m-length-cm");
var lWidth = document.getElementById("l-width-cm");
var lStretchWidth = document.getElementById("l-stretch-cm");
var lLength = document.getElementById("l-length-cm");
var xlWidth = document.getElementById("xl-width-cm");
var xlStretchWidth = document.getElementById("xl-stretch-cm");
var xlLength = document.getElementById("xl-length-cm");
var xxlWidth = document.getElementById("xxl-width-cm");
var xxlStretchWidth = document.getElementById("xxl-stretch-cm");
var xxlLength = document.getElementById("xxl-length-cm");
var xxxlWidth = document.getElementById("xxxl-width-cm");
var xxxlStretchWidth = document.getElementById("xxxl-stretch-cm");
var xxxlLength = document.getElementById("xxxl-length-cm");
var xxxxlWidth = document.getElementById("xxxxl-width-cm");
var xxxxlStretchWidth = document.getElementById("xxxxl-stretch-cm");
var xxxxlLength = document.getElementById("xxxxl-length-cm");
var nsWidth = document.getElementById("ns-width-cm");
var nsStretchWidth = document.getElementById("ns-stretch-cm");
var nsLength = document.getElementById("ns-length-cm");

var studio = document.getElementById("on-cm");

xxsWidth.value = $(xxsWidth).data("inch");
xxsLength.value = $(xxsLength).data("inch");
xxsStretchWidth.value = $(xxsStretchWidth).data("inch");
xsWidth.value = $(xsWidth).data("inch");
xsStretchWidth.value = $(xsStretchWidth).data("inch");
xsLength.value = $(xsLength).data("inch");
sWidth.value = $(sWidth).data("inch");
sStretchWidth.value = $(sStretchWidth).data("inch");
sLength.value = $(sLength).data("inch");
mWidth.value = $(mWidth).data("inch");
mStretchWidth.value = $(mStretchWidth).data("inch");
mLength.value = $(mLength).data("inch");
lWidth.value = $(lWidth).data("inch");
lStretchWidth.value = $(lStretchWidth).data("inch");
lLength.value = $(lLength).data("inch");
xlWidth.value = $(xlWidth).data("inch");
xlStretchWidth.value = $(xlStretchWidth).data("inch");
xlLength.value = $(xlLength).data("inch");
xxlWidth.value = $(xxlWidth).data("inch");
xxlStretchWidth.value = $(xxlStretchWidth).data("inch");
xxlLength.value = $(xxlLength).data("inch");
xxxlWidth.value = $(xxxlWidth).data("inch");
xxxlStretchWidth.value = $(xxxlStretchWidth).data("inch");
xxxlLength.value = $(xxxlLength).data("inch");
xxxxlWidth.value = $(xxxxlWidth).data("inch");
xxxxlStretchWidth.value = $(xxxxlStretchWidth).data("inch");
xxxxlLength.value = $(xxxxlLength).data("inch");
nsWidth.value = $(nsWidth).data("inch");
nsStretchWidth.value = $(nsStretchWidth).data("inch");
nsLength.value = $(nsLength).data("inch");

function calculateChange() {
  xxsWidth.value = $(xxsWidth).data("inch");
  widthDefault = xxsWidth.value;
  $("#xxs-width-cm").html(widthDefault);
  xxsLength.value = $(xxsLength).data("inch");
  xxsLengthDefault = xxsLength.value;
  $("#xxs-length").html(xxsLengthDefault);
  xxsStretchWidth.value = $(xxsStretchWidth).data("inch");
  xxsStretchWidthDefault = xxsStretchWidth.value;
  $("#xxs-stretch-cm").html(xxsStretchWidthDefault);
  xsWidth.value = $(xsWidth).data("inch");
  xsWidthDefault = xsWidth.value;
  $("#xs-width-cm").html(xsWidthDefault);
  xsStretchWidth.value = $(xsStretchWidth).data("inch");
  xsStretchWidthDefault = xsStretchWidth.value;
  $("#xs-stretch-cm").html(xsStretchWidthDefault);
  xsLength.value = $(xsLength).data("inch");
  xsLengthDefault = xsLength.value;
  $("#xs-length-cm").html(xsLengthDefault);
  sWidth.value = $(sWidth).data("inch");
  sWidthDefault = sWidth.value;
  $("#s-width-cm").html(sWidthDefault);
  sStretchWidth.value = $(sStretchWidth).data("inch");
  sStretchWidthDefault = sStretchWidth.value;
  $("#s-stretch-cm").html(sStretchWidthDefault);
  sLength.value = $(sLength).data("inch");
  sLengthDefault = sLength.value;
  $("#s-length-cm").html(sLengthDefault);
  mWidth.value = $(mWidth).data("inch");
  mWidthDefault = mWidth.value;
  $("#m-width-cm").html(mWidthDefault);
  mStretchWidth.value = $(mStretchWidth).data("inch");
  mStretchWidthDefault = mStretchWidth.value;
  $("#m-stretch-cm").html(mStretchWidthDefault);
  mLength.value = $(mLength).data("inch");
  mLengthDefault = mLength.value;
  $("#m-length-cm").html(mLengthDefault);
  lWidth.value = $(lWidth).data("inch");
  lWidthDefault = lWidth.value;
  $("#l-width-cm").html(lWidthDefault);
  lStretchWidth.value = $(lStretchWidth).data("inch");
  lStretchWidthDefault = lStretchWidth.value;
  $("#l-stretch-cm").html(lStretchWidthDefault);
  lLength.value = $(lLength).data("inch");
  lLengthDefault = lLength.value;
  $("#l-length-cm").html(lLengthDefault);
  xlWidth.value = $(xlWidth).data("inch");
  xlWidthDefault = xlWidth.value;
  $("#xl-width-cm").html(xlWidthDefault);
  xlStretchWidth.value = $(xlStretchWidth).data("inch");
  xlStretchWidthDefault = xlStretchWidth.value;
  $("#xl-stretch-cm").html(xlStretchWidthDefault);
  xlLength.value = $(xlLength).data("inch");
  xlLengthDefault = xlLength.value;
  $("#xl-length-cm").html(xlLengthDefault);
  xxlWidth.value = $(xxlWidth).data("inch");
  xxlWidthDefault = xxlWidth.value;
  $("#xxl-width-cm").html(xxlWidthDefault);
  xxlStretchWidth.value = $(xxlStretchWidth).data("inch");
  xxlStretchWidthDefault = xxlStretchWidth.value;
  $("#xxl-stretch-cm").html(xxlStretchWidthDefault);
  xxlLength.value = $(xxlLength).data("inch");
  xxlLengthDefault = xxlLength.value;
  $("#xxl-length-cm").html(xxlLengthDefault);
  xxxlWidth.value = $(xxxlWidth).data("inch");
  xxxlWidthDefault = xxxlWidth.value;
  $("#xxxl-width-cm").html(xxxlWidthDefault);
  xxxlStretchWidth.value = $(xxxlStretchWidth).data("inch");
  xxxlStretchWidthDefault = xxxlStretchWidth.value;
  $("#xxxl-stretch-cm").html(xxxlStretchWidthDefault);
  xxxlLength.value = $(xxxlLength).data("inch");
  xxxlLengthDefault = xxxlLength.value;
  $("#xxxl-length-cm").html(xxxlLengthDefault);
  xxxxlWidth.value = $(xxxxlWidth).data("inch");
  xxxxlWidthDefault = xxxxlWidth.value;
  $("#xxxxl-width-cm").html(xxxxlWidthDefault);
  xxxxlStretchWidth.value = $(xxxxlStretchWidth).data("inch");
  xxxxlStretchWidthDefault = xxxxlStretchWidth.value;
  $("#xxxxl-stretch-cm").html(xxxxlStretchWidthDefault);
  xxxxlLength.value = $(xxxxlLength).data("inch");
  xxxxlLengthDefault = xxxxlLength.value;
  $("#xxxxl-length-cm").html(xxxxlLengthDefault);
  nsWidth.value = $(nsWidth).data("inch");
  nsWidthDefault = nsWidth.value;
  $("#ns-width-cm").html(nsWidthDefault);
  nsStretchWidth.value = $(nsStretchWidth).data("inch");
  nsStretchWidthDefault = nsStretchWidth.value;
  $("#ns-stretch-cm").html(nsStretchWidthDefault);
  nsLength.value = $(nsLength).data("inch");
  nsLengthDefault = nsLength.value;
  $("#ns-length-cm").html(nsLengthDefault);

  if (studio.checked === true) {
    xxsWidth.value = Number(xxsWidth.value) * 2.54;
    wid = xxsWidth.value;
    $("#xxs-width-cm").html(wid);
    xxsLength.value = Number(xxsLength.value) * 2.54;
    xxsLengthCm = xxsLength.value;
    $("#xxs-length").html(xxsLengthCm);
    xxsStretchWidth.value = Number(xxsStretchWidth.value) * 2.54;
    xxsStretchWidthCm = xxsStretchWidth.value;
    $("#xxs-stretch-cm").html(xxsStretchWidthCm);
    xsWidth.value = Number(xsWidth.value) * 2.54;
    xsWidthCm = xsWidth.value;
    $("#xs-width-cm").html(xsWidthCm);
    xsStretchWidth.value = Number(xsStretchWidth.value) * 2.54;
    xsStretchWidthCm = xsStretchWidth.value;
    $("#xs-stretch-cm").html(xsStretchWidthCm);
    xsLength.value = Number(xsLength.value) * 2.54;
    xsLengthCm = xsLength.value;
    $("#xs-length-cm").html(xsLengthCm);
    sWidth.value = Number(sWidth.value) * 2.54;
    sWidthCm = sWidth.value;
    $("#s-width-cm").html(sWidthCm);
    sStretchWidth.value = Number(sStretchWidth.value) * 2.54;
    sStretchWidthCm = sStretchWidth.value;
    $("#s-stretch-cm").html(sStretchWidthCm);
    sLength.value = Number(sLength.value) * 2.54;
    sLengthCm = sLength.value;
    $("#s-length-cm").html(sLengthCm);
    mWidth.value = Number(mWidth.value) * 2.54;
    mWidthCm = mWidth.value;
    $("#m-width-cm").html(mWidthCm);
    mStretchWidth.value = Number(mStretchWidth.value) * 2.54;
    mStretchWidthCm = mStretchWidth.value;
    $("#m-stretch-cm").html(mStretchWidthCm);
    mLength.value = Number(mLength.value) * 2.54;
    mLengthCm = mLength.value;
    $("#m-length-cm").html(mLengthCm);
    lWidth.value = Number(lWidth.value) * 2.54;
    lWidthCm = lWidth.value;
    $("#l-width-cm").html(lWidthCm);
    lStretchWidth.value = Number(lStretchWidth.value) * 2.54;
    lStretchWidthCm = lStretchWidth.value;
    $("#l-stretch-cm").html(lStretchWidthCm);
    lLength.value = Number(lLength.value) * 2.54;
    lLengthCm = lLength.value;
    $("#l-length-cm").html(lLengthCm);
    xlWidth.value = Number(xlWidth.value) * 2.54;
    xlWidthCm = xlWidth.value;
    $("#xl-width-cm").html(xlWidthCm);
    xlStretchWidth.value = Number(xlStretchWidth.value) * 2.54;
    xlStretchWidthCm = xlStretchWidth.value;
    $("#xl-stretch-cm").html(xlStretchWidthCm);
    xlLength.value = Number(xlLength.value) * 2.54;
    xlLengthCm = xlLength.value;
    $("#xl-length-cm").html(xlLengthCm);
    xxlWidth.value = Number(xxlWidth.value) * 2.54;
    xxlWidthCm = xxlWidth.value;
    $("#xxl-width-cm").html(xxlWidthCm);
    xxlStretchWidth.value = Number(xxlStretchWidth.value) * 2.54;
    xxlStretchWidthCm = xxlStretchWidth.value;
    $("#xxl-stretch-cm").html(xxlStretchWidthCm);
    xxlLength.value = Number(xxlLength.value) * 2.54;
    xxlLengthCm = xxlLength.value;
    $("#xxl-length-cm").html(xxlLengthCm);
    xxxlWidth.value = Number(xxxlWidth.value) * 2.54;
    xxxlWidthCm = xxxlWidth.value;
    $("#xxxl-width-cm").html(xxxlWidthCm);
    xxxlStretchWidth.value = Number(xxxlStretchWidth.value) * 2.54;
    xxxlStretchWidthCm = xxxlStretchWidth.value;
    $("#xxxl-stretch-cm").html(xxxlStretchWidthCm);
    xxxlLength.value = Number(xxxlLength.value) * 2.54;
    xxxlLengthCm = xxxlLength.value;
    $("#xxxl-length-cm").html(xxxlLengthCm);
    xxxxlWidth.value = Number(xxxxlWidth.value) * 2.54;
    xxxxlWidthCm = xxxxlWidth.value;
    $("#xxxxl-width-cm").html(xxxxlWidthCm);
    xxxxlStretchWidth.value = Number(xxxxlStretchWidth.value) * 2.54;
    xxxxlStretchWidthCm = xxxxlStretchWidth.value;
    $("#xxxxl-stretch-cm").html(xxxxlStretchWidthCm);
    xxxxlLength.value = Number(xxxxlLength.value) * 2.54;
    xxxxlLengthCm = xxxxlLength.value;
    $("#xxxxl-length-cm").html(xxxxlLengthCm);
    nsWidth.value = Number(nsWidth.value) * 2.54;
    nsWidthCm = nsWidth.value;
    $("#ns-width-cm").html(nsWidthCm);
    nsStretchWidth.value = Number(nsStretchWidth.value) * 2.54;
    nsStretchWidthCm = nsStretchWidth.value;
    $("#ns-stretch-cm").html(nsStretchWidthCm);
    nsLength.value = Number(nsLength.value) * 2.54;
    nsLengthCm = nsLength.value;
    $("#ns-length-cm").html(nsLengthCm);
  }
}
studio.onchange = function () {
  calculateChange();
};
