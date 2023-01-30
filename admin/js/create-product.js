
  var form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var title = document.querySelector("#title").value;
    var description = document.querySelector("#description").value;
    var price = document.querySelector("#price").value;
    var stock = document.querySelector("#stock").value;

    fetch("https://api.example.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: pris,
        stock: stock
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("Product created successfully!");
      } else {
        alert("Failed to create product, please try again later.");
      }
    });
  });
