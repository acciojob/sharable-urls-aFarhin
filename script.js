// your code here
  const button = document.getElementById("button");
      const url = document.getElementById("url");
      const name = document.getElementById("name");
      const year = document.getElementById("year");
      button.onclick = function() {
        let urlString = "https://localhost:8080/";
        if (name.value) {
          urlString += `?name=${name.value}`;
          if (year.value) {
            urlString += `&year=${year.value}`;
          }
        } else if (year.value) {
          urlString += `?year=${year.value}`;
        }
        url.textContent = urlString;
      }
