//  **Bài Assignment JavaScript - Quản lý Giỏ Hàng với Slider và jQuery**

// **Thời gian hoàn thành: 1 tuần**

// **Yêu cầu:**

// Xây dựng một ứng dụng web cho việc hiển thị danh sách sản phẩm, quản lý giỏ hàng, sử dụng slider và jQuery. Bài tập này được chia thành các phần sau:

// 1. **Danh sách sản phẩm (2 điểm)**

//    - Tạo một mảng (array) chứa danh sách các sản phẩm. Mỗi sản phẩm gồm có tên, giá ,mô tả và danh sách 3 ảnh .
//    - Hiển thị danh sách sản phẩm trên trang web với các thông tin như tên, giá và mô tả. Bạn có thể sử dụng HTML và jQuery để tạo danh sách này.

// 2. **Slider (2 điểm)**

//    - Khi người dùng bấm vào sản phẩm thì hiển thị chi tiết sản phẩm gồm slider hiển thị ảnh, tên, giá , mô tả, cùng nút chọn số lượng , và nút thêm vào giỏ hàng

// 3. **Chức năng thêm sản phẩm vào giỏ hàng (2 điểm)**

//    - Thêm một nút "Thêm vào giỏ hàng" bên cạnh mỗi sản phẩm trên slider.
//    - Khi người dùng nhấn vào nút "Thêm vào giỏ hàng", sản phẩm được chọn sẽ được thêm vào giỏ hàng.
//    - Hiển thị số lượng sản phẩm trong giỏ hàng ở góc trên cùng của trang và cập nhật số này khi sản phẩm được thêm vào.

// 4. **Chức năng xem giỏ hàng (2 điểm)**

//    - Tạo một nút hoặc biểu tượng "Xem Giỏ Hàng" ở góc trên cùng của trang.
//    - Khi người dùng nhấn vào nút "Xem Giỏ Hàng", hiển thị danh sách sản phẩm trong giỏ hàng với thông tin chi tiết (tên, giá, số lượng).
//    - Cho phép người dùng xóa sản phẩm khỏi giỏ hàng.

// 5. **Tổng tiền (2 điểm)**

//    - Hiển thị tổng tiền của các sản phẩm trong giỏ hàng.
//    - Cập nhật tổng tiền khi có thay đổi trong giỏ hàng.

// 6. **Lưu trữ dữ liệu (2 điểm)**

//    - Sử dụng Local Storage để lưu trữ thông tin về giỏ hàng để giữ lại dữ liệu giỏ hàng khi trang web được tải lại.

// 7. **Sử dụng jQuery (2 điểm)**

//    - Sử dụng thư viện jQuery để thực hiện các tác vụ như thêm sản phẩm vào giỏ hàng, xem giỏ hàng và cập nhật giao diện người dùng.


// **Hướng dẫn nộp bài:**

// 1. Tạo một tệp HTML với tên `shopping_cart_slider_jquery.html`.
// 2. Đặt mã JavaScript của bạn trong một thẻ `<script>` hoặc ngoài thẻ `<script>` như bạn muốn.
// 3. Đảm bảo rằng bạn đã đính kèm thư viện jQuery trong tệp HTML của bạn.
// 4. Kiểm tra code của bạn trên trình duyệt để đảm bảo nó hoạt động đúng.
// 5. Nén tệp `shopping_cart_slider_jquery.html` thành một tệp ZIP và nộp lại vào classroom . 
// 6. Quay video demo sản phẩm, upload video lên youtube rồi nộp lại link Arr
let products = [
  {
    productName: "Sản phẩm 1",
    productPrice: 1000000,
    productDescription: "Chuối",
    productImageList: ["img/chuoi1.jpg", "img/chuoi2.jpg", "img/chuoi3.jpg"],
  },
  {
    productName: "Sản phẩm 2",
    productPrice: 2000000,
    productDescription: "Táo",
    productImageList: ["img/bom1.jpg", "img/bom2.jpg", "img/bom3.jpg"],
  },
  {
    productName: "Sản phẩm 3",
    productPrice: 2000000,
    productDescription: "Dưa chuột",
    productImageList: ["img/dua1.jpg", "img/dua2.jpg", "img/dua3.jpg"],
  },
  {
    productName: "Sản phẩm 4",
    productPrice: 2000000,
    productDescription: "Cà chua",
    productImageList: ["img/cachua1.jpg", "img/cachua2.jpg", "img/cachua3.jpg"],
  },
];
var nodeSlideshow;
let danhsachAnh = [];
let indexAnhHienTai = 0;
function chay(index) {
  if (index == 0) {
    danhsachAnh = products[0].productImageList;
    nodeSlideshow = document.getElementById("slideshow");
  } else if (index == 1) {
    danhsachAnh = products[2].productImageList;
    nodeSlideshow = document.getElementById("slideshow1");
  } else if (index == 2) {
    danhsachAnh = products[1].productImageList;
    nodeSlideshow = document.getElementById("slideshow2");
  } else if (index == 3) {
    danhsachAnh = products[3].productImageList;
    nodeSlideshow = document.getElementById("slideshow3");
  }
  nodeSlideshow.src = danhsachAnh[indexAnhHienTai];
  tuDongChay();
}
function tuDongChay() {
  indexAnhHienTai = 0;
  nodeSlideshow.src = danhsachAnh[indexAnhHienTai];
  let boDem = 1;
  intervalChayTuDong = setInterval(() => {
    indexAnhHienTai = boDem % 3;
    nodeSlideshow.src = danhsachAnh[indexAnhHienTai];
    boDem++;
  }, 2000);
}
let textElement;
function hienThi(so) {
  if (so == 1) {
    textElement = document.getElementById("text1");
  } else if (so == 2) {
    textElement = document.getElementById("text2");
  } else if (so == 3) {
    textElement = document.getElementById("text3");
  } else if (so == 4) {
    textElement = document.getElementById("text4");
  }
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

function gioHang(){
  let cart = document.getElementById("cart1");
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
const them = document.querySelectorAll("button");
them.forEach(function(button,index){
  button.addEventListener("click",function(event){
    var btnThem = event.target;
    var product = btnThem.parentElement;
    var productImg = product.querySelector('img').src
    var productName = product.querySelector("h3").innerText;
    var productPrice = product.querySelector("h5").innerText;
    addcart(productImg,productName,productPrice);
  })

})
function addcart(productImg,productName,productPrice){
  var addtr = document.createElement("tr");
  var trcontent = '<tr><td><img style="width: 80px;" src="'+productImg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span>VND</p></td><td><p><span>000000</span>VND</p></td><td style="cursor:pointer"> Xóa</td></tr>';
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  carttotal();
}
function carttotal(){
  var totalB = 0
  var cartitem = document.querySelectorAll(".name");
  for (let index = 0; index < cartitem.length; index++) {
    var inputValue = cartitem[index].querySelector('input').value;
   document.getElementById("texts").innerHTML = inputValue.value;
    var productPrice = cartitem[index].querySelector('h5').innerHTML;
    
    totalA = inputValue * productPrice
    totalB = totalB + totalA;
    totalC = totalB.toLocaleString("de-DE")
  }
  var carttotalA = document.querySelector(".tong-tien span")
  carttotalA.innerHTML = totalC
}
carttotal();
