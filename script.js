// your code here
function generateURL() {
			var name = document.getElementById("name").value;
			var year = document.getElementById("year").value;

			var url = "https://localhost:8080/?";
			if (name != "") {
				url += "name=" + name;
				if (year != "") {
					url += "&year=" + year;
				}
			}
			else if (year != "") {
				url += "year=" + year;
			}

			document.getElementById("url").textContent = url;
		}