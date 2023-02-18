window.addEventListener("load", (event) => {
  function removeLoading() {
    var elem = document.querySelectorAll(".skeleton-loader");
    [].forEach.call(elem, function (el) {
      el.classList.remove("loading");
    });
  }
  setTimeout(removeLoading, 1000);
});

// offcanvas-menu
{
  let body = document.querySelector('body');
  let offcanvasOpen = document.querySelector('.offcanvas-open');
  let offcanvasClose = document.querySelector('.offcanvas-close');
  offcanvasOpen.onclick = () => {
    body.classList.toggle('offcanvas-opned');
  };
  offcanvasClose.onclick = () => {
    body.classList.remove('offcanvas-opned');
  };
}


function ShowCarts() {
          

  let AllCarts = document.querySelector('.allCarts')
  let closeNow = document.querySelectorAll('.close')
  let bktoitm = document.querySelector('.bktoitm')
  let go2itm = document.querySelectorAll('.gotoCheckout')
  let button  = document.querySelectorAll('.cart-btn #dropdownMenuClickableInside') 
  let AddProducts = document.querySelectorAll('.product-quantity-modal-cart-btn')

  if (closeNow.length > 0) {
    button.forEach(btn => {
      btn.addEventListener('click', (e) => { 
        AllCarts.classList.toggle('showcart')
      })
    });
  
    go2itm.forEach(gtm => { 
      gtm.addEventListener('click', (e) => {  
        e.preventDefault()
        if (AllCarts.classList.contains('showcart')) {
          AllCarts.classList.remove('showcart')
          AllCarts.classList.add('showCheckout')
        } 
      })
    })
  
  
    bktoitm.addEventListener('click', (e) => {  
      console.log(bktoitm)
      if (AllCarts.classList.contains('showCheckout')) {
        AllCarts.classList.remove('showCheckout')
        AllCarts.classList.add('showcart')
      } 
    })
  
    closeNow.forEach(close => {
      close.addEventListener('click', (e) => { 
        if (AllCarts.classList.contains('showcart')) {
          AllCarts.classList.remove('showcart')
        }
        if (AllCarts.classList.contains('showCheckout')) {
          AllCarts.classList.remove('showCheckout')
        } 
      })
    })
  }

  if (AddProducts.length > 0) {
    AddProducts.forEach(Product => {
      Product.addEventListener('click', () => {
        Product.parentElement.parentElement.parentElement.parentElement.querySelector('.modal-close button').click()
        button[0].click()
      })
    })
  }





}
ShowCarts()



// sticky category
function StickyCategory() {
  let cats = document.querySelectorAll('.theCatgs')
  if (cats.length > 0) {
    window.addEventListener('scroll', () => {
      let catMBlk = document.querySelector('.restaurant-now-left')
      let cate = cats[0]
      console.log(cate.offsetTop,window.scrollY)
      if (window.scrollY > catMBlk.offsetTop+cate.clientHeight+20 ) {
        cate.classList.add('active')
      }else{
        cate.classList.remove('active')
      }
    })
  }
}
if (992 > window.innerWidth) {
  StickyCategory()
}






// dropdown
  let targetDropdownmenu = document.querySelector('#myDropdown1');
  let dropdownToggler = document.querySelector('.dropbtn'); 
  dropdownToggler.onclick = () => {
    targetDropdownmenu.classList.toggle('show');
  };
  document.body.addEventListener('click', (e) => {
    if (isInsideMySpecialWidget(e.target, "favourite-dropdown")) {
        
    }else{
      if (targetDropdownmenu) {
        // console.log("user clicked OUTSIDE the widget");
        targetDropdownmenu.classList.remove('show');
      }
    }
  });
  function isInsideMySpecialWidget(elem, mySpecialWidgetId){
    while (elem.parentElement) {
        if (elem.id === mySpecialWidgetId) {
            return true;
        }
        elem = elem.parentElement;
    }
    return false;
  }

