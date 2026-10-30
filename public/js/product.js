const form = document.getElementById("productForm");

const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const productName = document.getElementById("product").value;

    try {

        const response = await axios.post("/api/products", {
            productName: productName
        });

        console.log(response.data);

        result.innerText = response.data.message;

        form.reset();

    } catch (error) {

        console.log("Error:", error);

        result.innerText = "Failed to add product";

    }

});