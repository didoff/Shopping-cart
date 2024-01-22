let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"item1",
    name:"Mercedes Benz SLS AMG",
    price: 200000,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/img1.jpg"
}, 
{
    id:"item2",
    name:"Ferrari Enzo",
    price: 350000,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/img2.jpg"
}, 
{
    id:"item3",
    name:"Mercedes Benz C class",
    price: 780000,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/img3.jpg"
}, 
{
    id:"item4",
    name:"Mercedes Benz SLS AMG",
    price: 200000,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/img1.jpg"
}];

let generateShop = ()=>{
    return shop.innerHTML = shopItemsData.map((x) => {
        let {id,name,price,desc,img} = x;
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
        `
    }).join('');
};

generateShop();