function onc(num) {
  if (num == "one") {
    const app = document.getElementById("inp");
    if (app.value != "") {
      alert(app.value);
    } else {
      alert("enter your Gmail");
    }
    app.value = "";
  } else {
    const app = document.getElementById("inp1");
    if (app.value != "") {
      alert(app.value);
    } else {
      alert("enter your Gmail");
    }
    app.value = "";
  }
}

function openbtn(num) {
  let arr = [
    document.getElementById("open0"),
    document.getElementById("open1"),
    document.getElementById("open2"),
    document.getElementById("open3"),
    document.getElementById("open4"),
  ];

  let arr1 = [
    document.getElementById("rotate0"),
    document.getElementById("rotate1"),
    document.getElementById("rotate2"),
    document.getElementById("rotate3"),
    document.getElementById("rotate4"),
  ];

  if (num >= 0) {
    let ans = arr[num];
    let ans1 = arr1[num];

    if (ans.style.display == "block") {
      ans.style.display = "none";
      ans1.style.transform = "rotate(90deg)";
    } else {
      ans.style.display = "block";
      ans1.style.transform = "rotate(40deg)";
    }
  }

  const ans1 = arr.filter((val, i) => {
    return i != num;
  });

  ans1.forEach((val) => {
    val.style.display = "none";
  });
}
