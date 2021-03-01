
var repBtn = document.querySelectorAll('.help-box-cmt-card-btn-rep');
repBtn.forEach(rep => {
    var isShowCmtInput = false;
    rep.onclick = () => {
        isShowCmtInput = !isShowCmtInput;
        var parent = rep.parentElement;
        if(isShowCmtInput) {
            parent.parentElement.insertAdjacentHTML('afterend', 
                `<div class="help-box-cmt-box show help-box-cmt-box-rep">
                    <textarea placeholder="Viết câu hỏi của bạn" class="help-box-cmt-box-input"></textarea>
                    <div class="primary-btn-hover send-q-btn hide-on-mobile-tablet">
                        Gửi câu hỏi
                    </div>
                    <div class="send-q-btn-mobile-tablet">
                        <span class="send-q-btn-mobile-tablet-text">Tối thiểu 3 ký tự</span>
                        <div class="send-q-btn-mobile-tablet-btn">Gửi câu hỏi</div>
                    </div>
                </div>`);
        } else {
            parent.parentElement.nextElementSibling.remove();
        }
       
    };
});