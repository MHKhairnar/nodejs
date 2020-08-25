let ajaxcall = function () {
  let xhe = new XMLHttpRequest();
  XPathResult.open("GET", "http://localhost:5600/");
  xhr.onload = () => {
    const response = xhr.responseText;
    console.log(response);
  };
  xhr.send();
};
