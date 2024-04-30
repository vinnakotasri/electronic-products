import { Injectable } from '@angular/core';
import { products } from './products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  productList : products[]=[
    {
      productId:'A121',
      productName:'Mobiles',
      productPrice:20000,
      productOffer:'up to 35% off',
      productImage:'https://www.reliancedigital.in/medias/OPPO-Mobile-Phone-493838339-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTI3NXxpbWFnZS9qcGVnfGltYWdlcy9oZWMvaDFlLzEwMDE4Njk4MTY2MzAyLmpwZ3w5OGJjODMxMDE1MjM0OTE5MDU3MWI5MGE1MTcwMzQzZWViZjQzZTgwM2NmNmYyNGRiNDZhZDdjNzg1ZWYyYzkw',
      productEdit:false
    },
    {
      productId:'A122',
      productName:'Mobiles',
      productPrice:30000,
      productOffer:'up to 45% off',
      productImage:'https://i03.appmifile.com/98_item_in/04/01/2024/1fcfdf47573677eee94bab44e38b7734.jpg',
      productEdit:false
    },
    {
      productId:'A123',
      productName:'Mobiles',
      productPrice:21000,
      productOffer:'up to 21% off',
      productImage:'https://5.imimg.com/data5/SELLER/Default/2023/3/296178269/PQ/YW/MM/186724856/vivo-mobile-phone.jpg',
      productEdit:false
    },
    {
      productId:'A124',
      productName:'Mobiles',
      productPrice:35000,
      productOffer:'up to 25% off',
      productImage:'https://m.media-amazon.com/images/I/417odtnpERL._SY300_SX300_.jpg',
      productEdit:false
    },
    {
      productId:'A125',
      productName:'Mobiles',
      productPrice:40000,
      productOffer:'up to 31% off',
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIiWENsMLQgxSBJ_pvnt-2uZjBc4JVrgrDUCMTKBdSA&s',
      productEdit:false
    },
    {
      productId:'A126',
      productName:'Mobiles',
      productPrice:45000,
      productOffer:'up to 35% off',
      productImage:'https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN_823x.jpg?v=1691140898',
      productEdit:false
    },
    {
      productId:'A127',
      productName:'Mobiles',
      productPrice:38000,
      productOffer:'up to 45% off',
      productImage:'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg?downsize=*:180',
      productEdit:false
    },
    {
      productId:'A128',
      productName:'Mobiles',
      productPrice:45000,
      productOffer:'up to 21% off',
      productImage:'https://img.etimg.com/thumb/msid-98897778,width-300,height-225,imgsize-35708,resizemode-75/6-latest-mobile-phones-with-12gb-ram-in-india.jpg',
      productEdit:false
    },
    {
      productId:'A129',
      productName:'Mobiles',
      productPrice:50000,
      productOffer:'up to 25% off',
      productImage:'https://images-cdn.ubuy.co.in/634d031dba8fe623b47893cc-smart-phone-android-8-1-smartphone-hd.jpg',
      productEdit:false
    },
    {
      productId:'B121',
      productName:'ac',
      productPrice:30000,
      productOffer:'up to 11% off',
      productImage:'https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/11/24212247/Air-Conditioner-Buying-Guide.jpg',
      productEdit:false
    },
    {
      productId:'B122',
      productName:'ac',
      productPrice:35000,
      productOffer:'up to 25% off',
      productImage:'https://www.mylloyd.com/media/products/zoom142.jpg',
      productEdit:false
    },
    {
      productId:'B123',
      productName:'ac',
      productPrice:40000,
      productOffer:'up to 45% off',
      productImage:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/ac_1-sixteen_nine-_3.jpg?VersionId=qkpVYdZSqtVMgqe9ASDRQa0NDnPdWAjQ',
      productEdit:false
    },
    {
      productId:'B124',
      productName:'ac',
      productPrice:32000,
      productOffer:'up to 21% off',
      productImage:'https://imgeng.jagran.com/images/2022/aug/Best%20AC%20In%20India%20Cover%20Image1659937788611.jpg',
      productEdit:false
    },
    {
      productId:'B125',
      productName:'ac',
      productPrice:45000,
      productOffer:'up to 25% off',
      productImage:'https://5.imimg.com/data5/NG/ZY/ZY/SELLER-10915803/split-ac-indoor-unit-500x500.jpeg',
      productEdit:false
    },
    {
      productId:'B126',
      productName:'ac',
      productPrice:47000,
      productOffer:'up to 31% off',
      productImage:'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/ac_660_201119061530_060120043730.jpg?size=948:533',
      productEdit:false
    },
    {
      productId:'B127',
      productName:'ac',
      productPrice:37000,
      productOffer:'up to 15% off',
      productImage:'https://asset.kompas.com/crops/mc-niKnze__LNBkIG972PAJTyIw=/0x0:1000x667/750x500/data/photo/2023/05/05/6454db6bf0443.jpg',
      productEdit:false
    },
    {
      productId:'B128',
      productName:'ac',
      productPrice:39000,
      productOffer:'up to 25% off',
      productImage:'https://www.jiomart.com/images/product/original/581026892/daikin-1-5-ton-5-star-standard-series-ftkm50u-inverter-split-ac-digital-o581026892-p591216582-2-202203282351.jpeg?im=Resize=(420,420)',
      productEdit:false
    },
    {
      productId:'C121',
      productName:'fridge',
      productPrice:20000,
      productOffer:'up to 10% off',
      productImage:'https://5.imimg.com/data5/SELLER/Default/2023/3/292213410/IJ/VR/ZD/3718787/fridge-500x500.jpg',
      productEdit:false
    },
    {
      productId:'C122',
      productName:'fridge',
      productPrice:30000,
      productOffer:'up to 25% off',
      productImage:'https://cityfurnish.com/blog/wp-content/uploads/2022/04/1583928520Fridge-Double-Door-1200x900.jpg',
      productEdit:false
    },
    {
      productId:'C124',
      productName:'fridge',
      productPrice:40000,
      productOffer:'up to 20% off',
      productImage:'https://whirlpoolindia.vtexassets.com/arquivos/ids/167347-800-auto?v=638240592404230000&width=800&height=auto&aspect=true',
      productEdit:false
    },
    {
      productId:'C125',
      productName:'fridge',
      productPrice:50000,
      productOffer:'up to 30% off',
      productImage:'https://images-cdn.ubuy.co.in/65979c2cb910f53d2e6e34ae-3-5cu-ft-compact-refrigerator-mini.jpg',
      productEdit:false
    },
    {
      productId:'C126',
      productName:'fridge',
      productPrice:70000,
      productOffer:'up to 35% off',
      productImage:'https://images.jdmagicbox.com/quickquotes/images_main/rs58k6417sl_silver_151742542499512400.jpg',
      productEdit:false
    },
    {
      productId:'C127',
      productName:'fridge',
      productPrice:80000,
      productOffer:'up to 40% off',
      productImage:'https://rukminim2.flixcart.com/image/850/1000/refrigerator-new/p/a/c/lg-gcb-207-gpqv-original-imaecymagkkgpnnx.jpeg?q=90&crop=false',
      productEdit:false
    },
    {
      productId:'D121',
      productName:'Headphone',
      productPrice:5000,
      productOffer:'up to 5% off',
      productImage:'https://t3.ftcdn.net/jpg/05/95/78/78/360_F_595787852_efGpIfJmAJxcof7PBsQsDmirsZ3R8o50.jpg',
      productEdit:false
    },
    {
      productId:'D122',
      productName:'Headphone',
      productPrice:7000,
      productOffer:'up to 8% off',
      productImage:'https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713657600&semt=sph',
      productEdit:false
    },
    {
      productId:'D123',
      productName:'Headphone',
      productPrice:8000,
      productOffer:'up to 6% off',
      productImage:'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg',
      productEdit:false
    },
    {
      productId:'D125',
      productName:'Headphone',
      productPrice:4000,
      productOffer:'up to 5% off',
      productImage:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
      productEdit:false
    },
    {
      productId:'D126',
      productName:'Headphone',
      productPrice:10000,
      productOffer:'up to 10% off',
      productImage:'https://zebronics.com/cdn/shop/products/Zeb-Jetpro-pic1.jpg?v=1659091933&width=2048',
      productEdit:false
    },
    {
      productId:'D127',
      productName:'Headphone',
      productPrice:12000,
      productOffer:'up to 11% off',
      productImage:'https://images.herzindagi.info/image/2024/Jan/best-gaming-Headphones-1.jpg',
      productEdit:false
    },
    {
      productId:'E121',
      productName:'camera',
      productPrice:5000,
      productOffer:'up to 15% off',
      productImage:'https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-32..v1638904093.jpg',
      productEdit:false
    },
    {
      productId:'E122',
      productName:'camera',
      productPrice:7000,
      productOffer:'up to 15% off',
      productImage:'https://cdn.mos.cms.futurecdn.net/Ekc54rx2YMgRt5ycD5KYf5.jpg',
      productEdit:false
    },
    {
      productId:'E123',
      productName:'camera',
      productPrice:15000,
      productOffer:'up to 20% off',
      productImage:'https://gppro.in/wp-content/uploads/2021/09/D5300-1.jpg',
      productEdit:false
    },
    {
      productId:'E124',
      productName:'camera',
      productPrice:10000,
      productOffer:'up to 17% off',
      productImage:'https://5.imimg.com/data5/EG/FW/KF/SELLER-20900427/sony-alpha-7r-iii.jpg',
      productEdit:false
    },
    {
      productId:'E125',
      productName:'camera',
      productPrice:12000,
      productOffer:'up to 18% off',
      productImage:'https://imgeng.jagran.com/images/2023/sep/best%20nikon%20cameras%20for%20photography%20ci1694172900406.jpg',
      productEdit:false
    },
    {
      productId:'E126',
      productName:'camera',
      productPrice:13000,
      productOffer:'up to 16% off',
      productImage:'https://www.cnet.com/a/img/resize/dc1fd1d781b8f95b01e9d2b35b8095a565a32a41/hub/2022/08/30/ceaa2d91-11ca-449e-81bf-a2cf10937874/best-camera-cnet-2022-canon-sony-nikon-fujifilm-15.jpg?auto=webp&fit=crop&height=576&width=768',
      productEdit:false
    },
    {
      productId:'E127',
      productName:'camera',
      productPrice:5000,
      productOffer:'up to 5% off',
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm5Q5-INY56gFZc9dOdUQVluv8HdyKyMKApsTmmBIEg&s',
      productEdit:false
    },
    {
      productId:'E128',
      productName:'camera',
      productPrice:20000,
      productOffer:'up to 35% off',
      productImage:'https://i5.walmartimages.com/asr/d7ff2607-fabf-4093-a545-55e060eda14b.e41187f52fdc8fcfb19b20af3b1df6cb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      productEdit:false
    },
    {
      productId:'E129',
      productName:'camera',
      productPrice:25000,
      productOffer:'up to 40% off',
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67U9gF_9cuzNzgj8XZ1wacuRSGWL2Fd4wKWHq24fWuayLrTH_VpP5lqE-k5vrmIj5-Eg&usqp=CAU',
      productEdit:false
    },

  
  
    {
      productId:'E130',
      productName:'home',
      productPrice:45000,
      productOffer:'*******',
      productImage:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg',
      productEdit:false
    },
    {
      productId:'E131',
      productName:'home',
      productPrice:1500,
      productOffer:'*******',
      productImage:'https://m.media-amazon.com/images/I/51-Iz-3IRSS._AC_UF1000,1000_QL80_.jpg',
      productEdit:false
    },
    {
      productId:'E133',
      productName:'home',
      productPrice:55000,
      productOffer:'*******',
      productImage:'https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg?auto=webp&quality=75&width=1024',
      productEdit:false
    },
    {
      productId:'E134',
      productName:'home',
      productPrice:25000,
      productOffer:'*******',
      productImage:'https://m.media-amazon.com/images/I/61ToKShnQvL._AC_UF1000,1000_QL80_.jpg',
      productEdit:false
    },
    {
      productId:'E135',
      productName:'home',
      productPrice:15000,
      productOffer:'********',
      productImage:'https://cdn.mos.cms.futurecdn.net/Ekc54rx2YMgRt5ycD5KYf5.jpg',
      productEdit:false
    },
    {
      productId:'E135',
      productName:'home',
      productPrice:65000,
      productOffer:'********',
      productImage:'https://5.imimg.com/data5/NO/WF/SC/SELLER-87528891/double-door-refrigerator.jpg',
      productEdit:false
    },
  ]
  getProducts(){
    return of(this.productList);
  }
  addProducts(product:products){
  this.productList.push(product);
  }
  deleteProduct(prod:products){
    let res=this.productList.findIndex(p=>p.productId==prod.productId);
    this.productList.splice(res,1);
  }
  updateProduct(prod:products){
    let res=this.productList.findIndex(p=>p.productId==prod.productId);
    this.productList.splice(res,1,prod)
  }
}
    