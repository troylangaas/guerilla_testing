document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Create the popup container
        const popup = document.createElement('div');
        popup.id = 'sale-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = 'white';
        popup.style.padding = '20px';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        popup.style.zIndex = '1000';
        popup.style.textAlign = 'center';

        // Create the header
        const header = document.createElement('h2');
        header.textContent = 'UNIQUE SALE JUST FOR YOU';
        popup.appendChild(header);

        // Create the image
        const image = document.createElement('img');
        image.src = 'assets/designer.jpeg'; // Link to your image in the assets folder
        image.alt = 'Sale Item';
        image.style.maxWidth = '300px'; // Set maximum width
        image.style.height = 'auto'; // Maintain aspect ratio
        popup.appendChild(image);

        // Create the price
        const price = document.createElement('p');
        price.textContent = '$9.99'; // Replace with your price
        popup.appendChild(price);

        // Create the "Add to Cart" button
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.className = 'btn';
        addToCartButton.style.backgroundColor = 'red';
        addToCartButton.style.borderColor = 'red';
        addToCartButton.style.color = 'white';
        addToCartButton.style.margin = '10px';
        addToCartButton.addEventListener('click', function() {
            alert('Item added to cart!');
            document.body.removeChild(popup);
        });
        popup.appendChild(addToCartButton);

        // Create the "No Thank You" button
        const noThankYouButton = document.createElement('button');
        noThankYouButton.textContent = 'No Thank You';
        noThankYouButton.style.backgroundColor = 'green';
        noThankYouButton.style.borderColor = 'green';
        noThankYouButton.className = 'btn btn-secondary';
        noThankYouButton.style.margin = '10px';
        noThankYouButton.addEventListener('click', function() {
            document.body.removeChild(popup);
        });
        popup.appendChild(noThankYouButton);

        // Append the popup to the body
        document.body.appendChild(popup);
    }, 10000); // 10 seconds delay
});