import "./home.css"
import visaImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/verify_visa.jpg";
import masterCardImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/master_card.jpg";
import jcbImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/jcb.jpg";
import atmImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/atm.jpg";
import codImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/cod.jpg";
import payooImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/payoo.jpg";
import verifyVisaImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/verify_visa.jpg";
import mastercardSecurecodeImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/mastercard_securecode.jpg";
import onepayImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/onepay.jpg";
import vnbLogoImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/logovnb.png";
import vnPostImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/vn-post.jpg";
import dhlImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/dhl.jpg";
import lazadaImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/lazada.jpg";
import shopeeImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/shopee.jpg";
import amazonImage from "/poject-cuoi-khoa/poject_cuoi_khoa/img/amazon.jpg";
const Footer =()=>{
    return(
        
      <footer>
      <div className="input-infor-to-get-announce">
          <div className="announce-content">
              <span style={{ fontSize: '25px' }}>Đăng kí nhận Email</span><br />
              <span style={{ fontSize: '15px' }}>Đăng kí nhận thông tin sách mới, sách bán</span>
          </div>
          <div className="input-content">
              <input className="input-name-to-get-announce" type="text" placeholder="Tên của bạn" />
              <input className="input-email-to-get-announce" type="email" placeholder="Nhập email của bạn" />
              <select name="" id="" className="choose-type-to-get-announce">
                  <option value="">Thể loại yêu thích</option>
                  <option value="">Tất cả</option>
                  <option value="">thể loại 1</option>
                  <option value="">thể loại 2</option>
                  <option value="">thể loại 3</option>
              </select>
              <button className="announce-submit-btn">Đăng kí ngay</button>
          </div>
      </div>
  
      <div className="footer-content">
          <div className="company-infor">
              <p className="footer-content-title">VỀ CÔNG TY</p>
              <a href="#">Giới thiệu công ty</a>
              <a href="#">Tuyển dụng</a>
              <a href="#">Góc báo trí</a>
              <a href="#">Chương trình đại lý</a>
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Chính sách đổi trả</a>
          </div>
          <div className="custom-help">
              <p className="footer-content-title">TRỢ GIÚP</p>
              <a href="#">Quy định sử dụng </a>
              <a href="#">Hướng dẫn mua hàng</a>
              <a href="#">Phương thức thanh toán</a>
              <a href="#">Phương thức vận chuyển</a>
              <a href="#">Câu hỏi thường gặp</a>
              <a href="#">Ứng dụng đọc Ebook</a>
          </div>
          <div className="book-new">
              <p className="footer-content-title">TIN TỨC SÁCH</p>
              <a href="#">Tin tức</a>
              <a href="#">Chân dung</a>
              <a href="#">Điểm sách</a>
              <a href="#">Phê bình</a>
          </div>
          <div>
              <p className="footer-content-title">CHẤP NHẬN THANH TOÁN</p>
              <img src={visaImage} alt="" />
              <img src={masterCardImage} alt="" />
              <img src={jcbImage} alt="" />
              <label htmlFor=""></label>
              <img src={atmImage} alt="" />
              <img src={codImage} alt="" />
              <img src={payooImage} alt="" />
              <div>
                  <p className="footer-content-title">THANH TOÁN AN TOÀN</p>
                  <img src={verifyVisaImage} alt="" />
                  <img src={mastercardSecurecodeImage} alt="" />
                  <img src={onepayImage} alt="" />
              </div>
          </div>
          <div>
              <p className="footer-content-title">ĐỐI TÁC VẬN CHUYỂN</p>
              <img style={{ width: '11rem' }} src={vnbLogoImage} alt="" />
              <label htmlFor=""></label>
              <img src={vnPostImage} alt="" />
              <label htmlFor=""></label>
              <img style={{ width: '11rem' }} src={dhlImage} alt="" />
          </div>
          <div>
              <p className="footer-content-title">ĐỐI TÁC BÁN HÀNG</p>
              <img src={lazadaImage} alt="" />
              <label htmlFor=""></label>
              <img src={shopeeImage} alt="" />
              <label htmlFor=""></label>
              <img src={amazonImage} alt="" />
          </div>
      </div>
  </footer>
  
  
    )
}
export default Footer