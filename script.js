document.getElementById('order-btn').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const orderId = generateOrderId();
    const orderImages = document.getElementById('order-images');
    orderImages.innerHTML = '';
  
    checkboxes.forEach(function(checkbox) {
      const item = checkbox.value;
      const img = document.createElement('img');
      if (item === 'burger') {
        img.src = 'https://img.freepik.com/premium-psd/dynamic-burger-with-floating-ingredients-png_68880-25758.jpg?w=1380';
      } else if (item === 'fries') {
        img.src = 'https://img.freepik.com/free-photo/top-view-delicious-fries-sauce_23-2149235944.jpg?t=st=1710582980~exp=1710586580~hmac=2adbf8ae0077003f02ff05d08125ea9086bc5ee045104d8a5b690a4319d90997&w=900';
      } else if (item === 'drink') {
        img.src = 'https://img.freepik.com/free-photo/strawberry-mojito-with-ice-table_140725-2211.jpg?t=st=1710583007~exp=1710586607~hmac=ae2cedad5619d48f01dde8b717aa9567aae3e4f3fa8c98980c9b7db088a2bba3&w=1800';
      }
      img.alt = item;
      img.classList.add('item-image');
      orderImages.appendChild(img);
    });
  
    document.getElementById('order-id').textContent = `Order ID: ${orderId}`;
  });
  
  function generateOrderId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let orderId = '';
    for (let i = 0; i < 6; i++) {
      orderId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return orderId;
  }
  
