// List of products with multiple images
const products = [
    { 
        name: "GREEN ABAYA", 
        arab_name: "عباية خضراء",
        price: "125 MAD", 
        images: ["images/img1.jpeg", "images/img1-2.jpeg", "images/img1-3.jpeg"],
       description_en: "A graceful green abaya inspired by nature, offering a calm and elegant look. Designed with a flowing cut and soft fabric, it brings comfort and timeless modesty to your everyday and special occasions.",
    description_ar: "عباية خضراء أنيقة مستوحاة من الطبيعة، تقدم مظهراً هادئاً وأنيقاً. مصممة بقصّة متدفقة وقماش ناعم، توفر الراحة والاحتشام الخالد لأيامك العادية والمناسبات الخاصة."
  },
    { 
        name: "GRAY ABAYA", 
        arab_name: "عباية رمادية",
        price: "130 MAD", 
        images: ["images/img2.jpeg", "images/img2-2.jpeg"],
        description_en: "A modern gray abaya that blends simplicity with sophistication. Its neutral tone and elegant design make it a versatile choice, perfect for both casual wear and refined outings.",
        description_ar: "عباية رمادية عصرية تجمع بين البساطة والأناقة. لونها المحايد وتصميمها الأنيق يجعلها خيارًا متعدد الاستخدامات، مثالية للارتداء اليومي والمناسبات الراقية."
    },
    { 
        name: "Brown ABAYA", 
        arab_name: "عباية بنية",
        price: "120 MAD", 
        images: ["images/img3.jpeg", "images/img3-2.jpeg"],
        description_en: "A warm brown abaya that reflects classic elegance and natural beauty. Crafted with premium fabric and a relaxed fit, it delivers a luxurious feel while preserving modest style.",
        description_ar: "عباية بنية دافئة تعكس الأناقة الكلاسيكية والجمال الطبيعي. مصنوعة من قماش فاخر وقصة مريحة، توفر إحساساً بالفخامة مع الحفاظ على الأسلوب المحتشم."
    }
];

// Display products on index.html
const container = document.getElementById("product-list");

products.forEach((p, index) => {
    container.innerHTML += `
        <div class="product" onclick="openProduct(${index})">
            <img src="${p.images[0]}" alt="${p.name}">
            <h3>${p.name}</h3>
            <h4>${p.arab_name}</h4>
            <p>${p.price}</p>
        </div>
    `;
});

// Function to save selected product and open product page
function openProduct(index) {
    const product = products[index];
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = "product.html"; // redirect to product detail page
}
