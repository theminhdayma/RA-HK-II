import React, { memo } from "react";

interface Props {
  name: string;
  increase: Function;
}

function Memo({ increase, name }: Props) {
  console.log("Component memo được gọi");
  console.log("Tên bên memo: ", name);

  return (
    <div>
      {/*
            Memo là gì? 
              - HOC : higher order component - hàm bậc cao trong javascript
              - Kiểm tra xem có props nào thay đổi hay không
                + Nếu props (giá trị truyền từ cha xuống con) thay đổi thì component sẽ render
                + Nếu props không thay đổi thì không render
                + Chỉ cần 1 cái props thay đổi thì component sẽ được render theo
                Chứ không phải là tất cả các props thay đổi thì mới render
            Sinh ra giải quyết vấn đề gì ?
        */}
    </div>
  );
}

export default memo(Memo);
